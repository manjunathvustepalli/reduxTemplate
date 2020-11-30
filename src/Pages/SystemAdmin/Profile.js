import React, { useState } from "react";
import {
  Grid,
  Typography,
  Button,
  Divider,
  TextField,
} from '@material-ui/core';


export default function Profile() {

  return (
    <div>
      <Grid container justify='center' alignItems='center' spacing={2} style={{ padding: 20 }}>

      <Grid item container justify='space-between'>
      <Grid item>
          <Typography variant='h5'>
            My Profile
      </Typography>
        </Grid>

      </Grid>
        
        <Grid item xs={12}>
          <Divider />
        </Grid>

        <Grid item xs={3}>
          <Typography variant='subtitle1'>
            First Name
      </Typography>
        </Grid>

        <Grid item xs={9}>
          <TextField
            id="outlined-basic"
            label="First Name"
            variant="outlined" 
            fullWidth
            size='small'
            />
        </Grid>

        <Grid item xs={3}>
          <Typography variant='subtitle1'>
            Last Name
      </Typography>
        </Grid>

        <Grid item xs={9}>
          <TextField
            id="outlined-basic"
            label="Last Name"
            variant="outlined" 
            fullWidth
            size='small'
            />
        </Grid>

        <Grid item xs={3}>
          <Typography variant='subtitle1'>
            User Name
      </Typography>
        </Grid>

        <Grid item xs={9}>
          <TextField
            id="outlined-basic"
            label="First Name"
            variant="outlined" 
            fullWidth
            size='small'
            />
        </Grid>

        <Grid item xs={3}>
          <Typography variant='subtitle1'>
            Role Name
      </Typography>
        </Grid>

        <Grid item xs={9}>
          <TextField
            id="outlined-basic"
            label="Role Name"
            variant="outlined" 
            fullWidth
            size='small'
            />
        </Grid>

        <Grid item xs={3}>
          <Typography variant='subtitle1'>
            Sub-Role Name
      </Typography>
        </Grid>

        <Grid item xs={9}>
          <TextField
            id="outlined-basic"
            label="Sub-Role Name"
            variant="outlined" 
            fullWidth
            size='small'
            />
        </Grid>

        <Grid item xs={3}>
          <Typography variant='subtitle1'>
            Email
      </Typography>
        </Grid>

        <Grid item xs={9}>
          <TextField
            id="outlined-basic"
            label="Email"
            variant="outlined" 
            fullWidth
            size='small'
            />
        </Grid>

        <Grid item xs={3}>
          <Typography variant='subtitle1'>
            Date of Birth
      </Typography>
        </Grid>

        <Grid item xs={9}>
          <TextField
            id="outlined-basic"
            variant="outlined" 
            fullWidth
            size='small'
            type='date'
            />
        </Grid>

        <Grid item xs={3}>
          <Typography variant='subtitle1'>
            Date Joined
      </Typography>
        </Grid>

        <Grid item xs={9}>
          <TextField
            id="outlined-basic"
            variant="outlined" 
            fullWidth
            size='small'
            type='date'
            />
        </Grid>

        <Grid item xs={3}>
          <Typography variant='subtitle1'>
            Last Login
      </Typography>
        </Grid>

        <Grid item xs={9}>
          <TextField
            id="outlined-basic"
            variant="outlined" 
            fullWidth
            size='small'
            type='date'
            />
        </Grid>

        <Grid item xs={3}>
          <Typography variant='subtitle1'>
            Company
      </Typography>
        </Grid>

        <Grid item xs={9}>
          <TextField
            id="outlined-basic"
            label="Company"
            variant="outlined" 
            fullWidth
            size='small'
            />
        </Grid>

        <Grid item xs={3}>
          <Typography variant='subtitle1'>
            New Password
      </Typography>
        </Grid>

        <Grid item xs={9}>
          <TextField
            id="outlined-basic"
            label="New Password"
            variant="outlined" 
            fullWidth
            size='small'
            type='password'
            />
        </Grid>

        <Grid item xs={3}>
          <Typography variant='subtitle1'>
            Confirm Password
      </Typography>
        </Grid>

        <Grid item xs={9}>
          <TextField
            id="outlined-basic"
            label="Confirm Password"
            variant="outlined" 
            fullWidth
            size='small'
            type='password'
            />
        </Grid>

        <Grid item xs={4} style={{padding: 30}}>
          <Button variant='contained' color='primary' fullWidth>
            Save Changes
          </Button>
        </Grid>

      </Grid>    
    </div>
  );
}
