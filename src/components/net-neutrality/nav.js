import React from 'react';
import classnames from "classnames";

var MenuLink = React.createClass({
  render: function() {
    var className = classnames(`nav-link`, {
      "active": this.props.active === this.props.item
    });

    return (
      <a className={className} href={this.props.href}>{this.props.children}</a>
    );
  }
});

var SimpleNav = React.createClass({
  contextTypes: {
    intl: React.PropTypes.object
  },
  getInitialState: function() {
    return {
      navOpen: false
    };
  },
  onBarsClick: function() {
    this.setState({
      navOpen: !this.state.navOpen
    });
  },
  render: function() {
    var active = this.props.active || ``;
    var links = this.props.links;
    if (!links) {
      links = this.props.links || [
        {
          text: "Stop Ajit Pai",
          item: `home`,
          href: `/${this.context.intl.locale}/net-neutrality/`
        },
        {
          text: "Call Now",
          item: `call-now`,
          href: `/${this.context.intl.locale}/net-neutrality/call-now`
        },
        {
          text: "Take Action",
          item: `take-action`,
          href: `/${this.context.intl.locale}/net-neutrality/petition`
        }
      ];
    }

    var navClassName = classnames(`nav`, {
      "open": this.state.navOpen
    });

    return (
      <div className="nav-container">
        <div className={navClassName}>
          <div className="nav-logo-container">
            <a href="https://mozilla.org/" className="nav-logo"></a>
          </div>
          <div onClick={this.onBarsClick} className="bars-container">
            <i className="fa fa-bars fa-2x"></i>
          </div>
          {
            links.map((linkObj, index) => {
              return (
                <MenuLink key={index}
                  active={active}
                  item={linkObj.item}
                  href={linkObj.href}
                >
                  {linkObj.text}
                </MenuLink>
              );
            })
          }
        </div>
      </div>
    );
  }
});

module.exports = {
  SimpleNav
};
