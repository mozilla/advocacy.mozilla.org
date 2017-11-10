import React from 'react';
import Footer from '../../components/buyers-guide/footer.js';
import Header from '../../components/buyers-guide/header.js';
import Breadcrumb from '../../components/buyers-guide/breadcrumb.js';
import productData from '../../data/buyers-guide-products.js';
import categoryData from '../../data/buyers-guide-categories.js';
import Modal from '../../components/modal.js';
import SignupForm from '../../components/buyers-guide/signup-form.js';
import debounce from 'debounce';
import reactGA from 'react-ga';

import { Link } from 'react-router';

var Product = React.createClass({
  contextTypes: {
    intl: React.PropTypes.object
  },
  scrollToTop: function() {
    window.scrollTo(0, 0);
  },
  render: function() {
    return (
      <div className="related-products-item-container">
        <Link onClick={this.scrollToTop} to={this.props.href}>
          <div className="related-products-image-container">
            <img src={this.props.img}/>
          </div>
        </Link>
      </div>
    );
  }
});

var Green = React.createClass({
  render: function() {
    return (
      <div className="green-result">
        {this.props.children}
      </div>
    );
  }
});

var Red = React.createClass({
  render: function() {
    return (
      <div className="red-result">
        {this.props.children}
      </div>
    );
  }
});

