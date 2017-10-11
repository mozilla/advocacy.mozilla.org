import React from 'react';
import Footer from '../../components/buyers-guide/footer.js';
import Header from '../../components/buyers-guide/header.js';
import Breadcrumb from '../../components/buyers-guide/breadcrumb.js';
import guideData from '../../data/buyers-guide.js';
import Modal from '../../components/modal.js';

var BuyersGuide = React.createClass({
  getInitialState: function() {
    return {
      showModal: false,
      maybeLater: false,
      cancelTimeout: false,
      signupSuccess: false
    };
  },
  contextTypes: {
    intl: React.PropTypes.object
  },
  componentDidMount: function() {
    const video = this.props.params.video;

    if (!video) {
      setTimeout(() => {
        if (!this.state.cancelTimeout) {
          this.openModal();
        }
      }, 3000);
    }
  },
  componentWillReceiveProps: function() {
    this.setState({
      cancelTimeout: true
    });
  },
  closeModal: function() {
    this.setState({
      showModal: false
    });
  },
  nextTime: function() {
    this.setState({
      maybeLater: true
    });
  },
  openModal: function() {
    if (this.props.subscribed) {
      return;
    }
    this.setState({
      showModal: true,
      cancelTimeout: true
    });
  },
  onSuccess: function() {
    this.setState({
      signupSuccess: true
    });
  },
  render: function() {
    const category = this.props.params.category;
    const itemName = this.props.params.item;
    const items = guideData[category] || {};
    const item = items[itemName] || {};
    const locale = this.context.intl.locale;

    var modal = null;
    if (this.state.showModal) {
      if (this.state.signupSuccess) {
        modal = (
          <Modal onClose={this.closeModal}>
            <div className="signup-form">
              <div>
                <h2>
                  {this.context.intl.formatMessage({id: 'thank_you_sign_up'})}
                </h2>
                <p>
                  {this.context.intl.formatMessage({id: 'double_check_sign_up'})}
                </p>
                <a onClick={this.closeModal}>
                  {this.context.intl.formatMessage({id: 'no_thanks'})}
                </a>
              </div>
            </div>
          </Modal>
        );
      } else if (this.state.maybeLater) {
        modal = (
          <Modal onClose={this.closeModal}>
            <div className="signup-form">
              <div>
                <h2>
                  {this.context.intl.formatMessage({id: 'next_time'})}
                </h2>
                <p>
                  {this.context.intl.formatMessage({id: 'next_time_paragraph'})}
                </p>
                <a onClick={this.closeModal}>
                  {this.context.intl.formatMessage({id: 'no_thanks'})}
                </a>
              </div>
            </div>
          </Modal>
        );
      } else {
        modal = (
          <Modal onClose={this.closeModal}>
            <div className="signup-form">
              <div>
                <h2>
                  {this.context.intl.formatMessage({id: 'want_more_privacy'})}
                </h2>
                <p>
                  {this.context.intl.formatMessage({id: 'sign_up_paragraph'})}
                </p>
                <input placeHolder={this.context.intl.formatMessage({id: 'email_placeholder'})}/>
                <input type="checkbox"/>
                <label>{this.context.intl.formatMessage({id: 'privacy_policy'})}</label>
                <button>
                  {this.context.intl.formatMessage({id: 'subscribe_button'})}
                </button>
                <a onClick={this.nextTime}>
                  {this.context.intl.formatMessage({id: 'maybe_later'})}
                </a>
              </div>
            </div>
          </Modal>
        );
      }
    }

    return (
      <div className="buyers-guide buyers-guide-item">
        {modal}
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
