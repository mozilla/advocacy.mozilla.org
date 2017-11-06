import React from 'react';
import { Link } from 'react-router';
import Men from './menu.js';

var Menu = React.createClass({
  contextTypes: {
    intl: React.PropTypes.object
  },
  onClick: function() {
    this.props.onClick();
  },
  render: function() {
    const locale = this.context.intl.locale;
    var menuClassName = "menu-container playfair";
    if (this.props.open) {
      menuClassName += " show";
    }

    return (
      <div className={menuClassName}>
        <div className="link-container home-link">
          <Link onClick={this.onClick} to={"/" + locale + "/privacynotincluded/"}>
            {this.context.intl.formatMessage({id: 'home_label'})}
          </Link>
        </div>
        <div className="link-container toys-link">
          <Link onClick={this.onClick} to={"/" + locale + "/privacynotincluded/category/toys"}>
            {this.context.intl.formatMessage({id: 'cat_title_toys'})}
          </Link>
        </div>
        <div className="link-container game-consoles-link">
          <Link onClick={this.onClick} to={"/" + locale + "/privacynotincluded/category/gameconsoles"}>
            {this.context.intl.formatMessage({id: 'cat_title_gameconsoles'})}
          </Link>
        </div>
        <div className="link-container home-hubs-link">
          <Link onClick={this.onClick} to={"/" + locale + "/privacynotincluded/category/homehubs"}>
            {this.context.intl.formatMessage({id: 'cat_title_homehubs'})}
          </Link>
        </div>
        <div className="link-container smart-home-accessories-link">
          <Link onClick={this.onClick} to={"/" + locale + "/privacynotincluded/category/smarthomeaccessories"}>
            {this.context.intl.formatMessage({id: 'cat_title_smarthomeaccessories'})}
          </Link>
        </div>
        <div className="link-container gadgets-gizmos-link">
          <Link onClick={this.onClick} to={"/" + locale + "/privacynotincluded/category/gadgetsgizmos"}>
            {this.context.intl.formatMessage({id: 'cat_title_gadgetsgizmos'})}
          </Link>
        </div>
        <div className="link-container health-excercise-link">
          <Link onClick={this.onClick} to={"/" + locale + "/privacynotincluded/category/healthexcercise"}>
            {this.context.intl.formatMessage({id: 'cat_title_healthexcercise'})}
          </Link>
        </div>
        <div className="link-container why-link">
          <Link onClick={this.onClick} to={"/" + locale + "/privacynotincluded/why-we-made"}>
            {this.context.intl.formatMessage({id: 'wwmt_main_title'})}
          </Link>
        </div>
      </div>
    );
  }
});

module.exports = Menu;
