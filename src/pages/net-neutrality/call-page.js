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
              {this.context.intl.formatMessage({id: 'explanation_title'})}
            </h1>
            <Impact
              header={this.context.intl.formatMessage({id: 'explanation_technologist'})}
              icon="/assets/images/01_Technologist.png"
            >
              {this.context.intl.formatMessage({id: 'explanation_technologist_desc'})}
              &nbsp;
              <a href={`/${this.context.intl.locale}/net-neutrality/impact#technologist`}>
                {this.context.intl.formatMessage({id: 'explanation_learn_more'})}
              </a>
            </Impact>
            <Impact
              header={this.context.intl.formatMessage({id: 'explanation_creator_innovator'})}
              icon="/assets/images/02_Creator.png"
            >
              {this.context.intl.formatMessage({id: 'explanation_creator_innovator_desc'})}
              &nbsp;
              <a href={`/${this.context.intl.locale}/net-neutrality/impact#creator-innovator`}>
                {this.context.intl.formatMessage({id: 'explanation_learn_more'})}
              </a>
            </Impact>
            <Impact
              header={this.context.intl.formatMessage({id: 'explanation_scientists_librarian'})}
              icon="/assets/images/03_Librarian.png"
            >
              {this.context.intl.formatMessage({id: 'explanation_scientists_librarian_desc'})}
              &nbsp;
              <a href={`/${this.context.intl.locale}/net-neutrality/impact#scientist-librarian`}>
                {this.context.intl.formatMessage({id: 'explanation_learn_more'})}
              </a>
            </Impact>
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
