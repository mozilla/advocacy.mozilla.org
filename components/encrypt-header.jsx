var React = require(`react`);

module.exports = React.createClass({

  render: function() {
    return (
      <header className="header">
        <div className="header-content">
          <image className="logo" height="30" width="105" src="/assets/logo-mozilla.svg" alt="Mozilla logo"/>
	  <div className="header-cta">Get Mozilla Advocacy Updates <button className="button">Sign Up</button></div>
		<h1 className="encryptText">
		       <img src="/assets/Encrypt_Placeholder_Image.png" width="960" alt="Encrypt"/>
		</h1>
        </div>
	         </header>
    );
  }

});
