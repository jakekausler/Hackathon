import React from 'react';
import { Paper, Grid, Typography, Button, withStyles } from '@material-ui/core';
import { connect } from 'react-redux';

function RegistrationComplete(props) {
  const {
    name, email, avail, phone,
    workPref, country, classes,
    occupation
  } = props
  return (
    <>
    <Paper className={ classes.paper }>
      <Grid container >
        <Grid item xs={12} sm={4} md={3} lg={2} className={classes.padding}>
          <Typography variant="caption">Name</Typography>
          <div>{name || 'Unknown'}</div>
        </Grid>
        <Grid item xs={12} sm={4} md={3} lg={2} className={classes.padding}>
          <Typography variant="caption">Email</Typography>
          <div>{email}</div>
        </Grid>
        <Grid item xs={12} sm={4} md={3} lg={2} className={classes.padding}>
          <Typography variant="caption">Availability</Typography>
          <div>{avail}</div>
        </Grid>
        <Grid item xs={12} sm={4} md={3} lg={2} className={classes.padding}>
          <Typography variant="caption">Work Preferences</Typography>
          <div>{workPref}</div>
        </Grid>
      <Grid item xs={12} sm={4} md={3} lg={2} className={classes.padding}>
        <Typography variant="caption">Country</Typography>
        <div>{country}</div>
      </Grid>
      <Grid item xs={12} sm={4} md={3} lg={2} className={classes.padding}>
        <Typography variant="caption">Phone</Typography>
        <div>{phone}</div>
      </Grid>
      <Grid item xs={12} sm={4} md={3} lg={2} className={classes.padding}>
        <Typography variant="caption">Occupation</Typography>
        <div>{occupation}</div>
      </Grid>
      </Grid>
    </Paper>
    <div className={classes.space} />
    <div className={classes.space} />
    <Container classes={classes.button}>
      <Button
        type="submit"
        variant="contained"
        color="primary"
        onClick={() => props.history.push('/projects')}
      >
        VIEW PROJECTS
      </Button>
    </Container>
    </>
  );
}

const Container = ({ classes, children }) => (<div className={classes}>{children}</div>)

const styles = (theme) => ({
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
  padding: { paddingBottom: 20 },
  button: {
    marginLeft: 20,
    marginRight: 20,
    [theme.breakpoints.down('xs')]:{
      width: '90%'
    }
  },
  paper: {
    padding: 16, 
    [theme.breakpoints.up('sm')]:{
      margin: 20,
      padding: 20,
    }
  },
})

const mapStateToProps = ({ auth, settings}) => ({
  name: auth.fullname || '',
  email: auth.email || '',
  country: auth.country || '',
  avail: settings.availability || '',
  workPref: settings.workPref || '',
  phone: settings.profile.phone || '',
  occupation: settings.profile.occupation || '',
});

export default connect(mapStateToProps)(withStyles(styles)(RegistrationComplete));
