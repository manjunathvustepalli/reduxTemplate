import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import {
  Grid,
  Button,
  FormControl,
  Checkbox,
  FormControlLabel,
  FormGroup,
  FormLabel,
  TextField,
  InputLabel,
  Select,
  MenuItem,
  Container
} from '@material-ui/core';
import ButtonGroup from '@material-ui/core/ButtonGroup';

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';

import DevicesIcon from '@material-ui/icons/Devices';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import RoomIcon from '@material-ui/icons/Room';
import AnnouncementIcon from '@material-ui/icons/Announcement';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import DashboardIcon from '@material-ui/icons/Dashboard';
import TableChartIcon from '@material-ui/icons/TableChart';
import AddIcon from '@material-ui/icons/Add';


import Users from '../Pages/SystemAdmin/Users';
import Profile from '../Pages/SystemAdmin/Profile';
import ListDevices from '../Pages/DeviceAdmin/ListDevices';
import ListPOIs from '../Pages/MapAdmin/ListPOIs';
import ListZones from '../Pages/MapAdmin/ListZones';
import ViewAlerts from '../Pages/Alerts/ViewAlerts'

const drawerWidth = 260;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
  large: {
    width: theme.spacing(8),
    height: theme.spacing(8),
  },
  title: {
    flexGrow: 1,
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
  link: {
    textDecoration: "none",
    // color: theme.palette.text.primary
  },
}));

const names = [
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '10',
  '11',
  '12',
  '13',
  '14',
  '15',
  '16',
  '17',
  '18',
  '19',
  '20'
];

