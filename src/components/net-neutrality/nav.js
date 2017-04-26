import React from 'react';
import classnames from "classnames";
import reactGA from 'react-ga';

var MenuLink = React.createClass({
  onClick: function() {
    reactGA.event({
      category: "User Flow",
      action: "Clicked Navigation",
      label: this.props.item
    });
  },
  render: function() {
    var className = classnames(`nav-link`, {
      "active": this.props.active === this.props.item
    });

    return (
      <a onClick={this.onClick} className={className} href={this.props.href}>{this.props.children}</a>
    );
  }
});

var ScrollNav = React.createClass({
  contextTypes: {
    intl: React.PropTypes.object
  },
  getInitialState: function() {
    var active = `about`;
    if (typeof window === `object`) {
      active = window.location.hash.replace(`#`, ``) || `about`;
    }

    return {active};
  },
  componentDidMount: function() {
    document.addEventListener(`scroll`, this.onScroll);
  },
  componentWillUnmount: function() {
    document.removeEventListener(`scroll`, this.onScroll);
  },
  onScroll: function() {
    var links = [].slice.call(document.querySelectorAll(`.nav-anchor`));
    var hash = this.state.active;
    var active = ``;
    var scrollY = window.scrollY;

    if (links[0]) {
      active = links[0].getAttribute(`id`);
    }

    // If we have no hash, we should set it to the top nav.
    // We can stop checking.
    if (hash) {

      // Check to see which is the current nav item.
      links.forEach((element) => {
        if (scrollY >= element.offsetTop - ( window.innerHeight / 2 )) {
          active = element.getAttribute(`id`);
        }
      });

      // If we're at the bottom of the page, ensure the last item is active.
      // This is in case the last item's height is less than the window height.
      if ((window.innerHeight + window.pageYOffset) >= document.body.offsetHeight) {
        active = links[links.length-1].getAttribute(`id`);
      }
    }

    this.activate(active);
  },
  activate: function(active) {
    var hash = window.location.hash.replace(`#`, ``);

    if (this.state.active !== active) {
      if (!hash || document.querySelector(`.nav-anchor#` + hash)) {
        window.history.replaceState({}, null, `#` + active);
      }
      this.setState({
        active: active || ``
      });
    }
  },
  render: function() {
    var links = [
      {
        text: this.context.intl.formatMessage({id: `nav_copyright_campaign2`}),
        item: `about`,
        href: `#about`
      },
      {
        text: this.context.intl.formatMessage({id: `nav_get_involved2`}),
        item: `get-involved`,
        href: `#get-involved`
      }
    ];
    if (/^(en)(\b|$)/.test(this.context.intl.locale)) {
      links.splice(1, 0, {
        text: `More Resources`,
        item: `resources`,
        href: `/en-US/resources`
      });
    }

    return (
      <SimpleNav
        active={this.state.active}
        links={links}
      />
    );
  }
});

var SimpleNav = React.createClass({
  contextTypes: {
    intl: React.PropTypes.object
  },
  render: function() {
    var active = this.props.active || ``;
    var activate = this.props.activate || function() {};
    return (
      <div className="nav-container">
        <div className="nav">
          <div className="nav-logo-container">
            <a href="https://mozilla.org/" className="nav-logo"></a>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = {
  SimpleNav,
  ScrollNav
};
