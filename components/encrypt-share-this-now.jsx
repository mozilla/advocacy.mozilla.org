var React = require(`react`);
var ga = require('react-ga');

module.exports = React.createClass({
  socialClicked(e) {
    ga.event({category: "Social", action: "Clicked on " + e.target.dataset.social});
  },
  render() {
    return (
      <div className="share-wrapper">
        <div className="share-this-now cta">
          <h2>Share This Now</h2>
          <div className="horizontal-rule"></div>
          <div className="social">
            <a href="mailto:?&subject=Check out this great video on encryption. &body=I just watched a video about how encryption works in our everyday lives and thought you would really like it. Check it out at https://mzl.la/encrypt. Hope you enjoy it!" className="social-circle">
              <i data-social="email" onClick={this.socialClicked} className="fa fa-envelope"></i>
            </a>
            <a target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=https://advocacy.mozilla.org/encrypt/" className="social-circle">
              <i data-social="facebook" onClick={this.socialClicked} className="fa fa-facebook"></i>
            </a>
            <a target="_blank" href="https://twitter.com/intent/tweet?via=mozilla&text=I+just+learned+how+encryption+works+in+our+everyday+lives.+Check+it+out+at+mzl.la/encrypt+#encrypt" className="social-circle">
              <i data-social="twitter" onClick={this.socialClicked} className="fa fa-twitter"></i>
            </a>
          </div>
          <p className="plea">We need your help to spread the word about how encryption protects our privacy.</p>
        </div>
      </div>
    );
  }
});
