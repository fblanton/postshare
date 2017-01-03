require('./index.html')
require('./index.css')

const React = require('react')
const ReactDOM = require('react-dom')
const { AppContainer } = require('react-hot-loader')
const store = require('./store')
const Root = require('./Root')

const render = TheRoot => ReactDOM.render(
  <AppContainer>
    <TheRoot store={ store }/>
  </AppContainer>
  , document.getElementById('app')
)

render(Root)

if (module.hot) {
  module.hot.accept('./Root', () => {
    render(require('./Root'))
  })
}
