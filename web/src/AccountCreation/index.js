import React, { Component } from 'react';
import {connect} from 'react-redux'
import withStyles from '@material-ui/core/styles/withStyles';
import UserForm from './UserSignupForm';
import { Button, Paper } from '@material-ui/core';
// import { openToast } from 'src/redux/toast'

class CreateAccountUser extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Paper className={classes.paper}>
        <div className={classes.toolbar} />
        <form id='registration' >

          <Container classes={classes.container}>
            <UserForm />

            <div className={classes.space} />
            <Container classes={classes.button}>
              <Button
                variant="contained"
                color="primary"
                onClick={() => {}}
              >
                SUBMIT
              </Button>
            </Container>
          </Container>
        </form>
      </Paper>  
    );
  }
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
  // openToast: (message, variant) => dispatch(openToast(message, variant)),
})
export default connect(null, mapDispatchToProps)(withStyles(styles)(CreateAccountUser));
