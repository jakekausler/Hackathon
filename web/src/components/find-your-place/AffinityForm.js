import React from 'react';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import CheckBox from '@material-ui/core/Checkbox';
import FormControl from '@material-ui/core/FormControl';

function AffinityForm(props) {
  const {
    prayer, setPrayer,
    innovation, setInnovation,
    equipping, setEquipping,
    logistics, setLogistics,
    funding, setFunding,
    story, setStory,
  } = props.form;
  const { classes} = props
  return (
    <>
      <Typography variant="h5" gutterBottom>
       Find Your Place - Affinity Group(s) That Best Match Your Gifts 
      </Typography>
      <Typography variant="caption" gutterBottom>
        These are the primary drivers that you will support projects.
      </Typography>
      <div className={classes.space}/>
      <div className={classes.space}/>
      <Grid container >
        <Grid item md={12} >
         <FormControl required className={classes.checkmark}>
            <div className={classes.space}/>
            <CheckBox checked={prayer} onChange={e => setPrayer(e.target.checked)} id="prayer" name="prayer" autoComplete="prayer" />
            <div className={classes.space}/>
            <Typography variant="h6" className={classes.label}>Prayer</Typography>
          </FormControl>
          <FormControl required className={classes.checkmark}>
            <div className={classes.space}/>
            <CheckBox checked={innovation} onChange={e => setInnovation(e.target.checked)} id="innovation" name="innovation" autoComplete="innovation" />
            <div className={classes.space}/>
            <Typography variant="h6" className={classes.label}>Innovation</Typography>
          </FormControl>
          <FormControl required className={classes.checkmark}>
            <div className={classes.space}/>
            <CheckBox checked={equipping} onChange={e => setEquipping(e.target.checked)} id="equipping" name="equipping" autoComplete="equipping" />
            <div className={classes.space}/>
            <Typography variant="h6" className={classes.label}>Equipping</Typography>
          </FormControl>
          <FormControl required className={classes.checkmark}>
            <div className={classes.space}/>
            <CheckBox checked={logistics} onChange={e => setLogistics(e.target.checked)} id="logistics" name="logistics" autoComplete="logistics" />
            <div className={classes.space}/>
            <Typography variant="h6" className={classes.label}>Innovation</Typography>
          </FormControl>
          <FormControl required className={classes.checkmark}>
            <div className={classes.space}/>
            <CheckBox checked={funding} onChange={e => setFunding(e.target.checked)} id="funding" name="funding" autoComplete="funding" />
            <div className={classes.space}/>
            <Typography variant="h6" className={classes.label}>Funding</Typography>
          </FormControl>
          <FormControl required className={classes.checkmark}>
            <div className={classes.space}/>
            <CheckBox checked={story} onChange={e => setStory(e.target.checked)} id="story" name="story" autoComplete="story" />
            <div className={classes.space}/>
            <Typography variant="h6" className={classes.label}>Story</Typography>
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
