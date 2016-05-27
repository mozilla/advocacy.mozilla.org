var React = require(`react`);
var HeroUnit = require(`./hero-unit.js`);
var Router = require(`react-router`);
var Link = Router.Link;

module.exports = React.createClass({
  contextTypes: {
    intl: React.PropTypes.object
  },
  render: function() {
    var locale = this.context.intl.locale;
    var description = this.context.intl.formatMessage({id: 'apply_desc'});
    var cta = null;
    if ( this.props.version === `full` ) {
      description = this.context.intl.formatMessage({id: 'apply_desc_more'});
      cta = (
        <div>
          <Link to={"/" + locale + "/open-web-fellows/fellows"} className="button">{this.context.intl.formatMessage({id: 'fellows'})}</Link>
        </div>
      );
    }

    return (
      <div className="apply">
        <HeroUnit className="apply-hero-unit" image="/assets/apply.jpg">
          <h2>{this.context.intl.formatMessage({id: 'application_closed'})}</h2>
          <div className="horizontal-rule"></div>
          <h4>{description}</h4>
          {cta}
        </HeroUnit>
      </div>
    );
  }
});