var BuyersGuide = React.createClass({
  getInitialState: function() {
    return {
      showModal: false,
      maybeLater: false,
      signupSuccess: false,
      copyStatus: ""
    };
  },
  contextTypes: {
    intl: React.PropTypes.object
  },
  componentDidMount: function() {
    if (typeof Coral !== "undefined") {
      Coral.Talk.render(document.querySelector("#coral_talk_7574501203394207"), {
        talk: 'https://mozilla-foundation-talk.herokuapp.com/'
      });
    }
    window.addEventListener("scroll", this.onScroll, true);
  },
  componentWillUnmount: function() {
    window.removeEventListener("scroll", this.onScroll, true);
  },
  onScroll: debounce(function(e) {
    if (e.pageY >= 300) {
      this.openModal();
    }
  }, 100, true),
  closeModal: function() {
    reactGA.event({
      category: "Signup",
      action: "Signup modal closed",
      label: "Buyer's Guide"
    });
    this.setState({
      showModal: false
    });
  },
  nextTime: function() {
    reactGA.event({
      category: "Signup",
      action: "Maybe later clicked",
      label: "Buyer's Guide"
    });
    this.setState({
      maybeLater: true
    });
  },
  openModal: function() {
    if (this.props.subscribed || window.sessionStorage.getItem('disable-modal')) {
      window.removeEventListener("scroll", this.onScroll, true);
      return;
    }
    reactGA.event({
      category: "Signup",
      action: "Signup modal shown",
      label: "Buyer's Guide"
    });
    window.sessionStorage.setItem('disable-modal', true);
    this.setState({
      showModal: true
    });
  },
  shareFbClick: function() {
    reactGA.event({
      category: "Social",
      action: "Modal clicked Share Button",
      label: "Facebook"
    });
    document.querySelector("#share-progress-fb a").click();
  },
  shareTwClick: function() {
    reactGA.event({
      category: "Social",
      action: "Modal clicked Share Button",
      label: "Twitter"
    });
    document.querySelector("#share-progress-tw a").click();
  },
  shareEmClick: function() {
    reactGA.event({
      category: "Social",
      action: "Modal clicked Share Button",
      label: "Email"
    });
    document.querySelector("#share-progress-em a").click();
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

      reactGA.event({
        category: "Button",
        action: "Copy link button clicked",
        label: "Click"
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
    const products = categoryData[category] || [];
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
                  <button onClick={this.shareFbClick} className="social-button">
                    <i className="fa fa-facebook fa-2x"></i>
                  </button>
                  <button onClick={this.shareTwClick} className="social-button">
                    <i className="fa fa-twitter fa-2x"></i>
                  </button>
                  <button onClick={this.shareEmClick} className="social-button">
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
                  <button onClick={this.shareFbClick} className="social-button">
                    <i className="fa fa-facebook fa-2x"></i>
                  </button>
                  <button onClick={this.shareTwClick} className="social-button">
                    <i className="fa fa-twitter fa-2x"></i>
                  </button>
                  <button onClick={this.shareEmClick} className="social-button">
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

    var no = this.context.intl.formatMessage({id: 'review_no'});
    var yes = this.context.intl.formatMessage({id: 'review_yes'});
    var unknown = this.context.intl.formatMessage({id: 'review_unknown'});
    var account = (
      <Green>
        {no}
      </Green>
    );
    var privacyControls = (
      <Red>
        {no}
      </Red>
    );
    var deleteData = (
      <Red>
        {no}
      </Red>
    );

    var camera = (
      <Green>
        {no}
      </Green>
    );
    var mic = (
      <Green>
        {no}
      </Green>
    );
    var tracksLocation = (
      <Green>
        {no}
      </Green>
    );

    if (item.camera) {
      camera = (
        <Red>
          {yes}
        </Red>
      );
    }
    if (item.microphone) {
      mic = (
        <Red>
          {yes}
        </Red>
      );
    }
    if (item.location) {
      tracksLocation = (
        <Red>
          {yes}
        </Red>
      );
    }

    if (item["need-account"] === "unknown") {
      account = (
        <Red>
          {unknown}
        </Red>
      );
    } else if (item["need-account"]) {
      account = (
        <Red>
          {yes}
        </Red>
      );
    }
    if (item["privacy-controls"] === "unknown") {
      privacyControls = (
        <Red>
          {unknown}
        </Red>
      );
    } else if (item["privacy-controls"]) {
      privacyControls = (
        <Green>
          {yes}
        </Green>
      );
    }
    if (item["delete-data"] === "unknown") {
      deleteData = (
        <Red>
          {unknown}
        </Red>
      );
    } else if (item["delete-data"]) {
      deleteData = (
        <Green>
          {yes}
        </Green>
      );
    }

    var childRules = "";
    var na = this.context.intl.formatMessage({id: 'review_n_a'});
    if (item['child-rules'] === "yes") {
      childRules = (
        <Green>
          {yes}
        </Green>
      );
    } else if (item['child-rules'] === "no") {
      childRules = (
        <Red>
          {no}
        </Red>
      );
    } else if (item['child-rules'] === "N/A") {
      childRules = (
        <Green>
          {na}
        </Green>
      );
    } else if (item['child-rules']) {
      childRules = this.context.intl.formatMessage({id: item['child-rules']});
    }

    var partnersLink = "https://www.univision.com/onlinesafety";
    var partnersBlob = null;
    if (locale === "es") {
      partnersLink = "https://www.univision.com/seguridad-online"
      partnersBlob = (
        <a className="read-more-url" href={partnersLink}>
          {this.context.intl.formatMessage({id: 'review_partners_link'})}
        </a>
      );
    }

    var shareData = "";
    var marketing = this.context.intl.formatMessage({id: 'review_marketing'});
    var advertising = this.context.intl.formatMessage({id: 'review_advertising'});
    var onlineTracking = this.context.intl.formatMessage({id: 'review_online_tracking'});
    if (item['share-data'] === "no") {
      shareData = (
        <Green>
          {no}
        </Green>
      );
    } else if (item['share-data'] === "marketing") {
      shareData = (
        <Red>
          {marketing}
        </Red>
      );
    } else if (item['share-data'] === "advertising") {
      shareData = (
        <Red>
          {advertising}
        </Red>
      );
    } else if (item['share-data'] === "online tracking") {
      shareData = (
        <Red>
          {onlineTracking}
        </Red>
      );
    } else if (item['share-data'] === "unknown") {
      shareData = (
        <Red>
          {unknown}
        </Red>
      );
    }

    var privacyPolicy = (
      <div>{this.context.intl.formatMessage({id: 'review_none'})}</div>
    );

    if (item['privacy-policy'] === "N/A") {
      privacyPolicy = (
        <div>{na}</div>
      );
    } else if (item['privacy-policy'] !== "none") {
      privacyPolicy = (
        <a className="privacy-url" href={item['privacy-policy']}>
          {this.context.intl.formatMessage({id: "review_view_privacy_policy"})}
        </a>
      );
    }

    return (
      <div className="buyers-guide buyers-guide-item">
        {modal}
        <Header title={true} bradcrumb={true}
          category={category}
          item={itemName}
        />
        <section>
          <div className="main-product-image-container">
            <img src={item.img}/>
          </div>
          <div className="page-width">
            <div className={copyStatusClassName}>
              {this.context.intl.formatMessage({id: 'link_copied'})}
            </div>
            <h2 className="company-title">
              {item.company}
            </h2>
            <a className="product-url" href={item.url}>
              <h1 className="playfair">
                {this.context.intl.formatMessage({id: item.product})}
              </h1>
            </a>
            <div>{item.price}</div>
            <p>
              {this.context.intl.formatMessage({id: item.blerb})}
            </p>
            {/*<p className="age-range">{item.age}</p>*/}
            <div className="clear copy-link-container">
              <span className="category-item-label">
                {this.context.intl.formatMessage({id: "safety_review"})}
              </span>
              <button className="copy-link" onClick={this.copyLink}>
                {this.context.intl.formatMessage({id: 'copy_link'})}
              </button>
            </div>
            <h3 className="can-it-spy-header">
              {this.context.intl.formatMessage({id: "review_can_it_spy"})}
            </h3>
            <div className="app-and-device">
              {this.context.intl.formatMessage({id: "review_app_and_device"})}
            </div>
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
            <br/>
            <h3>
              {this.context.intl.formatMessage({id: "review_know_about_me"})}
            </h3>
            <div className="can-it-spy-table">
              <div className="spy-table-row">
                {this.context.intl.formatMessage({id: "review_account_required"})}
                {account}
              </div>
              <div className="spy-table-row">
                {this.context.intl.formatMessage({id: "review_privacy_controls"})}
                {privacyControls}
              </div>
              <div className="spy-table-row">
                {this.context.intl.formatMessage({id: "review_delete_data"})}
                {deleteData}
              </div>
            </div>
            <br/>
            <div className="single-row">
              <h4>
                {this.context.intl.formatMessage({id: "review_share_data"})}
              </h4>
              {shareData}
            </div>

            <h4 className="privacy-message">
              {this.context.intl.formatMessage({id: "review_what_could_happen"})}
            </h4>
            <div>
              {this.context.intl.formatMessage({id: item['worst-case']})}
            </div>
            <h4 className="privacy-message">
              {this.context.intl.formatMessage({id: "review_privacy_policy"})}
            </h4>
            {privacyPolicy}
            <br/>
            <br/>
            {partnersBlob}
            <h3>
              {this.context.intl.formatMessage({id: 'review_got_feedback_title'})}
            </h3>
            <p>
              {this.context.intl.formatMessage({id: 'review_got_feedback_tagline'})}
            </p>
            <div id="coral_talk_7574501203394207"></div>
            <h2>
              {this.context.intl.formatMessage({id: "review_related_products"})}
            </h2>
            <div className="related-products-container">
              {products.map(function(productKey, index) {
                const product = productData[productKey] || {};
                return (
                  <Product key={productKey} {...product} href={"/" + locale + "/privacynotincluded/category/" + category + "/" + productKey}/>
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
