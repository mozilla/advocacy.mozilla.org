var React = require('react');

module.exports = React.createClass({
  getInitialState: function() {
    return {email: ''};
  },
  render: function() {

    return (
      <div className={this.props.className}>
        {this.props.children}
        <input type="email" ref="inputElement" className="input" name="email" value={this.state.email} onChange={this.onEmailChange} placeholder="Email Address"/>
        <input type="email" ref="inputElement" className="input"  name="email" value={this.state.email} onChange={this.onEmailChange} placeholder="Email Address"/>
        <input type="email" ref="inputElement" className="input"  name="email" value={this.state.email} onChange={this.onEmailChange} placeholder="Email Address"/>
        <div className="checkboxDiv">
          <input type="checkbox"/>
          <div className="label">
            I'm okay with you handling this info as you explain in your privacy policy.
          </div>
        </div>
      </div>
    );
  }

});
