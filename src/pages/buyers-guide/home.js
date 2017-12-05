import React from 'react';
import Footer from '../../components/buyers-guide/footer.js';
import Header from '../../components/buyers-guide/header.js';
import { FormattedHTMLMessage } from 'react-intl';
import { Link } from 'react-router';
import reactGA from 'react-ga';

var Category = React.createClass({
  scrollToTop: function() {
    window.scrollTo(0, 0);
  },
  render: function() {
    var linkClassName = "";
    const scrollY = this.props.scrollY;
    const offsetTop = this.props.offsetTop;
    const windowHeight = this.props.windowHeight;
    const windowHalf = windowHeight/2;
    const index = this.props.index;
    if (windowHeight !== 0) {
      linkClassName = "category-top";
    }
    if ((index * windowHeight) + offsetTop <= scrollY + windowHalf && (index * windowHeight) + offsetTop >= scrollY - windowHalf) {
      linkClassName += " show";
    }
    return (
      <div className="home-category-container">
        <div className={linkClassName}>
          <Link onClick={this.scrollToTop} to={this.props.href}>
            <h2 className="playfair">{this.props.header}</h2>
            <p className="playfair">{this.props.category}</p>
          </Link>
        </div>
        <div className="category-bottom">
          <div className="image-container" style={{backgroundImage: "url(/assets/buyers-guide/" + this.props.image + ")"}}></div>
        </div>
      </div>
    );
  }
});

