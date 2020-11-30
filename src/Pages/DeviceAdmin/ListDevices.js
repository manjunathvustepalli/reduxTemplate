import React, { useState } from "react";
import {
  Grid,
  Typography,
  Button,
  Divider,
  InputLabel,
  MenuItem,
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

export default function ListDevices() {

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
            Devices
      </Typography>
        </Grid>

        <Grid item>
          <Button 
          onClick={onAddUserClick}
          variant='contained' 
          color='primary'>
            {!AddUserFlag? 'Add New Device' : 'Back to Devices'}
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
            For Client
      </Typography>
        </Grid>

        <Grid item xs={9}>
          <FormControl variant="outlined" fullWidth size='small'>
            <InputLabel id="demo-simple-select-outlined-label">Client</InputLabel>
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
              <MenuItem value={10}>Shyna</MenuItem>
              <MenuItem value={20}>Tvast</MenuItem>
            </Select>
          </FormControl>
        </Grid>

        <Grid item xs={3}>
          <Typography variant='subtitle1'>
            Select to Map Asset
      </Typography>
        </Grid>

        <Grid item xs={9}>
          <FormControl variant="outlined" fullWidth size='small'>
            <InputLabel id="demo-simple-select-outlined-label">Select Asset</InputLabel>
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
              <MenuItem value={10}>User</MenuItem>
              <MenuItem value={20}>Group</MenuItem>
            </Select>
          </FormControl>
        </Grid>

        <Grid item xs={3}>
          <Typography variant='subtitle1'>
            For User/Group
      </Typography>
        </Grid>

        <Grid item xs={9}>
        <FormControl fullWidth > 
        <InputLabel shrink htmlFor="select-multiple-native">
          Select
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
            Device Type
      </Typography>
        </Grid>

        <Grid item xs={9}>
          <FormControl variant="outlined" fullWidth size='small'>
            <InputLabel id="demo-simple-select-outlined-label">Device Type</InputLabel>
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
              <MenuItem value={10}>SIM Based</MenuItem>
              <MenuItem value={20}>GPS Based</MenuItem>
              <MenuItem value={20}>App Based</MenuItem>
            </Select>
          </FormControl>
        </Grid>

        <Grid item xs={3}>
          <Typography variant='subtitle1'>
            Aquisition Date
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
            Number
      </Typography>
        </Grid>

        <Grid item xs={9}>
          <TextField
            id="outlined-basic"
            label="Number"
            variant="outlined" 
            fullWidth
            size='small'
            />
        </Grid>

        <Grid item xs={3}>
          <Typography variant='subtitle1'>
            Device Name
      </Typography>
        </Grid>

        <Grid item xs={9}>
          <TextField
            id="outlined-basic"
            label="Device Name"
            variant="outlined" 
            fullWidth
            size='small'
            />
        </Grid>

        <Grid item xs={3}>
          <Typography variant='subtitle1'>
            Serial Number
      </Typography>
        </Grid>

        <Grid item xs={9}>
          <TextField
            id="outlined-basic"
            label="Serial Number"
            variant="outlined" 
            fullWidth
            size='small'
            />
        </Grid>

        <Grid item xs={3}>
          <Typography variant='subtitle1'>
            Asset Status
      </Typography>
        </Grid>

        <Grid item xs={9}>
          <FormControl variant="outlined" fullWidth size='small'>
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
              <MenuItem value={10}>Active</MenuItem>
              <MenuItem value={20}>Inactive</MenuItem>
            </Select>
          </FormControl>
        </Grid>

        <Grid item xs={3} style={{padding: 30}}>
          <Button variant='contained' color='primary' fullWidth>
            Save
          </Button>
        </Grid>

        <Grid item xs={3} style={{padding: 30}}>
          <Button variant='contained' color='secondary' fullWidth>
            Cancel
          </Button>
        </Grid>
        </>): 
        (<>

        <Grid item container xs={12} justify='flex-start' spacing={2}>
            <Grid item>
                <Button variant='contained' color='default'>
                    Excel
                </Button>
            </Grid>
            <Grid item>
                <Button variant='contained' color='default'>
                    PDF
                </Button>
            </Grid>
            <Grid item>
                <Button variant='contained' color='default'>
                    Print
                </Button>
            </Grid>
        </Grid>
          <Grid item xs={12}>
          <MaterialTable
      title="All Users"
      columns={[
        { title: 'Device Id', field: 'name' },
        { title: 'Nick Name', field: 'surname' },
        { title: 'Activation date', field: 'surname' },
        { title: 'Valid Weekly Days', field: 'surname' },
        { title: 'Device Groups', field: 'surname' },
        { title: 'Device Types', field: 'surname' },
        { title: 'Device Key-Id', field: 'surname' },
        { title: 'Username', field: 'surname' },
        { title: 'Status', field: 'surname' },
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
