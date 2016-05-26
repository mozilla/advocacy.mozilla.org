var React = require('react');
var Footer = require('../../components/footer.js');
var ContentContainer = require('../../components/content-container.js');
import StickyContainer from '../../components/sticky-container.js';

module.exports = React.createClass({
  onButtonClick: function() {
    window.location.href = '/encrypt-hard-drive/thank-you/?action=user_encrypted';
  },
  getPosition: function() {
    if (!this.refs.stickyContainer) {
      return 0;
    }
    return this.refs.stickyContainer.getClientRects()[0].top + this.refs.stickyContent.offsetHeight + window.scrollY - window.innerHeight;
  },
  render: function() {
    return (
      <div className="encrypt-hard-drive-page">
        <div className="page">
          <ContentContainer className="center-align encrypt-hard-drive-header">
            <div id="tabzilla"><a href="https://www.mozilla.org/">Mozilla</a></div>
            <h1>Encrypt Your Hard Drive</h1>
            <h3>Check out these step-by-step guides:</h3>
          </ContentContainer>
          <ContentContainer className="main-container">
            <div className="center-align left-container">
              <h2>Mac: Turn on FileVault</h2>
              <div className="align-left-content">
                <ol>
                  <li>From the Apple menu, choose System Preferences.</li>
                  <li>Click the Security & Privacy icon in the System Preferences window.</li>
                  <li>Click the FileVault tab.</li>
                  <li>Click the lock icon and enter an administrator name and password.</li>
                  <li>Click the Turn On FileVault button.</li>
                  <li>Remember to keep your recovery key and password safe.</li>
                </ol>
              </div>
            </div>
            <div className="center-align right-container">
              <h2>PC: Turn on BitLocker</h2>
              <div className="align-left-content">
                <ol>
                  <li>Go to Control Panel</li>
                  <li>Choose System and Security</li>
                  <li>Click the BitLocker Drive Encryption (In Windows 8, you can search BitLocker.)</li>
                  <li>In the BitLocker menu, turn on BitLocker next to the drive(s) you wish to encrypt.</li>
                  <li>Remember to keep your recovery key and password safe.</li>
                </ol>
                <div className="vista-warn">
                  Note: This is for Windows Vista or later. With earlier versions of Windows, BitLocker was not a built-in option. Don’t worry! You can still use BitLocker by downloading the software first.
                </div>
              </div>
            </div>
          </ContentContainer>

          <ContentContainer className="faq-container center-align">
            <h3>FAQ and Troubleshooting</h3>
            <div className="troubleshooting-links">
              <span className="link-container">
                <a href="https://support.apple.com/en-us/HT204837">FileVault</a>
              </span>
              <span className="link-container">
                <a href="http://windows.microsoft.com/en-us/windows/protect-files-bitlocker-drive-encryption#1TC=windows-8">BitLocker</a>
              </span>
              <span className="link-container">
                <a href="https://support.apple.com/en-us/HT201599">Selected drives</a>
              </span>
            </div>
          </ContentContainer>

          <ContentContainer className="button-container center-align">
            <div ref="stickyContainer">
              <StickyContainer className="sticky-button" initialState={true} stickyTo={this.getPosition}>
                <div className="sticky-content" ref="stickyContent">
                  <div className="button-lead">Did this information help you install the software?</div>
                  <button className="button" onClick={this.onButtonClick}>Yes, it did!</button>
                </div>
              </StickyContainer>
            </div>
          </ContentContainer>
        </div>
        <Footer/>
      </div>
    );
  }
});
