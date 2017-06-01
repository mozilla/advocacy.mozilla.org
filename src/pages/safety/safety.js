import React from 'react';
import Footer from '../../components/safety/footer.js';
import Header from '../../components/safety/header.js';
import GalleryItemHeader from '../../components/safety/gallery-item-header.js';
import DisplayItem from '../../components/safety/display-item.js';
import Modal from '../../components/safety/modal.js';
import SignupForm from '../../components/safety/signup-form.js';
import SignupCta from '../../components/safety/signup-cta.js';
import SafetyGallery from '../../components/safety/safety-gallery.js';
import GalleryItem from '../../components/safety/gallery-item.js';
import galleryData from '../../components/safety/gallery-data.js';

var Safety = React.createClass({
  getInitialState: function() {
    return {
      showModal: false,
      cancelTimeout: false,
      signupSuccess: false
    };
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
  openModal: function() {
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
    var className = "safety";
    if (this.props.test) {
      className += " " + this.props.test;
    }

    const video = this.props.params.video;
    var displayItem = null;

    const items = galleryData.map((item, index) => {
      if (video === item.slug) {
        displayItem = (<DisplayItem item={item} itemIndex={index}/>);
      }
      return (
        <GalleryItem key={item.slug} item={item}/>
      );
    });
    var header = (<Header/>);

    if (video) {
      header = (<GalleryItemHeader/>);
    }

    var modal = null;
    if (this.state.showModal) {
      if (this.state.signupSuccess) {
        modal = (
          <Modal onClose={this.closeModal}>
            <div className="signup-success">
              <div className="form-copy">
                <div><span className="white">Thanks!</span> <span className="light">If you haven’t previously confirmed a subscription to a Mozilla-related newsletter you may have to do so. Please check your inbox or your spam filter for an email from us.</span>
                </div>
              </div>
              <button onClick={this.closeModal}>yes I got it!</button>
            </div>
          </Modal>
        );
      } else {
        modal = (
          <Modal onClose={this.closeModal}>
            <SignupForm onClose={this.closeModal} onSuccess={this.onSuccess}/>
          </Modal>
        );
      }
    }

    return (
      <div className={className}>
        {modal}
        <div className="safety-page">
          {header}
          <SignupCta onCta={this.openModal}/>
          {displayItem}
          <SafetyGallery>
            {items}
          </SafetyGallery>
        </div>
        <Footer/>
      </div>
    );
  }
});

module.exports = Safety;
