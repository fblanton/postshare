const React = require('react')
const { Button } = require('reactstrap')
const HelloReact = require('../../HelloReact')
const { Link } = require('react-router')

module.exports = ({ auth }) => {
  return (
    <div>
      <h2>You have really logged in</h2>
      <HelloReact />
      <Link to='/profile'>Profile</Link>
    </div>
  )
}
