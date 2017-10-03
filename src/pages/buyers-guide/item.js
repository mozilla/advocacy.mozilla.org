import React from 'react';
import Footer from '../../components/buyers-guide/footer.js';
import Header from '../../components/buyers-guide/header.js';
import Breadcrumb from '../../components/buyers-guide/breadcrumb.js';
import guideData from '../../data/buyers-guide.js';

var BuyersGuide = React.createClass({
  contextTypes: {
    intl: React.PropTypes.object
  },
  render: function() {
    const category = this.props.params.category;
    const itemName = this.props.params.item;
    const items = guideData[category] || {};
    const item = items[itemName] || {};
    const locale = this.context.intl.locale;

    return (
      <div className="buyers-guide buyers-guide-item">
        <Header/>
        <section>
          <Breadcrumb
            category={category}
            item={itemName}
          />
          <img src={item.img}/>
          <div>{item.label}</div>
          <h1>{item.header}</h1>
          <p>{item.description}</p>
          <p>{item.age}</p>
          <div>Safety Review</div>
          <div>CAN IT SPY ON ME?</div>
          <table>
            <tbody>
              <tr>
                <td>camera</td>
                <td>no</td>
              </tr>
              <tr>
                <td>microphone</td>
                <td>no</td>
              </tr>
              <tr>
                <td>tracks location</td>
                <td>yes</td>
              </tr>
            </tbody>
          </table>
          <div>WHAT INFORMATION CAN THE APP ACCESS?</div>
          <ul>
            <li>My photos</li>
            <li>My contacts</li>
            <li>Bluetooth</li>
          </ul>
          <div>WHAT DOES IT KNOW ABOUT ME?</div>
          <div>CAN I CONTROL IT?</div>
          <div>IF YOU WANT MORE</div>
          <div>Related products</div>
        </section>
        <Footer/>
      </div>
    );
  }
});

module.exports = BuyersGuide;
