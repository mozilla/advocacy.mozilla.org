var React = require('react');
var HeroUnit = require('./hero-unit.jsx');

module.exports = React.createClass({
  render: function() {
    return (
      <div className="apply">
        <HeroUnit image="/assets/apply.jpg"></HeroUnit>
      </div>
    );
  }
});
