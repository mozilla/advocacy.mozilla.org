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
                <li>Hack Your Name Tag</li>
                <li>Take Some Photos</li>
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

              <p><FormattedMessage id="contribute_overview_4"/></p><br />
              
              <p><FormattedMessage id="contribute_overview_5"/></p><br />

              <p><strong><em><FormattedMessage id="contribute_overview_6"/></em></strong></p><br />

              <ol className="fancy">
                <li>Read the Copyright Primer.</li>
                <li>Follow all of the steps in this activity.</li>
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
                <li>Read the Copyright Primer.</li>
                <li>Run the “Postcrimes” and "Meme Around" activities before this one.</li>
                <li>Skip “Hack Your Name Tag.”</li>
                <li>Share the information from the “Note” in the “Take Some Photos" section with your attendees.</li>
                <li>Skip the videos in the “Introduction to Memes and Copyright Reform” section.</li>
                <li>If you’ve completed the “Postcrimes” activity, don’t run through either petition call to action, but share the Postcrimes and copyright petition URLs with participants so they can pass them along to friends and family after the event.</li>
                <li>Frame the “Reflection” section as your exit activity.</li>

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
                 <li>Read the Copyright Primer.</li>
                 <li>Identify a facilitator for each station ahead of your event.</li>
                 <li>Train each facilitator on the activity at their station ahead of your event, including the Copyright Primer, as needed.</li>
                 <li>Have everyone at every station do the Hack Your Name Tag step before you begin.</li>
                 <li>Pick a common amount of time you’d like to spend on each activity - <a href="activity01-postcrimes.html">Postcrimes</a>, <a href="activity02-meme-around.html">Meme Around</a>, and Contribute to the Commons.</li>
                 <li>Adapt each activity to fit your timing.</li>
                 <li>Run the first two rounds of activities, but skip the petition call to action (CTA) in their reflections.</li>
                 <li>Run the last round and deliver its petition CTA in the reflection.</li>
               </ol>
            </div>
          )
        }}
        steps={[
          {
            title: "contribute_step1_title",
            contents: (
              <div>
                <p>Copyright sounds like a single thing but it's actually more like a bundle of sticks. If you own the "copyright" in a work of art, that means that you can prevent others from:</p>
                
                <ul className="fancy">
                  <li>Making reproductions of the work.</li>
                  <li>Distributing the work</li>
                  <li>Making derivatives of the work</li>
                  <li>Displaying the work</li>
                  <li>Performing the work</li>
                </ul>
                
                <p>Copyright law varies from country to country, but these 5 things are generally the same.</p>
                
                <p>Let’s take an example of an artist who has created a sculpture:</p>
                
                <p>Unless there is a legal exception, the owner of the copyright in a sculpture can prevent others from taking and sharing photos of the sculpture (because the photo touches 3 of the sticks in the copyright bundle -- reproductions, distributing and derivatives).</p>
                
                <p>However, the owner of the sculpture can use an open license to convey to others what the conditions are. For example, if the owner designates the sculpture under a <a href="https://creativecommons.org/licenses/by-nc/2.0/">CC-BY-NC license</a> then anyone can take pictures and post online, but they can't use the picture for t-shirts that they sell.</p>
              </div>
            )
          },
          {
            title: "contribute_step2_title",
            duration: "duration_10_min",
            contents: (
              <div>
                <p>Welcome attendees and ask them to make name tags.</p>

                <p>Each name tag should have:</p>

                <ul className="fancy">
                  <li>The attendee’s name and a social media handle (if desired) on one side.</li>
                  <li>A question the attendee has about copyright on the other side.</li>
                </ul>

                <p>Invite participants to illustrate and/or illuminate their name tags with your crafting supplies.</p>

                <p>Once everyone is finished, start a round of introductions so people can share their names and questions.</p>

              </div>
            )
          },
          {
            title: "contribute_step3_title",
            duration: "duration_10_min",
            contents: (
              <div>
                <p>Next introduce the campaign and today’s activity.</p>
                
                <p><strong>Note:</strong> If you’ve already worked through Meme Around with your attendees, explain that your next activity will help them immediately share new work with other people through something called the commons.</p>
                
                <p>Explain that:</p>
                
                <ul className="fancy">
                  <li>Copyright in Europe is a messy patchwork of laws that changes from country to country.</li>
                  <li>Can limit expression and access to information.</li>
                  <li>Can inhibit innovation and creativity.</li>
                </ul>
                
                <p>Share this example:</p>
                
                <p>But it doesn’t have to be this way.</p>
                
                <p>We can share our work with open licenses.</p>
                
                <p><strong><em>What are open licenses?</em></strong></p>
                
                <p>Open licenses are ways you can give people permission to reuse your work for free and under the conditions of your choice. You still own the work, and there are still rules about how it can be used, but other people can make new things from it.</p>
                
                <p>There are many ways to put an open license on something you make.</p>
                
                <p><a href="https://creativecommons.org">Creative Commons</a> offers several licenses have been “ported,” or adapted, for European countries. You can see a list of those ported licenses on <a href="https://wiki.creativecommons.org/wiki/Category:License_port">the Creative Commons wiki</a>. Creative Common (CC) licenses look like this:</p>
                
                <ul className="fancy">
                  <li><strong>CC-BY:</strong> you can use my work so long as you give me credit.</li>
                  <li><strong>CC-BY-SA:</strong> you can use my work so long as you give me credit and share your new work in the same way.</li>
                  <li><strong>CC-BY-NC:</strong> you can use my work so long as you give me credit and don’t use it for commercial purposes.</li>
                </ul>
                
                <p>Here’s an example of a CC licensed photo of a child completing a treasure hunt:</p>
                
                <p style={{
                  textAlign: "center"
                }}>
                  <img src="/assets/maker-party/7448470392_1123568420_z.jpg" width="90%" alt="An image of a child completing a treasure hunt checklist on a piece of paper" />
                  <br />
                  <em style={{
                    fontSize: ".9em"
                  }}>Photo Scavenger Hunt, <a href="https://www.flickr.com/photos/77423179@N02/7448470392">CC-BY 2.0 by Melissa Hillier</a></em>
                </p>
                
                <p>A useful CC licence for your work might be CC-BY or CC-BY-SA, but you should choose a license yourself. </p>
                
                <p>A license like <a href ="http://artlibre.org/">the Free Art License</a> (Licence Art Libre) might also be good for your photos.</p>
                
                <p>Take the next 10 minutes to review these licenses and pick one for your photos. Then we’ll go take some photos to share!</p>
                
                <p>Give people 20 minutes to walk around your event site or neighborhood and take photos of what they find. </p>
                
                <p>Remind them to come back after 20 minutes so they have time to license and share their photos on social media using the #makerparty hashtag and #cc-zero if they put their photos into the public domain with something like a <a href ="https://creativecommons.org/share-your-work/public-domain/cc0/">Creative Commons 0 license</a>.</p>
                
                <p>Remind them, also, that if they use pictures of people in their memes, they should have permission from those people to use their images.</p>
                
                <p>Thank your participants for the positive, creative contribution they’re making to the EU by licensing their photos openly for the commons.</p>
                
                <p>When they return, participants should</p>
                
                <ol className="fancy">
                  <li>Pick 3-5 photos.</li>
                  <li>Share them social media.</li>
                  <li>Add a license and the #makerparty hashtag to each photo they share like this:<br /><br />
                    
                    [photograph] shared by [creator’s name] with a [license name] #makerparty</li>
                </ol>
                  
                <p>Use your computer and projector to display a stream of photos shared with the hashtag.</p>
                  
              </div>
            )
          },
          {
            title: "reflection",
            duration: "duration_10_min",
            contents: (
              <div>
                <p>Thank your attendees for contributing their photos to the commons.</p>
                
                <p>If you’re finishing your event, show your attendees <a href="https://www.changecopyright.org/?locale=en">this petition</a> from Mozilla. It’s a way for them to continue to support the Maker Party campaign for copyright reform in the EU. Summarize the issues and invite people to sign online.</p>
                
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
                  <li>How did it feel to share your work for others to use?</li>
                  <li>In your own words, how do open licenses work?How are they different from most copyrighted works? Why do you think it’s important to have open licenses?</li>
                </ul>
              </div>
            )
          }
        ]}
      />
    );
  }
});
