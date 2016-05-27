var React = require(`react`);
var Router = require(`react-router`);
var Link = Router.Link;
var ImageTag = require(`./imagetag.js`);

module.exports = React.createClass({
  contextTypes: {
    intl: React.PropTypes.object
  },
  render: function() {
    var locale = this.context.intl.locale;
    var logoImage = this.props.logoImage || `/assets/logo-advocacy.svg`;

    return (
      <div className="header">
        <div className="header-content">
          <div className="nav-home">
            <Link to={"/" + locale + "/"}>
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
              <Link to={"/" + locale + "/"}>{this.context.intl.formatMessage({id: 'home'})}</Link>
            </div>
            <div className="nav-link-container fellows-link">
              <Link to={"/" + locale + "/open-web-fellows/"}>{this.context.intl.formatMessage({id: 'open_web_fellows'})}</Link>
            </div>
            <div className="nav-link-container blog-link">
              <a href="https://blog.mozilla.org/netpolicy/">{this.context.intl.formatMessage({id: 'blog'})}</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
});
