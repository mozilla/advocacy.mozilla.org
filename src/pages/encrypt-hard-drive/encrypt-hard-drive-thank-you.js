var React = require('react');
var Footer = require('../../components/footer.js');
var ContentContainer = require('../../components/content-container.js');

module.exports = React.createClass({
  render: function() {
    return (
      <div className="encrypt-hard-drive-page">
        <div className="page">
          <ContentContainer className="center-align encrypt-hard-drive-header encrypt-hard-drive-thank-you-header">
            <div id="tabzilla"><a href="https://www.mozilla.org/">Mozilla</a></div>
            <h1>Tell others why encryption is important!</h1>
          </ContentContainer>
          <ContentContainer className="center-align">
            <div className="social-container">
              <div className='facebook-button'>
                <i className="fa fa-facebook fa-5x"></i>
                <div className='sp_168554 sp_fb_small'></div>
              </div>
              <div className='twitter-button'>
                <i className="fa fa-twitter fa-5x"></i>
                <div className='sp_168555 sp_tw_small'></div>
              </div>
            </div>
          </ContentContainer>
          <ContentContainer className="center-align encrypt-hard-drive-thank-you-footer">
            <h2>Want to learn more about encryption?</h2>
            <a href="https://advocacy.mozilla.org/encrypt">advocacy.mozilla.org/encrypt</a>
          </ContentContainer>
        </div>
        <Footer/>
      </div>
    );
  }
});
