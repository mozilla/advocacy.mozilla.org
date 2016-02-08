var React = require(`react`);

var ImageTag = React.createClass({
  calculateDensity: function() {
    var ratio;

    if (typeof window !== `undefined` && window.devicePixelRatio > 1.5) {
      ratio = 2;
    } else {
      ratio = 1;
    }

    return ratio;
  },

  getInitialState: function() {
    return {
      pixelDensity: this.calculateDensity()
    };
  },

  handleMediaChange: function() {
    this.setState({
      pixelDensity: this.calculateDensity()
    });
  },

  componentDidMount: function() {
    window.addEventListener(`resize`, this.handleMediaChange);
  },

  componentWillUnmount: function() {
    window.removeEventListener(`resize`, this.handleMediaChange);
  },

  propTypes: {
    alt: React.PropTypes.string.isRequired,
    src1x: React.PropTypes.string.isRequired,
    src2x: React.PropTypes.string,
    width: React.PropTypes.number,
    height: React.PropTypes.number,
    className: React.PropTypes.string
  },

  render: function() {
    return (
        <img src={this.props[`src` + this.state.pixelDensity + `x`] || this.props.src1x} alt={this.props.alt}
            width={this.props.width} height={this.props.height} className={this.props.className}
            srcSet={this.props.src2x ? this.props.src2x + ` 2x` : null} />
    );
  }
});

module.exports = ImageTag;
