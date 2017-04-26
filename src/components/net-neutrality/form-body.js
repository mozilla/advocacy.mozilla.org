import React from 'react';

module.exports = React.createClass({
  contextTypes: {
    intl: React.PropTypes.object
  },
  render: function() {
    return (
      <div className="form-body-container">
        <div className="form-body">
          <div className="form-description">
            main_description
          </div>
          <h4>
            question_1
          </h4>
          <p>
            answer_1
          </p>
          <h4>
            question_2
          </h4>
          <p>
            answer_2
          </p>
          <h4>
            question_3
          </h4>
          <p>
            answer_3
          </p>
          <h4>
            copyright_matters
          </h4>
          <div className="horizontal-rule"></div>
          <h2>
            now_what_title
          </h2>
          <h4>
            now_what_tagline
          </h4>
          <p>
            now_what_description
          </p>
        </div>
      </div>
    );
  }
});
