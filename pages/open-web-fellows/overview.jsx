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

var PlanetContent = React.createClass({
  render: function() {
    return (
      <div>Planet Image</div>
    );
  }
});

var Organization = React.createClass({
  render: function() {
    return (
      <div>Organization</div>
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
        <div className="content-container grey">
          <h2>Who can become a Fellow?</h2>
          <div className="half">
            <p>It could be you! Broadly speaking, we are looking for makers – those who see a problem in the world and can solve it through technology or media. The right candidate may bring specialities in design, development, storytelling, research and policy analysis, and should be comfortable performing as a technologist, a tinkerer, and a curious contributor to the fellowship program. <b>You do not need to have previous experience with Internet advocacy, policy or activism.</b> A lot of campaign design, community organizing, education, and</p>
          </div>
          <div className="half">
            <p>coalition building happen through teamwork and skills like data visualization and participatory learning. You can be at any stage in your career, provided you are open to learning.</p>
            <p>We are an international program with host organizations around the world; fellows will be placed in Canada, Chile, Kenya, the European Union, and the United States. We assist fellows with visa applications for working and traveling during the fellowship.</p>
          </div>
        </div>
        <PlanetContent/>
        <div className="content-container">
          <h2>Host Organizations</h2>
          <p>Each year, fellows spend 10 months embedded at leading policy & advocacy organizations dedicated to safeguarding the open Internet as a global public resource. Fellows are based in the town of their host organization unless special circumstances dictate otherwise. Read the <a href="#">blog post</a> to find out what host organizations are looking for. The 2016 host organizations are:</p>
        </div>
        <div className="organization-row">
          <Organization
            imgSrc=""
            linkTitle="Nairobi, Kenya"
            linkLoation=""
          />
          <Organization
            imgSrc=""
            linkTitle="Toronto, Canada"
            linkLoation=""
          />
          <Organization
            imgSrc=""
            linkTitle="New York, NY"
            linkLoation=""
          />
          <Organization
            imgSrc=""
            linkTitle="New York, NY"
            linkLoation=""
          />
        </div>
        <div className="organization-row">
          <Organization
            imgSrc=""
            linkTitle="Santiago, Chile"
            linkLoation=""
          />
          <Organization
            imgSrc=""
            linkTitle="Brussels, Belgium"
            linkLoation=""
          />
          <Organization
            imgSrc=""
            linkTitle="San Francisco, CA"
            linkLoation=""
          />
          <Organization
            imgSrc=""
            linkTitle="London, UK"
            linkLoation=""
          />
        </div>
        <HeroUnit></HeroUnit>
        <Footer/>
      </div>
    );
  }
});
