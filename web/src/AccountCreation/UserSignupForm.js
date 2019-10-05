import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Input from '@material-ui/core/Input';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import IconButton from '@material-ui/core/IconButton'
import Avatar from '@material-ui/core/Avatar';
import AccountCircle from '@material-ui/icons/AccountCircle';

function UserForm(props) {
  return (
    <div style={props.style}>
      <Typography variant="h5" gutterBottom>
        Create an Account
      </Typography>
      <Typography variant="caption" gutterBottom>
        Please complete the information below to set up your Assembl(i) account.
      </Typography>
      <Grid container spacing={24}>
      <Grid item xs={12} md={12}>
          <IconButton>
            <Avatar>
              <AccountCircle />
            </Avatar>
          </IconButton>
        </Grid> 
        <Grid item xs={12} md={6} style={styles.padding}>
         <FormControl margin="normal" required fullWidth>
                <InputLabel htmlFor="fname">First Name</InputLabel>
                <Input id="fname" name="fname" autoComplete="fname" autoFocus={props.visible?true:false} />
          </FormControl>
        </Grid>
        <Grid item xs={12} md={6} style={styles.padding}>
          <FormControl margin="normal" required fullWidth>
          <InputLabel htmlFor="lname">Last Name</InputLabel>
                <Input id="lname" name="lastname" autoComplete="lname" />
          </FormControl>
        </Grid>
        <Grid item xs={12} md={6} style={styles.padding}>
          <FormControl margin="normal" required fullWidth>
                <InputLabel htmlFor="email">Email Address</InputLabel>
                <Input id="email" name="email" autoComplete="email" />
          </FormControl>
        </Grid>
        <Grid item xs={12} md={6} style={styles.padding}>
        <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="password">Password</InputLabel>
            <Input
              name="password"
              type="password"
              id="password"
            />
          </FormControl>
          <FormControl margin="normal" required fullWidth >
            <InputLabel htmlFor="cpassword">Confirm Password</InputLabel>
            <Input
              name="cpassword"
              type="password"
              id="cpassword"
            />
          </FormControl>
        </Grid>      
      </Grid>
    </div>
  );
}

const styles = { padding: { paddingRight: 10 } };

export default UserForm;
