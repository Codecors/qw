const React = require('react')
const { Link, hashHistory } = require('react-router')
const { connector } = require('./Store')
const { func, bool, string } = React.PropTypes

const Landing = React.createClass({
  propTypes: {
    setSearchTerm: func,
    showSearch: bool,
    searchTerm: string
  },
  handleSearchTermEvent (e) {
    this.props.setSearchTerm(e.target.value)
  },
  goToSearch (e) {
    hashHistory.push('search')
    e.preventDefault()
  },
  render () {
    return (
      <div className='home-info'>
        <Link to='/search' className='browse-all'>or Browse All!</Link>
      </div>
    )
  }
})

module.exports = connector(Landing)
