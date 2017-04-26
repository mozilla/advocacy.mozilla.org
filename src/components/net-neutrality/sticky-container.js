import React from 'react';
import classnames from "classnames";

var StickyButton = React.createClass({
  getInitialState: function() {
    return {
      sticky: this.props.initialState || false
    };
  },
  checkSticky: function() {
    var position = window.scrollY;

    if (this.props.stickyTo) {
      return position <= this.props.stickyTo();
    } else if (this.props.stickyFrom) {
      return position >= this.props.stickyFrom();
    }
    return false;
  },
  onScroll: function() {
    var sticky = this.checkSticky();

    if (sticky !== this.state.sticky) {
      this.setState({
        sticky: sticky
      });
    }
  },
  componentDidMount: function() {
    document.addEventListener(`scroll`, this.onScroll);
    setTimeout(this.onScroll);
  },
  componentWillUnmount: function() {
    document.removeEventListener(`scroll`, this.onScroll);
  },
  render: function() {
    var className = classnames(this.props.className, {
      "sticky": this.state.sticky
    });

    return (
      <div className={className}>
        {this.props.children}
      </div>
    );
  }
});

module.exports = StickyButton;
