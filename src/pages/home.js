var React = require(`react`);
var Footer = require(`../components/footer.js`);
var Header = require(`../components/header.js`);
var HeroUnit = require(`../components/hero-unit.js`);
var ContentContainer = require(`../components/content-container.js`);
var ImageTag = require(`../components/imagetag.js`);

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
  contextTypes: {
    intl: React.PropTypes.object
  },
  render: function() {
    var locale = this.context.intl.locale;
    return (
      <div className="home-page">
        <Header/>
        <HeroUnit className="home-page-hero-unit">
          <ImageTag alt="encrypt banner image" width={790} src1x="/assets/encrypt/encrypt.svg"/>
          <p className="intro">Your online privacy depends on encryption. Learn more about how encryption works, why it's essential to a strong Web, and why it's worth protecting.</p>
          <div>
            <a href={"/" + locale + "/encrypt/"} className="button">learn more</a>
          </div>
        </HeroUnit>
        <div className="page">
          <ContentContainer className="home-page-title center-align">
            <h2>{this.context.intl.formatMessage({id: 'home_header'})}</h2>
            <p className="intro">{this.context.intl.formatMessage({id: 'home_intro'})}</p>
          </ContentContainer>
          <ContentContainer className="home-page-content grey center-align slant reverse flat-bottom">
            <HomePageItem
              alt="net neutrality image"
              src1x="/assets/home-neutrality.jpg"
              src2x="/assets/home-neutrality@2x.jpg"
              label="Net Neutrality"
              buttonHref="https://www.youtube.com/watch?v=I-UPyuW5j9o&feature=youtu.be"
              buttonLabel="watch video"
            >
              In 2015, we fought to keep the Internet free of fast lanes, slow lanes and corporate control. Our community petitioned Congress and made a difference.
            </HomePageItem>
            <HomePageItem
              alt="open web fellows image"
              src1x="/assets/home-fellows.jpg"
              src2x="/assets/home-fellows@2x.jpg"
              label="Open Web Fellows"
              buttonHref={"/" + locale + "/open-web-fellows/"}
              buttonLabel="learn more"
            >
              The Open Web Fellows program places the best emerging technology talent at civil society organizations around the globe. As threats to digital freedom proliferate, it's critical to have capable leaders.
            </HomePageItem>
            <HomePageItem
              alt="usa freedom act image"
              src1x="/assets/home-freedom.jpg"
              src2x="/assets/home-freedom@2x.jpg"
              label="USA FREEDOM Act"
              buttonHref="https://blog.mozilla.org/netpolicy/2015/06/02/mozilla-applauds-u-s-senates-passage-of-the-usa-freedom-act/"
              buttonLabel="read post"
            >
              Mass Surveillance is a threat to privacy and trust online. Our community fought for the successful passage of the USA FREEDOM Act, a first step toward reforming mass surveillance.
            </HomePageItem>
            <HomePageItem
              alt="net policy blog image"
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
