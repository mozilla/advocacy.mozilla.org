import React from 'react';

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
    var menu = null;
    if (this.state.menuOpen) {
      menu = (
        <div className="menu-container">
          <a href={"/" + locale + "/buyers-guide/"}>
            {this.context.intl.formatMessage({id: 'todo'})}
          </a>
          <a href={"/" + locale + "/buyers-guide/category/toys"}>
            {this.context.intl.formatMessage({id: 'todo'})}
          </a>
          <a href={"/" + locale + "/buyers-guide/category/game-consoles"}>
            {this.context.intl.formatMessage({id: 'todo'})}
          </a>
          <a href={"/" + locale + "/buyers-guide/category/home-hubs"}>
            {this.context.intl.formatMessage({id: 'todo'})}
          </a>
          <a href={"/" + locale + "/buyers-guide/category/smart-home-accessories"}>
            {this.context.intl.formatMessage({id: 'todo'})}
          </a>
          <a href={"/" + locale + "/buyers-guide/category/gadgets-gizmos"}>
            {this.context.intl.formatMessage({id: 'todo'})}
          </a>
          <a href={"/" + locale + "/buyers-guide/category/health-excercise"}>
            {this.context.intl.formatMessage({id: 'todo'})}
          </a>
          <a href={"/" + locale + "/buyers-guide/why-we-made"}>
            {this.context.intl.formatMessage({id: 'todo'})}
          </a>
        </div>
      );
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
        {menu}
      </div>
    );
  }
});

module.exports = Header;
