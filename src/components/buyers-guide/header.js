import React from 'react';
import { Link } from 'react-router';

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
            <button className="social-button">
              <i className="fa fa-facebook fa-1x"></i>
            </button>
            <button className="social-button">
              <i className="fa fa-twitter fa-1x"></i>
            </button>
            <button className="social-button">
              <i className="fa fa-envelope fa-1x"></i>
            </button>
          </div>
        </div>
        <div className={menuClassName}>
          <div className="link-container">
            <Link to={"/" + locale + "/buyers-guide/"}>
              {this.context.intl.formatMessage({id: 'home_label'})}
            </Link>
          </div>
          <div className="link-container">
            <Link to={"/" + locale + "/buyers-guide/category/toys"}>
              {this.context.intl.formatMessage({id: 'toys_label'})}
            </Link>
          </div>
          <div className="link-container">
            <Link to={"/" + locale + "/buyers-guide/category/game-consoles"}>
              {this.context.intl.formatMessage({id: 'game_consoles_label'})}
            </Link>
          </div>
          <div className="link-container">
            <Link to={"/" + locale + "/buyers-guide/category/home-hubs"}>
              {this.context.intl.formatMessage({id: 'home_hubs_label'})}
            </Link>
          </div>
          <div className="link-container">
            <Link to={"/" + locale + "/buyers-guide/category/smart-home-accessories"}>
              {this.context.intl.formatMessage({id: 'smart_accessories_label'})}
            </Link>
          </div>
          <div className="link-container">
            <Link to={"/" + locale + "/buyers-guide/category/gadgets-gizmos"}>
              {this.context.intl.formatMessage({id: 'gadgets_gizmos_label'})}
            </Link>
          </div>
          <div className="link-container">
            <Link to={"/" + locale + "/buyers-guide/category/health-excercise"}>
              {this.context.intl.formatMessage({id: 'health_exercise_label'})}
            </Link>
          </div>
          <div className="link-container">
            <Link to={"/" + locale + "/buyers-guide/why-we-made"}>
              {this.context.intl.formatMessage({id: 'why_label'})}
            </Link>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = Header;
