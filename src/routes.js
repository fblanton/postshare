const React = require('react')
const { Route } = require('react-router')

const makeMainRoutes = require('./views/Main/routes')

module.exports = () => {
  return (
    <Route path=''>
      { makeMainRoutes() }
    </Route>
  )
}
