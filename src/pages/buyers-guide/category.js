import React from 'react';
import Footer from '../../components/buyers-guide/footer.js';
import Header from '../../components/buyers-guide/header.js';
import guideData from '../../data/buyers-guide.js';

var Item = React.createClass({
  render: function() {
    return (
      <a href={this.props.href}>
        <img src={this.props.img}/>
        <div>{this.props.label}</div>
        <div>{this.props.header}</div>
      </a>
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
          <div className="breadcrumb">
            CATEGORIES > {category}
          </div>
          <h1>Category Name</h1>
          <p>LOREM IPSUM DOLOR sit amet.</p>
          <div>
            {Object.keys(items).map(function(itemName, index) {
              const item = items[itemName];
              return (
                <Item {...item} href={"/" + locale + "/buyers-guide/category/" + category + "/" + itemName}/>
              );
            })}
          </div>
        </section>
        <Footer/>
      </div>
    );
  }
});

module.exports = BuyersGuide;
