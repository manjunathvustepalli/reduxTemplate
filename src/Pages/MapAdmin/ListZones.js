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

export default function ViewAlerts() {

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
                            List POIs
      </Typography>
                    </Grid>

                    <Grid item>
                        <Button
                            onClick={onAddUserClick}
                            variant='contained'
                            color='primary'>
                            {!AddUserFlag ? 'Add New POI' : 'Back to POI List'}
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
                                POI Name
      </Typography>
                        </Grid>

                        <Grid item xs={9}>
                            <TextField
                                id="filled-basic"
                                label="POI Name"
                                variant="filled"
                                fullWidth
                                size='small'
                            />
                        </Grid>

                        <Grid item xs={3}>
                            <Typography variant='subtitle1'>
                                POI Description
      </Typography>
                        </Grid>

                        <Grid item xs={9}>
                            <TextField
                                id="filled-basic"
                                label="POI Description"
                                variant="filled"
                                fullWidth
                                size='small'
                                multiline
                                rows={3}
                            />
                        </Grid>

                        <Grid item container justify='center' spacing={3} xs={6}>
                            <Grid item>
                                <Button variant='contained' color='primary'>
                                    Add POI
                        </Button>
                            </Grid>

                            <Grid item>
                                <Button variant='contained' color='secondary'>
                                    Cancel
                        </Button>
                            </Grid>
                        </Grid>
                    </>) :
                    (<>
                        <Grid item xs={6}>
                            <TextField
                            type='date'
                            helperText='Start Date'
                            id='startDate'
                            />
                        </Grid>

                        <Grid item xs={6}>
                        <TextField
                            type='date'
                            helperText='End Date'
                            id='endDate'
                            />
                        </Grid>
                        
                        <Grid item xs={12}>
                            <MaterialTable
                                title="All POIs"
                                columns={[
                                    { title: 'Zone Id', field: 'name' },
                                    { title: 'POI Date', field: 'surname' },
                                    { title: 'POI Address', field: 'surname' },
                                    { title: 'POI City', field: 'surname' },
                                    { title: 'POI Zip Code', field: 'surname' },
                                    { title: 'POI Latitue', field: 'surname' },
                                    { title: 'POI Longitude', field: 'surname' },
                                    { title: 'POI Description', field: 'surname' },
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
