import React  from 'react';
import Footer from '../../components/net-neutrality/footer.js';
import CallTool from '../../components/net-neutrality/call-tool.js';
import { SimpleNav } from '../../components/net-neutrality/nav.js';

var Resources = React.createClass({
  contextTypes: {
    intl: React.PropTypes.object
  },
  render: function() {
    var className = "call-now";
    if (this.props.test) {
      className += " " + this.props.test;
    }
    return (
      <div className={className}>
        <div className="page">
          <SimpleNav active="call-now"/>
          <section>
            <h1>Here’s how to make the call</h1>

            <ol>
              <li>
                <p className="bold">Make sure you have your phone nearby.</p>
              </li>
              <li>
                <p className="bold">Enter your phone number in the box below and click the “call now” button.</p>
              </li>
              <li>
                <p className="bold">Answer your phone when it rings, and you’ll be connected to a Member of Congress.*</p>
              </li>
              <li>
                <p className="bold">Read the script below:</p>

                <p>“Hi, I’m <b>[first name, last name]</b> and I’m from <b>[city, state]</b>.”</p>
                <p>“I want to discuss Net Neutrality. I am a <b>[technologist, creator, scientist, journalist, librarian, artist, etc.]</b> and I believe in keeping the web open and fair. I don’t believe ISPs should have the power to pick and choose our online content.”</p>
                <p>“Please speak out against Chairman Pai’s adopted rules and do all you can to reverse the effects of the vote that took place on December 14.”</p>
                <p>“Thank you for your time”</p>
              </li>
            </ol>
            <small style={{"margin-bottom":"1em","display":"block"}}>*Because of split zipcodes there's a chance you'll be put through to a different representative. No worries, have a conversation with the office and ask them to transfer you. Reaching more people on this issue helps!</small>
          </section>
          <CallTool/>
        </div>
        <Footer/>
      </div>
    );
  }
});

module.exports = Resources;
