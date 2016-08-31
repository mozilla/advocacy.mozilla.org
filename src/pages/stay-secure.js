var React = require('react');
var Footer = require('../components/footer.js');
var ContentContainer = require('../components/content-container.js');
import {Accordion, Tab} from '../components/mozilla-accordion.js';
import StickyContainer from '../components/sticky-container.js';

module.exports = React.createClass({
  contextTypes: {
    intl: React.PropTypes.object
  },
  onButtonClick: function() {
    var locale = this.context.intl.locale;
    window.location.href = '/' + locale + '/stay-secure/thank-you/?action=user_updated';
  },
  getPosition: function() {
    if (!this.refs.stickyContainer) {
      return 0;
    }
    return this.refs.stickyContainer.getClientRects()[0].top + 50 + window.scrollY - window.innerHeight;
  },
  render: function() {
    return (
      <div className="stay-secure-page">
        <div className="page">
          <ContentContainer className="center-align stay-secure-header">
            <div id="tabzilla"><a href="https://www.mozilla.org/">Mozilla</a></div>
            <h1>Update Your Software</h1>
            <h3>Updating to the latest security software, browser, and operating system provides an important defense against viruses, malware, and other online threats.</h3>
          </ContentContainer>
          <ContentContainer className="main-container">
            <Accordion>
              <Tab name="Windows">
                <ol>
                  <li>
                    Open Windows Update by clicking the Start button.
                  </li>
                  <li>
                    In the left pane, click Check for updates and then wait
                    while Windows looks for the latest updates for your
                    computer.
                  </li>
                  <li>
                    If any updates are found, click Install updates.
                  </li>
                </ol>
              </Tab>
              <Tab name="Mac">
                <ol>
                  <li>
                    Open the App Store app on your Mac.
                  </li>
                  <li>
                    Click Updates in the toolbar.
                  </li>
                  <li>
                    Update each app individually, or click Update All to
                    install all available updates.
                  </li>
                </ol>
              </Tab>
              <Tab name="GNU/Linux">
                <p>
                  Open a command prompt and execute the appropriate command
                  for your distribution:
                </p>

                <h5>Debian/Ubuntu/LinuxMint</h5>

                <pre>sudo apt-get update &amp;&amp; sudo apt-get dist-upgrade</pre>

                <h5>Fedora /Redhat/CentOS</h5>

                <pre>sudo dnf update --refresh</pre>

                <p><em>or</em></p>

                <pre>sudo yum update</pre>

                <h5>ArchLinux/Manjaro/Chakara OS</h5>

                <pre>sudo pacman -Syu</pre>

                <h5>OpenSUSE</h5>

                <pre>sudo zypper dup</pre>
              </Tab>
              <Tab name="iPhone">
                <ol>
                  <li>
                    Open the App Store app.
                  </li>
                  <li>
                    Click Updates in the bottom right corner.
                  </li>
                  <li>
                    Click on Update all in the top right corner, or update
                    apps individually.
                  </li>
                </ol>
              </Tab>
              <Tab name="Android">
                <ol>
                  <li>
                    Open the Google Play Store app.
                  </li>
                  <li>
                    Touch the Menu icon and go to My apps and games.
                  </li>
                  <li>
                    Click on Update all, or update apps individually. Apps
                    with an update available are labeled "Update."
                  </li>
                </ol>

                <p>
                  <em>
                    Note: Some apps require <a href="https://support.google.com/googleplay/answer/6014972" target="_blank">
                      new permissions
                    </a> when they are updated. You may see a
                    notification asking if you accept the new permissions.
                  </em>
                </p>
              </Tab>
              <Tab name="Browsers">
                <ul>
                  <li>
                    <a href="https://support.mozilla.org/kb/update-firefox-latest-version">Firefox
                      update</a>
                  </li>
                  <li>
                    <a href="https://www.mozilla.org/plugincheck/">Firefox
                      plugin check</a>
                  </li>
                  <li>
                    <a href="https://support.google.com/chrome/answer/95414">Chrome
                      update</a>
                  </li>
                  <li>
                    <a href="https://support.google.com/chrome/answer/1181003">Chrome
                      plugin check</a>
                  </li>
                  <li>
                    <a href="http://pcsupport.about.com/od/browsers/fl/internet-explorer-version.htm">Internet
                      Explorer update</a>
                  </li>
                  <li>
                    <a href="http://windows.microsoft.com/en-us/internet-explorer/manage-add-ons">Internet
                      Explorer plugin check</a>
                  </li>
                  <li>
                    <a href="https://support.apple.com/HT204416">Safari
                      update</a>
                  </li>
                  <li>
                    <a href="https://support.apple.com/HT202819">Safari
                      plugin check</a>
                  </li>
                </ul>
              </Tab>
            </Accordion>
            <div className="center-align right-container">
              <h2>Tell us you updated</h2>
              <div className="align-left-content">
                <p>You could drive around with old, burned-out brake lights on your car, but it would make driving more dangerous than it should be. And if we all did that, it would get really dangerous, fast! Letting your system get out of date can encourage malicious actors online, which makes everyone vulnerable.</p>
                <p><b>Mozilla cares about your privacy and security everywhere, not just on Firefox. The safer the Internet is, the easier it is to create and keep it open.</b> So please take a minute to update your software. The Web will thank you.</p>
              </div>
              <div ref="stickyContainer">
                <StickyContainer className="sticky-button" initialState={true} stickyTo={this.getPosition}>
                  <button className="button" onClick={this.onButtonClick}>I updated!</button>
                </StickyContainer>
              </div>
            </div>
          </ContentContainer>
        </div>
        <Footer/>
      </div>
    );
  }
});
