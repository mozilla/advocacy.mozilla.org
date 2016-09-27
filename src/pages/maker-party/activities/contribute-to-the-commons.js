var React = require(`react`);
var ActivityTemplate = require('./activity-template.js');

module.exports = React.createClass({
  contextTypes: {
    intl: React.PropTypes.object
  },
  mixins: [require('./mixin.js')],
  render: function() {
    return (
      <ActivityTemplate
        title="Contribute to the Commons"
        overview={{
          duration: "50 minutes",
          activityNumber: 3,
          activityTotal: 4,
          contents: (
            <div>

            </div>
          )
        }}
        steps={[
          {
            title: "Copyright Primer",
            contents: (
              <div>

              </div>
            )
          },
          {
            title: "Hack Your Name Tag",
            duration: "10 minutes",
            contents: (
              <div>

              </div>
            )
          },
          {
            title: "Take Some Photos",
            duration: "10 minutes",
            contents: (
              <div>

              </div>
            )
          },
          {
            title: "Reflection",
            duration: "10 minutes",
            contents: (
              <div>

              </div>
            )
          }
        ]}
      />
    );
  }
});
