const React = require('react')
const { Provider } = require('react-redux')
const { render } = require('react-dom')
const HelloReact = require('./HelloReact')
const { Jumbotron, Container, Button } = require('reactstrap')

module.exports = (props) => { return (
  <Provider store={ props.store }>
    <div>
      <Jumbotron fluid>
        <Container>
          <h1 className="display-1">Post Share</h1>
          <p className="lead">Browse your past Instagram posts and repost them to other platforms.</p>
          <hr />
        </Container>
      </Jumbotron>
    </div>
  </Provider>
)}
