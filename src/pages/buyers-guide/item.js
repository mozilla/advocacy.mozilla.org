import React from 'react';
import Footer from '../../components/buyers-guide/footer.js';
import Header from '../../components/buyers-guide/header.js';
import Breadcrumb from '../../components/buyers-guide/breadcrumb.js';
import guideData from '../../data/buyers-guide.js';
import Modal from '../../components/modal.js';
import SignupForm from '../../components/buyers-guide/signup-form.js';

var BuyersGuide = React.createClass({
  getInitialState: function() {
    return {
      showModal: false,
      maybeLater: false,
      cancelTimeout: false,
      signupSuccess: false,
      copyStatus: ""
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
    if (typeof Coral === "undefined") {
      return;
    }
    const coralContent = document.querySelector("#coral_talk_40192114661713907");
    Coral.Talk.render(coralContent, {
      talk: 'http://127.0.0.1:3000/'
    });
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
  copyLink: function() {
    var textArea = document.createElement("textarea");

    //
    // *** This styling is an extra step which is likely not required. ***
    //
    // Why is it here? To ensure:
    // 1. the element is able to have focus and selection.
    // 2. if element was to flash render it has minimal visual impact.
    // 3. less flakyness with selection and copying which **might** occur if
    //    the textarea element is not visible.
    //
    // The likelihood is the element won't even render, not even a flash,
    // so some of these are just precautions. However in IE the element
    // is visible whilst the popup box asking the user for permission for
    // the web page to copy to the clipboard.
    //

    // Place in top-left corner of screen regardless of scroll position.
    textArea.style.position = 'fixed';
    textArea.style.top = 0;
    textArea.style.left = 0;

    // Ensure it has a small width and height. Setting to 1px / 1em
    // doesn't work as this gives a negative w/h on some browsers.
    textArea.style.width = '2em';
    textArea.style.height = '2em';

    // We don't need padding, reducing the size if it does flash render.
    textArea.style.padding = 0;

    // Clean up any borders.
    textArea.style.border = 'none';
    textArea.style.outline = 'none';
    textArea.style.boxShadow = 'none';

    // Avoid flash of white box if rendered for any reason.
    textArea.style.background = 'transparent';


    textArea.value = window.location.href;

    document.body.appendChild(textArea);

    textArea.select();

    try {
      var successful = document.execCommand('copy');
      this.setState({
        copyStatus: "successful"
      });
      setTimeout(() => {
        this.setState({
          copyStatus: ""
        });
      }, 3000);
    } catch (err) {
      this.setState({
        copyStatus: "unsuccessful"
      });
    }

    document.body.removeChild(textArea);
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
    const copyStatus = this.state.copyStatus;
    var copyStatusClassName = "copy-status";
    if (copyStatus === "successful") {
      copyStatusClassName += " show";
    }
    var modal = null;
    if (this.state.showModal) {
      if (this.state.signupSuccess) {
        modal = (
          <Modal onClose={this.closeModal}>
            <div className="signup-form">
              <div>
                <h2 className="playfair">
                  {this.context.intl.formatMessage({id: 'thank_you_sign_up'})}
                </h2>
                <p>
                  {this.context.intl.formatMessage({id: 'double_check_sign_up'})}
                </p>
                <div className="social-buttons">
                  <button className="social-button">
                    <i className="fa fa-facebook fa-2x"></i>
                  </button>
                  <button className="social-button">
                    <i className="fa fa-twitter fa-2x"></i>
                  </button>
                  <button className="social-button">
                    <i className="fa fa-envelope fa-2x"></i>
                  </button>
                </div>
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
                <h2 className="playfair">
                  {this.context.intl.formatMessage({id: 'next_time'})}
                </h2>
                <p>
                  {this.context.intl.formatMessage({id: 'next_time_paragraph'})}
                </p>
                <div className="social-buttons">
                  <button className="social-button">
                    <i className="fa fa-facebook fa-2x"></i>
                  </button>
                  <button className="social-button">
                    <i className="fa fa-twitter fa-2x"></i>
                  </button>
                  <button className="social-button">
                    <i className="fa fa-envelope fa-2x"></i>
                  </button>
                </div>
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
                <h2 className="playfair">
                  {this.context.intl.formatMessage({id: 'want_more_privacy'})}
                </h2>
                <p>
                  {this.context.intl.formatMessage({id: 'sign_up_paragraph'})}
                </p>
                <SignupForm onClose={this.nextTime} onSuccess={this.onSuccess}/>
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
          <div className="page-width">
            <div className={copyStatusClassName}>
              {this.context.intl.formatMessage({id: 'link_copied'})}
            </div>
            <img src={item.img}/>
            <div className="clear">
              <span className="category-item-label">
                {item.label}
              </span>
              <button className="copy-link" onClick={this.copyLink}>
                {this.context.intl.formatMessage({id: 'copy_link'})}
              </button>
            </div>
            <h1 className="playfair">{item.header}</h1>
            <p>{item.description}</p>
            <p className="age-range">{item.age}</p>
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
            <div id="coral_talk_40192114661713907"></div>
          </div>
        </section>
        <Footer/>
      </div>
    );
  }
});

module.exports = BuyersGuide;
