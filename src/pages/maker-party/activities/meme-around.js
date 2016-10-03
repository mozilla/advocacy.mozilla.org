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
        title="memearound_title"
        overview={{
          duration: "duration_45_min",
          activityNumber: 2,
          activityTotal: 3,
          contents: (
            <div>
              <p style={{textAlign: "center"}}>
                <img src="/assets/maker-party/45922429.jpg" width="50%" alt="An image of a meme that shows two animated movite characters with one saying, “Copyright infringement everywhere”"/>
                <br/>
                <em style={{fontSize: ".9em"}}>
                  <FormattedHTMLMessage id="memearound_overview_1"/>
                </em>
              </p>
              <br />
              
              <p><FormattedMessage id="memearound_overview_2"/></p><br/>
              <p><FormattedMessage id="memearound_overview_3"/></p><br/>
              <p><FormattedMessage id="memearound_overview_4"/></p><br/>
              
              <hr style={{
                width: "100%",
                color: "grey",
                height: "1px",
                marginTop: ".5em"
              }}/>
              
              <h4><FormattedMessage id="memearound_overview_5"/></h4>
            
              <ul className="fancy">
                <li><FormattedMessage id="memearound_overview_list_1"/></li>
                <li><FormattedMessage id="memearound_overview_list_2"/></li>
                <li><FormattedMessage id="memearound_overview_list_3"/></li>
                <li><FormattedMessage id="memearound_overview_list_4"/></li>
              </ul>
              
              <hr style={{
                width: "100%",
                color: "grey",
                height: "1px",
                marginTop: ".5em"
              }}/>
              
              <h4><FormattedMessage id="memearound_overview_6"/></h4>
              
              <ol className="fancy">
                <li><FormattedMessage id="hack_name_tag"/></li>
                <li><FormattedMessage id="memearound_step3_title"/></li>
                <li><FormattedMessage id="memearound_step4_title_b"/></li>
                <li><FormattedMessage id="reflection"/></li>
              </ol>

              <hr style={{
                width: "100%",
                color: "grey",
                height: "1px",
                marginTop: ".5em",
                marginBottom: "1em"
              }}/>
                
              <h4><FormattedMessage id="memearound_overview_7"/></h4>
              <p><FormattedMessage id="memearound_overview_8"/></p><br/>
              <p><FormattedMessage id="memearound_overview_9"/></p><br/>
              <p><strong><em><FormattedMessage id="memearound_overview_10"/></em></strong></p><br/>

              <ol className="fancy">
                <li><FormattedMessage id="memearound_overview_list_5"/></li>
                <li><FormattedMessage id="memearound_overview_list_6"/></li>
              </ol>
              

              <hr style={{
                width: "100%",
                color: "grey",
                height: "1px",
                marginTop: ".5em",
                marginBottom: "1em"
              }}/>

              <p><strong><em><FormattedMessage id="memearound_overview_11"/></em></strong></p><br/>
              
              <ol className="fancy">
                <li><FormattedMessage id="memearound_overview_list_7"/></li>
                <li><FormattedMessage id="memearound_overview_list_8"/></li>
                <li><FormattedMessage id="memearound_overview_list_9"/></li>
                <li><FormattedMessage id="memearound_overview_list_10"/></li>
                <li><FormattedMessage id="memearound_overview_list_11"/></li>
                <li><FormattedMessage id="memearound_overview_list_12"/></li>
                <li><FormattedMessage id="memearound_overview_list_13"/></li>
                <li><FormattedMessage id="memearound_overview_list_14"/></li>
              </ol>

              <hr style={{
                width: "100%",
                color: "grey",
                height: "1px",
                marginTop: ".5em",
                marginBottom: "1em"
              }}/>

              <p><strong><em><FormattedMessage id="memearound_overview_12"/></em></strong></p><br/>
            
              <ol className="fancy">
                <li><FormattedMessage id="memearound_overview_list_15"/></li>
                <li><FormattedMessage id="memearound_overview_list_16"/></li>
                <li><FormattedMessage id="memearound_overview_list_17"/></li>
                <li><FormattedMessage id="memearound_overview_list_18"/></li>
                <li><FormattedMessage id="memearound_overview_list_19"/></li>
                <li><FormattedMessage id="memearound_overview_list_20"/></li>
                <li><FormattedMessage id="memearound_overview_list_21"/></li>
                <li><FormattedMessage id="memearound_overview_list_22"/></li>
              </ol>
            </div>
          )
        }}
        steps={[
          {
            title: "contribute_step1_title",
            contents: (
              <div>
                <p><FormattedMessage id="memearound_step_1_1"/></p>
                
                <ul className="fancy">
                  <li><FormattedMessage id="memearound_step_1_list_1"/></li>
                  <li><FormattedMessage id="memearound_step_1_list_2"/></li>
                  <li><FormattedMessage id="memearound_step_1_list_3"/></li>
                  <li><FormattedMessage id="memearound_step_1_list_4"/></li>
                  <li><FormattedMessage id="memearound_step_1_list_5"/></li>
                </ul>
                
                <p><FormattedMessage id="memearound_step_1_2"/></p>
                <p><FormattedMessage id="memearound_step_1_3"/></p>
                <p><FormattedMessage id="memearound_step_1_4"/></p>
                <p><FormattedMessage id="memearound_step_1_5"/></p>
              </div>
            )
          },
          {
            title: "hack_name_tag",
            duration: "duration_10_min",
            contents: (
              <div>
                <p><FormattedMessage id="memearound_step_2_1"/></p>
                <p><FormattedMessage id="memearound_step_2_2"/></p>

                <ul className="fancy">
                  <li><FormattedMessage id="memearound_step_2_list_1"/></li>
                  <li><FormattedMessage id="memearound_step_2_list_2"/></li>
                </ul>

                <p><FormattedMessage id="memearound_step_2_3"/></p>
                <p><FormattedMessage id="memearound_step_2_4"/></p>
              </div>
            )
          },
          {
            title: "memearound_step3_title",
            duration: "duration_20_min",
            contents: (
              <div>
                <p><FormattedMessage id="memearound_step_3_1"/></p>
                <p><FormattedMessage id="memearound_step_3_2"/></p>
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
                <p><FormattedMessage id="memearound_step_3_10"/></p>
                <p><em><FormattedMessage id="memearound_open_norm"/></em></p>
                <p><FormattedMessage id="memearound_step_3_11"/></p>
                <p><strong><em><FormattedMessage id="memearound_step_3_12"/></em></strong></p>
                <p><FormattedMessage id="memearound_step_3_13"/></p>
                <p><FormattedMessage id="memearound_step_3_14"/></p>
                
                <p style={{textAlign: "center"}}>
                  <img src="/assets/maker-party/Typical_internet_meme_image_format.svg.png"  width="50%" alt="An image of a meme macro showing where to out top text, bottom text, and the picture" />
                  <br/>
                  <em style={{fontSize: ".9em"}}>
                    <FormattedMessage id="memearound_step_3_15"/>
                  </em>
                </p>
                
                <p><FormattedMessage id="memearound_step_3_16"/></p>
                
                <p style={{textAlign: "center"}}>
                  <img src="/assets/maker-party/9148130.jpg" width="50%" alt="An image of a meme of a historical expert that says, ‘I don’t know therefore aliens’" />
                  <br/>
                  <em style={{fontSize: ".9em"}}>
                    <FormattedMessage id="memearound_step_3_17"/>
                  </em>
                </p>
                
                <p style={{textAlign: "center"}}><img src="/assets/maker-party/1241222446876.jpg" width="50%" alt="An image of a meme that shows a velocoraptor saying, 'If actons are stronger than words, why is the pen mightier than the sword?'" / ><br/><em style={{fontSize: ".9em"}}><FormattedMessage id="memearound_step_3_18"/></em></p>

                <p><FormattedMessage id="memearound_step_3_19"/></p>
                <p><FormattedMessage id="memearound_step_3_20"/></p>
                <p><FormattedMessage id="memearound_step_3_21"/></p>
                <p><FormattedMessage id="memearound_step_3_22"/></p>
                <p><FormattedMessage id="memearound_step_3_23"/></p>
                <p><strong><em><FormattedMessage id="memearound_step_3_24"/></em></strong></p>
                <p><FormattedMessage id="memearound_step_3_25"/></p>
                <p><FormattedHTMLMessage id="memearound_step_3_26"/></p>
                <p><FormattedHTMLMessage id="memearound_step_3_27"/></p>
                <p><strong><em><FormattedMessage id="memearound_step_3_28"/></em></strong></p>
                <p><FormattedMessage id="memearound_step_3_29"/></p>
                
                <ul className="fancy">
                  <li><FormattedMessage id="memearound_step_3_list_4"/></li>
                  <li><FormattedMessage id="memearound_step_3_list_5"/></li>
                </ul>
                
                <p><FormattedMessage id="memearound_step_3_30"/></p>
                <p><FormattedMessage id="memearound_step_3_31"/></p>
                <p><FormattedMessage id="memearound_step_3_32"/></p>
                
                <ul className="fancy">
                  <li><FormattedMessage id="memearound_step_3_list_6"/></li>
                  <li><FormattedMessage id="memearound_step_3_list_7"/></li>
                </ul>
                
                <p><FormattedMessage id="memearound_step_3_33"/></p>
                <p><FormattedMessage id="memearound_step_3_34"/></p>

                <ul className="fancy">              
                  <li><FormattedMessage id="memearound_step_3_list_8"/></li>
                  <li><FormattedMessage id="memearound_step_3_list_9"/></li>
                  <li><FormattedMessage id="memearound_step_3_list_10"/></li>
                  <li><FormattedMessage id="memearound_step_3_list_11"/></li>
                </ul>
              </div>
            )
          },
          {
            title: "memearound_step4_title",
            duration: "duration_20_min",
            contents: (
              <div>
                <p>Show attendees a meme-maker like <a href="https://thimbleprojects.org/karenlouisesmith/97028/">this Thimble project</a> from Mozilla or a popular site like <a href="https://imgflip.com/memegenerator">imgflip</a>. If you’re concerned about internet content, use the Thimble project since it doesn’t display other people’s work.</p>
                
                <p>Demo how to make a meme. Help people add their own pictures or pictures from public domain sites to their memes.</p>
                
                <p>Remind participants that if they use pictures of people in their memes, they should have permission from those people to use their images. If a picture is in the public domain or shared with an open license that permits usage, that’s okay, too.</p>
                
                <p>To find pictures (and to upload your own) in the public domain or available under open licenses, check out resources like:</p>
                
                <ul className="fancy">
                  <li><a href="https://commons.wikimedia.org/wiki/Main_Page">Wikimedia Commons</a></li>
                  <li><a href="http://search.creativecommons.org/">Creative Commons’ Public Domain Search</a></li>
                  <li><a href="https://www.flickr.com/commons">Flickr Commons</a></li>
                  <li><a href="https://images.nga.gov/?service=category&action=show_content_page&language=en&category=16">National Gallery of Art</a></li>
                  <li><a href="http://www.nypl.org/blog/2016/01/05/share-public-domain-collections">New York Public Library</a></li>
                </ul>
                
                <p>After 10 minutes, help everyone publish their meme as a picture shared on social media or a “membase” - a site that hosts memes -  like <a href="https://imgflip.com/">imgflip</a>. Then ask attendees to share their memes on social media using the #makerparty hashtag. Remind them that only to share memes that use their own images or images that are from the public domain or shared with an open license permitting participants to use them in memes.</p>
              </div>
            )
          },
          {
            title: "reflection",
            duration: "duration_5_min",
            contents: (
              <div>
                <p>Thank your attendees for sharing their memes.</p>
                
                <p>If you’re finishing your event, show your attendees <a href="https://www.changecopyright.org/">this petition</a> from Mozilla. It’s a way for them to continue to support the Maker Party campaign for copyright reform in the EU. Summarize the issues and invite people to sign online.</p>
                
                <p>This petition is all about:</p>
                
                <ul className="fancy">
                  <li>Updating copyright laws for the 21st century to reflect how we live, work, and share online.</li>
                  <li>Building in openness and flexibility to foster innovation and creativity </li>
                  <li>Keeping ourselves from breaking the internet through the establishment of gatekeepers, locking down content, or chilling expression, innovation, and the open internet.</li>
                </ul>
                
                <p>Read more here: <a href="https://www.changecopyright.org/">changecopyright.org</a>.</p>
                
                <p>Give participants a few minutes to review and <a href="https://www.changecopyright.org/?locale=en">sign the petition</a>.</p>
                
                <p>Alternately, you can take people through the <a href="https://postcrimes.org">Postcrimes online activity</a> activity if they haven’t done it yet. They can sign the petition on Postcrimes, send a postcard to lawmakers, and share with it friends and family on social media as another opportunity to make something new on the web before they walk out the door. </p>
                
                <p>Use the rest of your time to help attendees reflect on the activity. Use these prompts or make your own.</p>
                  
                <ul className="fancy">
                  <li>How do you think a UGC exemption/fair dealing/fair use or Open Norm exemption might encourage online creativity and innovation in the EU?</li>
                  <li>How would a universal definition of “public domain” and a shared calendar help EU citizens better create new works from old content?</li>
                  <li>In your own words, how would you describe the importance of copyright reform and exemptions to a friend or family member? Why are they so important?</li>
                </ul>

			
			          <p><strong>Up Next</strong> --> <a href="activity03-contribute-to-the-commons.html">Contribute to the Commons</a></p>
              </div>
            )
          }
        ]}
      />
    );
  }
});
