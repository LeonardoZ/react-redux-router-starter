import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { doLogin } from '../actions/do_login';

class LoginForm extends Component {
  constructor() {
    super();
    this.state = { redirectToReferrer: false };
  }

  login = () => {
    this.props.doLogin();
    this.setState({ redirectToReferrer: true });
  }

  render() {
    const { from } = this.props.location.state || { from: { pathname: '/' } };
    const { redirectToReferrer } = this.state;
    console.log("Refer "+redirectToReferrer);
    if (redirectToReferrer) {
      return (
        <Redirect to={from} />
      )
    }
    return (
      <div>
        <p>You must log in to view the page at {from.pathname}</p>
        <button onClick={this.login}>Log in</button>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return {
    doLogin: () => dispatch(doLogin())
  }
  // return bindActionCreators({ doLogin }, dispatch);
}

export default connect(null, mapDispatchToProps)(LoginForm);