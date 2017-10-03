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
          CATEGORIES >
        </div>
      );
    }
    if (!item) {
      return (
        <div className="breadcrumb">
          CATEGORIES > <a href={"/" + locale + "/buyers-guide/category/" + category}> {category} </a>
        </div>
      );
    }
    return (
      <div className="breadcrumb">
        CATEGORIES > <a href={"/" + locale + "/buyers-guide/category/" + category}> {" " + " category "} </a> > <a href={"/" + locale + "/buyers-guide/category/" + category + "/" + item}> {item} </a>
      </div>
    );
  }
});

module.exports = Breadcrumb;
