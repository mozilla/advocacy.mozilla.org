var React = require(`react`);
var ActivityTemplate = require('./activity-template.js');
var FormattedMessage = require("react-intl").FormattedMessage;
var FormattedHTMLMessage = require("react-intl").FormattedHTMLMessage;

module.exports = React.createClass({
  contextTypes: {
    intl: React.PropTypes.object
  },
  render: function() {
    return (
      <ActivityTemplate
        title="postcrimes_title"
        overview={{
          duration: "duration_45_min",
          activityNumber: 1,
          activityTotal: 3,
          contents: (
            <div>
              <p><FormattedMessage id="postcrimes_overview_1"/></p><br />
              <p><FormattedHTMLMessage id="postcrimes_overview_2"/></p><br />
              <p><FormattedMessage id="postcrimes_overview_3"/></p>
              <h4><FormattedMessage id="postcrimes_overview_4"/></h4>
              
              <ul className="fancy">
                <li><FormattedMessage id="postcrimes_overview_list_1"/></li>
                <li><FormattedMessage id="postcrimes_overview_list_2"/></li>
                <li><FormattedHTMLMessage id="postcrimes_overview_list_3"/></li>
                <li><FormattedMessage id="postcrimes_overview_list_4"/></li>
              </ul>

              <h4><FormattedMessage id="postcrimes_overview_5"/></h4>
              
              <ol className="fancy">
                <li><FormattedMessage id="hack_name_tag"/></li>
                <li><FormattedMessage id="postcrimes_step2_title"/></li>
                <li><FormattedMessage id="postcrimes_title"/></li>
                <li><FormattedMessage id="reflection"/></li>
              </ol>

              <h4><FormattedMessage id="postcrimes_overview_6"/></h4>
              <p><FormattedMessage id="postcrimes_title"/></p><br />
              <p><FormattedMessage id="postcrimes_overview_8"/></p><br />
              <p><strong><em><FormattedMessage id="postcrimes_overview_9"/></em></strong></p><br />

              <ol className="fancy">
                <li><FormattedMessage id="postcrimes_overview_list_9"/></li>
              </ol>            

              <p><strong><em><FormattedMessage id="postcrimes_overview_10"/></em></strong></p><br />

              <ol className="fancy">
                <li><FormattedMessage id="postcrimes_overview_list_10"/></li>
                <li><FormattedMessage id="postcrimes_overview_list_11"/></li>
              </ol>           

              <p><strong><em><FormattedMessage id="postcrimes_overview_11"/></em></strong></p><br />
              
              <ol className="fancy">
                <li><FormattedMessage id="postcrimes_overview_list_12"/></li>
                <li><FormattedMessage id="postcrimes_overview_list_13"/></li>
                <li><FormattedMessage id="postcrimes_overview_list_14"/></li>
                <li><FormattedHTMLMessage id="postcrimes_overview_list_15"/></li>
                <li><FormattedMessage id="postcrimes_overview_list_16"/></li>
                <li><FormattedMessage id="postcrimes_overview_list_17"/></li>
                <li><FormattedMessage id="postcrimes_overview_list_18"/></li>
              </ol>
            </div>
          )
        }}
        steps={[
          {
            title: "hack_name_tag",
            duration: "duration_10_min",
            contents: (
              <div>
                <p><FormattedMessage id="postcrimes_step_1_1"/></p>
                <p><FormattedMessage id="postcrimes_step_1_2"/></p>
                
                <ul className="fancy">
                  <li><FormattedMessage id="postcrimes_step_1_list_1"/></li>
                  <li><FormattedMessage id="postcrimes_step_1_list_2"/></li>
                </ul>

                <p><FormattedMessage id="postcrimes_step_1_3"/></p>
                <p><FormattedMessage id="postcrimes_step_1_4"/></p>
              </div>
            )
          },
          {
            title: "postcrimes_step2_title",
            duration: "duration_10_min",
            contents: (
              <div>
                <p><FormattedMessage id="postcrimes_step_2_1"/></p>
                
                <ul className="fancy">
                  <li><FormattedMessage id="postcrimes_step_2_list_1"/></li>
                  <li><FormattedMessage id="postcrimes_step_2_list_2"/></li>
                  <li><FormattedMessage id="postcrimes_step_2_list_3"/></li>
                </ul>
                
                <p><FormattedMessage id="postcrimes_step_2_2"/></p>
                <p><FormattedHTMLMessage id="postcrimes_step_2_3"/></p> 
                <p><FormattedHTMLMessage id="postcrimes_step_2_4"/></p>
                <p><FormattedMessage id="postcrimes_step_2_5"/></p>
                <p><FormattedMessage id="postcrimes_step_2_6"/></p>
                <p><FormattedMessage id="postcrimes_step_2_7"/></p>
                <p><FormattedMessage id="postcrimes_step_2_8"/></p>
                <p><FormattedMessage id="postcrimes_step_2_9"/></p>
                <p><FormattedMessage id="postcrimes_step_2_10"/></p>
                <p><FormattedMessage id="postcrimes_step_2_11"/></p>
                <p><FormattedMessage id="postcrimes_step_2_12"/></p>
                
                <ul className="fancy">              
                  <li><FormattedHTMLMessage id="postcrimes_step_2_list_4"/></li>
                  <li><FormattedHTMLMessage id="postcrimes_step_2_list_5"/></li>
                  <li><FormattedHTMLMessage id="postcrimes_step_2_list_6"/></li>
                  <li><FormattedHTMLMessage id="postcrimes_step_2_list_7"/></li>
                </ul>
              </div>
            )
          },
          {
            title: "postcrimes_title",
            duration: "duration_20_min",
            contents: (
              <div>
                <p><FormattedMessage id="postcrimes_step_3_1"/></p>
                <p><FormattedMessage id="postcrimes_step_3_2"/></p>
                
                <ul className="fancy">
                  <li><FormattedMessage id="postcrimes_step_3_list_1"/></li>
                  <li><FormattedMessage id="postcrimes_step_3_list_2"/></li>
                </ul>
              
                <p><FormattedMessage id="postcrimes_step_3_3"/></p>
                
                <ul className="fancy">
                  <li><FormattedHTMLMessage id="postcrimes_step_3_list_3"/></li>
                  <li><FormattedHTMLMessage id="postcrimes_step_3_list_4"/></li>
                  <li><FormattedHTMLMessage id="postcrimes_step_3_list_5"/></li>
                </ul>
                
                <p><FormattedHTMLMessage id="postcrimes_step_3_4"/></p> 
                <p><FormattedMessage id="postcrimes_step_3_5"/></p>
                
                <ol className="fancy">
                  <li><FormattedHTMLMessage id="postcrimes_step_3_list_6"/></li>
                  <li><FormattedMessage id="postcrimes_step_3_list_7"/></li>
                  <li><FormattedMessage id="postcrimes_step_3_list_8"/></li>
                </ol>
                
                <p><FormattedHTMLMessage id="postcrimes_step_3_6"/></p>
                <p><FormattedHTMLMessage id="postcrimes_step_3_7"/></p>
              </div>
            )
          },
          {
            title: "reflection",
            duration: "duration_5_min",
            contents: (
              <div>
                <p><FormattedMessage id="postcrimes_reflection_1"/></p>
                
                <ul className="fancy">
                  <li><FormattedMessage id="postcrimes_reflection_list_1"/></li>
                  <li><FormattedMessage id="postcrimes_reflection_list_2"/></li>
                  <li><FormattedMessage id="postcrimes_reflection_list_3"/></li>
                </ul>

			          <p><FormattedHTMLMessage id="postcrimes_reflection_2"/></p>
              </div>
            )
          }
        ]}
      />
    );
  }
});
