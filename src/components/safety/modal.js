import React from 'react';

var Modal = React.createClass({
  componentDidMount: function() {
    document.querySelector("html").style.overflow = "hidden";
  },
  componentWillUnmount: function() {
    document.querySelector("html").style.overflow = "auto";
  },
  stopClick: function(e) {
    e.stopPropagation();
  },
  render: function() {
    return (
      <div className="safety-modal" onClick={this.props.onClose}>
        <div className="safety-modal-container">
          <div onClick={this.props.onClose} className="modal-close">
            <i className="fa fa-times" aria-hidden="true"></i>
          </div>
          <div onClick={this.stopClick} className="modal-content">
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
});

module.exports = Modal;
