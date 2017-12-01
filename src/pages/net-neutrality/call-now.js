import React  from 'react';
import Footer from '../../components/net-neutrality/footer.js';
import CallTool from '../../components/net-neutrality/call-tool.js';
import { SimpleNav } from '../../components/net-neutrality/nav.js';

import { FormattedHTMLMessage } from 'react-intl';

var Resources = React.createClass({
  contextTypes: {
    intl: React.PropTypes.object
  },
  isAfterOct29: function() {
    var date = new Date();
    date.setUTCHours(date.getUTCHours() + 2);
    var day = date.getUTCDate();
    var month = date.getUTCMonth();
    if (month >= 9 && day >= 29) {
      return true;
    }
    return false;
  },
  render: function() {
    var className = "call-now";
    if (this.props.test) {
      className += " " + this.props.test;
    }
    var hoursString = "business_hours_cest";
    var hoursString = "business_hours_cest";
    if (this.isAfterOct29()) {
      hoursString = "business_hours_cet";
    }
    return (
      <div className={className}>
        <div className="page">
          <SimpleNav active="call-now" useLangPicker={true}/>
          <section>
            <h1>{this.context.intl.formatMessage({id: 'call_tool_headline'})}</h1>

            <ol>
              <li>
                <p className="bold">
                  {this.context.intl.formatMessage({id: 'closed_for_business'})}
                  {" "}
                  {this.context.intl.formatMessage({id: hoursString})}
                </p>
              </li>
              <li>
                <p className="bold">{this.context.intl.formatMessage({id: 'script_step_1'})}</p>
              </li>
              <li>
                <p className="bold">{this.context.intl.formatMessage({id: 'script_step_2'})}</p>
              </li>
              <li>
                <p className="bold">{this.context.intl.formatMessage({id: 'script_step_3'})}</p>
              </li>
              <li>
                <p className="bold">{this.context.intl.formatMessage({id: 'script_step_4'})}</p>

                <p><FormattedHTMLMessage id='script_desc_1'/></p>
                <p><FormattedHTMLMessage id='script_desc_2'/></p>
                <p><FormattedHTMLMessage id='script_desc_3'/></p>
                <p><FormattedHTMLMessage id='script_desc_4'/></p>
              </li>
            </ol>
          </section>
          <CallTool/>
        </div>
        <Footer/>
      </div>
    );
  }
});

module.exports = Resources;
