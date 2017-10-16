import React from 'react';

var Breadcrumb = React.createClass({
  contextTypes: {
    intl: React.PropTypes.object
  },
  render: function() {
    const category = this.props.category;
    const item = this.props.item;
    const locale = this.context.intl.locale;

    if (!category) {
      return (
        <div className="breadcrumb">
          <span className="breadcrumb-item last">CATEGORIES</span>
        </div>
      );
    }
    if (!item) {
      return (
        <div className="breadcrumb">
          <span className="breadcrumb-item"><a href={"/" + locale + "/buyers-guide/"}>CATEGORIES</a></span>
          <span className="breadcrumb-split">&gt;</span>
          <span className="breadcrumb-item last">{category}</span>
        </div>
      );
    }
    return (
      <div className="breadcrumb">
        <span className="breadcrumb-item"><a href={"/" + locale + "/buyers-guide/"}>CATEGORIES</a></span>
        <span className="breadcrumb-split">&gt;</span>
        <span className="breadcrumb-item"><a href={"/" + locale + "/buyers-guide/category/" + category}>{category}</a></span>
        <span className="breadcrumb-split">&gt;</span>
        <span className="breadcrumb-item last">{item}</span>
      </div>
    );
  }
});

module.exports = Breadcrumb;
