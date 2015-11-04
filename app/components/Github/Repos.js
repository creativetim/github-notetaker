var React = require('react');

var Repos = React.createClass({
	propTypes: {
		username: React.PropTypes.string.isRequired,
		repos: React.PropTypes.array.isRequired
	},
	render: function(){
    return (<div>
      <h2>Repos</h2>
      <p>Username: {this.props.username}</p>
      <p>Repos: One</p></div>
    )
	}
});

module.exports = Repos;