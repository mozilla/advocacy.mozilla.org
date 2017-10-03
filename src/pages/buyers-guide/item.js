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

var BuyersGuide = React.createClass({
  contextTypes: {
    intl: React.PropTypes.object
  },
  render: function() {
    const category = this.props.params.category;
    const itemName = this.props.params.item;
    const items = guideData[category];
    var item = items[itemName];
    const locale = this.context.intl.locale;

    if (!item) {
      item = {};
    }

    return (
      <div className="buyers-guide buyers-guide-item">
        <Header/>
        <section>
          <div className="breadcrumb">
            CATEGORIES > {category} > {itemName}
          </div>
          <img src={item.img}/>
        </section>
        <Footer/>
      </div>
    );
  }
});

module.exports = BuyersGuide;
