import React from 'react';
import StickyContainer from './sticky-container.js';
import reactGA from 'react-ga';

var SignupContainer = React.createClass({
  mobileGetInvolved: function() {
    reactGA.event({
      category: "Signup",
      action: "Form Step",
      label: "Get Involved Clicked"
    });
  },
  getPosition: function() {
    if (!this.stickyContainer) {
      return 0;
    }
    return this.stickyContainer.getClientRects()[0].top + this.stickyContent.offsetHeight + window.scrollY - window.innerHeight;
  },
  render: function() {
    return (
      <div>
        <div ref={(element) => { this.stickyContainer = element; }}>
          <StickyContainer className="sticky-container" stickyTo={this.getPosition}>
            <div className="sticky-content" ref={(element) => { this.stickyContent = element; }}>
              <a onClick={this.mobileGetInvolved} className="get-involved button arrow" href="#get-involved">
                {this.props.cta}
              </a>
            </div>
          </StickyContainer>
        </div>
        {this.props.children}
      </div>
    );
  }
});
module.exports = SignupContainer;
