import React from 'react';
import Footer from '../../components/safety/footer.js';
import Header from '../../components/safety/header.js';
import GalleryItemHeader from '../../components/safety/gallery-item-header.js';
import DisplayItem from '../../components/safety/display-item.js';
import Modal from '../../components/modal.js';
import SignupForm from '../../components/safety/signup-form.js';
import SignupCta from '../../components/safety/signup-cta.js';
import SafetyGallery from '../../components/safety/safety-gallery.js';
import GalleryItem from '../../components/safety/gallery-item.js';
import galleryData from '../../components/safety/gallery-data.js';
import NextVideo from '../../components/safety/next-video.js';
import StickyContainer from '../../components/signup-form/sticky-container.js';
import reactGA from 'react-ga';

var Safety = React.createClass({
  getInitialState: function() {
    return {
      showModal: false,
      cancelTimeout: false,
      signupSuccess: false,
      videoStatus: "stopped"
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
  getPosition: function() {
    if (!this.stickyContainer || !this.stickyContainer.getClientRects()[0]) {
      return 0;
    }
    return this.stickyContainer.getClientRects()[0].top + window.scrollY - window.innerHeight + this.stickyContent.children[0].offsetHeight;
  },
  onEnd: function() {
    this.setState({
      videoStatus: "ended"
    });
    reactGA.event({
      category: "Video",
      action: "Video Ended",
      label: this.props.params.video
    });
  },
  onStart: function() {
    if (this.state.videoStatus === "ended") {
      reactGA.event({
        category: "Video",
        action: "Video Replayed",
        label: this.props.params.video
      });
    } else if (this.state.videoStatus === "stopped") {
      reactGA.event({
        category: "Video",
        action: "Video Played",
        label: this.props.params.video
      });
    }

    this.setState({
      videoStatus: "playing"
    });
  },
  onNew: function() {
    this.setState({
      videoStatus: "playing"
    });
  },
  render: function() {
    var className = "safety";
    if (this.props.test) {
      className += " " + this.props.test;
    }

    const video = this.props.params.video;
    var displayItem = null;
    var itemIndex = 0;
    var items = [];
    var currentIndex = 0;

    galleryData.forEach((item, index) => {
      if (video === item.slug) {
        itemIndex = index;
        displayItem = (
          <DisplayItem item={item} itemIndex={itemIndex}
            onEnd={this.onEnd}
            onStart={this.onStart}
            onNew={this.onNew}
            videoStatus={this.state.videoStatus}
          />
        );
        currentIndex = 1;
        if (this.state.videoStatus === "ended") {
          items.splice(0, 0, (
            <div key={item.slug} className="next-video-sticky-container">
              <div ref={(element) => { this.stickyContainer = element; }}>
                <StickyContainer stickyTo={this.getPosition}>
                  <div className="sticky-content" ref={(element) => { this.stickyContent = element; }}>
                    <NextVideo onClick={this.onNew} itemIndex={itemIndex}/>
                  </div>
                </StickyContainer>
              </div>
            </div>
          ));
        } else {
          items.splice(0, 0, <div key={item.slug} className="sticky-position-placeholder"></div>);
        }
      } else {
        items.splice(currentIndex, 0, (
          <GalleryItem key={item.slug} item={item} onClick={this.onNew}/>
        ));
        currentIndex++;
      }
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
                <div><span className="white">Thanks!</span> <span className="light">Please check your inbox or your spam filter for an email from us to confirm your subscription.</span>
                </div>
              </div>
              <button onClick={this.closeModal}>yes, I got it</button>
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

    if (displayItem) {
      className += " display-item-page";
    } else {
      className += " safety-home-page";
    }

    return (
      <div className={className}>
        {modal}
        <div className="safety-page">
          {header}
          <SignupCta onCta={this.openModal} subscribed={this.props.subscribed}/>
          {displayItem}
          <SafetyGallery>
            {items}
          </SafetyGallery>
        </div>
        <Footer shareLink="http://share.mozilla.org/352/181351"/>
      </div>
    );
  }
});

module.exports = Safety;
