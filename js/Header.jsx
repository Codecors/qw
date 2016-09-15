const React = require('react')
const { Link, hashHistory } = require('react-router')
const { func, bool, string } = React.PropTypes
const { connector } = require('./Store')

const Header = React.createClass({
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
    let utilSpace
    if (this.props.showSearch) {
      utilSpace = (
        <form onSubmit={this.goToSearch}>
          <input onChange={this.handleSearchTermEvent} value={this.props.searchTerm} className='search' type='text' placeholder='Search' />
        </form>
      )
    } else {
      utilSpace = <input onChange={this.handleSearchTermEvent} value={this.props.searchTerm} className='search' type='text' placeholder='Search' />
    }
    return (
      <header className='header'>
        <h1 className='brand'>
          <Link to='/' className='brand-link'>
            svideo
          </Link>
        </h1>
        {utilSpace}
      </header>
    )
  }
})

module.exports = connector(Header)
