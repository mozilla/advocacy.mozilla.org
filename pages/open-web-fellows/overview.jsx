var React = require('react');
var Footer = require('../../components/footer.jsx');
var Header = require('../../components/header.jsx');
var HeroUnit = require('../../components/hero-unit.jsx');
var Apply = require('../../components/apply.jsx');
var FellowsHeader = require('../../components/fellows-header.jsx');
var ContentContainer = require('../../components/content-container.jsx');

var IconsContainer = React.createClass({
  render: function() {
    return (
      <div className="icons-container">
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
      <div className="organization">
        <img width="155" height="80" src={this.props.imgSrc}/>
        <div><a href={this.props.linkLocation}><span className="location-icon"></span>{this.props.linkTitle}</a></div>
      </div>
    );
  }
});

module.exports = React.createClass({
  render: function() {
    return (
      <div className="overview-page">
        <Header/>
        <HeroUnit image="/assets/overview.jpg">
          <h1>Open Web Fellows Program</h1>
          <div>
            <a href="" className="button">apply now</a>
          </div>
        </HeroUnit>
        <FellowsHeader/>
        <div className="page">
          <ContentContainer>
            <p className="intro">A collaboration between <a href="#">Ford Foundation</a> and Mozilla – is an international leadership initiative that brings together technology talent and civil society organizations to advance and protect the open Web, the goals of the Open Web Fellows programs are to:</p>
            <IconsContainer>
              <Icon imgSrc="">
                Increase public awareness and understanding of Internet policy issues.
              </Icon>
              <Icon imgSrc="">
                Support career paths in the Internet policy and advocacy sector.
              </Icon>
              <Icon imgSrc="">
                Celebrate and support the vibrant network of Internet advocacy organizations.
              </Icon>
            </IconsContainer>
          </ContentContainer>
          <ContentContainer className="grey slant flat-top">
            <h2>Who can become a Fellow?</h2>
            <div className="row">
              <div className="half">
                <p>It could be you! Broadly speaking, we are looking for makers – those who see a problem in the world and can solve it through technology or media. The right candidate may bring specialities in design, development, storytelling, research and policy analysis, and should be comfortable performing as a technologist, a tinkerer, and a curious contributor to the fellowship program. <b>You do not need to have previous experience with Internet advocacy, policy or activism.</b> A lot of campaign design, community organizing, education, and</p>
              </div>
              <div className="half">
                <p>coalition building happen through teamwork and skills like data visualization and participatory learning. You can be at any stage in your career, provided you are open to learning.</p>
                <p>We are an international program with host organizations around the world; fellows will be placed in Canada, Chile, Kenya, the European Union, and the United States. We assist fellows with visa applications for working and traveling during the fellowship.</p>
              </div>
            </div>
            <PlanetContent/>
          </ContentContainer>
          <ContentContainer>
            <h2>Host Organizations</h2>
            <p className="center-align">Each year, fellows spend 10 months embedded at leading policy & advocacy organizations dedicated to safeguarding the open Internet as a global public resource. Fellows are based in the town of their host organization unless special circumstances dictate otherwise. Read the <a href="#">blog post</a> to find out what host organizations are looking for. The 2016 host organizations are:</p>
            <div className="organization-row">
              <Organization
                imgSrc="/assets/logo-cipit.svg"
                linkTitle="Nairobi, Kenya"
                linkLocation=""
              />
              <Organization
                imgSrc="/assets/logo-citizenlab.svg"
                linkTitle="Toronto, Canada"
                linkLocation=""
              />
              <Organization
                imgSrc="/assets/logo-colorofchange.svg"
                linkTitle="New York, NY"
                linkLocation=""
              />
              <Organization
                imgSrc="/assets/logo-datasociety.svg"
                linkTitle="New York, NY"
                linkLocation=""
              />
            </div>
            <div className="organization-row">
              <Organization
                imgSrc="/assets/logo-derechos.svg"
                linkTitle="Santiago, Chile"
                linkLocation=""
              />
              <Organization
                imgSrc="/assets/logo-edri.svg"
                linkTitle="Brussels, Belgium"
                linkLocation=""
              />
              <Organization
                imgSrc="/assets/logo-freedomofthepress.svg"
                linkTitle="San Francisco, CA"
                linkLocation=""
              />
              <Organization
                imgSrc="/assets/logo-privacyinternational.svg"
                linkTitle="London, UK"
                linkLocation=""
              />
            </div>
          </ContentContainer>
        </div>
        <Apply/>
        <Footer/>
      </div>
    );
  }
});
