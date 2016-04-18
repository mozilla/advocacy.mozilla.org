import React from 'react';

var optimizelyActive = process.env.OPTIMIZELY_ACTIVE || 'yes';

module.exports = React.createClass({
  contextTypes: {
    optimizely: React.PropTypes.object,
    optimizelyExperimentData: React.PropTypes.object
  },
  render: function() {
    if (optimizelyActive === 'yes') {
      Object.keys(this.context.optimizely.variationIdsMap).forEach(experimentID => {
        this.context.optimizely.variationIdsMap[experimentID].forEach(variationID => {
          if (this.context.optimizelyExperimentData[experimentID][variationID]) {
            this.context.optimizelyExperimentData[experimentID][variationID]();
          }
        });
      });
    }
    return false;
  }
});

