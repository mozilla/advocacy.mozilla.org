import React from 'react';
import Footer from '../../components/buyers-guide/footer.js';
import Header from '../../components/buyers-guide/header.js';
import Breadcrumb from '../../components/buyers-guide/breadcrumb.js';
import guideData from '../../data/buyers-guide.js';

import { Link } from 'react-router';

var Item = React.createClass({
  render: function() {
    return (
      <div className="category-item-container">
        <Link to={this.props.href}>
          <img src={this.props.img}/>
          <div className="category-item-label">{this.props.label}</div>
          <div className="category-item-header playfair">{this.props.header}</div>
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
    const items = guideData[category] || {};

    const locale = this.context.intl.locale;
    return (
      <div className="buyers-guide buyers-guide-category">
        <Header/>
        <section>
          <Breadcrumb
            category={category}
          />
          <div className="page-width">
            <h1 className="playfair">Category Name</h1>
            <p className="playfair fancy-letter"><b>LOREM IPSUM DOLOR</b> sit amet, consectetur adipiscing elit. Vivamus gravida purus feugiat lecus eleifend gravida. Integer lobortis lacus quis nisi.</p>
            <div className="categories-container">
              {Object.keys(items).map(function(itemName, index) {
                const item = items[itemName];
                return (
                  <Item {...item} href={"/" + locale + "/buyers-guide/category/" + category + "/" + itemName}/>
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
