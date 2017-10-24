import React from 'react';
import { Link } from 'react-router';
import reactGA from 'react-ga';

var Header = React.createClass({
  getInitialState: function() {
    return {
      menuOpen: false
    };
  },
  contextTypes: {
    intl: React.PropTypes.object
  },
  toggleMenu: function() {
    this.setState({
      menuOpen: !this.state.menuOpen
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
    const locale = this.context.intl.locale;
    var menuClassName = "menu-container playfair";
    if (this.state.menuOpen) {
      menuClassName += " show";
    }
    return (
      <div className="buyers-guide-header-container">
        <div className="buyers-guide-header">
          <button className="hamburger" onClick={this.toggleMenu}>
            <i className="fa fa-bars fa-2x"></i>
          </button>
          <button className="moz-logo">
            <img src="/assets/moz-fav-bw-rgb-reverse.svg"/>
          </button>
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
        </div>
        <div className={menuClassName}>
          <div className="link-container home-link">
            <Link onClick={this.toggleMenu} to={"/" + locale + "/privacynotincluded/"}>
              {this.context.intl.formatMessage({id: 'home_label'})}
            </Link>
          </div>
          <div className="link-container toys-link">
            <Link onClick={this.toggleMenu} to={"/" + locale + "/privacynotincluded/category/toys"}>
              {this.context.intl.formatMessage({id: 'cat_title_toys'})}
            </Link>
          </div>
          <div className="link-container game-consoles-link">
            <Link onClick={this.toggleMenu} to={"/" + locale + "/privacynotincluded/category/gameconsoles"}>
              {this.context.intl.formatMessage({id: 'cat_title_gameconsoles'})}
            </Link>
          </div>
          <div className="link-container home-hubs-link">
            <Link onClick={this.toggleMenu} to={"/" + locale + "/privacynotincluded/category/homehubs"}>
              {this.context.intl.formatMessage({id: 'cat_title_homehubs'})}
            </Link>
          </div>
          <div className="link-container smart-home-accessories-link">
            <Link onClick={this.toggleMenu} to={"/" + locale + "/privacynotincluded/category/smarthomeaccessories"}>
              {this.context.intl.formatMessage({id: 'cat_title_smarthomeaccessories'})}
            </Link>
          </div>
          <div className="link-container gadgets-gizmos-link">
            <Link onClick={this.toggleMenu} to={"/" + locale + "/privacynotincluded/category/gadgetsgizmos"}>
              {this.context.intl.formatMessage({id: 'cat_title_gadgetsgizmos'})}
            </Link>
          </div>
          <div className="link-container health-excercise-link">
            <Link onClick={this.toggleMenu} to={"/" + locale + "/privacynotincluded/category/healthexcercise"}>
              {this.context.intl.formatMessage({id: 'cat_title_healthexcercise'})}
            </Link>
          </div>
          <div className="link-container why-link">
            <Link onClick={this.toggleMenu} to={"/" + locale + "/privacynotincluded/why-we-made"}>
              {this.context.intl.formatMessage({id: 'why_label'})}
            </Link>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = Header;
