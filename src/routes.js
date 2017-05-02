import React from 'react';
import {
  Route,
  Redirect
} from 'react-router-dom';
import LoginForm from './login/LoginForm';

// Fake componentes
const A = () => {
  return <h1>A</h1>
}

const B = () => {
  return <h1>B</h1>
}

const C = ({ match }) => {
  return <h1>C - {match.params.id}</h1>
}

const PrivateRoute = ({ component: Component, isUserAuthenticated, ...rest }) => (
  <Route {...rest} render={props => (
    isUserAuthenticated ? (
      <Component {...props} />
    ) : (
      <Redirect to={{
          pathname: '/login',
          state: { from: props.location }
      }} />
    )
  )} />
);

export const getRoutes = (isAuthenticated) => {
  return [
    <Route key='a' exact path='/a' component={A} />,
    <PrivateRoute key='b' path='/b' isUserAuthenticated={isAuthenticated} component={B} />,
    <Route key='login' path='/login' component={LoginForm} />,
    <Route key='c' path='/c/:id' component={C} />
  ]
};