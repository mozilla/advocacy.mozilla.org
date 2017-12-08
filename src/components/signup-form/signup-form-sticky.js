import React from 'react';

var Signup = React.createClass({
  contextTypes: {
    intl: React.PropTypes.object
  },
  getInitialState: function() {
    var previousViewportTop = 0;
    var navHeight = 0;
    if (typeof window === 'object') {
      previousViewportTop = window.scrollY + navHeight;
    }
    return {
      formTop: 0,
      formPosition: "absolute",
      previousViewportTop,
      formPaddingBottom: 0,
      formPaddingTop: 0
    };
  },
  componentDidMount: function() {
    document.addEventListener(`scroll`, this.onScroll);
    document.addEventListener(`resize`, this.onResize);
    setTimeout(this.onScroll);
    this.setState({
      formPaddingBottom: parseInt(getComputedStyle(this.formElement).marginBottom),
      formPaddingTop: parseInt(getComputedStyle(this.formElement).marginTop)
    });
  },
  componentWillUnmount: function() {
    document.removeEventListener(`resize`, this.onResize);
    document.removeEventListener(`scroll`, this.onScroll);
  },
  onResize: function() {
    this.onScroll(false, true);
  },
  onScroll: function(e, resize) {
    var formHeight = this.formElement.offsetHeight;

    if (window.innerWidth <= 992 ) {
      return;
    }

    var formTop = this.state.formTop;
    var formPosition = this.state.formPosition;
    var viewportPadding = this.props.viewportPadding;
    var navHeight = 65;
    var formBottomPadding = this.state.formPaddingBottom;
    var formTopPadding = this.state.formPaddingTop;
    var formPaddingHeight = formTopPadding + formHeight + formBottomPadding;
    var formViewHeight = viewportPadding + formHeight + viewportPadding;
    var windowHeight = window.innerHeight - navHeight;
    var viewportTop = window.scrollY + navHeight;
    var previousViewportTop = this.state.previousViewportTop;
    var delta = previousViewportTop - viewportTop;
    var viewportBottom = viewportTop + windowHeight;
    var formContainerHeight = this.formContainerElement.offsetHeight;
    var formContainerTop = this.formContainerElement.offsetTop;
    var formElementTop = this.formElement.offsetTop;
    var visibleFormHeight = formViewHeight;
    if (visibleFormHeight > windowHeight) {
      visibleFormHeight = windowHeight;
    }

    // If the view is above the form container,
    // just plop the form at the top of the container.
    if (viewportTop + viewportPadding <= formContainerTop + formTopPadding) {
      formPosition = "absolute";
      formTop = 0;
    // If the form bottom is touching the bottom of the container,
    // just plop the form at the bottom of the container.
    } else if (viewportTop - (formContainerTop + viewportPadding) + visibleFormHeight >= formContainerHeight - formBottomPadding) {
      formPosition = "absolute";
      formTop = formContainerHeight - formPaddingHeight;
    // If the form height can fit in the viewport height,
    // just stick it to the top.
    } else if (formViewHeight <= windowHeight) {
      formPosition = "fixed";
      formTop = navHeight + viewportPadding - formTopPadding;
    } else if (formPosition === "absolute") {
      // Scroll down.
      // If the form bottom is at the bottom of the viewport,
      // position fix it to the bottom of the viewport.
      if (delta < 0 && viewportBottom - formContainerTop >= formElementTop + formHeight + viewportPadding) {
        formPosition = "fixed";
        formTop = window.innerHeight - formHeight - formTopPadding - viewportPadding;
      // Scroll up.
      // If the form top is at the top of the viewport,
      // position fix it to the top of the viewport.
      } else if (delta > 0 && viewportTop - formContainerTop <= formElementTop - viewportPadding) {
        formPosition = "fixed";
        formTop = navHeight + viewportPadding - formTopPadding;
      }
    } else if (formPosition === "fixed") {
      // If the scroll is inside the form,
      // make the form absolute positioned.
      // Scrolling down.
      if (delta < 0 && formElementTop + navHeight >= viewportPadding) {
        formTop = viewportTop - formContainerTop - formTopPadding - navHeight + formElementTop;
        formPosition = "absolute";
      // Scrolling up.
      } else if (delta > 0 && formElementTop + navHeight < viewportPadding) {
        formTop = viewportTop - formContainerTop - formTopPadding - navHeight + formElementTop;
        formPosition = "absolute";
      // If we resized, we may be in an unexpected spot.
      } else if (resize) {
        formTop = viewportTop - formContainerTop - formTopPadding - navHeight + formElementTop;
        formPosition = "absolute";
      }
    }

    this.setState({ formTop, formPosition, previousViewportTop: viewportTop });
  },
  render: function() {
    return (
      <div  ref={(element) => { this.formContainerElement = element; }} className="signup-form-container">
        <div id="get-involved" className="nav-anchor"></div>
        <div ref={(element) => { this.formElement = element; }} className="signup-form" style={{top: this.state.formTop + "px", position: this.state.formPosition}}>
          {this.props.children}
        </div>
      </div>
    );
  }
});

module.exports = Signup;
