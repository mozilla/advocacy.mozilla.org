var React = require('react');

module.exports = React.createClass({
  render: function() {
    return (
      <div className="share-this-now">
        <div>
          <h2>Share This Now</h2>
				</div>
				<div className="horizontal-rule"></div>
	<div className="social">
	  <div className="circle">
		  <i className="fa fa-envelope"></i>
          </div>
	  <div className="circle">
		  <i className="fa fa-facebook"></i>
	  </div>
	  <div className="circle">
		  <i className="fa fa-twitter"></i>
	  </div>
	</div>
	<div className="plea">
	  <p>We need your help to spread the word about how encryption protects our privacy.</p>
        </div>
      </div>
    );
  }
});
