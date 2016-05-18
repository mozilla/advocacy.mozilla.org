import React from 'react';

var Accordion = React.createClass({
  render: function() {
    return (
      <div className="accordion-container">
        {this.props.children}
      </div>
    );
  }
});

var Tab = React.createClass({
  getInitialState: function() {
    return {
      expanded: false
    }
  },
  onClick: function() {
    this.setState({
      expanded: !this.state.expanded
    });
  },
  render: function() {
    var tabClassName = "accordion-tab";
    var handleIconClassName = "fa fa-plus";
    if (this.state.expanded) {
      tabClassName += " expand";
      handleIconClassName = "fa fa-minus";
    }
    return (
      <div className={tabClassName}>
        <h4 className="accordion-handle" onClick={this.onClick}>
          {this.props.name}
          <i className={handleIconClassName} aria-hidden="true"></i>
        </h4>
        <div className="tab-content">
          {this.props.children}
        </div>
      </div>
    );
  }
});

module.exports = {
  Accordion,
  Tab
};
