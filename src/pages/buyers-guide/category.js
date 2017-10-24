import React from 'react';
import Footer from '../../components/buyers-guide/footer.js';
import Header from '../../components/buyers-guide/header.js';
import Breadcrumb from '../../components/buyers-guide/breadcrumb.js';
import categoryData from '../../data/buyers-guide-categories.js';
import productData from '../../data/buyers-guide-products.js';

import { Link } from 'react-router';

var Product = React.createClass({
  contextTypes: {
    intl: React.PropTypes.object
  },
  render: function() {
    return (
      <div className="category-item-container">
        <Link to={this.props.href}>
          <img src={this.props.img}/>
          <div className="category-item-label">{this.props.company}</div>
          <div className="category-item-header playfair">
            {this.context.intl.formatMessage({id: this.props.product})}
          </div>
        </Link>
      </div>
    );
  }
});

var BuyersGuide = React.createClass({
  contextTypes: {
    intl: React.PropTypes.object
  },
  render: function() {
    const category = this.props.params.category;
    const products = categoryData[category] || [];
    const locale = this.context.intl.locale;
    return (
      <div className="buyers-guide buyers-guide-category">
        <Header/>
        <section>
          <Breadcrumb
            category={category}
          />
          <div className="page-width">
            <h1 className="playfair">
              {this.context.intl.formatMessage({id: 'cat_title_' + category})}
            </h1>
            <p className="itallic info-blob playfair">
              {this.context.intl.formatMessage({id: 'info_provided'})}
            </p>
            <div className="categories-container">
              {products.map(function(productKey, index) {
                const product = productData[productKey] || {};
                return (
                  <Product {...product} href={"/" + locale + "/privacynotincluded/category/" + category + "/" + productKey}/>
                );
              })}
            </div>
          </div>
        </section>
        <Footer/>
      </div>
    );
  }
});

module.exports = BuyersGuide;
