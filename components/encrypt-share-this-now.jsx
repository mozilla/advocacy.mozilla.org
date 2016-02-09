var React = require(`react`);

module.exports = React.createClass({
  render: function() {
    return (
      <div className="share-wrapper">
        <div className="share-this-now cta">
          <h2>Share This Now</h2>
          <div className="horizontal-rule"></div>
          <div className="social">
            <a className="social-circle">
              <i className="fa fa-envelope"></i>
            </a>
            <a className="social-circle">
              <i className="fa fa-facebook"></i>
            </a>
            <a className="social-circle">
              <i className="fa fa-twitter"></i>
            </a>
          </div>
          <p className="plea">We need your help to spread the word about how encryption protects our privacy.</p>
        </div>
      </div>
    );
  }
});
