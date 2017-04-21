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
          <div className="nav-link-container current-fellows-link">
            <Link to={"/" + locale + "/open-web-fellows/fellows2016"}>2016 Fellows</Link>
          </div>
          <div className="nav-link-container past-fellows-link">
            <Link to={"/" + locale + "/open-web-fellows/fellows2015"}>2015 Fellows</Link>
          </div>
          <div className="nav-link-container overview-link">
            <Link to={"/" + locale + "/open-web-fellows/overview"}>Overview</Link>
          </div>
          <div className="nav-link-container info-link">
            <a href="https://docs.google.com/document/d/1WLfmXOtIO4rtynR1pi6ekO0-NMjRFkVtLea3T8_KJ3o/">FAQ</a>
          </div>
        </div>
      </StickyContainer>
    );
  }
});
