import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import { Field } from 'redux-form'

function AccountForm(props) {
  return (
    <div style={props.style}>
      <Typography variant="h5" gutterBottom>
        Create an Account:
      </Typography>
      <Grid container spacing={24} >
        <Grid item xs={12} md>
          <Field
            required
            id="accountname"
            name="accountname"
            component={renderTextField}
            label="My Account Name"
            fullWidth
            autoFocus={props.visible}
          />
        </Grid>
      </Grid>
    </div>
  );
}

export default AccountForm;

class renderTextField extends React.Component{
  render(){
    const {
      input,
      ...custom
    } = this.props
    return (
      <TextField
        {...input}
        {...custom}
      />
    )}
}
