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
        title="contribute_title"
        overview={{
          duration: "duration_50_min",
          activityNumber: 3,
          activityTotal: 3,
          contents: (
            <div>
              <p><FormattedMessage id="contribute_overview_1"/></p>
              <br />

              <p><FormattedHTMLMessage id="contribute_overview_2"/></p>
              <br />

              <p><FormattedMessage id="contribute_overview_3"/></p>
              <br />
              
              <hr style={{
                width: "100%",
                color: "grey",
                height: "1px",
                marginTop: ".5em"
              }}/>

              <h4><FormattedMessage id="contribute_overview_header_1"/></h4>
              
              <ul className="fancy">
                <li><FormattedMessage id="contribute_overview_list_1"/></li>
                <li><FormattedMessage id="contribute_overview_list_2"/></li>
                <li><FormattedHTMLMessage id="contribute_overview_list_3"/></li>
                <li><FormattedMessage id="contribute_overview_list_4"/></li>
              </ul>
              
              <hr style={{
                width: "100%",
                color: "grey",
                height: "1px",
                marginTop: ".5em"
              }}/>

              <h4><FormattedMessage id="contribute_overview_header_2"/></h4>
              
              <ol className="fancy">
                <li><FormattedMessage id="hack_name_tag"/></li>
                <li><FormattedMessage id="contribute_step3_title"/></li>
                <li><FormattedMessage id="reflection"/></li>
              </ol>
              
              <hr style={{
                width: "100%",
                color: "grey",
                height: "1px",
                marginTop: ".5em",
                marginBottom: "1em"
              }}/>
                
              <h4><FormattedMessage id="contribute_overview_header_3"/></h4>
              <p><FormattedMessage id="contribute_overview_4"/></p>
              <br />
              <p><FormattedMessage id="contribute_overview_5"/></p>
              <br />
              <p>
                <strong><em>
                  <FormattedMessage id="contribute_overview_6"/>
                </em></strong>
              </p>
              <br />

              <ol className="fancy">
                <li><FormattedMessage id="contribute_overview_list_5"/></li>
                <li><FormattedMessage id="contribute_overview_list_6"/></li>
              </ol>
                
              <hr style={{
                width: "100%",
                color: "grey",
                height: "1px",
                marginTop: ".5em",
                marginBottom: "1em"
              }}/>
                

              <p><strong><em><FormattedMessage id="contribute_overview_7"/></em></strong></p><br />
              
              <ol className="fancy">
                <li><FormattedMessage id="contribute_overview_list_7"/></li>
                <li><FormattedMessage id="contribute_overview_list_8"/></li>
                <li><FormattedMessage id="contribute_overview_list_9"/></li>
                <li><FormattedMessage id="contribute_overview_list_10"/></li>
                <li><FormattedMessage id="contribute_overview_list_11"/></li>
                <li><FormattedMessage id="contribute_overview_list_12"/></li>
                <li><FormattedMessage id="contribute_overview_list_13"/></li>
              </ol>
               
              <hr style={{
                width: "100%",
                color: "grey",
                height: "1px",
                marginTop: ".5em",
                marginBottom: "1em"
              }}/>

              <p><strong><em><FormattedMessage id="contribute_overview_8"/></em></strong></p><br />
              
              <ol className="fancy">
                <li><FormattedMessage id="contribute_overview_list_14"/></li>
                <li><FormattedMessage id="contribute_overview_list_15"/></li>
                <li><FormattedMessage id="contribute_overview_list_16"/></li>
                <li><FormattedMessage id="contribute_overview_list_17"/></li>
                <li><FormattedHTMLMessage id="contribute_overview_list_18"/></li>
                <li><FormattedMessage id="contribute_overview_list_19"/></li>
                <li><FormattedMessage id="contribute_overview_list_20"/></li>
                <li><FormattedMessage id="contribute_overview_list_21"/></li>
              </ol>
            </div>
          )
        }}
        steps={[
          {
            title: "contribute_step1_title",
            contents: (
              <div>
                <p><FormattedMessage id="contribute_step_1_1"/></p>

                <ul className="fancy">
                  <li><FormattedMessage id="contribute_step_1_list_1"/></li>
                  <li><FormattedMessage id="contribute_step_1_list_2"/></li>
                  <li><FormattedMessage id="contribute_step_1_list_3"/></li>
                  <li><FormattedMessage id="contribute_step_1_list_4"/></li>
                  <li><FormattedMessage id="contribute_step_1_list_5"/></li>
                </ul>

                <p><FormattedMessage id="contribute_step_1_2"/></p>
                <p><FormattedMessage id="contribute_step_1_3"/></p>
                <p><FormattedMessage id="contribute_step_1_4"/></p>
                <p><FormattedHTMLMessage id="contribute_step_1_5"/></p>
              </div>
            )
          },
          {
            title: "hack_name_tag",
            duration: "duration_10_min",
            contents: (
              <div>
                <p><FormattedMessage id="contribute_step_2_1"/></p>
                <p><FormattedMessage id="contribute_step_2_2"/></p>

                <ul className="fancy">
                  <li><FormattedMessage id="contribute_step_2_list_1"/></li>
                  <li><FormattedMessage id="contribute_step_2_list_2"/></li>
                </ul>

                <p><FormattedMessage id="contribute_step_2_3"/></p>
                <p><FormattedMessage id="contribute_step_2_4"/></p>
              </div>
            )
          },
          {
            title: "contribute_step3_title",
            duration: "duration_10_min",
            contents: (
              <div>
                <p><FormattedMessage id="contribute_step_3_1"/></p>
                <p><FormattedHTMLMessage id="contribute_step_3_2"/></p>
                <p><FormattedMessage id="contribute_step_3_3"/></p>
                
                <ul className="fancy">
                  <li><FormattedMessage id="contribute_step_3_list_4"/></li>
                  <li><FormattedMessage id="contribute_step_3_list_5"/></li>
                  <li><FormattedMessage id="contribute_step_3_list_6"/></li>
                </ul>
                
                <p><FormattedMessage id="contribute_step_3_4"/></p>
                <p><FormattedMessage id="contribute_step_3_5"/></p>
                <p><FormattedMessage id="contribute_step_3_6"/></p>
                <p>
                  <strong><em>
                    <FormattedMessage id="contribute_step_3_7"/>
                  </em></strong>
                </p>
                <p><FormattedMessage id="contribute_step_3_8"/></p>
                <p><FormattedMessage id="contribute_step_3_9"/></p>
                <p><FormattedHTMLMessage id="contribute_step_3_10"/></p>
                
                <ul className="fancy">
                  <li><FormattedHTMLMessage id="contribute_step_3_list_7"/></li>
                  <li><FormattedHTMLMessage id="contribute_step_3_list_8"/></li>
                  <li><FormattedHTMLMessage id="contribute_step_3_list_9"/></li>
                </ul>
                
                <p><FormattedMessage id="contribute_step_3_11"/></p>
                
                <p style={{
                  textAlign: "center"
                }}>
                  <img src="/assets/maker-party/7448470392_1123568420_z.jpg" width="90%" alt="An image of a child completing a treasure hunt checklist on a piece of paper" />
                  <br />
                  <em style={{
                    fontSize: ".9em"
                  }}><FormattedHTMLMessage id="contribute_step_3_21"/></em>
                </p>
                
                <p><FormattedMessage id="contribute_step_3_12"/></p>
                <p><FormattedHTMLMessage id="contribute_step_3_13"/></p>
                <p><FormattedMessage id="contribute_step_3_14"/></p>
                <p><FormattedMessage id="contribute_step_3_15"/></p>
                <p><FormattedHTMLMessage id="contribute_step_3_16"/></p>
                <p><FormattedMessage id="contribute_step_3_17"/></p>
                <p><FormattedMessage id="contribute_step_3_18"/></p>
                <p><FormattedMessage id="contribute_step_3_19"/></p>
                
                <ol className="fancy">
                  <li><FormattedMessage id="contribute_step_3_list_1"/></li>
                  <li><FormattedMessage id="contribute_step_3_list_2"/></li>
                  <li><FormattedHTMLMessage id="contribute_step_3_list_3"/></li>
                </ol>
                  
                <p><FormattedMessage id="contribute_step_3_20"/></p>
              </div>
            )
          },
          {
            title: "reflection",
            duration: "duration_10_min",
            contents: (
              <div>
                <p><FormattedMessage id="contribute_reflection_1"/></p>
                <p><FormattedHTMLMessage id="contribute_reflection_2"/></p>
                <p><FormattedMessage id="contribute_reflection_3"/></p>
                
                <ul className="fancy">
                  <li><FormattedMessage id="contribute_reflection_list_1"/></li>
                  <li><FormattedMessage id="contribute_reflection_list_2"/></li>
                  <li><FormattedMessage id="contribute_reflection_list_3"/></li>
                </ul>
                
                <p><FormattedHTMLMessage id="contribute_reflection_4"/></p>
                <p><FormattedHTMLMessage id="contribute_reflection_5"/></p>
                <p><FormattedHTMLMessage id="contribute_reflection_6"/></p>
                <p><FormattedMessage id="contribute_reflection_7"/></p>
                
                <ul className="fancy">
                  <li><FormattedMessage id="contribute_reflection_list_4"/></li>
                  <li><FormattedMessage id="contribute_reflection_list_5"/></li>
                </ul>
              </div>
            )
          }
        ]}
      />
    );
  }
});
