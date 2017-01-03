const React = require('react')
const { Provider } = require('react-redux')
const { render } = require('react-dom')
const { Router, hashHistory } = require('react-router')
const makeRoutes = require('./routes')

module.exports = (props) => {
  const routes = makeRoutes()

  return (
    <Provider store={ props.store }>
      <Router history={ hashHistory }>
        { routes }
      </Router>
    </Provider>
  )
}
