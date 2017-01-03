const React = require('react')
const { Button } = require('reactstrap')

module.exports = ({ auth }) => {
  return (
    <div>
      <h2>Please Logout</h2>
      <Button color="primary" onClick={ auth.logout.bind(this) }>Logout</Button>
    </div>
  )
}
