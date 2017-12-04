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
            <p>Last week Federal Communications Commission Chairman Ajit Pai revealed the anti-net-neutrality proposal his agency is set to vote on December 14th. <b>These rules are way, way, WAY worse than expected</b>.</p>
            <p>If passed, this would eradicate crucial protections for free speech, competition, and innovation online. It would be legal for big cable companies to create fast lanes, to throttle the speeds of competing websites, or to filter out social media posts they don’t like. <b>This could mean that you pay more for less of the web</b>.</p>
            <p>At this stage of political gamesmanship, Congress holds a powerful sway over this issue.  As constituent outrage grows, they can call on Pai to stall the vote on these awful rules, and to hold him accountable if he goes through with it. There’s already been a groundswell of opposition, but we need to raise the volume even higher so that every elected official knows how toxic Pai’s plan is.</p>
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
