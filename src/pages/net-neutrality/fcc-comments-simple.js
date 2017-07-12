import React  from 'react';
import CommentForm from '../../components/net-neutrality/fcc-comments-form.js';
import CommentFormContainer from '../../components/signup-form/signup-form-container.js';

var Signup = React.createClass({
  render: function() {
    var className = "signup net-neutrality-comments simple-form";
    if (this.props.test) {
      className += " " + this.props.test;
    }

    return (
      <div className={className}>
        <div className="net-neutrality-page page">
          <div id="about" className="nav-anchor nav-offset"></div>
          <div className="signup-container">
            <div className="signup-form-container">
              <div className="signup-form">
                <h4>
                  Tell the FCC to leave net neutrality alone.
                </h4>
                <p className="blue-paragraph">
                  Write your comment below to tell the FCC why net neutrality MUST be protected. We’ll deliver your comment straight to the agency.
                </p>
                <CommentFormContainer cta="Tell the FCC: Leave Net Neutrality Alone">
                  <CommentForm
                    subscribed={this.props.location.query.subscribed}
                    cta="Submit your comment"
                  />
                </CommentFormContainer>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = Signup;
