webpackJsonp([1],{

/***/ 248:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var React = __webpack_require__(1);

	var _require = __webpack_require__(163);

	var Link = _require.Link;
	var hashHistory = _require.hashHistory;

	var _require2 = __webpack_require__(226);

	var connector = _require2.connector;
	var _React$PropTypes = React.PropTypes;
	var func = _React$PropTypes.func;
	var bool = _React$PropTypes.bool;
	var string = _React$PropTypes.string;


	var Landing = React.createClass({
	  displayName: 'Landing',

	  propTypes: {
	    setSearchTerm: func,
	    showSearch: bool,
	    searchTerm: string
	  },
	  handleSearchTermEvent: function handleSearchTermEvent(e) {
	    this.props.setSearchTerm(e.target.value);
	  },
	  goToSearch: function goToSearch(e) {
	    hashHistory.push('search');
	    e.preventDefault();
	  },
	  render: function render() {
	    return React.createElement(
	      'div',
	      { className: 'home-info' },
	      React.createElement(
	        Link,
	        { to: '/search', className: 'browse-all' },
	        'or Browse All!'
	      )
	    );
	  }
	});

	module.exports = connector(Landing);

/***/ }

});