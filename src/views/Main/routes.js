const React = require('react')
const { Route, IndexRedirect } = require('react-router')

import AuthService from '../../utils/AuthService'
const auth = new AuthService('lp8ycsmD5hmVMqIwBhQBRteHu0CDlLq0', 'fblanton.auth0.com')

// container which can hold headers and footers, et al.
const Container = require('./Container')

// subroutes
const Loggedin = require('./Loggedin')
const Login = require('./Login')
const Profile = require('./Profile')

const requireAuth = (nextState, replace) => {
  if(!auth.loggedIn()) {
    replace('/login')
  }
}

module.exports = () => {
  return (
    <Route path='/' component={Container} auth={ auth } >
      <IndexRedirect to='profile'/>
      <Route path='login' component={Login} />
      <Route path='loggedin' component={Loggedin} onEnter={ requireAuth } />
      <Route path='profile' component={Profile} onEnter={ requireAuth } />
      <Route path='access_token*' /> //prevent console error re path issue on login
    </Route>
  )
}
