var React = require('react');
var Footer = require('../../components/footer.jsx');
var Header = require('../../components/header.jsx');
var HeroUnit = require('../../components/hero-unit.jsx');
var FellowsHeader = require('../../components/fellows-header.jsx');
module.exports = React.createClass({
  render: function() {
    return (
      <div>
        <Header></Header>
        <HeroUnit></HeroUnit>
        <FellowsHeader></FellowsHeader>
        info
        <Footer></Footer>
      </div>
    );
  }
});