export default function PersistentDrawerLeft() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);
  const [SystemAdminOpen, setSystemAdminOpen] = React.useState(false);
  const [DeviceAdminOpen, setDeviceAdminOpen] = React.useState(false);
  const [MapAdminOpen, setMapAdminOpen] = React.useState(false);
  const [AlertsOpen, setAlertsOpen] = React.useState(false);

  const [AdminViewFlag, setAdminViewFlag] = React.useState(false);

  const handleAdminViewButtonClick = () => {
    setAdminViewFlag(!AdminViewFlag)
  }


  const handleSystemAdminOpenClick = () => {
    setSystemAdminOpen(!SystemAdminOpen);
  };

  const handleDeviceAdminOpenClick = () => {
    setDeviceAdminOpen(!DeviceAdminOpen);
  };

  const handleMapAdminOpenClick = () => {
    setMapAdminOpen(!MapAdminOpen);
  };

  const handleAlertsOpenClick = () => {
    setAlertsOpen(!AlertsOpen);
  };

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Router>
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>

          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>

          <Typography variant="h6" noWrap className={classes.title}>
            Performance &amp; Asset Tracking System
          </Typography>

          <Button
            onClick={handleAdminViewButtonClick}
            variant='outlined'
            color='inherit'
            size='small'
            style={{ padding: 10 }}>
            {AdminViewFlag ? 'Admin View' : 'Analyst View'}
          </Button>

          <IconButton
            color="inherit"
          >
            <ExitToAppIcon />
          </IconButton>

        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <Grid container justify='space-between' spacing={1} style={{ padding: 20 }}>
            <Grid item>
              <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" className={classes.large} />
            </Grid>
            <Grid item>
              <IconButton onClick={handleDrawerClose}>
                {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
              </IconButton>
            </Grid>
            <Grid item xs={12}>
              <Typography variant='h6'>Welcome User!</Typography>
            </Grid>
          </Grid>

        </div>

        {/* <Divider /> */}

        {AdminViewFlag ?
          (<>
            <Grid container justify='center' spacing={2} style={{ padding: 10 }}>
              <Grid item xs={12}>
                <ButtonGroup
                  fullWidth
                  size="small"
                  variant="contained"
                  color="primary"
                  aria-label="contained primary button group">
                  <Button startIcon={<RoomIcon />}>Map</Button>
                  <Button startIcon={<TableChartIcon />}>Table</Button>
                </ButtonGroup>
              </Grid>

              <Grid item>
                <Typography variant='subtitle1'>
                  Filters
                </Typography>
              </Grid>
              <Grid item>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<AddIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Typography className={classes.heading}>Device Types</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <FormControl component="fieldset" size='small' className={classes.formControl}>
                      <FormGroup>
                        <FormControlLabel
                          control={<Checkbox name="sim" />}
                          label="SIM Based"
                        />
                        <FormControlLabel
                          control={<Checkbox name="gps" />}
                          label="GPS Based"
                        />
                        <FormControlLabel
                          control={<Checkbox name="app" />}
                          label="App Based"
                        />
                      </FormGroup>
                    </FormControl>
                  </AccordionDetails>
                </Accordion>

                <Accordion>
                  <AccordionSummary
                    expandIcon={<AddIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                  >
                    <Typography className={classes.heading}>Devices</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                      sit amet blandit leo lobortis eget.
          </Typography>
                  </AccordionDetails>
                </Accordion>

                <Accordion>
                  <AccordionSummary
                    expandIcon={<AddIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                  >
                    <Typography className={classes.heading}>Dates</Typography>
                  </AccordionSummary>
                  <AccordionDetails>

                    <Grid container justify='center' spacing={2} item xs={12}>
                      <Grid item xs={12}>
                        <TextField
                          id="standard-helperText"
                          defaultValue="Default Value"
                          helperText="Start Date"
                          type='date'
                          size='small'
                          fullWidth
                        />
                      </Grid>

                      <Grid item xs={12}>
                        <TextField
                          id="standard-helperText"
                          defaultValue="Default Value"
                          helperText="End Date"
                          type='date'
                          size='small'
                          fullWidth
                        />
                      </Grid>

                      <Grid item xs={12}>
                        <FormControl component="fieldset" className={classes.formControl}>
                          <FormLabel component="legend">Days Exclude Filter</FormLabel>
                          <div style={{ display: 'flex' }}>
                            <FormGroup>
                              <FormControlLabel
                                control={<Checkbox name="mon" />}
                                label="Mon"
                              />
                              <FormControlLabel
                                control={<Checkbox name="tue" />}
                                label="Tue"
                              />
                              <FormControlLabel
                                control={<Checkbox name="wed" />}
                                label="Wed"
                              />
                              <FormControlLabel
                                control={<Checkbox name="thu" />}
                                label="Thu"
                              />
                            </FormGroup>

                            <FormGroup>
                              <FormControlLabel
                                control={<Checkbox name="fri" />}
                                label="Fri"
                              />
                              <FormControlLabel
                                control={<Checkbox name="sat" />}
                                label="Sat"
                              />
                              <FormControlLabel
                                control={<Checkbox name="sun" />}
                                label="Sun"
                              />
                            </FormGroup>
                          </div>
                        </FormControl>
                      </Grid>

                      <Grid item xs={6}>
                        <Button variant='contained' color='primary' size='small'>
                          Apply
                        </Button>
                      </Grid>

                      <Grid item xs={6}>
                        <Button variant='contained' color='primary' size='small'>
                          Reset
                        </Button>
                      </Grid>
                    </Grid>

                  </AccordionDetails>
                </Accordion>

                <Accordion>
                  <AccordionSummary
                    expandIcon={<AddIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                  >
                    <Typography className={classes.heading}>Zones</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Grid item container justify='center' spacing={1} xs={12}>
                      <Grid item xs={12}>
                        <FormControl component="fieldset" size='small' className={classes.formControl}>
                          <FormGroup>
                            <FormControlLabel
                              control={<Checkbox name="insideZones" />}
                              label="Filter when inside zone"
                            />
                            <FormControlLabel
                              control={<Checkbox name="outsideZones" />}
                              label="Filter when outside zone"
                            />
                            <FormControlLabel
                              control={<Checkbox name="showZones" />}
                              label="Show zones"
                            />
                          </FormGroup>
                        </FormControl>
                      </Grid>

                      <Grid item xs={12}>

                      </Grid>

                      <Grid item xs={6}>
                        <Button variant='contained' color='primary' size='small'>
                          Apply
                        </Button>
                      </Grid>

                      <Grid item xs={6}>
                        <Button variant='contained' color='primary' size='small'>
                          Reset
                        </Button>
                      </Grid>
                    </Grid>

                  </AccordionDetails>
                </Accordion>

                <Accordion>
                  <AccordionSummary
                    expandIcon={<AddIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                  >
                    <Typography className={classes.heading}>POI</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Grid container justify='center' spacing={2} item xs={12}>
                      <Grid item xs={12}>
                        <ButtonGroup
                          fullWidth
                          size="small"
                          variant="contained"
                          color="primary"
                          aria-label="contained primary button group">
                          <Button >POI</Button>
                          <Button >Locations</Button>
                          <Button >Both</Button>
                        </ButtonGroup>
                      </Grid>
                      <Grid item>
                        <Button variant='contained' color='primary' size='small'>
                          Apply
                        </Button>
                      </Grid>

                      <Grid item>
                        <Button variant='contained' color='primary' size='small'>
                          Reset
                        </Button>
                      </Grid>
                    </Grid>
                  </AccordionDetails>
                </Accordion>

                <Accordion>
                  <AccordionSummary
                    expandIcon={<AddIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                  >
                    <Typography className={classes.heading}>Search</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Grid container justify='center' spacing={2} item xs={12}>
                      <Grid item xs={12}>
                        <TextField
                          label='Address'
                          multiline
                          rows={3}
                          variant='outlined'
                          fullWidth
                        />
                      </Grid>
                      <Grid item xs={12}>
                        {/* <FormControl className={classes.formControl}>
                          <InputLabel id="demo-mutiple-checkbox-label">Tag</InputLabel>
                          <Select
                            labelId="demo-mutiple-checkbox-label"
                            id="demo-mutiple-checkbox"
                            multiple
                            // value={personName}
                            // onChange={handleChange}
                            // input={<Input />}
                            renderValue={(selected) => selected.join(', ')}
                            // MenuProps={MenuProps}
                          >
                            {names.map((name) => (
                              <MenuItem key={name} value={name}>
                                <Checkbox 
                                // checked={personName.indexOf(name) > -1} 
                                />
                                <ListItemText primary={name} />
                              </MenuItem>
                            ))}
                          </Select>
                        </FormControl> */}
                      </Grid>
                      <Grid item xs={12}>

                      </Grid>
                      <Grid item xs={12}>
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
                            <MenuItem value={10}>All Data</MenuItem>
                            <MenuItem value={20}>POI Alerts Only</MenuItem>
                            <MenuItem value={20}>Zone Alerts Only</MenuItem>
                          </Select>
                        </FormControl>
                      </Grid>
                      <Grid item>
                        <Button variant='contained' color='primary' size='small'>
                          Apply
                        </Button>
                      </Grid>

                      <Grid item>
                        <Button variant='contained' color='primary' size='small'>
                          Reset
                        </Button>
                      </Grid>
                    </Grid>
                  </AccordionDetails>
                </Accordion>
              </Grid>

              <Grid item xs={12}>
                <Button
                  size="small"
                  variant='contained'
                  color='primary'
                  fullWidth>
                  Refresh
                </Button>
              </Grid>

              <Grid item xs={12}>
                <Button size="small" variant='contained' color='primary' fullWidth>
                  Clear/Reset Filter
                </Button>
              </Grid>

              <Grid item xs={12}>
                <Button size="small" variant='contained' color='primary' fullWidth>
                  Last Know Location
                </Button>
              </Grid>

            </Grid>

          </>) :
          (<>
            <List>

            <Link
            to="/dashboard"
            className={classes.link}
          >
              <ListItem button>
                <ListItemIcon>
                  <DashboardIcon />
                </ListItemIcon>
                <ListItemText primary="Dashboard" />
                <ChevronRightIcon />
              </ListItem>
              </Link>

              
              <ListItem button onClick={handleSystemAdminOpenClick}>
                <ListItemIcon>
                  <AccountBoxIcon />
                </ListItemIcon>
                <ListItemText primary="System Admin" />
                {SystemAdminOpen ? <ExpandLess /> : <ExpandMore />}
              </ListItem>
              <Collapse in={SystemAdminOpen} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>

                <Link
            to="/users"
            className={classes.link}
          >
                  <ListItem button className={classes.nested}>
                    <ListItemIcon>
                      <ArrowRightIcon fontSize='large' />
                    </ListItemIcon>
                    <ListItemText primary="Users" />
                  </ListItem>
                  </Link>

                  <Link
            to="/profile"
            className={classes.link}
          >
                  <ListItem button className={classes.nested}>
                    <ListItemIcon>
                      <ArrowRightIcon fontSize='large' />
                    </ListItemIcon>
                    <ListItemText primary="Profile" />
                  </ListItem>
                  </Link>
                </List>
              </Collapse>
              

              <ListItem button onClick={handleDeviceAdminOpenClick}>
                <ListItemIcon>
                  <DevicesIcon />
                </ListItemIcon>
                <ListItemText primary="Device Admin" />
                {DeviceAdminOpen ? <ExpandLess /> : <ExpandMore />}
              </ListItem>
              <Collapse in={DeviceAdminOpen} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                <Link
            to="/listDevices"
            className={classes.link}
          >
                  <ListItem button className={classes.nested}>
                    <ListItemIcon>
                      <ArrowRightIcon fontSize='large' />
                    </ListItemIcon>
                    <ListItemText primary="List Devices" />
                  </ListItem>
                  </Link>
                </List>
              </Collapse>

              <ListItem button onClick={handleMapAdminOpenClick}>
                <ListItemIcon>
                  <RoomIcon />
                </ListItemIcon>
                <ListItemText primary="Map Admin" />
                {MapAdminOpen ? <ExpandLess /> : <ExpandMore />}
              </ListItem>
              <Collapse in={MapAdminOpen} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                <Link
            to="/listPOIs"
            className={classes.link}
          >
                  <ListItem button className={classes.nested}>
                    <ListItemIcon>
                      <ArrowRightIcon fontSize='large' />
                    </ListItemIcon>
                    <ListItemText primary="List POIs" />
                  </ListItem>
                  </Link>

                  <Link
            to="/listZones"
            className={classes.link}
          >
                  <ListItem button className={classes.nested}>
                    <ListItemIcon>
                      <ArrowRightIcon fontSize='large' />
                    </ListItemIcon>
                    <ListItemText primary="List Zones" />
                  </ListItem>
                  </Link>
                </List>
              </Collapse>

              <ListItem button onClick={handleAlertsOpenClick}>
                <ListItemIcon>
                  <AnnouncementIcon />
                </ListItemIcon>
                <ListItemText primary="Alerts" />
                {AlertsOpen ? <ExpandLess /> : <ExpandMore />}
              </ListItem>
              <Collapse in={AlertsOpen} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>

                <Link
            to="/viewAlerts"
            className={classes.link}
          >
                  <ListItem button className={classes.nested}>
                    <ListItemIcon>
                      <ArrowRightIcon fontSize='large' />
                    </ListItemIcon>
                    <ListItemText primary="View Alerts" />
                  </ListItem>
                  </Link>

                </List>
              </Collapse>

            </List>
          </>)}

      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        {/* <div className={classes.drawerHeader} /> */}
        <Toolbar />
        <Switch>
        <Route exact path="/users">
              <Container>
                <Users />
              </Container>
            </Route>

            <Route exact path="/profile">
              <Container>
              {/* <Grid container */}
                <Profile />
              </Container>
            </Route>

            <Route exact path="/listDevices">
              <Container>
                <ListDevices />
              </Container>
            </Route>

            <Route exact path="/listPOIs">
              <Container>
                <ListPOIs />
              </Container>
            </Route>

            <Route exact path="/listZones">
              <Container>
                <ListZones />
              </Container>
            </Route>

            <Route exact path="/viewAlerts">
              <Container>
                <ViewAlerts />
              </Container>
            </Route>

        </Switch>
      </main>
    </div>
    </Router>
  );
}
