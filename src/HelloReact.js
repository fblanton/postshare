const React = require('react')
const { connect } = require('react-redux')
const add = require('./actions')

const mapStateToProps = state => ({ hellos: state })
const mapDispatchToProps = { add }

const Hello = ({ hellos, add }) => {
  return (
    <div>
      { hellos.map((hello, i) =>
        <h1 key={ i } onClick={ () => add('H llo') }>{ hello }</h1>)
      }
    </div>
  )
}

module.exports = connect(mapStateToProps, mapDispatchToProps)(Hello)
