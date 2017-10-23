import React from 'react';
import debounce from 'debounce';
import Footer from '../../components/buyers-guide/footer.js';
import Header from '../../components/buyers-guide/header.js';
import { FormattedHTMLMessage } from 'react-intl';

var BuyersGuide = React.createClass({
  contextTypes: {
    intl: React.PropTypes.object
  },
  render: function() {
    const headerClassName = "header-section";
    const footerClassName = "footer";
    const locale = this.context.intl.locale;

    return (
      <div className="buyers-guide buyers-guide-why">
        <Header/>
        <section className={headerClassName}>
          <header className="header-image">
            <div className="center-header">
              <h1 className="playfair">
                {this.context.intl.formatMessage({id: 'wwmt_main_title'})}
              </h1>
              <a className="button" href={"/" + locale + "/buyers-guide/"}>
                {this.context.intl.formatMessage({id: 'wwmt_button_text'})}
              </a>
            </div>
          </header>
        </section>
        <div className={footerClassName}>
          <section>
            <div className="content">
              <h2>
                {this.context.intl.formatMessage({id: 'wwmt_title_1'})}
              </h2>
              <p className="playfair fancy-letter">
                {this.context.intl.formatMessage({id: 'wwmt_1'})}
              </p>
              <h2>
                {this.context.intl.formatMessage({id: 'wwmt_title_2'})}
              </h2>
              <p className="playfair">
                {this.context.intl.formatMessage({id: 'wwmt_2'})}
              </p>
              <p className="playfair">
                {this.context.intl.formatMessage({id: 'wwmt_3'})}
              </p>
              <div>
                {this.context.intl.formatMessage({id: 'wwmt_question'})}
              </div>
              <ol>
                <li>
                  {this.context.intl.formatMessage({id: 'wwmt_question_1'})}
                </li>
                <li>
                  {this.context.intl.formatMessage({id: 'wwmt_question_2'})}
                </li>
                <li>
                  {this.context.intl.formatMessage({id: 'wwmt_question_3'})}
                </li>
              </ol>
              <p className="playfair">
                {this.context.intl.formatMessage({id: 'wwmt_4'})}
              </p>
              <p className="playfair">
                {this.context.intl.formatMessage({id: 'wwmt_5'})}
              </p>
              <p className="playfair">
                {this.context.intl.formatMessage({id: 'wwmt_6'})}
              </p>
              <h2>
                {this.context.intl.formatMessage({id: 'wwmt_title_3'})}
              </h2>
              <p className="playfair">
                {this.context.intl.formatMessage({id: 'wwmt_7'})}
              </p>
              <p className="playfair">
                {this.context.intl.formatMessage({id: 'wwmt_8'})}
              </p>
              <p className="playfair">
                {this.context.intl.formatMessage({id: 'wwmt_9'})}
              </p>
              <p className="playfair">
                {this.context.intl.formatMessage({id: 'wwmt_10'})}
              </p>
              <p className="playfair">
                {this.context.intl.formatMessage({id: 'wwmt_11'})}
              </p>
              <div>
                {this.context.intl.formatMessage({id: 'wwmt_thank_you'})}
              </div>
              <div>
                {this.context.intl.formatMessage({id: 'wwmt_signature'})}
              </div>
              <p className="playfair">
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
