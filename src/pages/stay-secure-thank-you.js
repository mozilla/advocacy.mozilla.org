var React = require('react');
var Footer = require('../components/footer.js');
var ContentContainer = require('../components/content-container.js');

module.exports = React.createClass({
  render: function() {
    return (
      <div className="stay-secure-page">
        <div className="page">
          <ContentContainer className="center-align stay-secure-header stay-secure-thank-you-header">
            <div id="tabzilla"><a href="https://www.mozilla.org/">Mozilla</a></div>
            <h1>Tell others why updating is important!</h1>
          </ContentContainer>
          <ContentContainer className="center-align">
            <div className="social-container">
              <div className='facebook-button'>
                <i className="fa fa-facebook fa-5x"></i>
                <div className='sp_167698 sp_fb_small'></div>
              </div>
              <div className='twitter-button'>
                <i className="fa fa-twitter fa-5x"></i>
                <div className='sp_167697 sp_tw_small'></div>
              </div>
            </div>
          </ContentContainer>
          <ContentContainer className="center-align stay-secure-thank-you-footer">
            <h2>Want to learn more about encryption?</h2>
            <a href="https://advocacy.mozilla.org/encrypt">advocacy.mozilla.org/encrypt</a>
          </ContentContainer>
        </div>
        <Footer/>
      </div>
    );
  }
});
