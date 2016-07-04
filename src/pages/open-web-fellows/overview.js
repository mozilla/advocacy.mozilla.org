var React = require(`react`);
var Footer = require(`../../components/footer.js`);
var Header = require(`../../components/header.js`);
var HeroUnit = require(`../../components/hero-unit.js`);
var Apply = require(`../../components/apply.js`);
var FellowsHeader = require(`../../components/fellows-header.js`);
var ImageTag = require(`../../components/imagetag.js`);
var ContentContainer = require(`../../components/content-container.js`);

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
        <ImageTag height={101} width={101} alt={this.props.alt} src1x={this.props.src1x} src2x={this.props.src2x}/>
        {this.props.children}
      </div>
    );
  }
});

var PlanetContent = React.createClass({
  render: function() {
    return (
      <div className="globe-image-container">
        <ImageTag className="globe-image desktop" alt="globe" width={763} height={441} src1x="/assets/icon-globe.png" src2x="/assets/icon-globe@2x.png"/>
        <ImageTag className="globe-image mobile" alt="globe" width={271} height={271} src1x="/assets/icon-globe-mobile.png" src2x="/assets/icon-globe-mobile@2x.png"/>
      </div>
    );
  }
});

var Organization = React.createClass({
  render: function() {
    return (
      <div className="organization">
        <a href={this.props.linkLocation}>
          <img className="organization-image" width={this.props.width} height={this.props.height} src={this.props.imgSrc}/>
          <div className="organization-label"><i className="fa fa-map-marker"></i>{this.props.linkTitle}</div>
        </a>
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
        </HeroUnit>
        <FellowsHeader/>
        <div className="page">
          <ContentContainer>
            <h2>About the Program</h2>
            <p className="intro">The Open Web Fellows program -- a collaboration between <a href="http://www.fordfoundation.org/">Ford Foundation</a> and Mozilla – is an international leadership initiative that brings together technology talent and civil society organizations to advance and protect the open Web. <b>Specifically</b>, the goals of the Open Web Fellows programs are to:</p>
            <IconsContainer>
              <Icon alt="policy icon" src1x="/assets/icons/icon-policy.png" src2x="/assets/icons/icon-policy@2x.png">
                Increase public awareness and understanding of Internet policy issues.
              </Icon>
              <Icon alt="paths icon" src1x="/assets/icons/icon-paths.png" src2x="/assets/icons/icon-paths@2x.png">
                Support career paths in the Internet policy and advocacy sector.
              </Icon>
              <Icon alt="support icon" src1x="/assets/icons/icon-support.png" src2x="/assets/icons/icon-support@2x.png">
                Celebrate and support the vibrant network of Internet advocacy organizations.
              </Icon>
            </IconsContainer>
          </ContentContainer>
          <ContentContainer>
            <h2>Expectations of Fellows</h2>
            <p>Champion the open internet in collaboration with...Lorem ipsum dolor sit amet, consectetur adipiscing elit. Negat enim summo bono afferre incrementum diem. At iste non dolendi status non vocatur voluptas. Polycratem Samium felicem appellabant. Inde sermone vario [redacted] illa a Dipylo stadia confecimus. Duo Reges: constructio interrete. Tum ille timide vel potius verecunde: Facio, inquit. Quod autem meum munus dicis non equidem recuso, sed te adiungo socium. Sed ad bona praeterita redeamus. Eadem nunc mea adversum te oratio est. Iam id ipsum absurdum, maximum malum neglegi.</p>
          </ContentContainer>
          <ContentContainer>
            <h2>Host Organizations</h2>
            <p className="center-align">Each year, fellows spend 10 months embedded at leading policy & advocacy organizations dedicated to safeguarding the open Internet as a global public resource. Fellows are based in the town of their host organization unless special circumstances dictate otherwise. Read the <a href="https://blog.mozilla.org/netpolicy/2016/02/01/2016-open-web-fellows-program-host-organizations/">blog post</a> to find out what host organizations are looking for. The 2016 host organizations are:</p>
            <div className="organization-row">
              <Organization
                imgSrc="/assets/logo-cipit.svg"
                linkTitle="Nairobi, Kenya"
                width="155" height="80"
                linkLocation="https://www.cipit.org/"
              />
              <Organization
                imgSrc="/assets/logo-citizenlab.svg"
                linkTitle="Toronto, Canada"
                width="180" height="80"
                linkLocation="https://citizenlab.org/"
              />
              <Organization
                imgSrc="/assets/logo-colorofchange.svg"
                linkTitle="New York, NY"
                width="200" height="80"
                linkLocation="http://colorofchange.org/"
              />
              <Organization
                imgSrc="/assets/logo-datasociety.svg"
                linkTitle="New York, NY"
                width="180" height="80"
                linkLocation="http://www.datasociety.net/"
              />
              <Organization
                imgSrc="/assets/logo-derechos.svg"
                linkTitle="Santiago, Chile"
                width="155" height="80"
                linkLocation="https://www.derechosdigitales.org/"
              />
              <Organization
                imgSrc="/assets/logo-edri.svg"
                linkTitle="Brussels, Belgium"
                width="155" height="80"
                linkLocation="https://edri.org/"
              />
              <Organization
                imgSrc="/assets/logo-freedomofthepress.svg"
                linkTitle="San Francisco, CA"
                width="155" height="80"
                linkLocation="https://freedom.press/"
              />
              <Organization
                imgSrc="/assets/logo-privacyinternational.svg"
                linkTitle="London, UK"
                width="155" height="80"
                linkLocation="https://www.privacyinternational.org/"
              />
            </div>
          </ContentContainer>
          <ContentContainer>
            <h2>Stipend and Financial Benefits</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nonne videmus quanta perturbatio rerum omnium consequatur, quanta confusio? Mihi, inquam, qui te id ipsum rogavi? An vero, inquit, quisquam potest probare, quod perceptfum, quod. Duo Reges: constructio interrete. Ergo hoc quidem apparet, nos ad agendum esse natos. Sic, et quidem diligentius saepiusque ista loquemur inter nos agemusque communiter. Teneo, inquit, finem illi videri nihil dolere. Idem iste, inquam, de voluptate quid sentit?</p>
          </ContentContainer>
          <ContentContainer className="grey">
            <div className="ford-logo">
              <div>
                <ImageTag height={50} width={198} alt="ford logo" src1x="/assets/logo-ford.svg"/>
              </div>
              <div className="ford-logo-container">
                <div className="supported-by">SUPPORTED BY</div>
                <p>The Ford Foundation works around the world on the frontlines of social change to fight inequality, strengthen democratic values, reduce poverty and injustice, and advance human achievement. Learn more at <a href="https://www.fordfoundation.org/">FordFoundation.org</a></p>
              </div>
            </div>
          </ContentContainer>
        </div>
        <Footer/>
      </div>
    );
  }
});
