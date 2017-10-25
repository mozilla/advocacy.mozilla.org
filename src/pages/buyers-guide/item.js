import React from 'react';
import Footer from '../../components/buyers-guide/footer.js';
import Header from '../../components/buyers-guide/header.js';
import Breadcrumb from '../../components/buyers-guide/breadcrumb.js';
import productData from '../../data/buyers-guide-products.js';
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
    setTimeout(() => {
      if (!this.state.cancelTimeout) {
        this.openModal();
      }
    }, 3000);
    if (typeof Coral !== "undefined") {
      Coral.Talk.render(document.querySelector("#coral_talk_7574501203394207"), {
        talk: 'https://mozilla-foundation-talk.herokuapp.com/'
      });
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
    if (this.props.subscribed || window.sessionStorage.getItem('disable-modal')) {
      return;
    }
    window.sessionStorage.setItem('disable-modal', true);
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
    const item = productData[itemName] || {};
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
                  {this.context.intl.formatMessage({id: 'sign_up_title'})}
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

    var camera = (null);
    var mic = (null);
    var tracksLocation = (null);

    if (item.camera) {
      camera = (<i className="fa fa-check" ariaHidden="true"></i>);
    }
    if (item.microphone) {
      mic = (<i className="fa fa-check" ariaHidden="true"></i>);
    }
    if (item.location) {
      tracksLocation = (<i className="fa fa-check" ariaHidden="true"></i>);
    }

    var no = this.context.intl.formatMessage({id: 'review_no'});
    var yes = this.context.intl.formatMessage({id: 'review_yes'});
    var account = no;
    var privacyControls = no;
    var deleteData = no;

    if (item["need-account"]) {
      account = yes;
    }
    if (item["privacy-controls"]) {
      privacyControls = yes;
    }
    if (item["delete-data"]) {
      deleteData = yes;
    }

    var childRules = this.context.intl.formatMessage({id: 'review_n_a'});
    if (item['child-rules'] === "yes") {
      childRules = yes;
    }
    if (item['child-rules'] === "no") {
      childRules = no;
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
                {item.company}
              </span>
              <button className="copy-link" onClick={this.copyLink}>
                {this.context.intl.formatMessage({id: 'copy_link'})}
              </button>
            </div>
            <h1 className="playfair">
              {this.context.intl.formatMessage({id: item.product})}
            </h1>
            <a className="product-url" href={item.url}>{item.url}</a>
            <div>{item.price}</div>
            <p>
              {this.context.intl.formatMessage({id: item.blerb})}
            </p>
            {/*<p className="age-range">{item.age}</p>*/}
            <h2>
              {this.context.intl.formatMessage({id: "safety_review"})}
            </h2>
            <h3>
              {this.context.intl.formatMessage({id: "review_can_it_spy"})}
            </h3>
            <div className="can-it-spy-table">
              <div className="spy-table-row">
                {this.context.intl.formatMessage({id: "review_spy_camera"})}
                {camera}
              </div>
              <div className="spy-table-row">
                {this.context.intl.formatMessage({id: "review_spy_microphone"})}
                {mic}
              </div>
              <div className="spy-table-row">
                {this.context.intl.formatMessage({id: "review_spy_location"})}
                {tracksLocation}
              </div>
            </div>
            <h3>
              {this.context.intl.formatMessage({id: "review_know_about_me"})}
            </h3>
            <div className="yes-no-table">
              <div className="yes-no-table-row">
                {this.context.intl.formatMessage({id: "review_account_required"})}
                {account}
              </div>
              <div className="yes-no-table-row">
                {this.context.intl.formatMessage({id: "review_privacy_controls"})}
                {privacyControls}
              </div>
              <div className="yes-no-table-row">
                {this.context.intl.formatMessage({id: "review_delete_data"})}
                {deleteData}
              </div>
            </div>
            <h4>{this.context.intl.formatMessage({id: "review_share_data"})}</h4>
            <div className="can-it-spy-table">
              <div className="spy-table-row">
                ??
              </div>
              <div className="spy-table-row">
                ??
              </div>
              <div className="spy-table-row">
                ??
              </div>
            </div>
            <div className="single-row">
              <h4>
                {this.context.intl.formatMessage({id: "review_child_privacy"})}
              </h4>
              {childRules}
            </div>
            <h4 className="privacy-message">
              {this.context.intl.formatMessage({id: "review_privacy_policy"})}
            </h4>
            <a className="privacy-url" href={item['privacy-policy']}>
              {this.context.intl.formatMessage({id: "review_view_privacy_policy"})}
            </a>
            <h4 className="privacy-message">
              {this.context.intl.formatMessage({id: "review_what_could_happen"})}
            </h4>
            <div>
              {this.context.intl.formatMessage({id: item['worst-case']})}
            </div>
            <br/>
            <a className="read-more-url" href="#">
              {this.context.intl.formatMessage({id: 'review_partners_link'})}
            </a>
            <br/>
            <div id="coral_talk_7574501203394207"></div>
            <h2>
              {this.context.intl.formatMessage({id: "review_related_products"})}
            </h2>
          </div>
        </section>
        <Footer/>
      </div>
    );
  }
});

module.exports = BuyersGuide;
