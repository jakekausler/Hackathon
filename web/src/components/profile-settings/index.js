import React, { useState } from 'react';
import {connect} from 'react-redux'
import withStyles from '@material-ui/core/styles/withStyles';
import { Button, Paper } from '@material-ui/core';
import ProfileForm from './ProfileForm';
import AvailabilityForm from './AvailabilityForm';
import WorkPreferencesForm from './WorkPreferences';
import { updateProfile, updateAvailability, updateWorkPreferences } from '../../actions/settingsActions';

const ProfileSettings = props => {
  const { classes } = props;

  // Profile
  const [website, setWebsite] = useState('');
  const [linkedin, setLinkedin] = useState('');
  const [phone, setPhone] = useState('');
  const [occupation, setOccupation] = useState('');
  const [experience, setExperience] = useState('');
  const [base64Image, setBase64Image] = useState('');

  // Availability
  const radioChecks1 = { veryAvailable: false, moderatelyAvailable: false, lightAvailable: false, limitedAvailable: false };
  const [avail, setAvailability] = useState(radioChecks1)
  const setHigh = checked => setAvailability({ ...radioChecks1, veryAvailable: checked });
  const setMedium = checked => setAvailability({ ...radioChecks1, moderatelyAvailable: checked });
  const setLight = checked => setAvailability({ ...radioChecks1, lightAvailable: checked });
  const setLimited = checked => setAvailability({ ...radioChecks1, limitedAvailable: checked });
  const { veryAvailable, moderatelyAvailable, lightAvailable, limitedAvailable } = avail;

  // Work Preferences
  const radioChecks2 = { remote: false, international: false, local: false };
  const [workPref, setWorkPreferences] = useState(radioChecks2)
  const setRemote = checked => setWorkPreferences({ ...radioChecks2, remote: checked });
  const setInternational = checked => setWorkPreferences({ ...radioChecks2, international: checked });
  const setLocal = checked => setWorkPreferences({ ...radioChecks2, local: checked });
  const { remote, international, local } = workPref;

  const onSubmit = e => {
    e.preventDefault();
    const profile = { website, linkedin, phone, occupation, experience, base64Image }
    console.log(profile, avail, workPref)
    props.updateProfile(profile);
    props.updateAvailability(avail);
    props.updateWorkPreferences(workPref);
    props.history.push('/registration-complete');
  }
  return (
    <Paper className={classes.paper}>
      <form id='profile-settings' onSubmit={onSubmit} >
        <Container classes={classes.container}>
          <ProfileForm
            form={{
              website, setWebsite,
              linkedin, setLinkedin,
              phone, setPhone,
              occupation, setOccupation,
              experience, setExperience,
              base64Image, setBase64Image,
            }}
          />

          <div className={classes.space} />
          <div className={classes.space} />
          <AvailabilityForm
            form={{
              veryAvailable, setHigh,
              moderatelyAvailable, setMedium,
              lightAvailable, setLight,
              limitedAvailable, setLimited,
            }}
          />
          <div className={classes.space} />
          <div className={classes.space} />
          <WorkPreferencesForm
            form={{
              remote, setRemote,
              international, setInternational,
              local, setLocal,
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
  updateProfile: updateProfile(dispatch),
  updateAvailability: updateAvailability(dispatch),
  updateWorkPreferences: updateWorkPreferences(dispatch),
  // openToast: (message, variant) => dispatch(openToast(message, variant)),
})
export default connect(null, mapDispatchToProps)(withStyles(styles)(ProfileSettings));
