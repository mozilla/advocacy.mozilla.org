import React  from 'react';
import Footer from '../../components/net-neutrality/footer.js';
import Header from '../../components/net-neutrality/header.js';
import { SimpleNav } from '../../components/net-neutrality/nav.js';
import CallButton from '../../components/net-neutrality/call-button.js';
import SignupForm from '../../components/net-neutrality/signup-form-call.js';

var Impact = React.createClass({
  render: function() {
    return (
      <div className="impact-item-container">
        <img height="219" width="237" src={this.props.icon}/>
        <div>
          <h2>{this.props.header}</h2>
          <p>{this.props.children}</p>
        </div>
      </div>
    );
  }
});

var CallPage = React.createClass({
  contextTypes: {
    intl: React.PropTypes.object
  },
  render: function() {
    var className = "home";
    if (this.props.test) {
      className += " " + this.props.test;
    }
    return (
      <div className={className}>
        <div className="page">
          <div id="home" className="nav-anchor nav-offset"></div>
          <SimpleNav active="home"/>
          <Header/>
          <section>
            <h1>
              How will this impact me?
            </h1>
            <p>Lawmakers are considering a resolution of disapproval that - if passed - will stop Pai’s Net Neutrality order from coming into effect. Ever. The Congressional Review Act (CRA) lets our representatives overturn decisions by agencies like the FCC - that’s why we need to push Congress to make it happen.</p>
            <p>The motion has passed the Senate. Getting the CRA resolution through the House is going to be harder; 20 Republicans need to support the resolution for it to have a chance. But we know that net neutrality isn’t a partisan issue outside of DC.</p>
            <p><strong>That’s where you come in. We know that public pressure can move Congress to do the right thing - the key is to show up.</strong></p>
          </section>
          <CallButton/>
          <SignupForm/>
        </div>
        <Footer/>
      </div>
    );
  }
});

module.exports = CallPage;
