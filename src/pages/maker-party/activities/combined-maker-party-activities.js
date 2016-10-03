var React = require(`react`);
var ActivityTemplate = require('./activity-template.js');

module.exports = React.createClass({
  contextTypes: {
    intl: React.PropTypes.object
  },
  render: function() {
    return (
      <ActivityTemplate
        title="Combined Maker Party Activities"
        overview={{
          duration: "2-3 hours",
          contents: (
            <div>
              <p className="summary">
                Lead participants through all 3 Maker Party activities: <a href="activity01-postcrimes">Postcrimes</a>, <a href="activity02-meme-around">Meme Around</a>, and <a href="activity03-contribute-to-the-commons">Contribute to the Commons</a>.        
              </p>
              
              <p><strong><em>If you’d like to run all 3 Maker Party activities in a single workshop:</em></strong></p><br />
              
               <ol className="fancy">
                 <li>Read the Copyright Primer.</li>
                 <li>Identify a facilitator for each part of the workshop ahead of your event.</li>
                 <li>Train any other facilitators on the activities they will run during the event. Share the Copyright Primer with them.</li>
                 <li>Have everyone begin with Hack Your Name Tag.</li>
                 <li>Either run through each activity in order or rotate participants through each activity so that each small group does a different activity at the same time with a different facilitator and then moves on to the next. The activities are <a href="activity01-postcrimes.html">Postcrimes</a>, <a href="activity02-meme-around.html">Meme Around</a>, and <a href="activity03-contribute-to-the-commons">Contribute to the Commons</a>.</li>
                 <li>Adapt each activity to fit your timing.</li>
                 <li>Run the first two rounds of activities, but only use the questions from their reflections.</li>
                 <li>Run the last round and deliver its petition call to action in the reflection.</li>
               </ol>
               
               <h4>What You’ll Need:</h4>
              
               <ul className="fancy">
                 <li>Blank name tags</li>
                 <li>Coloring and craft supplies for decorating name tags</li>
                 <li>Optional: something like <a href="https://chibitronics.com/">chibitronics</a> for decorating nametags</li>
                 <li>Internet connected devices like phones, tablets, or laptops</li>
               </ul>
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
            title: "Postcrimes",
            duration: "35 minutes",
            contents: (
              <div>
                <h4>Activity Overview:</h4>
              
                <ol className="fancy">
                  <li>Introduction to Postcrimes</li>
                  <li>Postcrimes</li>
                  <li>Reflection</li>
                </ol>
                            
                <h2>Introduction to Postcrimes</h2>
                <div className="time step-time">10 minutes</div>
                

                <p>Next use the script below to introduce the campaign and today’s activity. Explain that Copyright in Europe is a messy patchwork of laws that :</p>
                
                <ul className="fancy">
                  <li>Changes from country to country.</li>
                  <li>Can limit expression and access to information.</li>
                  <li>Can inhibit innovation and creativity.</li>
                </ul>
                
                <p>Share this example:</p>
                
                <p>For example, some countries limit your <a href="https://en.wikipedia.org/wiki/File:FixCopyright-_Copy_explains_%27Freedom_of_Panorama%27.webm">“freedom of panorama,”</a> which means you can take pictures of some public spaces in some countries and share them online, but not others.</p> 
                
                <p>Share a map like <a href="https://en.wikipedia.org/wiki/Freedom_of_panorama#/media/File:Freedom_of_Panorama_in_Europe_NC.svg">this one</a> or <a href="https://commons.wikimedia.org/wiki/Commons:Freedom_of_panorama#/media/File:Freedom_of_Panorama_world_map.png">this one</a> with your attendees to show just how messy it is when so many different countries treat copyright differently. You can even see an interactive version of how different rules change by country <a href="http://copyrightexceptions.eu/#Art.%205.1">here</a>.</p>
                
                <p>As you show one of the maps, say something like this to your group:</p>
                
                <p>Take a look at this map. Each color represents a different policy about taking pictures. You don’t need to be a copyright expert to see how complex and challenging it is to figure out copyright in the EU.</p>
                
                <p>You also don’t need to be an expert to see that many countries limit creative expression and everyday activities - like taking a photo and sharing it online while on holiday - because of copyright.</p>
                
                <p>There are also just as many policies about sharing content - like links and memes - online. Should remixing or sharing links be a crime?</p>
                
                <p>Thankfully, your personal story and voice give you the power to influence copyright reform.</p>
                
                <p>Today we’re going to share an easy way to make yourself heard as a supporter of common sense copyright across the EU.</p>
                
                <p>To get ready, let’s check out an explainer video from Mozilla.</p>
                
                <p>Choose one (or more) of these videos from our friends at Copyright for Creativity to learn more about EU copyright reform:</p>
                
                <ul className="fancy">              
                  <li>#Fixcopyright: <a href="https://www.youtube.com/watch?v=-CdfIpTiE3g">Robocopyright and 2.0 - the 2016 Copyright Review</a></li>
                  <li><a href="https://www.youtube.com/watch?v=0fdUDecJ6jc">Copy</a> (aka Copyright) tells the story of his life</li>
                  <li>Copy explains <a href="https://www.youtube.com/watch?v=wQWU48uTUd8">Freedom of Panorama</a></li>
                  <li><a href="https://www.youtube.com/watch?v=jiBxdH4MM_0">Meet Ancy</a> (short for Ancillary Copyright)</li>
                </ul>

                <h2>Postcrimes</h2>
                <div className="time step-time"> 20 minutes</div>

                <p>Introduce and demo the “Postcrimes” activity for your group. Say:</p>
                
                <p>To support copyright reform, we’re going to use an activity called “Postcrimes” to,</p>
                
                <ul className="fancy">
                <li>Sign a petition supporting change.</li>
                <li>Send a postcard to our local representatives urging them to work for change, as well.</li>
              </ul>
              
              <p>We’re doing this to make sure the EU:</p>
              
              <ul className="fancy">
                <li><strong>Updates copyright laws for the 21st century</strong> to reflect how we live, work, share, and create online.</li>
                <li><strong>Builds in openness and flexibility</strong> to foster innovation and creativity .</li>
                <li><strong>Doesn’t break the internet</strong> through the establishment of gatekeepers, locking down content, or chilling expression, innovation, and the open internet.</li>
              </ul>
                
                <p>Read more here: <a href="https://www.changecopyright.org/">https://www.changecopyright.org</a>.</p> 
                
                <p>We’ll need our computers or phones for this activity. We’re going to:</p>
                
                <ol className="fancy">
                  <li>Create a rebellious, virtual selfie that puts you in front of a popular landmark that is currently not protected through the panorama exception [<strong>Note:</strong> Participation is optional and you’ll remain anonymous to Mozilla unless you identify yourself on the postcard or share it with Mozilla].</li>
                  <li>Send that postcard to your MEP with your message in support of copyright reform.</li>
                  <li>Sign a petition supporting common-sense copyright reform for all of the EU.</li>
                </ol>
                
                <p>Let’s try it out! The link is <a href="https://postcrimes.org">postcrimes.org</a></p>
                
                <p>Demo the <a href="https://postcrimes.org">Postcrimes</a> activity on your computer. Then give participants another 5-10 minutes to send a postcard to your MEP.</p>

                <h2>Reflection</h2>
                <div className="time step-time">5 minutes</div>

                <p>Use the rest of your time for this activity to help attendees reflect on the activity. Use the prompts or make your own.</p>
                
                <ul className="fancy">
                  
                  <li>What did you think of copyright in the EU before this event? After? What changed? Why did it change for you?</li>
                  <li>How would you describe copyright reform to a friend or family member?</li>
                  <li>What’s difficult about having different copyright laws in each country? How might copyright reform benefit the EU?</li>
                </ul>

              </div>
            )
          },
          {
            title: "Meme Around",
            duration: "35 minutes",
            contents: (
              <div>
                <h4>Activity Overview:</h4>
              
                <ol className="fancy">
                  <li>Introduction to Memes and Copyright Reform</li>
                  <li>Make Some Memes!</li>
                  <li>Reflection</li>
                </ol>
                            
                <h2>Introduction to Memes and Copyright Reform</h2>
                <div className="time step-time">10 minutes</div>

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
                
                <h2>Make a Meme!</h2>
                <div className="time step-time">20 minutes</div>

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

                <h2>Reflection</h2>
                <div className="time step-time">5 minutes</div>

                <p>Thank your attendees for sharing their memes.</p>

                <p>Use the rest of your time for this activity to help attendees reflect on the activity. Use these prompts or make your own.</p>
      
                <ul className="fancy">
                  <li>How do you think a UGC exemption/fair dealing/fair use or Open Norm exemption might encourage online creativity and innovation in the EU?</li>
                  <li>How would a universal definition of “public domain” and a shared calendar help EU citizens better create new works from old content?</li>
                  <li>In your own words, how would you describe the importance of copyright reform and exemptions to a friend or family member? Why are they so important?</li>
                </ul>
              </div>
            )
          },
          {
            title: "Contribute to the Commons",
            duration: "40 minutes",
            contents: (
              <div>
                <h4>Activity Overview:</h4>
              
                <ol className="fancy">
                  <li>Take Some Photos</li>
                  <li>Reflection</li>
                </ol>
                
                
                <h2>Take Some Photos</h2>
                <div className="time step-time">30 minutes</div>
          
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
          
                <p style={{textAlign: "center"}}><img src="/assets/maker-party/7448470392_1123568420_z.jpg" width="90%" alt="An image of a child completing a treasure hunt checklist on a piece of paper" /><br /><em style={{fontSize: ".9em"}}>Photo Scavenger Hunt, <a href="https://www.flickr.com/photos/77423179@N02/7448470392">CC-BY 2.0 by Melissa Hillier</a></em></p>
          
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

                <h2>Reflection </h2>
                <div className="time step-time">10 minutes</div>
          
                <p>Thank your attendees for contributing their photos to the commons.</p>
          
                <p>Before finishing your event, show your attendees <a href="https://www.changecopyright.org/?locale=en">this petition</a> from Mozilla. It’s a way for them to continue to support the Maker Party campaign for copyright reform in the EU. Summarize the issues and invite people to sign online.</p>
          
                <p>This petition is all about:</p>
          
                <ul className="fancy">
                  <li><strong>Updating copyright laws for the 21st century</strong> to reflect how we live, work, and share online.</li>
                  <li><strong>Building in openness and flexibility</strong> to foster innovation and creativity </li>
                  <li><strong>Keeping ourselves from breaking the internet</strong> through the establishment of gatekeepers, locking down content, or chilling expression, innovation, and the open internet.</li>
                </ul>
          
                <p>Read more here: <a href="https://www.changecopyright.org/">changecopyright.org</a>.</p>
          
                <p>Give participants a few minutes to review and <a href="https://www.changecopyright.org/?locale=en">sign the petition</a>.</p>
          
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
