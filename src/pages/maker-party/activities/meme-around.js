var React = require(`react`);
var ActivityTemplate = require('./activity-template.js');

module.exports = React.createClass({
  contextTypes: {
    intl: React.PropTypes.object
  },
  render: function() {
    return (
      <ActivityTemplate
        title="Meme Around"
        overview={{
          duration: "45 minutes",
          activityNumber: 2,
          activityTotal: 3,
          contents: (
            <div>
              <p style={{textAlign: "center"}}>
                <img src="/assets/maker-party/45922429.jpg" width="50%" alt="An image of a meme that shows two animated movite characters with one saying, “Copyright infringement everywhere”"/>
                <br/>
                <em style={{fontSize: ".9em"}}>
                  A popular <a href="https://cdn.meme.am/instances/45922429.jpg">“Everywhere”</a> meme
                </em>
              </p>
              <br />
              
              <p>In this activity you’ll engage your group in creating memes that support copyright reform! You’ll show the group how to use their own pictures or pictures from the public domain to speak up without breaking the current copyright laws that make it so difficult to create and share memes in the EU. </p><br/>

              <p><strong>Your Goal for this Event:</strong> Make as many memes as possible and share them on social media in support of the EU copyright reform!</p><br/>

              <p>Some of the concepts can seem daunting but don’t worry! You don’t need to be an expert to run these activities. Below we’ve provided you with all of the information and links that you’ll need to share with the group. No expertise required!</p><br/>
              
              <hr style={{
                width: "100%",
                color: "grey",
                height: "1px",
                marginTop: ".5em"
              }}/>
              
              <h4>What You’ll Need:</h4>
            
              <ul className="fancy">
                <li>Blank name tags</li>
                <li>Coloring and craft supplies for decorating name tags</li>
                <li>Optional: something like <a href="https://chibitronics.com/">chibitronics</a> for decorating nametags</li>
                <li>Internet connected devices like phones, tablets, or laptops</li>
              </ul>
              
              <hr style={{
                width: "100%",
                color: "grey",
                height: "1px",
                marginTop: ".5em"
              }}/>
              
              <h4>Activity Overview:</h4>
              
              <ol className="fancy">
                <li>Hack Your Name Tag</li>
                <li>Introduction to Memes and Copyright Reform</li>
                <li>Make Some Memes!</li>
                <li>Reflection</li>
              </ol>

              <hr style={{
                width: "100%",
                color: "grey",
                height: "1px",
                marginTop: ".5em",
                marginBottom: "1em"
              }}/>
                
              <h4>How to use this activity</h4>

              <p>“Meme Around” can function as a standalone activity or as part of a longer workshop on copyright reform.</p><br/>
              
              <p>Think about how many people are attending, and how long you’ll have them for to decide whether to do this as a standalone or as part of a longer event!</p><br/>

              <p><strong><em>If you’d like to run this activity alone:</em></strong></p><br/>

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

              <p><strong><em>If you’d like to run this activity with the other activities in this sequence:</em></strong></p><br/>
              
              <ol className="fancy">
                <li>Read the Copyright Primer.</li>
                <li>Run the “Postcrimes” activity before this one.</li>
                <li>Skip “Hack Your Name Tag.”</li>
                <li>Share the information from the “Note” in the “Introduction to Memes and Copyright Reform” section with your attendees.</li>
                <li>Skip the videos in the “Introduction to Memes and Copyright Reform” section.</li>
                <li>Skip the petition calls-to-action in the “Reflection” section and go straight to discussion using the provided prompts.</li>
                <li>Frame the “Reflection” section as a pause to reflect rather than as an exit activity.</li>
                <li>Run the “Meme Around” activity after this one.</li>
              </ol>

              <hr style={{
                width: "100%",
                color: "grey",
                height: "1px",
                marginTop: ".5em",
                marginBottom: "1em"
              }}/>

              <p><strong><em>If you’d like to run this activity as part of a rotation of stations or tables that people visit for 15-30 minutes at a time during your event:</em></strong></p><br/>
            
              <ol className="fancy">
                <li>Read the Copyright Primer.</li>
                <li>Identify a facilitator for each station ahead of your event.</li>
                <li>Train each facilitator on the activity at their station ahead of your event, including the Copyright Primer, as needed.</li>
                <li>Have everyone at every station do the Hack Your Name Tag step before you begin.</li>
                <li>Pick a common amount of time you’d like to spend on each activity - <a href="activity01-postcrimes.html">Postcrimes</a>, Meme Around, and <a href="activity03-contribute-to-the-commons.html">Contribute to the Commons</a>.</li>
                <li>Adapt each activity to fit your timing.</li>
                <li>Run the first two rounds of activities, but skip the petition call to action (CTA) in their reflections.</li>
                <li>Run the last round and deliver its petition CTA in the reflection.</li>
              </ol>
            </div>
          )
        }}
        steps={[
          {
            title: "Copyright Primer",
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
            title: "Hack Your Name Tag",
            duration: "10 minutes",
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
            title: "Introduction to Memes and Copyright Reform",
            duration: "20 minutes",
            contents: (
              <div>
                <p>Next introduce the campaign and today’s activity.</p>
                
                <p><strong>Note:</strong> If you’ve already done Postcrimes, tell your attendees that this next activity will help them create their own memes on the web from scratch. They’ll increase their level of skill on the internet by becoming creators and thinking about the copyright issues they face online.</p>
                
                <p>Explain that Copyright in Europe is a messy patchwork of laws that:</p> 
                
                <ul className="fancy">
                  <li>Changes from country to country.</li>
                  <li>Can limit expression and access to information.</li>
                  <li>Can inhibit innovation and creativity.</li>
                </ul>
                
                <p>Share this example:</p>
                
                <p>For example, the EU lacks the flexibility to allow for derivative works and User Generated Content (UGC); it lacks an Open Norm / Fair Dealing / Fair Use clause in copyright law.</p>     
                
                <p><strong><em>Why is this important?</em></strong></p>
                
                <p>Mashups, memes, and GIFs are all examples of modern Internet culture. Copyrighted works are remixed, reimagined, and reused in new and creative ways every day. These elements build on existing ideas in a way that breathes new meaning into old content. Allowing new uses of copyrighted works are needed in order to expand growth and innovation. We need to build into the law flexibility, through a UGC exception and a clause like an open norm, fair dealing, or fair use, to empower everyday people to shape culture and conversations online and keep the Internet awesome.</p>
                
                <p><strong><em>What are fair use / fair dealing / Open Norm exceptions?</em></strong></p>
                
                <p><em>Fair use / fair dealing</em></p>
                
                <p>These types of exemptions allow people to make use of copyrighted works for the purpose of education, remix, parody, criticism, or quotation. As long as their use does not interfere with the “regular economic exploitation” of the work, and does not unreasonably prejudice the interests of the copyright owner (for instance, making Game of Thrones memes would be allowed, but downloading the episodes on the Pirate Bay still not allowed). This ‘test’ is established in international copyright law, called the “Berne Convention’s Three Step Test”. Many countries already have a fair use / fair dealing clause in their laws, <a href="https://en.wikipedia.org/wiki/Fair_dealing">including</a> Canada, the United States, Australia, India, and the United Kingdom. In general, a “fair use” clause is much more broad than a “fair dealing” clause, however both can be very useful in creating flexibility to allow access to, and/or creative transformations of copyrighted works. It’s time that the EU introduce such an exception to allow new and innovative uses of copyrighted works to breathe new life into old content.</p>
                
                <p><em>Open Norm</em></p>
                
                <p>An <a href="https://juliareda.eu/copyright-evaluation-report-explained/#opennorm">Open Norm</a>would give the EU courts the possibility to allow future uses of copyrighted works - uses that may not exist today, but could be crucial tomorrow. This, like fair use, fair dealing and the UGC exception, would be guided by Berne’s “3 Step Test”. For instance, the EU’s existing copyright law was passed in 2001, long before many technological innovations, such as Text and Data Mining (TDM). We didn’t know then that this would be such a useful software to unlock research and innovation. With an Open Norm, courts would have the flexibility to adjust exceptions in EU law (e.g. parody, quotation, panorama, etc) to technological advancements, which would ensure that our new laws remain relevant in 5, 10 or even 15 years.</p>
                
                <p><strong><em>What are internet memes?</em></strong></p>
                
                <p>An <a href ="https://en.wikipedia.org/wiki/Meme">internet meme</a> uses a picture and a few words to share an idea in a funny way. The humor depends on the meaning of the picture, the meaning of the words, and the new meaning they have when they come together.</p>
                
                <p>Here is how a meme template - or “macro” -  looks:</p>
                
                <p style={{textAlign: "center"}}>
                  <img src="/assets/maker-party/Typical_internet_meme_image_format.svg.png"  width="50%" alt="An image of a meme macro showing where to out top text, bottom text, and the picture" />
                  <br/>
                  <em style={{fontSize: ".9em"}}>
                    A typical meme macro, <a href="https://commons.wikimedia.org/wiki/File:Typical_internet_meme_image_format.svg">CC-BY-SA 4.0 International by Barronwebster</a>
                  </em>
                </p>
                
                <p>Here are a few examples of memes:</p>
                
                <p style={{textAlign: "center"}}>
                  <img src="/assets/maker-party/9148130.jpg" width="50%" alt="An image of a meme of a historical expert that says, ‘I don’t know therefore aliens’" />
                  <br/>
                  <em style={{fontSize: ".9em"}}>A popular <a href="http://i1.kym-cdn.com/photos/images/original/000/158/326/9148130.jpg">“Ancient Aliens”</a> meme</em>
                </p>
                
                <p style={{textAlign: "center"}}><img src="/assets/maker-party/1241222446876.jpg" width="50%" alt="An image of a meme that shows a velocoraptor saying, 'If actons are stronger than words, why is the pen mightier than the sword?'" / ><br/><em style={{fontSize: ".9em"}}>
    A popular <a href="http://i1.kym-cdn.com/photos/images/original/000/001/962/1241222446876.jpg">“Philosoraptor”</a> meme</em></p>

                <p>You don’t need to be a copyright expert to see that these memes are silly and use humor to question popular media figures and “accepted” wisdom. They can’t be easily confused with the original work they reference.</p>

                <p>People shouldn’t have to break the law to make creative works like these that poke fun at older pieces of content.</p>
                
                <p>We need common-sense copyright reform to include a universal exemption for fair dealing / fair use - or something like it - that would help protect examples of reuse like memes across the EU.</p>
                
                <p>Today we’ll make our own memes to support copyright reform. We’ll use our own pictures or pictures from the public domain so we don’t have to worry about breaking copyright laws.</p>
                
                <p>Luckily, we can use pictures in the public domain and pictures shared with open licenses to help us out.</p>
                
                <p><strong><em>What is the public domain?</em></strong></p>
                
                <p> The <a href="https://en.wikipedia.org/wiki/Public_domain">public domain</a> is made of older works that have passed, by law, from private ownership into public ownership for reproduction and reuse.</p>
                
                <p>Of course, each country in the EU is free to have its own public domain rules - <a href ="https://medium.com/copyright-untangled/public-domain-why-it-is-not-that-simple-in-europe-1a049ce81499#.tajj2hmbz">and they do</a>. Mozilla would like to see the rules and understanding of the ‘public domain’ become more clear and harmonised across the EU.</p>
                
                <p>Right now, you can keep track of public domain where you live by looking out for <a href ="https://en.wikipedia.org/wiki/Public_Domain_Day">Public Domain Day</a> and using a service like <a href="http://archive.outofcopyright.eu/calculator.html">this European public domain calendar</a> to let you know when works enter the public domain.</p>
                
                <p><strong><em>What’s an open license?</em></strong></p>
                  
                <p>An open license is a license an author can put on a work to</p>
                
                <ul className="fancy">
                  <li>Keep copyright over the work instead of putting it in the public domain.</li>
                  <li>Allow others to use the work under certain conditions detailed in the license.</li>
                </ul>
                
                <p>Even without a legal background, you can see that current copyright law <a href="https://medium.com/copyright-untangled/public-domain-why-it-is-not-that-simple-in-europe-1a049ce81499#.615egijdp">makes things needlessly complex</a> for people who want to make something new from something old without taking away from creators’ rights. </p>
                
                <p>Your story and your voice will help fight  for copyright reform that protects creative reuse for everyone.</p>
                
                <p>To do that, we’ll make memes that support</p>
                
                <ul className="fancy">
                  <li>A clause that creates flexibility in the EU copyright system, like a UGC exception, or fair dealing / fair use / Open norm; </li>
                  <li>More clarity around the public domain / or protecting and strengthening the public domain.</li>
                </ul>
                
                <p>To get ready, let’s watch this Maker Party campaign video from Mozilla.</p>
                
                <p>Choose one (or more) of these videos from our friends at Copyright for Creativity to learn more about EU copyright reform:</p>

                <ul className="fancy">              
                  <li>#Fixcopyright: <a href="https://www.youtube.com/watch?v=-CdfIpTiE3g">Robocopyright and 2.0 - the 2016 Copyright Review</a></li>
                  <li><a href="https://www.youtube.com/watch?v=0fdUDecJ6jc">Copy</a> (aka Copyright) tells the story of his life</li>
                  <li>Copy explains <a href="https://www.youtube.com/watch?v=wQWU48uTUd8">Freedom of Panorama</a></li>
                  <li><a href="https://www.youtube.com/watch?v=jiBxdH4MM_0">Meet Ancy</a> (short for Ancillary Copyright)</li>
                </ul>
              </div>
            )
          },
          {
            title: "Make a Meme!",
            duration: "20 minutes",
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
            title: "Reflection",
            duration: "5 minutes",
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
