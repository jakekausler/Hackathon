import React from 'react';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import CheckBox from '@material-ui/core/Checkbox';
import FormControl from '@material-ui/core/FormControl';

function AffinityForm(props) {
  const {
    remote, setRemote,
    international, setInternational,
    local, setLocal,
  } = props.form;
  const { classes} = props
  return (
    <>
      <Typography variant="caption" gutterBottom>
       Work Preferences 
      </Typography>
      <div className={classes.space}/>
      <Grid container >
        <Grid item md={12} >
         <FormControl required className={classes.checkmark}>
            <div className={classes.space}/>
            <CheckBox checked={remote} onChange={e => setRemote(e.target.checked)} id="remote" name="remote" />
            <div className={classes.space}/>
            <Typography variant="h6" className={classes.label}>Work Remote</Typography>
          </FormControl>
          <FormControl required className={classes.checkmark}>
            <div className={classes.space}/>
            <CheckBox checked={international} onChange={e => setInternational(e.target.checked)} id="international" name="international" />
            <div className={classes.space}/>
            <Typography variant="h6" className={classes.label}>Able to travel internationally to location</Typography>
          </FormControl>
          <FormControl required className={classes.checkmark}>
            <div className={classes.space}/>
            <CheckBox checked={local} onChange={e => setLocal(e.target.checked)} id="local" name="local" />
            <div className={classes.space}/>
            <Typography variant="h6" className={classes.label}>Able to travel locally/regionally</Typography>
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
