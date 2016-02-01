var React = require('react');
var Router = require('react-router');
var Link = Router.Link;
var ImageTag = require('./imagetag.jsx');

module.exports = React.createClass({
  render: function() {
    var logoImage = this.props.logoImage || "/assets/logo-advocacy.svg";
    return (
      <div className="header">
        <div className="header-content">
          <div className="nav-home">
            <Link to="/">
              <div className="logo-fade">
                <ImageTag src1x="/assets/logo-mozilla.svg"
                  alt="advocacy logo"/>
              </div>
              <div>
                <ImageTag src1x={logoImage}
                  alt="advocacy logo"/>
              </div>
            </Link>
          </div>
          <div className="header-overlay"></div>
          <div className="nav-items">
            <div className="nav-link-container home-link">
              <Link to="/">Home</Link>
            </div>
            <div className="nav-link-container fellows-link">
              <Link to="/open-web-fellows/">Open Web Fellows</Link>
            </div>
            <div className="nav-link-container blog-link">
              <a href="https://blog.mozilla.org/netpolicy/">Blog</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
});
