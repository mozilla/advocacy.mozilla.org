var React = require('react');
var Footer = require('../components/footer.jsx');
var Header = require('../components/header.jsx');
var HeroUnit = React.createClass({
  render: function() {
    return (
      <div>
        hero unit
      </div>
    );
  }
});

module.exports = React.createClass({
  render: function() {
    return (
      <div>
        <Header></Header>
        <HeroUnit></HeroUnit>
        home
        <Footer></Footer>
      </div>
    );
  }
});
