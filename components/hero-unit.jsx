var React = require(`react`);

module.exports = React.createClass({
  calculateDensity: function() {
    var
        ratio;

    if (typeof window !== `undefined` && window.devicePixelRatio > 1.5) {
      ratio = 2;
    } else {
      ratio = 1;
    }

    return ratio;
  },

  getInitialState: function() {
    var image = this.props.image;
    if (this.calculateDensity() === 2) {
      image = this.props.image2x || this.props.image;
    }
    return {
      image: image
    };
  },

  propTypes: {
    'image': React.PropTypes.string
  },

  render: function() {
    var className = `hero-unit-container`;
    if (this.props.className) {
      className += ` ` + this.props.className;
    }
    var style = {};
    if (this.props.image) {
      style = {
        backgroundImage: `url(` + this.state.image + `)`
      };
    }
    return (
      <div className={className}>
        <div className="hero-unit" style={style}>
          <div className="hero-unit-desktop">
            {this.props.children}
          </div>
        </div>
        <div className="hero-unit-mobile center-align">
          {this.props.children}
        </div>
      </div>
    );
  }
});
