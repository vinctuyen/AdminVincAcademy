import React from "react";
import { connect } from "react-redux";
// import { injectIntl } from "react-intl";
// import { Redirect } from "react-router-dom";
// import Link from 'next/link';
import Router from 'next/router'

import TypesLogin from '../../redux/login-demo'


import {
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  Link,
  TextField
} from "@material-ui/core";
import "../../styles/pages/login.scss";

const handler = () => {
  Router.push({
    pathname: '/',
  })
}


class LoginComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputAcc: "",
      inputPass: "",
      islogin: false
    };
  }

  componentDidMount() {
    this.setState({inputAcc: '', inputPass: ''})
  }

  handleClickLogin = () => {
    this.props.login(this.state.inputAcc, this.state.inputPass);
  };

  handleOnPressEnter = e => {
    if (e.key === "Enter") {
      this.handleClickLogin();
    }
  };

  render() {
    const { isLogin } = this.props;
    if (isLogin) {
      handler();
    }
    return (
      <div className="login-page">
        <h1>Login Page</h1>
        <form className={"login-form"} noValidate id="formTest">
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            className="login-input"
            value={this.state.inputAcc}
            onChange={e => this.setState({ inputAcc: e.target.value })}
            autoFocus
            onKeyPress={this.handleOnPressEnter}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            className="login-input"
            value={this.state.inputPass}
            onChange={e => this.setState({ inputPass: e.target.value })}
            onKeyPress={this.handleOnPressEnter}
          />
          <FormControlLabel
            control={
              <Checkbox
                value="remember"
                color="primary"
                className="login-checkbox"
              />
            }
            label="Remember me"
          />
          <Button
            // type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className="login-button"
            onClick={this.handleClickLogin}
            // disabled={this.props.loadingUser}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              {/* <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="#" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link> */}
            </Grid>
          </Grid>
        </form>
      </div>
    );
  }
}

let mapStateToProps = state => {
  return {
    isLogin: state.login.isLogin,
    data: state
  };
};

let mapDispatchToProps = dispatch => {
  return {
    login: (acc, pass) => dispatch(TypesLogin.loginRequestDemo(acc, pass))
  };
};

LoginComponent = connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginComponent);

export default (LoginComponent);