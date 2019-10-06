import React, { useState } from 'react';
import { connect } from 'react-redux';
import { updateAffinity } from '../../actions/settingsActions';
import { withStyles, Paper, Button } from '@material-ui/core';
import AffinityForm from './AffinityForm';

const AffinityPage = props => {
  const { classes } = props;
  const [prayer, setPrayer] = useState(false);
  const [innovation, setInnovation] = useState(false);
  const [equipping, setEquipping] = useState(false);
  const [logistics, setLogistics] = useState(false);
  const [funding, setFunding] = useState(false);
  const [story, setStory] = useState(false);
  const onSubmit = e => {
    e.preventDefault();
    const form = { prayer, innovation, equipping, story, funding, logistics }
    console.log(form);
    updateAffinity(form);
    props.history.push('/map')
  }
  return (
    <Paper className={classes.paper}>
      <form onSubmit={onSubmit} >
        <AffinityForm
          form={{
            prayer, setPrayer,
            innovation, setInnovation,
            equipping, setEquipping,
            logistics, setLogistics,
            funding, setFunding,
            story, setStory,
          }}
        />
        <div className={classes.space} />
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
      </form>
    </Paper>
  );
}

const Container = ({ classes, children }) => (<div className={classes}>{children}</div>)

const styles = (theme) => ({
  paper: {
    padding: 16, 
    [theme.breakpoints.up('sm')]:{
      margin: 20,
      padding: 20,
    }
  },
  space: {
    height: 10
  },
});

const mapDispatchToProps = dispatch => ({
  updateAffinity: updateAffinity(dispatch)
})
export default connect(null, mapDispatchToProps)(withStyles(styles)(AffinityPage));
