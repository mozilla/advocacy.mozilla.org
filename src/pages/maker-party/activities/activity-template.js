var React = require(`react`);
var StickyContainer = require("../../../components/sticky-container.js");
var FormattedHTMLMessage = require("react-intl").FormattedHTMLMessage;
var FormattedMessage = require("react-intl").FormattedMessage;

var Overview = React.createClass({
  contextTypes: {
    intl: React.PropTypes.object
  },
  render: function() {
    var duration = (<div></div>);
    if (this.props.duration) {
      duration = (
        <p className="time total-time">
          <FormattedMessage id={this.props.duration}/>
        </p>
      );
    }
    var activityNumber = (<div></div>);
    if (this.props.activityNumber && this.props.activityTotal) {
      activityNumber = (<h4><FormattedMessage id="activity_number" values={{
        num: this.props.activityNumber,
        total: this.props.activityTotal
      }}/></h4>);
    }
    return (
      <section className="overview">
        <p className="made-by">
          <FormattedHTMLMessage id="creative_commons"/> 
        </p>

        {duration}
        {activityNumber}
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
          <FormattedMessage id={this.props.duration}/>
        </div>
      );
    }
    return (
      <li>
        <h1><FormattedMessage id={this.props.title}/></h1>
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
  getPosition: function() {
    if (!this.refs.stickyContainer) {
      return 0;
    }
    return 350;
  },
  mixins: [require('./mixin.js')],
  render: function() {
    return (
      <div className="activity-template wrapper" mode="overview">
        <aside>
          <div className="image">
            <img height="350" width="350" src="/assets/maker-party/maker-party-logo.png" alt="An image of the Maker Party logo"></img>
            <a className="attribution" href="">
              <i className="fa fa-camera"></i>&nbsp;
              <FormattedHTMLMessage id="by_mozilla"/>
            </a>
          </div>

          <div ref="stickyContainer">
            <StickyContainer className="sticky-button" stickyFrom={this.getPosition}>
              <ul className="agenda-navigation" ref="stickyContent">
                <li><a href="#overview"><FormattedMessage id="overview"/></a></li>
                {
                  this.props.steps.map(function(step, index) {
                    return (
		                  <li key={step.title}><a href={"#step-" + (index+1)}><FormattedMessage id={step.title}/></a></li>
                    );
                  })
                }
              </ul>
            </StickyContainer>
          </div>
        </aside>

        <article className="main">

          <h1 className="activity-title"><FormattedMessage id="activity_title" values={{title: this.context.intl.formatMessage({id: this.props.title})}}/></h1>

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
