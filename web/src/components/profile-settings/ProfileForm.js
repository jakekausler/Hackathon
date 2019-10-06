import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Input from '@material-ui/core/Input';
import TextAreaAutosize from '@material-ui/core/TextareaAutosize';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';

function ProfileForm(props) {
  const {
    website, setWebsite,
    linkedin, setLinkedin,
    phone, setPhone,
    occupation, setOccupation,
    experience, setExperience,
    //base64Image, setBase64Image,
  } = props.form;
  return (
    <>
      <Typography variant="h5" gutterBottom>
        
      </Typography>
      <Typography variant="caption" gutterBottom>
        Please complete the information below to set up your Assembl(i) account.
      </Typography>
      <Grid container >
        <Grid item xs={12} md={6} lg={4} style={styles.padding}>
         <FormControl margin="normal" fullWidth>
            <InputLabel htmlFor="fname">Website</InputLabel>
            <Input value={website} onChange={e => setWebsite(e.target.value)} id="website" name="website" autoComplete="website" />
          </FormControl>
        </Grid>
        <Grid item xs={12} md={6} lg={4} style={styles.padding}>
          <FormControl margin="normal" fullWidth>
          <InputLabel htmlFor="lname">LinkedIn Profile</InputLabel>
            <Input value={linkedin} onChange={e => setLinkedin(e.target.value)} id="linkedin" name="linkedin" autoComplete="linkedin" />
          </FormControl>
        </Grid>
        <Grid item xs={12} md={6} lg={4} style={styles.padding}>
          <FormControl margin="normal" fullWidth>
            <InputLabel htmlFor="occupation">Occupation</InputLabel>
            <Input value={occupation} onChange={e => setOccupation(e.target.value)} id="occupation" name="occupation" autoComplete="occupation" />
          </FormControl>
        </Grid>
        <Grid item xs={12} md={6} lg={4} style={styles.padding}>
          <FormControl margin="normal" fullWidth >
            <InputLabel htmlFor="phone">Phone Number</InputLabel>
            <Input
              value={phone} onChange={e => setPhone(e.target.value)}
              name="phone"
              id="phone"
              autoComplete="phone"
            />
          </FormControl>
        </Grid>
        <Grid item xs={12} md={12} lg={8} style={styles.padding}>
          <div style={{ height: 10 }}/>
          <InputLabel htmlFor="experience" style={{ marginBottom: -10 }}>Experience / Background</InputLabel>
          <FormControl margin="normal" fullWidth>
            <TextAreaAutosize value={experience} onChange={e => setExperience(e.target.value)} id="experience" name="experience" autoComplete="experience" rows={3} rowsMax={6} />
          </FormControl>
        </Grid>
      </Grid>
    </>
  );
}

const styles = { padding: { paddingRight: 10 } };

export default ProfileForm;
