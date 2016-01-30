var React = require('react');
var Footer = require('../../components/footer.jsx');
var Header = require('../../components/header.jsx');
var HeroUnit = require('../../components/hero-unit.jsx');
var Apply = require('../../components/apply.jsx');
var FellowsHeader = require('../../components/fellows-header.jsx');
var ContentContainer = require('../../components/content-container.jsx');
var ImageTag = require('../../components/imagetag.jsx');

var IconListContainer = React.createClass({
  render: function() {
    return (
      <div className="iconlist-container">{this.props.children}</div>
    );
  }
});

var IconListItem = React.createClass({
  render: function() {
    return (
      <div className="iconlist-item">
        <div>
          <ImageTag height={this.props.height} width={this.props.width} alt={this.props.alt} src1x={this.props.src1x} src2x={this.props.src2x}/>
        </div>
        <div className="content-container">
          {this.props.children}
        </div>
      </div>
    );
  }
});

var TimeLineItemContainer = React.createClass({
  render: function() {
    return (
      <div className="timeline-item-container">
        <div className="timeline-month-container">
          <div className="timeline-month">
            {this.props.month}
          </div>
          <div className="vertical-line"></div>
        </div>
        <div className="timeline-item-container-content">{this.props.children}</div>
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
        <HeroUnit className="info-hero-unit" image="/assets/info.jpg">
          <h1>Program & Financial Details</h1>
          <div>
            <a href="https://mozilla-foundation-2.forms.fm/2016-ford-mozilla-open-web-fellows-application
" className="button">apply now</a>
          </div>
        </HeroUnit>
        <FellowsHeader/>
        <div className="page">
          <ContentContainer>
            <h2 className="center-align">Structure of the Fellowship</h2>
            <p className="intro">As a fellow, you will pursue the following activities over your fellowship year.</p>
            <IconListContainer>
              <IconListItem alt="pie chart icon" height={71} width={71} src1x="/assets/icons/icon-third1.svg">
                <p><span className="highlight">Work on projects defined by your host organization.</span> These can be campaigns, research or technology focused. For some examples, browse what the 2015 cohort worked on.</p>
              </IconListItem>
              <IconListItem alt="pie chart icon" height={71} width={71} src1x="/assets/icons/icon-third2.svg">
                <p><span className="highlight">Invest in your future as an open Web advocate.</span> By sharing your work in the open, participating in professional development activities, attending and presenting talks, or writing and publishing, you will spend time developing your own path while contributing to a global movement.</p>
              </IconListItem>
              <IconListItem alt="pie chart icon" height={71} width={71} src1x="/assets/icons/icon-third3.svg">
                <p><span className="highlight">Contribute to a global advocacy community.</span> In collaboration with the 2016 cohort of host organizations and Mozilla, you will work on “network projects” that benefit the existing network of organizations that defend the public Internet. These projects could take the form of shared policy positions, coalition campaigns, or open source tools that solve shared needs.</p>
              </IconListItem>
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
            <div className="row">
              <div className="half">
                <IconListContainer>
                  <IconListItem alt="onboarding icon" height={50} width={37} src1x="/assets/icons/icon-onboarding.png" src1x="/assets/icons/icon-onboarding@2x.png">
                    <h4>Onboarding</h4>
                    <p>1 week at the beginning of the Fellowship to meet in person with other fellows, host organizations, and Mozilla staff, and to design the Fellowship year and cohort expectations together.</p>
                  </IconListItem>
                  <IconListItem alt="retreat icon" height={37} width={37} src1x="/assets/icons/icon-retreat.png" src1x="/assets/icons/icon-retreat@2x.png">
                    <h4>Fellows Retreat</h4>
                    <p>A halfway point check-in and time for cross collaboration in the cohort.</p>
                  </IconListItem>
                  <IconListItem alt="additional icon" height={47} width={37} src1x="/assets/icons/icon-additional.png" src1x="/assets/icons/icon-additional@2x.png">
                    <h4>Additional</h4>
                    <p>Conferences, hackathons and global networking opportunities may arise due to events in the Internet advocacy space.</p>
                  </IconListItem>
                </IconListContainer>
              </div>
              <div className="half">
                <IconListContainer>
                  <IconListItem alt="mozfest icon" height={37} width={37} src1x="/assets/icons/icon-mozfest.png" src1x="/assets/icons/icon-mozfest@2x.png">
                    <h4><a href="https://2015.mozillafestival.org/">MozFest</a></h4>
                    <p>1 week with the rest of the Mozilla Foundation and community to share knowledge, learn, and meet other makers (location: London, UK).</p>
                  </IconListItem>
                  <IconListItem alt="capstone icon" height={54} width={37} src1x="/assets/icons/icon-capstone.png" src1x="/assets/icons/icon-capstone@2x.png">
                    <h4>Capstone</h4>
                    <p>An event at the end of the Fellowship year to showcase each fellow’s work, share experiences with others.</p>
                  </IconListItem>
                </IconListContainer>
              </div>
            </div>
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
            <div className="row row-list">
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
            <div className="row row-list">
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
                <div className="fine-print">*Age defined on September 1 of fellowship year</div>
              </div>
            </div>
            <IconListContainer>
              <IconListItem alt="research icon" height={91} width={91} src1x="/assets/icons/icon-research.png" src1x="/assets/icons/icon-research@2x.png">
                <h4>Research & Equipment</h4>
                <p>Up to $3,500 over the course of the fellowship will be given towards the purchase of laptop computers, digital cameras, recorders, fees for continuing studies or other courses related to the fellowship, software, hosting, research fees, and travel expenses for conferences related to the fellow’s research or study.</p>
              </IconListItem>
              <IconListItem alt="travel icon" height={91} width={91} src1x="/assets/icons/icon-travel.png" src1x="/assets/icons/icon-travel@2x.png">
                <h4>Travel Allowance</h4>
                <p>All approved fellowship trips – domestic and international – are covered. Additional travel required by the host organizations will be covered by the host organization.</p>
              </IconListItem>
              <IconListItem alt="visa icon" height={91} width={91} src1x="/assets/icons/icon-visa.png" src1x="/assets/icons/icon-visa@2x.png">
                <h4>Visa Assistance</h4>
                <p>Mozilla will work directly with fellows and fellowship partners to try to secure necessary visas if required.  Eligibility for visas will depend on requirements of the country where the fellow will be hosted, and the fellow’s nationality.</p>
              </IconListItem>
            </IconListContainer>
          </ContentContainer>
        </div>
        <Apply/>
        <Footer/>
      </div>
    );
  }
});
