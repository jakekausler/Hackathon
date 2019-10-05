import React, { useState } from 'react';
import {connect} from 'react-redux'
import withStyles from '@material-ui/core/styles/withStyles';
import UserForm from './UserSignupForm';
import { Button, Paper } from '@material-ui/core';
import { registerUser } from '../../actions/authActions';
// import { openToast } from 'src/redux/toast'

const CreateAccountUser = props => {
  const { classes } = props;
  const [fname, setfname] = useState('');
  const [lname, setlname] = useState('');
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const [cpassword, setcpassword] = useState('');
  const onSubmit = e => {
    e.preventDefault();
    const form = { fname, lname, email, password, cpassword }
    props.registerUser(form);
    console.log(form)
    props.history.push('/register-options')
  }
  return (
    <Paper className={classes.paper}>
      <div className={classes.toolbar} />
      <form id='registration' onSubmit={onSubmit} >
        <Container classes={classes.container}>
          <UserForm
            form={{
              fname, setfname,
              lname, setlname,
              email, setemail,
              password, setpassword,
              cpassword, setcpassword,
            }}
          />

          <div className={classes.space} />
          <Container classes={classes.button}>
            <Button
              type="submit"
              variant="contained"
              color="primary"
            >
              SUBMIT
            </Button>
          </Container>
        </Container>
      </form>
    </Paper>  
  );
}

const Container = ({ classes, children }) => (<div className={classes}>{children}</div>)

const styles = (theme) => ({
  button: {
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    alignContent: 'flex-end',

  },
  space: { height: 10 },
  container: {
    [theme.breakpoints.down('xs')]: {
      paddingLeft: 10,
      paddingRight: 10,
    },
    [theme.breakpoints.up('sm')]: {
      paddingLeft: 40,
      paddingRight: 40,
    },
  },
  paper: {
    padding: 16, 
    [theme.breakpoints.up('sm')]:{
      margin: 20,
      padding: 20,
    }
  },
});


const mapDispatchToProps = dispatch => ({
  registerUser: registerUser(dispatch),
  // openToast: (message, variant) => dispatch(openToast(message, variant)),
})
export default connect(null, mapDispatchToProps)(withStyles(styles)(CreateAccountUser));
