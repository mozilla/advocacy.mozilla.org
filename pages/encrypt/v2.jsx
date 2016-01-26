var React = require('react');
var Footer = require('../../components/footer.jsx');
var Header = require('../../components/header.jsx');

module.exports = React.createClass({
  render: function() {
    return (
      <div>
        <Header></Header>
        V2
        <Footer></Footer>
      </div>
    );
  }
});
