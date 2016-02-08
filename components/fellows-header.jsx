var React = require(`react`);
var Router = require(`react-router`);
var Link = Router.Link;

module.exports = React.createClass({
  getInitialState: function() {
    window.scrollTo(0, 0);
    return {
      sticky: false
    };
  },
  onScroll: function() {
    var sticky = window.scrollY >= 448;

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
    var className = `fellows-header`;

    if (this.state.sticky) {
      className += ` sticky`;
    }
    return (
      <div className={className}>
        <div className="fellow-header-overlay"></div>
        <div className="nav-items">
          <div className="nav-link-container overview-link">
            <Link to="/open-web-fellows/">Overview</Link>
          </div>
          <div className="nav-link-container info-link">
            <Link to="/open-web-fellows/info">Info</Link>
          </div>
          <div className="nav-link-container current-fellows-link">
            <Link to="/open-web-fellows/fellows">Fellows</Link>
          </div>
        </div>
      </div>
    );
  }
});