var BuyersGuide = React.createClass({
  contextTypes: {
    intl: React.PropTypes.object
  },
  getInitialState: function() {
    return {
      scrollY: 0,
      offsetTop: 0,
      windowHeight: 0
    };
  },
  onScroll: function() {
    this.setState({
      scrollY: window.scrollY,
      offsetTop: this.categoriesContainer.offsetTop,
      windowHeight: window.innerHeight
    });
  },
  componentDidMount: function() {
    this.onScroll();
    window.addEventListener("scroll", this.onScroll);
  },
  componentWillUnmount: function() {
    window.removeEventListener("scroll", this.onScroll);
  },
  shareFbClick: function() {
    reactGA.event({
      category: "Social",
      action: "Home clicked Share Button",
      label: "Facebook"
    });
    document.querySelector("#share-progress-fb a").click();
  },
  shareTwClick: function() {
    reactGA.event({
      category: "Social",
      action: "Home clicked Share Button",
      label: "Twitter"
    });
    document.querySelector("#share-progress-tw a").click();
  },
  shareEmClick: function() {
    reactGA.event({
      category: "Social",
      action: "Home clicked Share Button",
      label: "Email"
    });
    document.querySelector("#share-progress-em a").click();
  },
  donateClicked: function() {
    reactGA.event({
      category: "Button",
      action: "Home Clicked Donate Button",
      label: "Fundraising"
    });
  },
  render: function() {
    var categoriesContainerClassName = "categories-container";
    var headerClassName = "header-section";
    var footerClassName = "footer";
    const locale = this.context.intl.locale;
    const scrollY = this.state.scrollY;
    const offsetTop = this.state.offsetTop;
    const windowHeight = this.state.windowHeight;

    return (
      <div className="buyers-guide buyers-guide-home">
        <Header title={false}/>
        <section className={headerClassName}>
          <header className="red header-image">
            <div className="center-header">
              <h1 className="asterix playfair">
                {this.context.intl.formatMessage({id: 'privacy_not_included'})}
              </h1>
              <p className="playfair">
                {this.context.intl.formatMessage({id: 'hero_unit_paragraph'})}
              </p>
              <a className="itallic playfair wwmt" href="/privacynotincluded/why-we-made">{this.context.intl.formatMessage({id: 'wwmt_main_title'})}</a>
            </div>
            <div className="more-arrow">
              <img className="more-arrow" src="/assets/arrow-icon-white.png"/>
            </div>
          </header>
          <div className="content-container">
            <div className="content">
              <p className="playfair fancy-letter">
                <FormattedHTMLMessage id="thats_why"/>
              </p>
              <div className="start-show playfair">
                <h2>{this.context.intl.formatMessage({id: 'see_the_guide'})}</h2>
                <p className="itallic playfair">
                  {this.context.intl.formatMessage({id: 'swipe_or_scroll'})}
                </p>
                <div className="center-line"></div>
              </div>
            </div>
          </div>
        </section>

        <div ref={(input) => { this.categoriesContainer = input; }} className={categoriesContainerClassName}>
          <Category
            scrollY={scrollY}
            offsetTop={offsetTop}
            windowHeight={windowHeight}
            index={0}
            category={this.context.intl.formatMessage({id: 'cat_title_toys_home'})}
            header={this.context.intl.formatMessage({id: 'cat_desc_toys'})}
            href={"/" + locale + "/privacynotincluded/category/toys"}
            image={"01-toys-background.jpg"}
          />
          <Category
            scrollY={scrollY}
            offsetTop={offsetTop}
            windowHeight={windowHeight}
            index={1}
            category={this.context.intl.formatMessage({id: 'cat_title_gameconsoles_home'})}
            header={this.context.intl.formatMessage({id: 'cat_desc_gameconsoles'})}
            href={"/" + locale + "/privacynotincluded/category/gameconsoles"}
            image={"02-game-consoles.jpg"}
          />
          <Category
            scrollY={scrollY}
            offsetTop={offsetTop}
            windowHeight={windowHeight}
            index={2}
            category={this.context.intl.formatMessage({id: 'cat_title_homehubs_home'})}
            header={this.context.intl.formatMessage({id: 'cat_desc_homehubs'})}
            href={"/" + locale + "/privacynotincluded/category/homehubs"}
            image={"03-you-always-wanted-a-butler.jpg"}
          />
          <Category
            scrollY={scrollY}
            offsetTop={offsetTop}
            windowHeight={windowHeight}
            index={3}
            category={this.context.intl.formatMessage({id: 'cat_title_smarthomeaccessories_home'})}
            header={this.context.intl.formatMessage({id: 'cat_desc_smarthomeaccessories'})}
            href={"/" + locale + "/privacynotincluded/category/smarthomeaccessories"}
            image={"04-home-is-where-the-tech-is.jpg"}
          />
          <Category
            scrollY={scrollY}
            offsetTop={offsetTop}
            windowHeight={windowHeight}
            index={4}
            category={this.context.intl.formatMessage({id: 'cat_title_gadgetsgizmos_home'})}
            header={this.context.intl.formatMessage({id: 'cat_desc_gadgetsgizmos'})}
            href={"/" + locale + "/privacynotincluded/category/gadgetsgizmos"}
            image={"05-things-you-didnt-know-you-need.jpg"}
          />
          <Category
            scrollY={scrollY}
            offsetTop={offsetTop}
            windowHeight={windowHeight}
            index={5}
            category={this.context.intl.formatMessage({id: 'cat_title_healthexcercise_home'})}
            header={this.context.intl.formatMessage({id: 'cat_desc_healthexcercise'})}
            href={"/" + locale + "/privacynotincluded/category/healthexcercise"}
            image={"06-taking-care-of-me.jpg"}
          />
        </div>

        <div className={footerClassName}>
          <section className="donate-container">
            <p className="playfair">
              {this.context.intl.formatMessage({id: 'donate_cta'})}
            </p>
            <a onClick={this.donateClicked} href="https://donate.mozilla.org" className="donate-button">
              {this.context.intl.formatMessage({id: 'donate_now'})}
            </a>
          </section>
          <section className="red footer-image">
            <h2 className="playfair">
              {this.context.intl.formatMessage({id: 'best_to_you_and_yours'})}
            </h2>
            <p className="page-width itallic info-blob playfair">
              <FormattedHTMLMessage id="info_blob"/>
            </p>
            <p>{this.context.intl.formatMessage({id: 'share_this_page'})}</p>
            <div className="social-buttons">
              <button onClick={this.shareFbClick} className="social-button">
                <i className="fa fa-facebook fa-1x"></i>
              </button>
              <button onClick={this.shareTwClick} className="social-button">
                <i className="fa fa-twitter fa-1x"></i>
              </button>
              <button onClick={this.shareEmClick} className="social-button">
                <i className="fa fa-envelope fa-1x"></i>
              </button>
            </div>
          </section>
          <Footer/>
        </div>
      </div>
    );
  }
});

module.exports = BuyersGuide;
