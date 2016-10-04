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
        title="combined_title"
        overview={{
          duration: "duration_2_3_hours",
          contents: (
            <div>
              <p className="summary"><FormattedHTMLMessage id="combined_overview_1"/></p>
              
              <p><strong><em><FormattedMessage id="combined_overview_2"/></em></strong></p><br />
              
               <ol className="fancy">
                 <li><FormattedMessage id="combined_overview_list_1"/></li>
                 <li><FormattedMessage id="combined_overview_list_2"/></li>
                 <li><FormattedMessage id="combined_overview_list_3"/></li>
                 <li><FormattedMessage id="combined_overview_list_4"/></li>
                 <li><FormattedHTMLMessage id="combined_overview_list_5"/></li>
                 <li><FormattedMessage id="combined_overview_list_6"/></li>
                 <li><FormattedMessage id="combined_overview_list_7"/></li>
                 <li><FormattedMessage id="combined_overview_list_8"/></li>
               </ol>
               
               <h4><FormattedMessage id="combined_overview_3"/></h4>
              
               <ul className="fancy">
                 <li><FormattedMessage id="combined_overview_list_9"/></li>
                 <li><FormattedMessage id="combined_overview_list_10"/></li>
                 <li><FormattedHTMLMessage id="combined_overview_list_11"/></li>
                 <li><FormattedMessage id="combined_overview_list_12"/></li>
               </ul>
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
            title: "postcrimes_title",
            duration: "duration_35_min",
            contents: (
              <div>
                <h4><FormattedMessage id="postcrimes_overview_5"/></h4>
              
                <ol className="fancy">
                  <li><FormattedMessage id="postcrimes_step2_title"/></li>
                  <li><FormattedMessage id="postcrimes_title"/></li>
                  <li><FormattedMessage id="reflection"/></li>
                </ol>
                            
                <h2><FormattedMessage id="postcrimes_step2_title"/></h2>
                <div className="time step-time"><FormattedMessage id="duration_10_min"/></div>

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

                <h2><FormattedMessage id="postcrimes_title"/></h2>
                <div className="time step-time"><FormattedMessage id="duration_20_min"/></div>

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

                <h2><FormattedMessage id="reflection"/></h2>
                <div className="time step-time"><FormattedMessage id="duration_5_min"/></div>

                <p><FormattedMessage id="postcrimes_reflection_1"/></p>
                
                <ul className="fancy">
                  <li><FormattedMessage id="postcrimes_reflection_list_1"/></li>
                  <li><FormattedMessage id="postcrimes_reflection_list_2"/></li>
                  <li><FormattedMessage id="postcrimes_reflection_list_3"/></li>
                </ul>

              </div>
            )
          },
          {
            title: "memearound_title",
            duration: "duration_35_min",
            contents: (
              <div>
                <h4><FormattedMessage id="memearound_overview_6"/></h4>
              
                <ol className="fancy">
                  <li><FormattedMessage id="memearound_step3_title"/></li>
                  <li><FormattedMessage id="memearound_step4_title_b"/></li>
                  <li><FormattedMessage id="reflection"/></li>
                </ol>
                            
                <h2><FormattedMessage id="memearound_step3_title"/></h2>
                <div className="time step-time"><FormattedMessage id="duration_10_min"/></div>

                <p><FormattedMessage id="memearound_step_3_1"/></p>
                <p><FormattedHTMLMessage id="memearound_step_3_2"/></p>
                <p><FormattedMessage id="memearound_step_3_3"/></p> 
                
                <ul className="fancy">
                  <li><FormattedMessage id="memearound_step_3_list_1"/></li>
                  <li><FormattedMessage id="memearound_step_3_list_2"/></li>
                  <li><FormattedMessage id="memearound_step_3_list_3"/></li>
                </ul>
                
                <p><FormattedMessage id="memearound_step_3_4"/></p>
                <p><FormattedMessage id="memearound_step_3_5"/></p>     
                <p><strong><em><FormattedMessage id="memearound_step_3_6"/></em></strong></p>
                <p><FormattedMessage id="memearound_step_3_7"/></p>
                <p><strong><em><FormattedMessage id="memearound_step_3_8"/></em></strong></p>
                <p><em><FormattedMessage id="memearound_step_3_9"/></em></p>
                <p><FormattedHTMLMessage id="memearound_step_3_10"/></p>
                <p><em><FormattedMessage id="memearound_open_norm"/></em></p>
                <p><FormattedHTMLMessage id="memearound_step_3_11"/></p>
                <p><strong><em><FormattedMessage id="memearound_step_3_12"/></em></strong></p>
                <p><FormattedHTMLMessage id="memearound_step_3_13"/></p>
                <p><FormattedMessage id="memearound_step_3_14"/></p>
                
                <p style={{textAlign: "center"}}>
                  <img src="/assets/maker-party/Typical_internet_meme_image_format.svg.png"  width="50%" alt="An image of a meme macro showing where to out top text, bottom text, and the picture" />
                  <br/>
                  <em style={{fontSize: ".9em"}}>
                    <FormattedHTMLMessage id="memearound_step_3_15"/>
                  </em>
                </p>
                
                <p><FormattedMessage id="memearound_step_3_16"/></p>
                
                <p style={{textAlign: "center"}}>
                  <img src="/assets/maker-party/9148130.jpg" width="50%" alt="An image of a meme of a historical expert that says, ‘I don’t know therefore aliens’" />
                  <br/>
                  <em style={{fontSize: ".9em"}}>
                    <FormattedHTMLMessage id="memearound_step_3_17"/>
                  </em>
                </p>
                
                <p style={{textAlign: "center"}}><img src="/assets/maker-party/1241222446876.jpg" width="50%" alt="An image of a meme that shows a velocoraptor saying, 'If actons are stronger than words, why is the pen mightier than the sword?'" / ><br/><em style={{fontSize: ".9em"}}><FormattedHTMLMessage id="memearound_step_3_18"/></em></p>

                <p><FormattedMessage id="memearound_step_3_19"/></p>
                <p><FormattedMessage id="memearound_step_3_20"/></p>
                <p><FormattedMessage id="memearound_step_3_21"/></p>
                <p><FormattedMessage id="memearound_step_3_22"/></p>
                <p><FormattedMessage id="memearound_step_3_23"/></p>
                <p><strong><em><FormattedMessage id="memearound_step_3_24"/></em></strong></p>
                <p><FormattedHTMLMessage id="memearound_step_3_25"/></p>
                <p><FormattedHTMLMessage id="memearound_step_3_26"/></p>
                <p><FormattedHTMLMessage id="memearound_step_3_27"/></p>
                <p><strong><em><FormattedMessage id="memearound_step_3_28"/></em></strong></p>
                <p><FormattedMessage id="memearound_step_3_29"/></p>
                
                <ul className="fancy">
                  <li><FormattedMessage id="memearound_step_3_list_4"/></li>
                  <li><FormattedMessage id="memearound_step_3_list_5"/></li>
                </ul>
                
                <p><FormattedHTMLMessage id="memearound_step_3_30"/></p>
                <p><FormattedMessage id="memearound_step_3_31"/></p>
                <p><FormattedMessage id="memearound_step_3_32"/></p>
                
                <ul className="fancy">
                  <li><FormattedMessage id="memearound_step_3_list_6"/></li>
                  <li><FormattedMessage id="memearound_step_3_list_7"/></li>
                </ul>
                
                <p><FormattedMessage id="memearound_step_3_33"/></p>
                <p><FormattedMessage id="memearound_step_3_34"/></p>

                <ul className="fancy">              
                  <li><FormattedHTMLMessage id="memearound_step_3_list_8"/></li>
                  <li><FormattedHTMLMessage id="memearound_step_3_list_9"/></li>
                  <li><FormattedHTMLMessage id="memearound_step_3_list_10"/></li>
                  <li><FormattedHTMLMessage id="memearound_step_3_list_11"/></li>
                </ul>
                
                <h2><FormattedMessage id="memearound_step4_title"/></h2>
                <div className="time step-time"><FormattedMessage id="duration_20_min"/></div>

                <p><FormattedHTMLMessage id="memearound_step_4_1"/></p>
                <p><FormattedMessage id="memearound_step_4_2"/></p>
                <p><FormattedMessage id="memearound_step_4_3"/></p>
                <p><FormattedMessage id="memearound_step_4_4"/></p>
                
                <ul className="fancy">
                  <li><a href="https://commons.wikimedia.org/wiki/Main_Page"><FormattedMessage id="memearound_step_4_list_1"/></a></li>
                  <li><a href="http://search.creativecommons.org/"><FormattedMessage id="memearound_step_4_list_2"/></a></li>
                  <li><a href="https://www.flickr.com/commons"><FormattedMessage id="memearound_step_4_list_3"/></a></li>
                  <li><a href="https://images.nga.gov/?service=category&action=show_content_page&language=en&category=16"><FormattedMessage id="memearound_step_4_list_4"/></a></li>
                  <li><a href="http://www.nypl.org/blog/2016/01/05/share-public-domain-collections"><FormattedMessage id="memearound_step_4_list_5"/></a></li>
                </ul>
                
                <p><FormattedHTMLMessage id="memearound_step_4_5"/></p>

                <h2><FormattedMessage id="reflection"/></h2>
                <div className="time step-time"><FormattedMessage id="duration_5_min"/></div>

                <p><FormattedMessage id="memearound_reflection_1"/></p>

                <p><FormattedMessage id="combined_reflection_1"/></p>
      
                <ul className="fancy">
                  <li><FormattedMessage id="memearound_reflection_list_4"/></li>
                  <li><FormattedMessage id="memearound_reflection_list_5"/></li>
                  <li><FormattedMessage id="memearound_reflection_list_6"/></li>
                </ul>
              </div>
            )
          },
          {
            title: "contribute_title",
            duration: "duration_40_min",
            contents: (
              <div>
                <h4><FormattedMessage id="contribute_overview_header_2"/></h4>
              
                <ol className="fancy">
                  <li><FormattedMessage id="contribute_step3_title"/></li>
                  <li><FormattedMessage id="reflection"/></li>
                </ol>
                
                
                <h2><FormattedMessage id="contribute_step3_title"/></h2>
                <div className="time step-time"><FormattedMessage id="duration_30_min"/></div>
          
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

                <h2><FormattedMessage id="reflection"/></h2>
                <div className="time step-time"><FormattedMessage id="duration_10_min"/></div>

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
