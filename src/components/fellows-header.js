var React = require(`react`);
var StickyContainer  = require(`./sticky-container.js`);
var Router = require(`react-router`);
var Link = Router.Link;

module.exports = React.createClass({
  contextTypes: {
    intl: React.PropTypes.object
  },
  render: function() {
    var locale = this.context.intl.locale;
    return (
      <StickyContainer className="fellows-header" stickyFrom={() => 448}>
        <div className="fellow-header-overlay"></div>
        <div className="nav-items">
          <div className="nav-link-container overview-link">
            <Link to={"/" + locale + "/open-web-fellows/"}>{this.context.intl.formatMessage({id: 'overview'})}</Link>
          </div>
          <div className="nav-link-container info-link">
            <Link to={"/" + locale + "/open-web-fellows/info"}>{this.context.intl.formatMessage({id: 'info'})}</Link>
          </div>
          <div className="nav-link-container current-fellows-link">
            <Link to={"/" + locale + "/open-web-fellows/fellows"}>{this.context.intl.formatMessage({id: 'fellows'})}</Link>
          </div>
        </div>
      </StickyContainer>
    );
  }
});
