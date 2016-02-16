var React = require(`react`);
var EncryptLogo = require('./encrypt-logo.jsx');

module.exports = React.createClass({
  componentDidMount() {
    var positions = document.querySelectorAll(".Position");
    var changableElements = document.querySelectorAll(".Position .Shapes > g, .Position .Chars > path");
    var finalElements = document.querySelectorAll(".final");
    Array.prototype.forEach.call(changableElements, (el)=>{el.style.display="none";});

    //These 2 lines are to fill an array with unique objects, instead of the same referenced object.
    this.finalStates = Array.apply(null, Array(positions.length));
    this.finalStates.map((x, i)=> { this.finalStates[i]={character:false,shape:false} });

    this.interval = setInterval(this.tick, 25, positions);

    //Shuffle everything until the first timeout
    window.setTimeout(()=>{
      this.stopChanging=true;
    }, 1);

    //After the second timeout, make everything final.
    window.setTimeout(()=>{
      clearInterval(this.interval);
      Array.prototype.forEach.call(changableElements, (el)=>{el.style.display="none";});
      Array.prototype.forEach.call(finalElements, (el)=>{el.style.display="";});
    },10000);

  },
  tick(ElGroup) {
    if(this.finalStates.every(function(el){return el.character && el.shape})){
      clearInterval(this.interval);
      return;
    }
    const index = Math.floor(Math.random() * ElGroup.length);
    var subGroup;
    var subGroupType;

    //Half the time change a shape, otherwise change a character
    if(Math.random()>.5){
      subGroup = ElGroup[index].querySelectorAll(".Shapes > g");
      subGroupType = "shape";
    } else {
      subGroup = ElGroup[index].querySelectorAll(".Chars > path");
      subGroupType = "character";
    }
    var subGroupIndex = Math.floor(Math.random() * subGroup.length);
    //After first timeout, if this character/shape is the correct one, lock it
    if(this.stopChanging && subGroup[subGroupIndex].className.baseVal === "Final"){
      Array.prototype.forEach.call(subGroup, (el)=>{el.style.display="none";});
      subGroup[subGroupIndex].style.display='';
      this.finalStates[index][subGroupType]=true;
      return;
    } else if (!this.finalStates[index][subGroupType]){
      Array.prototype.forEach.call(subGroup, (el)=>{el.style.display="none";});
      subGroup[subGroupIndex].style.display='';
    }
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
