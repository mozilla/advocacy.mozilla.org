var React = require(`react`);
var HeroUnit = require(`../hero-unit.js`);
var Router = require(`react-router`);
var Link = Router.Link;

module.exports = React.createClass({

  PropTypes: {
    headline: React.PropTypes.string,
    description: React.PropTypes.string,
    cta: React.PropTypes.shape({
      label: React.PropTypes.string,
      link: React.PropTypes.string
    })
  },
  render: function() {

    let cta = (
      <div>
        <a href={this.props.cta.link} className="button">{this.props.cta.label}</a>
      </div>
    )

    return (
      <div className="apply">
        <HeroUnit className="apply-hero-unit" image="/assets/apply.jpg">
          <h2>{this.props.title}</h2>
          <div className="horizontal-rule"></div>
          <h4>{this.props.description}</h4>
          {cta}
        </HeroUnit>
      </div>
    );
  }
});
