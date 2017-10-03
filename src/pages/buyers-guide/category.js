import React from 'react';
import Footer from '../../components/buyers-guide/footer.js';
import Header from '../../components/buyers-guide/header.js';

var guideData = {
  "toys": {
    "item-1": {
      "label": "maker",
      "header": "Echo",
      "img": "/assets/126x126.jpg"
    },
    "item-2": {
      "label": "maker",
      "header": "Echo",
      "img": "/assets/126x126.jpg"
    },
    "item-3": {
      "label": "maker",
      "header": "Echo",
      "img": "/assets/126x126.jpg"
    },
    "item-4": {
      "label": "maker",
      "header": "Echo",
      "img": "/assets/126x126.jpg"
    },
    "item-5": {
      "label": "maker",
      "header": "Echo",
      "img": "/assets/126x126.jpg"
    },
    "item-6": {
      "label": "maker",
      "header": "Echo",
      "img": "/assets/126x126.jpg"
    }
  },
  "game-consoles": {
    "item-1": {
      "label": "maker",
      "header": "Echo",
      "img": "/assets/126x126.jpg"
    }
  },
  "home-hubs": {
    "item-1": {
      "label": "maker",
      "header": "Echo",
      "img": "/assets/126x126.jpg"
    }
  },
  "smart-home-accessories": {
    "item-1": {
      "label": "maker",
      "header": "Echo",
      "img": "/assets/126x126.jpg"
    }
  },
  "gadgets-gizmos": {
    "item-1": {
      "label": "maker",
      "header": "Echo",
      "img": "/assets/126x126.jpg"
    }
  }
};

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
    const items = guideData[category];
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
