var React = require('react');
var Footer = require('../../components/footer.jsx');
var Header = require('../../components/header.jsx');
var HeroUnit = require('../../components/hero-unit.jsx');
var Apply = require('../../components/apply.jsx');
var FellowsHeader = require('../../components/fellows-header.jsx');
var ContentContainer = require('../../components/content-container.jsx');

var IconListContainer = React.createClass({
  render: function() {
    return (
      <div>{this.props.children}</div>
    );
  }
});

var IconListItem = React.createClass({
  render: function() {
    return (
      <div>{this.props.children}</div>
    );
  }
});

var TimeLineItemContainer = React.createClass({
  render: function() {
    return (
      <div className="timeline-item-container">
        <span>
          <div className="timeline-month">
            {this.props.month}
          </div>
          <div className="vertical-line"></div>
        </span>
        <span>{this.props.children}</span>
      </div>
    );
  }
});

var TimeLineItem = React.createClass({
  render: function() {
    return (
      <div className="timeline-item">
        <div>
          <h4>{this.props.label}</h4>
          {this.props.children}
        </div>
      </div>
    );
  }
});

var FinancialItem = React.createClass({
  render: function() {
    return (
      <div className="financial-item">
        <span className="label">{this.props.label}</span>
        <span className="amount">{this.props.amount}</span>
      </div>
    );
  }
});

