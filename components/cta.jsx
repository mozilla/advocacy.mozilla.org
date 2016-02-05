var React = require(`react`);

module.exports = React.createClass({

  render: function() {
    var HRClassName = this.props.HrClassName || ``;
    return (
      <div>
        <h2 className={this.props.headerClassName}>
          {this.props.header}
        </h2>
        <div className={`horizontal-rule ` + HRClassName}></div>
        <p className={this.props.textClassName}>
          {this.props.text}
        </p>
        {this.props.children}
      </div>
    );
  }

});
