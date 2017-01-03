const React = require('react')
const { Button } = require('reactstrap')

module.exports = ({ auth }) => {
  return (
    <div>
      <h2>Please Login</h2>
      <Button color="primary" onClick={ auth.login.bind(this) }>Login</Button>
    </div>
  )
}
