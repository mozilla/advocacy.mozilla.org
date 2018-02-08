import React from 'react';
import debounce from 'debounce';
import Footer from '../../components/buyers-guide/footer.js';
import Header from '../../components/buyers-guide/header.js';
import { FormattedHTMLMessage } from 'react-intl';
import { Link } from 'react-router';

var BuyersGuide = React.createClass({
  contextTypes: {
    intl: React.PropTypes.object
  },
  render: function() {
    const locale = this.context.intl.locale;

    return (
      <div className="buyers-guide buyers-guide-why">
        <Header title={true}/>
        <div>
          <section>
            <div className="content">
              <h1 className="zilla-slab">
                {this.context.intl.formatMessage({id: 'wwmt_main_title'})}
              </h1>
              <h2 className="zilla-slab">
                {this.context.intl.formatMessage({id: 'wwmt_title_1'})}
              </h2>
              <p className="zilla-slab">
                <FormattedHTMLMessage id='wwmt_1'/>
              </p>
              <h2 className="zilla-slab">
                {this.context.intl.formatMessage({id: 'wwmt_title_2'})}
              </h2>
              <p className="zilla-slab">
                {this.context.intl.formatMessage({id: 'wwmt_2'})}
              </p>
              <p className="zilla-slab">
                {this.context.intl.formatMessage({id: 'wwmt_3'})}
              </p>
              <h2 className="zilla-slab">
                <p>
                  {this.context.intl.formatMessage({id: 'wwmt_question'})}
                </p>
                <p>
                  {this.context.intl.formatMessage({id: 'wwmt_question_1'})}
                </p>
                <p>
                  {this.context.intl.formatMessage({id: 'wwmt_question_2'})}
                </p>
                <p>
                  {this.context.intl.formatMessage({id: 'wwmt_question_3'})}
                </p>
              </h2>
              <p className="zilla-slab">
                {this.context.intl.formatMessage({id: 'wwmt_4'})}
              </p>
              <p className="zilla-slab">
                {this.context.intl.formatMessage({id: 'wwmt_5'})}
              </p>
              <p className="zilla-slab">
                {this.context.intl.formatMessage({id: 'wwmt_6'})}
              </p>
              <h2 className="zilla-slab">
                {this.context.intl.formatMessage({id: 'wwmt_title_3'})}
              </h2>
              <p className="zilla-slab">
                {this.context.intl.formatMessage({id: 'wwmt_7'})}
              </p>
              <p className="zilla-slab">
                <FormattedHTMLMessage id='wwmt_8'/>
              </p>
              <p className="zilla-slab">
                {this.context.intl.formatMessage({id: 'wwmt_9'})}
              </p>
              <p className="zilla-slab">
                {this.context.intl.formatMessage({id: 'wwmt_evergreen10'})}
              </p>

              <h2 className="zilla-slab">
                <p className="zilla-slab">
                  {this.context.intl.formatMessage({id: 'wwmt_11'})}
                </p>
                <br/>
                <p>
                  {this.context.intl.formatMessage({id: 'wwmt_thank_you'})}
                </p>
                <p>
                  {this.context.intl.formatMessage({id: 'wwmt_signature'})}
                </p>
              </h2>

              <p className="zilla-slab">
                {this.context.intl.formatMessage({id: 'wwmt_post_scriptum'})}
              </p>
            </div>
          </section>
          <Footer/>
        </div>
      </div>
    );
  }
});

module.exports = BuyersGuide;
