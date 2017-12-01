import React  from 'react';
import Footer from '../../components/net-neutrality/footer.js';
import { SimpleNav } from '../../components/net-neutrality/nav.js';
import CallButton from '../../components/net-neutrality/call-button.js';
import SignupForm from '../../components/net-neutrality/signup-form.js';
import StickyContainer from '../../components/net-neutrality/sticky-container.js';
import { FormattedMessage } from 'react-intl';
import { FormattedHTMLMessage } from 'react-intl';

var Impact = React.createClass({
  render: function() {
    return (
      <div className="impact-item-container">
        <a href={this.props.href}>
          <img height="237" width="219" src={this.props.icon}/>
          <div>
            <h2>{this.props.children}</h2>
          </div>
        </a>
      </div>
    );
  }
});

var Resources = React.createClass({
  contextTypes: {
    intl: React.PropTypes.object
  },
  getPosition: function() {
    if (!this.stickyContainer) {
      return 0;
    }
    return this.stickyContainer.getClientRects()[0].top + this.stickyContent.offsetHeight + window.scrollY - window.innerHeight;
  },
  render: function() {
    var className = "impact";
    if (this.props.test) {
      className += " " + this.props.test;
    }
    return (
      <div className={className}>
        <div className="page">
          <SimpleNav active="impact" useLangPicker={true}/>
          <section>
            <h1>{this.context.intl.formatMessage({id: 'impact_main_title'})}</h1>
            <div className="impact-items-container">
              <Impact href="#technologist" icon="/assets/images/01_Technologist.png">
                {this.context.intl.formatMessage({id: 'impact_technologist'})}
              </Impact>
              <Impact href="#creator-innovator" icon="/assets/images/02_Creator.png">
                {this.context.intl.formatMessage({id: 'impact_creator_innovator'})}
              </Impact>
              <Impact href="#scientist-librarian" icon="/assets/images/03_Librarian.png">
                {this.context.intl.formatMessage({id: 'impact_scientist_librarian'})}
              </Impact>
            </div>
          </section>
          <section>
            <h1 id="technologist">
              {this.context.intl.formatMessage({id: 'technologist_section'})}
            </h1>
            <h3>
              {this.context.intl.formatMessage({id: 'technologist_article_11_title'})}
            </h3>
            <p className="question">
              {this.context.intl.formatMessage({id: 'article_explanation_subtitle'})}
            </p>
            <p>
              <FormattedMessage
                id='technologist_article_11_desc1'
                values={{
                  spainLink: (<a href="http://www.communia-association.org/2015/09/09/research-confirms-new-spanish-ancillary-copyright-is-actually-good-for-no-one/">{this.context.intl.formatMessage({id: 'spain_link'})}</a>),
                  germanyLink: (<a href="http://www.project-disco.org/intellectual-property/091715-german-and-spanish-competition-authorities-got-it-right-on-the-ancillary-copyright-for-press-publishers/#.WW3eWIZLeV4">{this.context.intl.formatMessage({id: 'germany_link'})}</a>)
                }}
              />
              {' '}
              {this.context.intl.formatMessage({id: 'technologist_article_11_desc2'})}
            </p>
            <p>
              {this.context.intl.formatMessage({id: 'technologist_article_11_desc3'})}
            </p>
            <p className="question">
              {this.context.intl.formatMessage({id: 'our_fight_explanation_subtitle'})}
            </p>
            <p>
              {this.context.intl.formatMessage({id: 'technologist_article_11_fight1'})}
              {' '}
              {this.context.intl.formatMessage({id: 'technologist_article_11_fight2'})}
              {' '}
              {this.context.intl.formatMessage({id: 'technologist_article_11_fight3'})}
            </p>
            <p>
              <a href="http://copyright4creativity.eu/wp-content/uploads/2017/01/DCDSM-Article11-C4CFactsheet.pdf">
                {this.context.intl.formatMessage({id: 'technologist_learn_more'})}
              </a>
            </p>

            <h3>
              {this.context.intl.formatMessage({id: 'technologist_article_13_title'})}
            </h3>
            <p className="question">
              {this.context.intl.formatMessage({id: 'article_explanation_subtitle'})}
            </p>
            <p>
              {this.context.intl.formatMessage({id: 'technologist_article_13_desc1'})}
            </p>
            <p>
              {this.context.intl.formatMessage({id: 'technologist_article_13_desc2'})}
              {' '}
              {this.context.intl.formatMessage({id: 'technologist_article_13_desc3'})}
            </p>
            <p className="question">
              {this.context.intl.formatMessage({id: 'our_fight_explanation_subtitle'})}
            </p>
            <p>
              {this.context.intl.formatMessage({id: 'technologist_article_13_fight1'})}
              {' '}
              {this.context.intl.formatMessage({id: 'technologist_article_13_fight2'})}
              {' '}
              {this.context.intl.formatMessage({id: 'technologist_article_13_fight3'})}
            </p>
            <p>
              <a href="http://copyright4creativity.eu/wp-content/uploads/2016/12/DCDSM-Article13-C4CFactsheet.pdf">
                {this.context.intl.formatMessage({id: 'technologist_learn_more'})}
              </a>
            </p>
          </section>
          <section>
            <div className="horizontal-rule"></div>
            <h1 id="creator-innovator">
              {this.context.intl.formatMessage({id: 'creator_innovator_section'})}
            </h1>
            <h3>
              {this.context.intl.formatMessage({id: 'creator_innovator_ugc_title'})}
            </h3>
            <p className="question">
              {this.context.intl.formatMessage({id: 'article_explanation_subtitle'})}
            </p>
            <p>
              {this.context.intl.formatMessage({id: 'creator_innovator_ugc_desc1'})}
              {' '}
              {this.context.intl.formatMessage({id: 'creator_innovator_ugc_desc2'})}
            </p>
            <p className="question">
              {this.context.intl.formatMessage({id: 'our_fight_explanation_subtitle'})}
            </p>
            <p>
              {this.context.intl.formatMessage({id: 'creator_innovator_ugc_fight'})}
            </p>
            <p>
              <a href="http://www.communia-association.org/2017/06/15/keeping-eye-fine-print-ugc-exception-juri-committee/">
                {this.context.intl.formatMessage({id: 'creator_innovator_learn_more'})}
              </a>
            </p>
          </section>
          <section>
            <div className="horizontal-rule"></div>
            <h1  id="scientist-librarian">
              {this.context.intl.formatMessage({id: 'scientist_librarian_section'})}
            </h1>
            <h3>
              {this.context.intl.formatMessage({id: 'scientist_librarian_article_3_title'})}
            </h3>
            <p className="question">
              {this.context.intl.formatMessage({id: 'article_explanation_subtitle'})}
            </p>
            <p>
              <FormattedHTMLMessage id='scientist_librarian_article_3_desc1'/>
            </p>
            <p>
              {this.context.intl.formatMessage({id: 'scientist_librarian_article_3_desc2'})}
            </p>
            <p className="question">
              {this.context.intl.formatMessage({id: 'our_fight_explanation_subtitle'})}
            </p>
            <p>
              {this.context.intl.formatMessage({id: 'scientist_librarian_article_3_fight1'})}
              {' '}
              {this.context.intl.formatMessage({id: 'scientist_librarian_article_3_fight2'})}
            </p>
            <p>
              {this.context.intl.formatMessage({id: 'scientist_librarian_article_3_fight3'})}
            </p>
            <p>
              <a href="http://libereurope.eu/text-data-mining/">
                {this.context.intl.formatMessage({id: 'scientist_librarian_learn_more'})}
              </a>
            </p>

          </section>
          <div ref={(element) => { this.stickyContainer = element; }}>
            <StickyContainer className="sticky-container" stickyTo={this.getPosition}>
              <div className="sticky-content" ref={(element) => { this.stickyContent = element; }}>
                <CallButton/>
              </div>
            </StickyContainer>
          </div>
          <SignupForm/>
        </div>
        <Footer/>
      </div>
    );
  }
});

module.exports = Resources;
