var React = require(`react`);

var StickyButton = React.createClass({
  getInitialState: function() {
    window.scrollTo(0, 0);
    return {
      sticky: this.props.initialState || false
    };
  },
  checkSticky: function() {
    var position = window.scrollY;
    if (this.props.stickyTo) {
      return position <= this.props.stickyTo();
    } else if (this.props.stickyFrom) {
      return position >= this.props.stickyFrom();
    }
    return false;
  },
  onScroll: function() {
    var sticky = this.checkSticky();

    if (sticky !== this.state.sticky) {
      this.setState({
        sticky: sticky
      });
    }
  },
  componentDidMount: function() {
    document.addEventListener(`scroll`, this.onScroll);
  },
  componentWillUnmount: function() {
    document.removeEventListener(`scroll`, this.onScroll);
  },
  render: function() {
    var className = this.props.className || "";

    if (this.state.sticky) {
      className += ' sticky';
    }
    return (
      <div className={className}>
        {this.props.children}
      </div>
    );
  }
});

module.exports = StickyButton;
