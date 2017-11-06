import React from 'react';
import { Link } from 'react-router';
import reactGA from 'react-ga';
import Menu from './menu.js';
import Breadcrumb from './breadcrumb.js';

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
  onClick: function() {
    window.scrollTo(0, 0);
    this.toggleMenu();
  },
  shareFbClick: function() {
    reactGA.event({
      category: "Social",
      action: "Header clicked Share Button",
      label: "Facebook"
    });
    document.querySelector("#share-progress-fb a").click();
  },
  shareTwClick: function() {
    reactGA.event({
      category: "Social",
      action: "Header clicked Share Button",
      label: "Twitter"
    });
    document.querySelector("#share-progress-tw a").click();
  },
  shareEmClick: function() {
    reactGA.event({
      category: "Social",
      action: "Header clicked Share Button",
      label: "Email"
    });
    document.querySelector("#share-progress-em a").click();
  },
  render: function() {
    const locale = this.context.intl.locale;

    var headerTitle = null;
    var breadcrumb = null;
    var hamburger = (
      <button className="hamburger" onClick={this.toggleMenu}>
        <i className="fa fa-bars fa-2x"></i>
      </button>
    );
    if (this.props.title) {
      headerTitle = (
        <div className="asterix header-title">
          {this.context.intl.formatMessage({id: 'privacy_not_included'})}
        </div>
      );
    }
    if (this.props.bradcrumb) {
      breadcrumb = (
        <Breadcrumb
          category={this.props.category}
          item={this.props.item}
          openMenu={this.toggleMenu}
          onClick={this.onClick}
        />
      );
    }
    if (this.state.menuOpen) {
      hamburger = (
        <button className="hamburger" onClick={this.toggleMenu}>
          <i className="fa fa-times"></i>
        </button>
      );
    }

    return (
      <div>
        <div className="buyers-guide-header-container">
          <div className="buyers-guide-header">
            {hamburger}
            <Link className="moz-logo" to={"/" + locale + "/privacynotincluded/"}>
              <img src="/assets/moz-fav-bw-rgb-reverse.svg"/>
            </Link>
            {headerTitle}
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
          <Menu open={this.state.menuOpen} onClick={this.onClick}/>
        </div>
        {breadcrumb}
      </div>
    );
  }
});

module.exports = Header;
