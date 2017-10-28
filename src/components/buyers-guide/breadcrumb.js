import React from 'react';
import { Link } from 'react-router';
import productData from '../../data/buyers-guide-products.js';

var Breadcrumb = React.createClass({
  contextTypes: {
    intl: React.PropTypes.object
  },
  render: function() {
    const category = this.props.category;
    const item = this.props.item;
    const locale = this.context.intl.locale;
    var categoryName = this.context.intl.formatMessage({id: 'cat_title_' + category});
    var productName = "";
    var productItem = {};

    if (!category) {
      return (
        <div className="breadcrumb">
          <span className="breadcrumb-item last">
            {this.context.intl.formatMessage({id: 'categories'})}
          </span>
        </div>
      );
    }
    categoryName = this.context.intl.formatMessage({id: 'cat_title_' + category});
    if (!item) {
      return (
        <div className="breadcrumb">
          <span className="breadcrumb-item">
            <Link to={"/" + locale + "/privacynotincluded/categories/"}>
              {this.context.intl.formatMessage({id: 'categories'})}
            </Link>
          </span>
          <span className="breadcrumb-split">&gt;</span>
          <span className="breadcrumb-item last">
            {categoryName}
          </span>
        </div>
      );
    }
    productItem = productData[item];
    if (productItem.product) {
      productName = this.context.intl.formatMessage({id: productItem.product});
    }
    return (
      <div className="breadcrumb">
        <span className="breadcrumb-item">
          <Link to={"/" + locale + "/privacynotincluded/categories/"}>
            {this.context.intl.formatMessage({id: 'categories'})}
          </Link>
        </span>
        <span className="breadcrumb-split">&gt;</span>
        <span className="breadcrumb-item">
          <Link to={"/" + locale + "/privacynotincluded/category/" + category}>
            {categoryName}
          </Link>
        </span>
        <span className="breadcrumb-split">&gt;</span>
        <span className="breadcrumb-item last">
          {productName}
        </span>
      </div>
    );
  }
});

module.exports = Breadcrumb;
