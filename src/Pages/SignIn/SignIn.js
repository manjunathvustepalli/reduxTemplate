import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import PropTypes from "prop-types";
import Card from "@material-ui/core/Card";
import TextField from "@material-ui/core/TextField";
// import "typeface-roboto";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
// import ValidationMessage from "./ValidationMessage";
// import Alert from "@material-ui/lab/Alert";
import { Box, Button } from "@material-ui/core";
// import ReCAPTCHA from "react-google-recaptcha";

// let IP=window.$IP;
class signIn extends Component {
  constructor(props) {
    super(props);
    this._reCaptchaRef = React.createRef();
    this.onSignInButtonPress = this.onSignInButtonPress.bind(this);
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }



  state = {
    width: 0, height: 0,
    username: "",
    password: "",
    usernamevalid: false,
    passwordvalid: false,
    submitDisabled: "disabled",
    warning: false,
    accountdeactivated: false,

    response: "",
    captha: "",
    capthavalid: false,
  };

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }
  
  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }
  
  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }

  UserGreeting(props) {
    return <h1>Welcome back!</h1>;
  }
  usernamecheck = (event) => {
    this.setState({ username: event.target.value });
    if (event.target.value.length === 0) {
      this.setState({ usernamevalid: true });
    } else {
      this.setState({ usernamevalid: false });
    }
  };
  passwordcheck = (event) => {
    if (event.target.value.length === 0) {
      this.setState({ passwordvalid: true });
    } else {
      this.setState({ passwordvalid: false });
    }
  };

  formvalid() {
    if (this.state.username.length > 0) {
      this.setState({ usernamevalid: false });
    } else {
      this.setState({ usernamevalid: true });
    }
    if (this.state.password.length > 0) {
      this.setState({ passwordvalid: false });
    } else {
      this.setState({ passwordvalid: true });
    }
    if (this.state.captha === "") {
      this.setState({ capthavalid: false });
    } else {
      this.setState({ capthavalid: true });
    }
    if (
      !this.state.usernamevalid &&
      !this.state.passwordvalid &&
      this.state.capthavalid
    ) {
      this.onSignInButtonPress();
    }
  }
  handleChange = (value) => {
    this.setState({ captha: value, capthavalid: true });

    if (value === null) this.setState({ expired: "true" });
  };

  render() {
    const { classes } = this.props;

    return (
      <Grid container alignItems="center">

        <Grid
          alignItems="center"
          justify="center"
          item
          container
        //   md={6}
          xs={12}
        //   style={{ background: "#031a26", minHeight: "100vh" }}
        >
          <Grid item container justify="center" md={8} xs={11}>
            <Grid item xs={12} style={{marginTop: 100}}>
              <Card style={{ padding: 40 }} elevation={2}>
                <Grid item container justify="center" xs={12}>
                  <Grid item container justify="center" xs={12}>
                    <Grid>
                      <Typography
                        style={{ fontWeight: "bold" }}
                        variant="h4"
                        gutterBottom
                        color="primary"
                      >
                        Client Login
                      </Typography>
                    </Grid>
                  </Grid>

                  {/* <Grid item xs={12}>
                    {" "}
                    {this.state.warning ? (
                      <Alert severity="error">Wrong username or password</Alert>
                    ) : null}
                    {this.state.accountdeactivated ? (
                      <Alert severity="error">
                        Your Account has been deactivated please contact the
                        admin
                      </Alert>
                    ) : null}
                  </Grid> */}

                  <Grid item xs={12}>
                    <TextField
                      variant="standard"
                      margin="normal"
                      required
                      error={this.state.usernamevalid}
                      // style={{ marginRight: 10 }}
                      // margin="dense"
                      id="username"
                      label="User Name"
                      value={this.state.username}
                      type="text"
                      autoComplete="username"
                      autoFocus
                      fullWidth
                      size="medium"
                      helperText={
                        this.state.usernamevalid
                          ? "Please enter your username"
                          : ""
                      }
                      onChange={(event) => this.usernamecheck(event)}
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <TextField
                      variant="standard"
                      margin="normal"
                      required
                      error={this.state.passwordvalid}
                      // style={{ marginRight: 10 }}
                      // margin="dense"
                      label="Password"
                      value={this.state.password}
                      type="password"
                      id="password"
                      autoComplete="current-password"
                      fullWidth
                      size="small"
                      helperText={
                        this.state.passwordvalid
                          ? "Please enter your password"
                          : ""
                      }
                      onChange={(event) =>
                        this.setState(
                          { password: event.target.value },
                          this.passwordcheck(event)
                        )
                      }
                    />
                  </Grid>

                  {/* <Grid item container justify="center" xs={12}>
                    <ValidationMessage
                      valid={!this.state.capthavalid}
                      // message={"please check this box"}
                    />
                    <Box p={2}>
                      <ReCAPTCHA
                        style={{ display: "inline-block" }}
                        theme="light"
                        // ref={this._reCaptchaRef}
                        sitekey={"6LdDrqsZAAAAABrsnwXy1KB8r1dhblamd3rFz7wd"}
                        onChange={this.handleChange}
                        // asyncScriptOnLoad={this.asyncScriptOnLoad}
                      />
                    </Box>
                  </Grid> */}

                  <Grid
                    item
                    container
                    justify="center"
                    direction="row"
                    xs={10}
                    spacing={1}
                  >
                    <Grid item xs={12}>
                      <Button
                        fullWidth
                        size="large"
                        variant="contained"
                        color="primary"
                        style={{
                          marginTop: 16,
                          marginBottom: 16,
                        }}
                        onClick={() => this.formvalid()}
                      >
                        Sign In
                      </Button>
                    </Grid>

                    <Grid
                      item
                      container
                      justify="center"
                      direction="row"
                      xs={12}
                    >
                      <Link href="/forgotpassword" variant="body2">
                        Forgot password?
                      </Link>
                    </Grid>
                    <Grid
                      item
                      container
                      justify="center"
                      direction="row"
                      xs={12}
                    >
                      <Link href="/signup" variant="body2">
                        {"Don't have an account? Sign Up"}
                      </Link>
                    </Grid>
                  </Grid>
                </Grid>
              </Card>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    );
  }

  async onSignInButtonPress() {
    try {
      let apiEndpoint =
        "http://" + window.$IP + ":9000/api/v1/accounts/auth/login";

      var requestBody = {
        username: this.state.username,
        password: this.state.password,
      };

      let response = await fetch(apiEndpoint, {
        method: "POST",

        body: JSON.stringify(requestBody),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();

      if (data.token) {
        // localStorage.setItem("Token", data.token);
        localStorage.setItem("Token", "Token " + data.token);
        localStorage.setItem("id", data.user.id);
        localStorage.setItem("name", data.user.firstname);
        localStorage.setItem("middlename", data.user.middlename);
        localStorage.setItem("surname", data.user.surname);
        localStorage.setItem("email", data.user.email);
        localStorage.setItem("Dob", data.user.dob);
        localStorage.setItem("gender", data.user.sex);

        this.setState({ response: data });
        if (data.user.is_admin) {
          this.props.history.push({
            pathname: "/admindashboard",
          });
        } else if (data.user.is_employer) {
          if (
            data.user.accountStatus === "Approved" ||
            data.user.accountStatus === "Account Reactivated"
          ) {
            this.props.history.push({
              pathname: "/employerDashboard",
            });
          } else if (
            data.user.accountStatus === "Profile In Progress" ||
            data.user.accountStatus === "Approval In Progress"
          ) {
            this.props.history.push({
              pathname: "/employerworkflow",
              state: { detail: data },
            });
          }
        } else {
          if (
            data.user.accountStatus === "Approved" ||
            data.user.accountStatus === "Account Reactivated"
          ) {
            this.props.history.push({
              pathname: "/dashboard",
            });
          } else if (
            data.user.accountStatus === "Profile In Progress" ||
            data.user.accountStatus === "Approval In Progress"
          ) {
            localStorage.setItem("ontrac_id", data.user.ontrac_id);
            this.props.history.push({
              pathname: "/workflow",
              state: { detail: data },
            });
          } else if (data.user.accountStatus === "Account Deactivated") {
            this.setState({ accountdeactivated: true });
          }
        }
      } else {
        this.setState({ warning: true });
      }
    } catch (error) {
      console.log("[!ON_REGISTER] " + error);
      // return <Route exact path="/Homepage" component={LandingPage} />;
    }
  }
}
signIn.propTypes = {
  classes: PropTypes.object.isRequired,
};
const styles = (theme) => ({
  root: {
    height: "100vh",
  },
  mainImage: {
    backgroundRepeat: "no-repeat",

    backgroundColor: "#1c2330",
    backgroundPosition: "center",
  },
  
});

export default withStyles(styles)(signIn);