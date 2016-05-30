import React from 'react';

var enablePontoon = process.env.ENABLE_PONTOON === 'true';

var Pontoon = React.createClass({
  render: function() {
    if (enablePontoon) {
      return (
        <script src='https://pontoon.mozilla.org/pontoon.js'></script>
      );
    }
    return null;
  }
});

module.exports = Pontoon;
