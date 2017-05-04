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
          <p>
            Net neutrality is the freedom to say, watch and make what we want online without interference from internet service providers. Two years ago, after hearing from nearly 4 million people urging it protect the open internet, the FCC passed rules protecting net neutrality.
          </p>
          <h4>
            Why should we protect net neutrality?
          </h4>
          <p>
            There are a million reasons why we must protect net neutrality. Here are a few of them:
          </p>
          <ul>
            <li><b>Net neutrality is fundamental to free speech.</b> Without net neutrality, big companies could censor your voice and make it harder to speak up online. Net neutrality has been called the "First Amendment of the Internet."</li>
            <li><b>Net neutrality is fundamental to competition.</b> Without net neutrality, big Internet service providers can choose which services and content load quickly, and which move at a glacial pace. That means the big guys can afford to buy their way in, while the little guys don't stand a chance.</li>
            <li><b>Net neutrality is fundamental to innovation.</b> Without net neutrality, creators and entrepreneurs could struggle to reach new users. Investment in new ideas would dry up, and the internet would start to look more and more like cable TV: a zillion channels and nothing on.</li>
            <li><b>Net neutrality is fundamental to user choice.</b> Without net neutrality, ISPs could decide you watched too many cat videos in one day and throttle your Internet speeds leaving you behind on the latest Maru memes.</li>
          </ul>
        </div>
      </div>
    );
  }
});
