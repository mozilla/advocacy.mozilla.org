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
          <p className="intro">{this.context.intl.formatMessage({id: 'new_intro'})}</p>
          <div>
            <a href={"/" + locale + "/encrypt/"} className="button">{this.context.intl.formatMessage({id: 'learn_more'})}</a>
          </div>
        </HeroUnit>
        <div className="page">
          <ContentContainer className="home-page-title center-align">
            <h2>{this.context.intl.formatMessage({id: 'home_header'})}</h2>
            <p className="intro">{this.context.intl.formatMessage({id: 'home_intro'})}</p>
          </ContentContainer>
          <ContentContainer className="home-page-content grey center-align slant reverse flat-bottom">
            <HomePageItem
              alt={this.context.intl.formatMessage({id: 'activism_alt'})}
              src1x="/assets/digital-tools-for-activism.jpg"
              src2x="/assets/digital-tools-for-activism@2x.jpg"
              label={this.context.intl.formatMessage({id: 'activism_label'})}
              buttonHref="https://github.com/mozilla/toolsforactivism"
              buttonLabel={this.context.intl.formatMessage({id: 'activism_button'})}
            >
              {this.context.intl.formatMessage({id: 'activism_description'})}
            </HomePageItem>
            <HomePageItem
              alt={this.context.intl.formatMessage({id: 'fellows_alt'})}
              src1x="/assets/home-fellows.jpg"
              src2x="/assets/home-fellows@2x.jpg"
              label={this.context.intl.formatMessage({id: 'fellows_label'})}
              buttonHref="http://mozilla.github.io/content/open-web-fellows-report/#introduction"
              buttonLabel={this.context.intl.formatMessage({id: 'fellows_button'})}
            >
              {this.context.intl.formatMessage({id: 'fellows_description'})}
            </HomePageItem>
            <HomePageItem
              alt={this.context.intl.formatMessage({id: 'freedom_alt'})}
              src1x="/assets/home-freedom.jpg"
              src2x="/assets/home-freedom@2x.jpg"
              label={this.context.intl.formatMessage({id: 'freedom_label'})}
              buttonHref="https://blog.mozilla.org/netpolicy/2015/06/02/mozilla-applauds-u-s-senates-passage-of-the-usa-freedom-act/"
              buttonLabel={this.context.intl.formatMessage({id: 'freedom_button'})}
            >
              {this.context.intl.formatMessage({id: 'freedom_description'})}
            </HomePageItem>
            <HomePageItem
              alt={this.context.intl.formatMessage({id: 'policy_alt'})}
              src1x="/assets/home-policy.jpg"
              src2x="/assets/home-policy@2x.jpg"
              label={this.context.intl.formatMessage({id: 'policy_label'})}
              buttonHref="https://blog.mozilla.org/netpolicy/"
              buttonLabel={this.context.intl.formatMessage({id: 'policy_button'})}
            >
              {this.context.intl.formatMessage({id: 'policy_description'})}
            </HomePageItem>
          </ContentContainer>
        </div>
        <Footer/>
      </div>
    );
  }
});
