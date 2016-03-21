var React = require(`react`);
var HeroUnit = require(`./hero-unit.jsx`);
var Router = require(`react-router`);
var Link = Router.Link;

module.exports = React.createClass({
  render: function() {
    var description = `Thank you to everyone who applied. We will be contacting candidates directly in mid-April and announcing 2016 fellows in June.`;
    var cta = null;
    if ( this.props.version === `full` ) {
      description += ` If you’re interested in what current fellows are doing, please visit our fellows page.`;
      cta = (
        <div>
          <Link to="/open-web-fellows/fellows" className="button">Fellows</Link>
        </div>
      );
    }

    return (
      <div className="apply">
        <HeroUnit className="apply-hero-unit" image="/assets/apply.jpg">
          <h2>Application Closed</h2>
          <div className="horizontal-rule"></div>
          <h4>{description}</h4>
          {cta}
        </HeroUnit>
      </div>
    );
  }
});
