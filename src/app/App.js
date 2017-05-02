import React, { Component } from 'react';
import logo from '../logo.svg';
import './App.css';
import { BrowserRouter as Router, Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { getRoutes } from '../routes'
import AuthButton  from '../login/AuthButton';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>Welcome to React</h2>
            <hr />
          </div>
          <div className="App-intro">
            <AuthButton />
              <ul>
                <li><Link to='/a'>A</Link></li>
                <li><Link to='/b'>B</Link></li>
                <li><Link to='/c/1'>C</Link></li>
              </ul>
          </div>
          <div>
            { getRoutes(this.props.isAuthenticated) }
          </div>
        </div>
      </Router>
    );
  }
}

function mapStateToProps(state) {
  return {
    isAuthenticated: state.fakeAuth.isAuthenticated
  }
}

export default connect(mapStateToProps, null)(App);
