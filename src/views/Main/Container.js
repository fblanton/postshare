const React = require('react')
const { Jumbotron, Container, Button } = require('reactstrap')

module.exports = ({ children: thisChildren, route }) => {
  let children = null

  if (thisChildren) {
    children = React.cloneElement(thisChildren, {
      auth: route.auth
    })
  }

  return (
    <div>
      <Jumbotron fluid>
        <Container>
          <h1 className="display-1">Post Share</h1>
          <p className="lead">Browse your past Instagram posts and repost them to other platforms.</p>
          <hr />
        </Container>
      </Jumbotron>
      { children }
    </div>
  )
}
