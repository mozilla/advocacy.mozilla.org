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
        <Header subhead="A Guide to Make Shopping for Connected Gifts Safer, Easier, and Way More Fun" title={false}/>

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
            <p>
              <FormattedHTMLMessage id="info_blob"/>
            </p>
          </section>
          <Footer/>
        </div>
      </div>
    );
  }
});

module.exports = BuyersGuide;
