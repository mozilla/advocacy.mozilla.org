var React = require('react');
var Footer = require('../../components/footer.jsx');
var Header = require('../../components/header.jsx');
var HeroUnit = require('../../components/hero-unit.jsx');
var FellowsHeader = require('../../components/fellows-header.jsx');

var IconContainer = React.createClass({
  render: function() {
    return (
      <div className="icon-container">
        {this.props.children}
      </div>
    );
  }
});

var Icon = React.createClass({
  render: function() {
    return (
      <div className="icon">
        {this.props.children}
      </div>
    );
  }
});

module.exports = React.createClass({
  render: function() {
    return (
      <div>
        <Header/>
        <HeroUnit></HeroUnit>
        <FellowsHeader/>
        <div className="content-container">
          <p>A collaboration between <a href="#">Ford Foundation</a> and Mozilla – is an international leadership initiative that brings together technology talent and civil society organizations to advance and protect the open Web, the goals of the Open Web Fellows programs are to:</p>
          <IconContainer>
            <Icon imgSrc="">
              Increase public awareness and understanding of Internet policy issues.
            </Icon>
            <Icon imgSrc="">
              Support career paths in the Internet policy and advocacy sector
            </Icon>
            <Icon imgSrc="">
              Celebrate and support the vibrant network of Internet advocacy organizations
            </Icon>
          </IconContainer>
        </div>
        <div className="content-container">

        </div>
        <Footer/>
      </div>
    );
  }
});