module.exports = React.createClass({
  render: function() {
    return (
      <div className="info-page">
        <Header/>
        <HeroUnit image="/assets/info.jpg"></HeroUnit>
        <FellowsHeader/>
        <div className="page">
          <ContentContainer>
            <h2 className="center-align">Structure of the Fellowship</h2>
            <p className="intro">As a fellow, you will pursue the following activities over your fellowship year.</p>
            <IconListContainer>
              <IconListItem></IconListItem>
              <IconListItem></IconListItem>
              <IconListItem></IconListItem>
            </IconListContainer>
          </ContentContainer>
          <ContentContainer className="grey slant flat-top responsibilities">
            <h2>Fellow Responsibilities</h2>
            <h4>A commitment to teamwork and working in the open.</h4>
            <p>he fellowship team includes the host organizations, Mozilla, and the fellows. We expect you to join the working teams of your host organization and contribute to the mission, organizational culture and work products of your host organization. Successful fellows will enjoy both teaching and learning; mentorship is core to this fellowship. We expect you to follow the interaction styles and inclusion principles in the <a href="https://www.mozilla.org/en-US/about/governance/policies/participation/">Mozilla Community Participation Guidelines</a>.</p>
            <h4>Documentation</h4>
            <p>The Fellowship is an opportunity for you to reach new audiences – both in the general public, and professionally within the Internet policy and advocacy space. Mozilla and host organizations expect fellows to document their year publicly via blogs, code sharing, and events.</p>
            <h4>Calls</h4>
            <p>Since the Fellowship cohort will be geographically diverse, weekly and monthly calls are an important time for the fellows to communicate with each other and with the larger Internet advocacy network. Fellows are expected to participate and contribute to these calls.</p>
            <h4>Travel and Events</h4>
            <p>The Fellowship program provides various opportunities for travel to Mozilla events and other conferences around the world. Fellows are requested to participate in these events not only as attendees, but also as presenters and representatives of your respective host organizations. These include:</p>
          </ContentContainer>
          <ContentContainer>
            <h2 className="center-align">Fellowship Timeline</h2>
            <div className="timeline">
              <TimeLineItemContainer month="march">
                <TimeLineItem label="Application Deadline">
                  11:59pm Pacific Time, March 20, 2016
                </TimeLineItem>
              </TimeLineItemContainer>
              <TimeLineItemContainer month="april">
                <TimeLineItem label="Semifinalists are Selected">
                  All candidates will be informed of their application status.
                </TimeLineItem>
                <TimeLineItem label="Semifinalist Interviews">
                  Mozilla interviews semifinalists.
                </TimeLineItem>
              </TimeLineItemContainer>
              <TimeLineItemContainer month="may">
                <TimeLineItem label="Finalists are Selected">
                  All semifinalist candidates are informed of their application status.
                </TimeLineItem>
                <TimeLineItem label="Finalist Interviews">
                  Mozilla and host organizations conduct interviews.
                </TimeLineItem>
                <TimeLineItem label="Fellows are Selected">
                  All finalist candidates are informed of their application status.
                </TimeLineItem>
              </TimeLineItemContainer>
              <TimeLineItemContainer month="june">
                <TimeLineItem label="Fellows Announced"></TimeLineItem>
              </TimeLineItemContainer>
              <TimeLineItemContainer month="sept">
                <TimeLineItem label="Fellowship Starts">
                  Starts September 2016 and completes July 2017.
                </TimeLineItem>
              </TimeLineItemContainer>
            </div>
          </ContentContainer>
          <div className="financial-terms-unit">
            <HeroUnit image="/assets/info-benefits.jpg">
              <h2>Financial Terms</h2>
              <h4>To help offset cost of living, the fellowship provides a stipend and supplements.</h4>
            </HeroUnit>
          </div>
          <ContentContainer>
            <h4>The fellowship offers a grant of USD$60,000 paid in 10 monthly installments. Fellows are not employees of Mozilla or host organizations, and are responsible for remitting all applicable taxes and other government payments required.</h4>
            <p>Supplements for child care, health insurance, housing, and research/equipment are listed below. If you relocate for a fellowship, we will supplement your moving expenses. The fellowship also covers the costs of required travel for fellowship activities.</p>
            <div className="row">
              <div className="half">
                <h3>Housing Supplement</h3>
                <FinancialItem
                  label="Single, married or partnered fellow"
                  amount="$5,000"
                />
                <FinancialItem
                  label="Fellow with 1 child"
                  amount="$7,000"
                />
                <FinancialItem
                  label="Fellow with 2 children"
                  amount="$8,500"
                />
                <FinancialItem
                  label="Fellow with 3 children or more"
                  amount="$10,000"
                />
              </div>
              <div className="half">
                <h3>Relocation Supplement</h3>
                <FinancialItem
                  label="Fellow moving cities in the same country"
                  amount="$2,000"
                />
                <FinancialItem
                  label="Fellow moving countries"
                  amount="$4,000"
                />
                <FinancialItem
                  label="Fellow with children"
                  amount="Additional $2,000"
                />
              </div>
            </div>
            <div className="row">
              <div className="half">
                <h3>Health Insurance Supplement</h3>
                <FinancialItem
                  label="Single fellow"
                  amount="$3,500"
                />
                <FinancialItem
                  label="Fellow with partner    "
                  amount="$5,000"
                />
                <FinancialItem
                  label="Fellow with 1 child"
                  amount="$5,500"
                />
                <FinancialItem
                  label="Fellow with partner and 1 child"
                  amount="$6,000"
                />
                <FinancialItem
                  label="Fellow with 2+ children"
                  amount="$6,500"
                />
                <FinancialItem
                  label="Fellow with partner and 2+ children"
                  amount="$7,000"
                />
              </div>
              <div className="half">
                <h3>Childcare Supplement*</h3>
                <div>
                  <FinancialItem
                    label="1 child age 12 or younger"
                    amount="$5,600"
                  />
                  <FinancialItem
                    label="2 children ages 12 or younger"
                    amount="$6,000"
                  />
                  <FinancialItem
                    label="3 children ages 12 or younger"
                    amount="$6,400"
                  />
                  <FinancialItem
                    label="4 or more children ages 12 or younger"
                    amount="$7,200"
                  />
                  <FinancialItem
                    label="Additional allowance for child 3 yrs or younger"
                    amount="$6,400"
                  />
                </div>
                <div className="last-note">*Age defined on September 1 of fellowship year</div>
              </div>
            </div>
            <IconListContainer>
              <IconListItem></IconListItem>
              <IconListItem></IconListItem>
              <IconListItem></IconListItem>
            </IconListContainer>
          </ContentContainer>
        </div>
        <Apply/>
        <Footer/>
      </div>
    );
  }
});
