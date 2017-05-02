import React, { Component } from 'react';
import {  withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { doLogout } from '../actions/do_logout';

class AuthButtonComponent extends Component {
   render() { 
    return ( 
      this.props.auth.isAuthenticated ? (
        <p>
            Welcome! 
            <button onClick={() => {
              this.props.doLogout();
              this.props.history.push('/')
            }}>Sign out
            </button>
            </p>
        ) : (
            <p>You are not logged in.</p>
        )
    )}
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ doLogout }, dispatch);
}

function mapStateToProps(state) {
  return {
    auth: state.fakeAuth
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AuthButtonComponent));
