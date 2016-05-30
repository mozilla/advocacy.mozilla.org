var React = require(`react`);
var ga = require('react-ga');

module.exports = React.createClass({
  contextTypes: {
    intl: React.PropTypes.object
  },
  socialClicked(e) {
    ga.event({ category: "Social", action: "Clicked on " + e.currentTarget.dataset.social });
  },
//this.context.intl.formatMessage({id: 'apply_desc_more'})
  render() {
    return (
      <div className="share-wrapper">
        <div className="share-this-now cta">
          <h2>{this.context.intl.formatMessage({id: 'share_this_now'})}</h2>
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
          <p className="plea">{this.context.intl.formatMessage({id: 'share_message'})}</p>
        </div>
      </div>
    );
  }
});
