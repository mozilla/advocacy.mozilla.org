import React from 'react';
import debounce from 'debounce';
import Footer from '../../components/buyers-guide/footer.js';
import Header from '../../components/buyers-guide/header.js';
import { FormattedHTMLMessage } from 'react-intl';
import { Link } from 'react-router';
import reactGA from 'react-ga';

var Swiper;
if (typeof window !== "undefined") {
  Swiper = require("swiper");
}

var Category = React.createClass({
  render: function() {
    return (
      <div className="swiper-slide">
        <Link to={this.props.href}>
          <h2 className="playfair">{this.props.category}</h2>
          <p className="playfair">{this.props.header}</p>
        </Link>
      </div>
    );
  }
});

var BuyersGuide = React.createClass({
  getInitialState: function() {
    return {
      galleryPosition: "bottom"
    };
  },
  contextTypes: {
    intl: React.PropTypes.object
  },
  onWheel: debounce(function(e) {
    if (this.state.galleryPosition !== "middle") {
      e.stopPropagation();
      // Wheel down
      if (e.deltaY > 0 && this.state.galleryPosition === "bottom") {
        if (this.headerInput.scrollTop === (this.headerInput.scrollHeight - this.headerInput.offsetHeight)) {
          this.slideUp();
        }
      }
      // Wheel up
      if (e.deltaY < 0 && this.state.galleryPosition === "top") {
        if (this.footerInput.scrollTop === 0) {
          this.slideDown();
        }
      }
    }
  }, 100, true),
  onKeyDown: function(e) {
    if (this.state.galleryPosition !== "middle") {
      e.stopPropagation();
      // Down key
      if (e.keyCode === 40 && this.state.galleryPosition === "bottom") {
        if (this.headerInput.scrollTop === (this.headerInput.scrollHeight - this.headerInput.offsetHeight)) {
          this.slideUp();
        }
      }
      // Up key
      if (e.keyCode === 38 && this.state.galleryPosition === "top") {
        if (this.footerInput.scrollTop === 0) {
          this.slideDown();
        }
      }
    }
  },
  onActiveIndexChange: function(swiper) {
    if (swiper.activeIndex === 0) {
      this.hideDown();
    }
    if (swiper.activeIndex === 7) {
      this.hideUp();
    }
  },
  onTopActiveIndexChange: function() {
    this.onActiveIndexChange(this.swiper);
  },
  onBottomActiveIndexChange: function() {
    this.onActiveIndexChange(this.swiperBottom);
  },
  componentDidMount: function() {
    this.swiper = new Swiper('.swiper-container-top', {
      direction: 'vertical',
      mousewheel: {enabled: true},
      keyboard: {enabled: true}
    });
    this.swiperBottom = new Swiper('.swiper-container-bottom', {
      direction: 'vertical',
      mousewheel: {enabled: true},
      effect: "fade"
    });

    this.swiper.controller.control = this.swiperBottom;
    this.swiperBottom.controller.control = this.swiper;

    this.swiper.on("activeIndexChange", this.onTopActiveIndexChange);
    this.swiperBottom.on("activeIndexChange", this.onBottomActiveIndexChange);
    window.addEventListener("wheel", this.onWheel, true);
    window.addEventListener("keydown", this.onKeyDown, true);
  },
  componentWillUnmount: function() {
    this.swiper.off("activeIndexChange", this.onTopActiveIndexChange);
    this.swiperBottom.off("activeIndexChange", this.onBottomActiveIndexChange);
    window.removeEventListener("wheel", this.onWheel, true);
    window.removeEventListener("keyDown", this.onKeyDown, true);
  },
  slideUp: function() {
    this.setState({
      galleryPosition: "middle"
    }, () => {
      this.swiper.slideTo(1);
    });
  },
  slideDown: function() {
    this.setState({
      galleryPosition: "middle"
    }, () => {
      this.swiper.slideTo(1);
    });
  },
  hideUp: function() {
    this.setState({
      galleryPosition: "top"
    });
  },
  hideDown: function() {
    this.setState({
      galleryPosition: "bottom"
    });
  },
  shareFbClick: function() {
    reactGA.event({
      category: "Social",
      action: "Clicked Share Button",
      label: "Facebook"
    });
    document.querySelector("#share-progress-fb a").click();
  },
  shareTwClick: function() {
    reactGA.event({
      category: "Social",
      action: "Clicked Share Button",
      label: "Twitter"
    });
    document.querySelector("#share-progress-tw a").click();
  },
  shareEmClick: function() {
    reactGA.event({
      category: "Social",
      action: "Clicked Share Button",
      label: "Email"
    });
    document.querySelector("#share-progress-em a").click();
  },
  render: function() {
    var categoriesContainerClassName = "categories-container";
    var headerClassName = "header-section";
    var footerClassName = "footer";
    const locale = this.context.intl.locale;
    if (this.state.galleryPosition === "bottom") {
      categoriesContainerClassName += " bottom";
      footerClassName += " bottom";
    } else if (this.state.galleryPosition === "top") {
      categoriesContainerClassName += " top";
      headerClassName += " top";
    } else if (this.state.galleryPosition === "middle") {
      headerClassName += " top";
      footerClassName += " bottom";
    }
    return (
      <div className="buyers-guide buyers-guide-home">
        <Header/>
        <section ref={(input) => {this.headerInput = input;}} className={headerClassName}>
          <header className="header-image">
            <div className="center-header">
              <h1 className="playfair">
                {this.context.intl.formatMessage({id: 'privacy_not_included'})}
              </h1>
              <p className="playfair">
                {this.context.intl.formatMessage({id: 'hero_unit_paragraph'})}
              </p>
            </div>
            {/*<p>
              A PROJECT BY<br/>
              <span className="itallic">
                Mozilla with spcial thanks<br/>
                to Consumer Reports
              </span>
            </p>*/}
            <div className="more-arrow">
              <i className="fa fa-angle-down fa-5x" aria-hidden="true"></i>
            </div>
          </header>
          <div className="content">
            <p className="playfair fancy-letter">
              <FormattedHTMLMessage id="thats_why"/>
            </p>
            <p className="itallic info-blob playfair">
              <FormattedHTMLMessage id="info_blob"/>
            </p>
            <div className="start-show playfair" onTouchMove={this.slideUp} onClick={this.slideUp}>
              <h2>{this.context.intl.formatMessage({id: 'see_the_guide'})}</h2>
              <p className="itallic playfair">
                {this.context.intl.formatMessage({id: 'swipe_or_scroll'})}
              </p>
              <div className="center-line"></div>
            </div>
          </div>
        </section>

        <div className={categoriesContainerClassName}>
          <div className="swiper-container-top">
            <div className="swiper-wrapper">
              <div className="swiper-slide swiper-end">.</div>
              <Category
                category={this.context.intl.formatMessage({id: 'cat_title_toys'})}
                header={this.context.intl.formatMessage({id: 'cat_desc_toys'})}
                href={"/" + locale + "/privacynotincluded/category/toys"}
              />
              <Category
                category={this.context.intl.formatMessage({id: 'cat_title_gameconsoles'})}
                header={this.context.intl.formatMessage({id: 'cat_desc_gameconsoles'})}
                href={"/" + locale + "/privacynotincluded/category/game-consoles"}
              />
              <Category
                category={this.context.intl.formatMessage({id: 'cat_title_homehubs'})}
                header={this.context.intl.formatMessage({id: 'cat_desc_homehubs'})}
                href={"/" + locale + "/privacynotincluded/category/home-hubs"}
              />
              <Category
                category={this.context.intl.formatMessage({id: 'cat_title_smarthomeaccessories'})}
                header={this.context.intl.formatMessage({id: 'cat_desc_smarthomeaccessories'})}
                href={"/" + locale + "/privacynotincluded/category/smart-home-accessories"}
              />
              <Category
                category={this.context.intl.formatMessage({id: 'cat_title_gadgetsgizmos'})}
                header={this.context.intl.formatMessage({id: 'cat_desc_gadgetsgizmos'})}
                href={"/" + locale + "/privacynotincluded/category/gadgets-gizmos"}
              />
              <Category
                category={this.context.intl.formatMessage({id: 'cat_title_healthexcercise'})}
                header={this.context.intl.formatMessage({id: 'cat_desc_healthexcercise'})}
                href={"/" + locale + "/privacynotincluded/category/health-excercise"}
              />
              <div className="swiper-slide swiper-end">.</div>
            </div>
          </div>
          <div className="swiper-container-bottom">
            <div className="swiper-wrapper">
              <div className="swiper-slide swiper-end">.</div>
              <div className="swiper-slide swiper-image-1" style={{backgroundImage: "url(/assets/buyers-guide/01-toys.jpg)"}}></div>
              <div className="swiper-slide swiper-image-2" style={{backgroundImage: "url(/assets/buyers-guide/02-game-consoles.jpg)"}}></div>
              <div className="swiper-slide swiper-image-3" style={{backgroundImage: "url(/assets/buyers-guide/03-home-hubs.jpg)"}}></div>
              <div className="swiper-slide swiper-image-4" style={{backgroundImage: "url(/assets/buyers-guide/04-smart-home-accessories.jpg)"}}></div>
              <div className="swiper-slide swiper-image-5" style={{backgroundImage: "url(/assets/buyers-guide/05-gadgets-and-gizmos.jpg)"}}></div>
              <div className="swiper-slide swiper-image-6" style={{backgroundImage: "url(/assets/buyers-guide/06-health-and-exercise.jpg)"}}></div>
              <div className="swiper-slide swiper-end">.</div>
            </div>
          </div>
        </div>

        <div ref={(input) => {this.footerInput = input;}} className={footerClassName}>
          <section className="red">
            <div onClick={this.slideDown} onTouchMove={this.slideDown}>
              <i className="fa fa-angle-up fa-5x" aria-hidden="true"></i><br/>
              <span className="itallic">
                {this.context.intl.formatMessage({id: 'experience_again'})}
              </span>
            </div>
            <h2 className="playfair">
              {this.context.intl.formatMessage({id: 'best_to_you_and_yours'})}
            </h2>
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
          <section className="donate-container">
            <p className="playfair">
              {this.context.intl.formatMessage({id: 'donate_cta'})}
            </p>
            <a href="https://donate.mozilla.org" className="donate-button">
              {this.context.intl.formatMessage({id: 'donate_now'})}
            </a>
          </section>
          <Footer/>
        </div>
      </div>
    );
  }
});

module.exports = BuyersGuide;
