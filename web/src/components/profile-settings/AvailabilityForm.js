import React from 'react';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import CheckBox from '@material-ui/core/Checkbox';
import FormControl from '@material-ui/core/FormControl';

function AffinityForm(props) {
  const {
    veryAvailable, setHigh,
    moderatelyAvailable, setMedium,
    lightAvailable, setLight,
    limitedAvailable, setLimited,
  } = props.form;
  const { classes} = props
  return (
    <>
      <Typography variant="caption" gutterBottom>
        Availability to Assemble
      </Typography>
      <div className={classes.space}/>
      <Grid container >
        <Grid item md={12} >
         <FormControl required className={classes.checkmark}>
            <div className={classes.space}/>
            <CheckBox checked={veryAvailable} onChange={e => setHigh(e.target.checked)} id="veryavailable" name="veryavailable" />
            <div className={classes.space}/>
            <Typography variant="h6" className={classes.label}>Very Available (20+ hrs a week)</Typography>
          </FormControl>
          <FormControl required className={classes.checkmark}>
            <div className={classes.space}/>
            <CheckBox checked={moderatelyAvailable} onChange={e => setMedium(e.target.checked)} id="moderatelyavailable" name="moderatelyavaialble" />
            <div className={classes.space}/>
            <Typography variant="h6" className={classes.label}>Moderate Available (5 hrs a week)</Typography>
          </FormControl>
          <FormControl required className={classes.checkmark}>
            <div className={classes.space}/>
            <CheckBox checked={lightAvailable} onChange={e => setLight(e.target.checked)} id="lightavailability" name="lightavailability" />
            <div className={classes.space}/>
            <Typography variant="h6" className={classes.label}>Light Availability (5 hrs a month)</Typography>
          </FormControl>
          <FormControl required className={classes.checkmark}>
            <div className={classes.space}/>
            <CheckBox checked={limitedAvailable} onChange={e => setLimited(e.target.checked)} id="limitedavailability" name="limitedavailability" />
            <div className={classes.space}/>
            <Typography variant="h6" className={classes.label}>Limited Availability (less than 5 hrs a month)</Typography>
          </FormControl>
        </Grid>
      </Grid>
    </>
  );
}

const styles = theme => ({
  checkmark: {
    display: 'flex',
    flexDirection: 'row',
  },
  space: {
    height: 10,
    width: 10,
  },
  input: {
    borderWidth: 0,
    borderColor: 'white',
  },
  label: { paddingTop: 5 },
});

export default withStyles(styles)(AffinityForm);
