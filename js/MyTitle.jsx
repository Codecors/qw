const React = require('react')
const h1 = React.DOM.h1
const div = React.DOM.div

const MyTitle = React.createClass({
  render () {
    return (
      <div>
        <h1 style={{color: this.props.color}}>
          {this.props.title}
        </h1>
      </div>
    )
  }
})

module.exports = MyTitle
