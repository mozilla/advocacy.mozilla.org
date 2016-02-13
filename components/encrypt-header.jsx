var React = require(`react`);
var EncryptLogo = require('./encrypt-logo.jsx');

module.exports = React.createClass({
  componentDidMount() {
    var positions = document.querySelectorAll(".Position");
    var changableElements = document.querySelectorAll(".Position .Shapes > g, .Position .Chars > path");
    var finalElements = document.querySelectorAll(".final");
    Array.prototype.forEach.call(changableElements, (el)=>{el.style.display="none";});
    var interval = setInterval(this.tick, 50, positions);

    window.setTimeout(()=>{
      this.stopChanging=true;
      clearInterval(interval);
      Array.prototype.forEach.call(changableElements, (el)=>{el.style.display="none";});
      Array.prototype.forEach.call(finalElements, (el)=>{el.style.display="";});
    }, 5000);

  },
  tick(ElGroup) {
      const index = Math.floor(Math.random() * ElGroup.length);
      var subGroup;
      //Half the time change a shape, otherwise change a character
      if(Math.random()>.5){
        subGroup = ElGroup[index].querySelectorAll(".Shapes > g");
      } else {
        subGroup = ElGroup[index].querySelectorAll(".Chars > path");
      }
      Array.prototype.forEach.call(subGroup, (el)=>{el.style.display="none";});
      var subGroupIndex = Math.floor(Math.random() * subGroup.length);
      subGroup[subGroupIndex].style.display='';
  },
  render: function() {
    return (
      <header className="header">
        <div className="header-content">
          <image className="logo" height="30" width="105" src="/assets/logo-mozilla.svg" alt="Mozilla"/>
          <div className="header-cta">Get Mozilla Advocacy Updates <button className="button" onClick={this.props.showModal}>Sign Up</button></div>
          <h1 className="encryptText">
            <EncryptLogo />
          </h1>
        </div>
      </header>
    );
  }
});
