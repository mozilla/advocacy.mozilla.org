import React from 'react';

var optimizelyActive = process.env.OPTIMIZELY_ACTIVE || 'yes';
var optimizelyID = process.env.OPTIMIZELY_ID || '206878104';
var optimizelyURL = 'https://cdn.optimizely.com/js/' + optimizelyID + '.js';

module.exports = React.createClass({
  render: function() {
    if (optimizelyActive === 'yes') {
      return (
        <script src={optimizelyURL}></script>
      );
    }
    return false;
  }
});

