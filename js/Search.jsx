const React = require('react')
const ShowCard = require('./ShowCard')
const { arrayOf, object, string } = React.PropTypes
const { connector } = require('./Store')
const Header = require('./Header')
const Search = React.createClass({
  propTypes: {
    searchTerm: string,
    shows: arrayOf(object)
  },
  render () {
    return (
      <div className='container'>
        <Header />
        <div className='shows'>
          {this.props.shows
            .filter((show) => `${show.title} ${show.description}`.toUpperCase().indexOf(this.props.searchTerm.toUpperCase()) >= 0)
            .map((show) => (
              <ShowCard {...show} key={show.imdbID} />
          ))}
        </div>
      </div>
    )
  }
})

module.exports = connector(Search)
