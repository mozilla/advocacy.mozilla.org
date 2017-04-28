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
            The Federal Communications Commission's new Chairman Ajit Pai just announced a proposal to gut net neutrality.
          </div>
          <h4>
            What is net neutrality?
          </h4>
          <p>
            Net neutrality is the freedom to say, watch and make what we want online without interference from corporate interests. Without this basic principle, the Internet could break down into fast lanes for the rich and slow lanes for everyone else. (Here is the John Oliver video that broke the concept down).
          </p>
          <h4>
            A threat to everything we fought for
          </h4>
          <p>
            Two years ago, after hearing from nearly 4 million people urging it protect the open internet, the Federal Communications Commission passed rules protecting net neutrality. A lot can change in two years. Now, net neutrality is threatened by that same agency. Chairman Pai is proposing to seek public comment on undoing the FCC's 2015 order, including both net neutrality rules and the clear legal authority on which they relied. That proposal will be voted on at the FCC's next meeting on May 18th.
          </p>
          <div className="horizontal-rule"></div>
          <h2>
            Time to save the internet, again
          </h2>
          <p>
            There are a million reasons why we must protect net neutrality. Here are a few of them:
          </p>
          <ul>
            <li><b>Net neutrality is fundamental to free speech.</b> Without net neutrality, big companies could censor your voice and make it harder to speak up online. Net neutrality has been called the "First Amendment of the Internet."</li>
            <li><b>Net neutrality is fundamental to innovation.</b> Without net neutrality, big Internet service providers can choose which services and content load quickly, and which move at a glacial pace. That means the big guys can afford to buy their way in, while the little guys don't stand a chance.</li>
            <li><b>Net neutrality is fundamental to quality education.</b> Without net neutrality, ISPs could block resources that compete with their own offerings, letting them choose the sources you can use for research, perhaps based on who is willing or able to pay an extra fee.</li>
            <li><b>Net neutrality is fundamental to a healthy Internet.</b> Without net neutrality, ISPs could decide you watched too many cat videos in one day and throttle your Internet speeds leaving you behind on the latest Maru memes.</li>
          </ul>
        </div>
      </div>
    );
  }
});
