var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

module.exports = React.createClass({
  render: function() {
    return (
      <div className="fellows-header">
        <div className="nav-items">
          <div className="nav-link-container">
            <Link to="/open-web-fellows/">Overview</Link>
          </div>
          <div className="nav-link-container">
            <Link to="/open-web-fellows/info">Info</Link>
          </div>
          <div className="nav-link-container">
            <Link to="/open-web-fellows/fellows">Fellows</Link>
          </div>
        </div>
      </div>
    );
  }
});
