var React = require(`react`);

var Overview = React.createClass({
  contextTypes: {
    intl: React.PropTypes.object
  },
  render: function() {
    var duration = (<div></div>);
    if (this.props.duration) {
      duration = (
        <p className="time total-time">
          {this.props.duration}
        </p>
      );
    }
    return (
      <section className="overview">
        <p className="made-by">
          <a href="https://creativecommons.org/licenses/by-sa/4.0/">CC-BY-SA</a> by <a href="https://learning.mozilla.org">Mozilla</a> 
        </p>

        {duration}

        <h4>{"Activity " + this.props.activityNumber + " of " + this.props.activityTotal}</h4>
        <div>{this.props.children}</div>
      </section>
    );
  }
});

var Step = React.createClass({
  contextTypes: {
    intl: React.PropTypes.object
  },
  render: function() {
    var duration = (<div></div>);
    if (this.props.duration) {
      duration = (
        <div className="time step-time">
          {this.props.duration}
        </div>
      );
    }
    return (
      <li>
        <h1>{this.props.title}</h1>
        {duration}
        <div>{this.props.children}</div>
      </li>
    );
  }
});

module.exports = React.createClass({
  contextTypes: {
    intl: React.PropTypes.object
  },
  render: function() {
    return (
      <div className="wrapper" mode="overview">
        <aside>
          <div className="image">
            <img src="/assets/maker-party/maker-party-logo.png" alt="An image of the Maker Party logo"></img>
            <a className="attribution" href="">
              <i className="fa fa-camera"></i> by Mozilla
            </a>
          </div>

          <ul className="agenda-navigation">
            <li><a href="#overview">Overview</a></li>
            {
              this.props.steps.map(function(step, index) {
                return (
		              <li key={step.title}><a href={"#step-" + (index+1)}>{step.title}</a></li>
                );
              })
            }
          </ul>
        </aside>

        <article className="main">

          <h1 className="activity-title">{"Maker Party | " + this.props.title}</h1>

          <Overview {...this.props.overview}>
            {this.props.overview.contents}
          </Overview>

          <ul className="agenda">
            {
              this.props.steps.map(function(step) {
                return (
                  <Step key={step.title} {...step}>
                    {step.contents}
                  </Step>
                );
              })
            }
          </ul>
        </article>
      </div>
    );
  }
});
