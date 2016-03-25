var React = require(`react`);
var ga = require('react-ga');

module.exports = React.createClass({
  socialClicked(e) {
    ga.event({ category: "Social", action: "Clicked on " + e.currentTarget.dataset.social });
  },
  render() {
    return (
      <div className="share-wrapper">
        <div className="share-this-now cta">
          <h2>Share This Now</h2>
          <div className="horizontal-rule"></div>
          <div className="social">
            <div className="sp-social-circle">
              <div className='sp_163584 sp_em_small' data-social="email" onClick={this.socialClicked}></div>
            </div>
            <div className="sp-social-circle">
              <div data-social="facebook" onClick={this.socialClicked} className='sp_163585 sp_fb_small' ></div>
            </div>
            <div className="sp-social-circle">
              <div data-social="twitter" onClick={this.socialClicked}  className='sp_163586 sp_tw_small' ></div>
            </div>
          </div>
          <p className="plea">We need your help to spread the word about how encryption protects our privacy.</p>
        </div>
      </div>
    );
  }
});
