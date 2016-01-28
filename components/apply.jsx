var React = require('react');
var HeroUnit = require('./hero-unit.jsx');

module.exports = React.createClass({
  render: function() {
    return (
      <div className="apply">
        <HeroUnit className="apply-hero-unit" image="/assets/apply.jpg">
          <h2>Apply Now</h2>
          <div className="horizontal-rule"></div>
          <h4>We are an inclusive program and seek Fellows that reflect the diversity of the communities we serve. We encourage unique contributors with varied backgrounds to apply; if you feel your perspective is underrepresented in technology, we want to hear from you.</h4>
          <div>
            <a href="" className="button">apply to become a fellow</a>
          </div>
          <div className="fine-print">Deadline 11:59pm PST March 20, 2016</div>
        </HeroUnit>
      </div>
    );
  }
});
