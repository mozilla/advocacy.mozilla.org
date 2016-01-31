var React = require('react');
var Footer = require('../components/footer.jsx');
var Header = require('../components/header.jsx');
var HeroUnit = require('../components/hero-unit.jsx');
var ContentContainer = require('../components/content-container.jsx');
var ImageTag = require('../components/imagetag.jsx');

var HomePageItem = React.createClass({
  render: function() {
    return (
      <div className="home-page-item-container">
        <div><ImageTag alt={this.props.alt} width={460} src1x={this.props.src1x} src2x={this.props.src2x}/></div>
        <div className="home-page-item">
          <h3>{this.props.label}</h3>
          <div className="home-page-item-text">
            <p>{this.props.children}</p>
          </div>
          <div>
            <a className="button" href={this.props.buttonHref}>{this.props.buttonLabel}</a>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = React.createClass({
  render: function() {
    return (
      <div className="home-page">
        <Header/>
        <HeroUnit className="home-page-hero-unit" >
           <h2>We Are Building a Global Movement to Protect the Free and Open Web</h2>
            <p className="intro">We believe the Internet is at its best as a global public resource, open and accessible to all. We also believe a healthy Internet requires an active, global community. mozilla Advocacy brings together individuals from around the world to educate on and fight for privacy, inclusion and literacy online.</p>
        </HeroUnit>
        <div className="page">
          <ContentContainer className="grey center-align">
            <HomePageItem
              src1x="/assets/home-neutrality.jpg"
              src2x="/assets/home-neutrality@2x.jpg"
              label="Net Neutrality"
              buttonHref="https://www.youtube.com/watch?v=I-UPyuW5j9o&feature=youtu.be"
              buttonLabel="watch video"
            >
              In 2015, we fought to keep the Internet free of fast lanes, slow lanes and corporate control. Our community petitioned Congress and made a difference.
            </HomePageItem>
            <HomePageItem
              src1x="/assets/home-fellows.jpg"
              src2x="/assets/home-fellows@2x.jpg"
              label="Open Web Fellows"
              buttonHref="https://advocacy.mozilla.org/open-web-fellows/"
              buttonLabel="learn more"
            >
              The Open Web Fellows program places the best emerging technology talent at civil society organizations around the globe. As threats to digital freedom proliferate, it's critical to have capable leaders.
            </HomePageItem>
            <HomePageItem
              src1x="/assets/home-freedom.jpg"
              src2x="/assets/home-freedom@2x.jpg"
              label="USA FREEDOM Act"
              buttonHref="https://blog.mozilla.org/netpolicy/2015/06/02/mozilla-applauds-u-s-senates-passage-of-the-usa-freedom-act/"
              buttonLabel="read post"
            >
              Mass Surveillance is a threat to privacy and trust online. Our community fought for the successful passage of the USA FREEDOM Act, a first step toward reforming mass surveillance.
            </HomePageItem>
            <HomePageItem
              src1x="/assets/home-policy.jpg"
              src2x="/assets/home-policy@2x.jpg"
              label="Net Policy Blog"
              buttonHref="https://blog.mozilla.org/netpolicy/"
              buttonLabel="read post"
            >
              Mozilla's team of policy experts and engineers are fighting for a free and open Internet. Read the latest developments and news on Our Net Policy blog.
            </HomePageItem>
          </ContentContainer>
        </div>
        <Footer/>
      </div>
    );
  }
});
