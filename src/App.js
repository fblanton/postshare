const React = require('react')
const { Provider } = require('react-redux')
const { render } = require('react-dom')
const HelloReact = require('./HelloReact')

module.exports = (props) => { return (
  <Provider store={ props.store }>
    <div>
      <HelloReact />
    </div>
  </Provider>
)}
