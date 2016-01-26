var React = require('react');
var Footer = require('../../components/footer.jsx');
var Header = require('../../components/header.jsx');

module.exports = React.createClass({
  render: function() {
    return (
      <div>
        <Header></Header>
        Default
        <Footer></Footer>
      </div>
    );
  }
});
