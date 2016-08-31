var React = require(`react`);
var EncryptFooter = require(`../../components/encrypt-footer.js`);
import { FormattedHTMLMessage } from 'react-intl';


module.exports = React.createClass({
  contextTypes: {
    intl: React.PropTypes.object
  },
  getInitialState: function() {
    return {
      formIsVisible: false,
      didSignUp: false,
    };
  },
  render: function() {
    return (
      <div className="encrypt signup complete">
      <a className="tabzilla" href="https://mozilla.org" aria-label="Mozilla"></a>
        <main>
          <div className="signup-complete">
            <p className="next-step">
              <FormattedHTMLMessage id="signup_next_steps"/>
            </p>
            <p><i className="fa fa-arrow-right"></i><a className="exit-link" href={"/" + this.context.intl.locale + "/encrypt/2"}>{this.context.intl.formatMessage({id: 'take_me_to_encryption'})}</a></p>
          </div>
        </main>
        <EncryptFooter/>
      </div>
    );
  }
});
