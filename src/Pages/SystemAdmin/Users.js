import React, { useState } from "react";
import {
  Grid,
  Typography,
  Button,
  Divider,
  InputLabel,
  MenuItem,
  FormHelperText,
  TextField,
  FormControl,
  Select
} from '@material-ui/core';

import { makeStyles } from "@material-ui/core/styles";
import MaterialTable from "material-table";

import {
  createMuiTheme,
} from "@material-ui/core/styles";
import { green } from "@material-ui/core/colors";


const names = [
  'Shyna Default Group',
  'Van Henry',
  'April Tucker',
  'Ralph Hubbard',
  'Omar Alexander',
  'Carlos Abbott',
  'Miriam Wagner',
  'Bradley Wilkerson',
  'Virginia Andrews',
  'Kelly Snyder',
];

const theme = createMuiTheme({
  palette: {
    primary: green,
  },
});

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    // backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  button: {
    margin: theme.spacing(1),
    padding: "15px 0",
    color: "white",
    display: "block",
    textAlign: "center",
    backgroundColor: `rgb(67,176,42)`,
    "&:hover": {
      backgroundColor: `rgb(67,176,42)`,
    },
  },
}));

export default function Users() {

  const [AddUserFlag, setAddUserFlag] = useState(false)

  const onAddUserClick = () => {
    setAddUserFlag(!AddUserFlag)
  }


  return (
    <div>
      <Grid container justify='center' alignItems='center' spacing={2} style={{ padding: 20 }}>

      <Grid item container justify='space-between'>
      <Grid item>
          <Typography variant='h5'>
            List Users
      </Typography>
        </Grid>

        <Grid item>
          <Button 
          onClick={onAddUserClick}
          variant='contained' 
          color='primary'>
            {!AddUserFlag? 'Add New User' : 'Back to User Clients'}
      </Button>
        </Grid>
      </Grid>
        
        <Grid item xs={12}>
          <Divider />
        </Grid>

        {AddUserFlag ? 
        (<>
          <Grid item xs={3}>
          <Typography variant='subtitle1'>
            User Type
      </Typography>
        </Grid>

        <Grid item xs={9}>
          <FormControl variant="filled" fullWidth size='small'>
            <InputLabel id="demo-simple-select-outlined-label">User Type</InputLabel>
            <Select
              labelId="demo-simple-select-outlined-label"
              id="demo-simple-select-outlined"
              // value={age}
              // onChange={handleChange}
              label="Age"
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>Analyst</MenuItem>
              <MenuItem value={20}>Admin</MenuItem>
            </Select>
          </FormControl>
        </Grid>

        <Grid item xs={3}>
          <Typography variant='subtitle1'>
            First Name
      </Typography>
        </Grid>

        <Grid item xs={9}>
          <TextField
            id="filled-basic"
            label="First Name"
            variant="filled" 
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
            id="filled-basic"
            label="Last Name"
            variant="filled" 
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
            id="filled-basic"
            label="First Name"
            variant="filled" 
            fullWidth
            size='small'
            />
        </Grid>

        <Grid item xs={3}>
          <Typography variant='subtitle1'>
            Primary Phone 
      </Typography>
        </Grid>

        <Grid item xs={9}>
          <TextField
            id="filled-basic"
            label="Primary Phone"
            variant="filled" 
            fullWidth
            size='small'
            />
        </Grid>

        <Grid item xs={3}>
          <Typography variant='subtitle1'>
            Secondary Phone 
      </Typography>
        </Grid>

        <Grid item xs={9}>
          <TextField
            id="filled-basic"
            label="Secondary Phone"
            variant="filled" 
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
            id="filled-basic"
            label="Email"
            variant="filled" 
            fullWidth
            size='small'
            />
        </Grid>

        <Grid item xs={3}>
          <Typography variant='subtitle1'>
            Device Groups
      </Typography>
        </Grid>

        <Grid item xs={9}>
        <FormControl fullWidth variant='filled' size='small'> 
        <InputLabel shrink htmlFor="select-multiple-native">
          Native
        </InputLabel>
        <Select
          multiple
          native
          // value={personName}
          // onChange={handleChangeMultiple}
          inputProps={{
            id: 'select-multiple-native',
          }}
        >
          {names.map((name) => (
            <option key={name} value={name}>
              {name}
            </option>
          ))}
        </Select>
      </FormControl>
        </Grid>

        <Grid item xs={3}>
          <Typography variant='subtitle1'>
            Password
      </Typography>
        </Grid>

        <Grid item xs={9}>
          <TextField
            id="filled-basic"
            label="Password"
            variant="filled" 
            fullWidth
            size='small'
            />
        </Grid>

        <Grid item xs={3}>
          <Typography variant='subtitle1'>
            Re-Type Password
      </Typography>
        </Grid>

        <Grid item xs={9}>
          <TextField
            id="filled-basic"
            label="Password2"
            variant="filled" 
            fullWidth
            size='small'
            />
        </Grid>

        <Grid item xs={3}>
          <Typography variant='subtitle1'>
            Status
      </Typography>
        </Grid>

        <Grid item xs={9}>
          <FormControl variant="filled" fullWidth size='small'>
            <InputLabel id="demo-simple-select-outlined-label">Status</InputLabel>
            <Select
              labelId="demo-simple-select-outlined-label"
              id="demo-simple-select-outlined"
              // value={age}
              // onChange={handleChange}
              label="Age"
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>Enable</MenuItem>
              <MenuItem value={20}>Disable</MenuItem>
            </Select>
          </FormControl>
        </Grid>

        <Grid item xs={4} style={{padding: 30}}>
          <Button variant='contained' color='primary' fullWidth>
            Create Account
          </Button>
        </Grid>
        </>): 
        (<>
          <Grid item xs={12}>
          <MaterialTable
      title="All Users"
      columns={[
        { title: 'User Id', field: 'name' },
        { title: 'First Name', field: 'surname' },
        { title: 'Last Name', field: 'surname' },
        { title: 'Phone1', field: 'surname' },
        { title: 'Phone2', field: 'surname' },
        { title: 'Email', field: 'surname' },
        { title: 'Role', field: 'surname' },
        { title: 'Username', field: 'surname' },
        { title: 'Groups', field: 'surname' },
        { title: 'Actions', field: 'surname' },
      ]}
      data={[
        { name: 'Mehmet', surname: 'Baran', birthYear: 1987, birthCity: 63 },
        { name: 'Zerya Betül', surname: 'Baran', birthYear: 2017, birthCity: 34 },
      ]}        
      options={{
        search: true
      }}
    />
          </Grid>
        </>)}

      </Grid>    
    </div>
  );
}
