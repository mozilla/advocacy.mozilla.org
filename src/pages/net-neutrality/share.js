import React  from 'react';
import Footer from '../../components/net-neutrality/footer.js';
import Social from '../../components/net-neutrality/social.js';
import { SimpleNav } from '../../components/net-neutrality/nav.js';

var Signup = React.createClass({
  contextTypes: {
    intl: React.PropTypes.object
  },
  render: function() {
    var className = "share";
    if (this.props.test) {
      className += " " + this.props.test;
    }
    return (
      <div className={className}>
        <div className="page">
          <SimpleNav/>
          <div className="share-page-container">
            <div className="share-page-content-container">
              <div className="share-page-content">
                <h2>
                  Thanks for signing up!
                </h2>
                <p>
                  Will you use one of the buttons below to spread the word?
                </p>
                <Social/>
              </div>
            </div>
          </div>
        </div>
        <Footer/>
      </div>
    );
  }
});

module.exports = Signup;
