var React = require(`react`);
var classNames = require('classnames');

module.exports = React.createClass({
  render: function() {
    var encryptStatic = classNames({
      encryptText: true
    });
    var encryptDynamic = classNames({
      encryptText: true,
      fadedOut: this.props.videoDidStart
    });
    return (
      <header className="header">
        <div className="header-content">
          <image className="logo" height="30" width="105" src="/assets/logo-mozilla.svg" alt="Mozilla"/>
          <div className="header-cta">Get Mozilla Advocacy Updates <button className="button" onClick={this.props.showModal}>Sign Up</button></div>
          <h1 className={encryptDynamic}>
            <img src="/assets/Encrypt_Placeholder_Image.png" width="960" alt="Encrypt"/>
          </h1>
          <h1 className={encryptStatic} style={{zIndex: 1, position: 'absolute', left:0}}>
            <img src="/assets/Encrypt_Placeholder_Image.png" width="960" alt="Encrypt"/>
          </h1>
        </div>
      </header>
    );
  }
});
