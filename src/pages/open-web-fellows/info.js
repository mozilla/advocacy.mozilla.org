var React = require(`react`);
var Footer = require(`../../components/footer.js`);
var Header = require(`../../components/header.js`);
var HeroUnit = require(`../../components/hero-unit.js`);
var Apply = require(`../../components/apply.js`);
var FellowsHeader = require(`../../components/fellows-header.js`);
var ContentContainer = require(`../../components/content-container.js`);
var ImageTag = require(`../../components/imagetag.js`);

var Collapse = require(`rc-collapse`);

let Panel = Collapse.Panel;


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
          <h1>FAQ</h1>
        </HeroUnit>
        <FellowsHeader/>
        <div className="page">
          <ContentContainer className="fellowship-structure-container">
            <h2 className="center-align">Application FAQ</h2>
          </ContentContainer>
          <ContentContainer>
            <Collapse>
              <Panel header={`I live outside of the US, UK or Canada - am I eligible?`}>
                <p>{`Yes, as long as you are legally allowed to work in the country where you currently reside.`}</p>
              </Panel>

              <Panel header={`What disciplines are included in "life and natural sciences"?`}>
                <p>{`Biology, chemistry, earth science, physics, astronomy, ecology, etc.`}</p>
                <p>{`For now, our call is limited to the disciplines listed above. We would like to extend this in future years, as we know open research is as important in other disciplines as it is in these.`}</p>
              </Panel>

              <Panel header={`I work at a research institution but not a "university" - can I still apply?`}>
                <p>{`You bet! Government funded research institutions and groups (e.g., National Institutes of Health, Environmental Protection Agency, or research centers like NEON, BEACON, etc) as well as positions in other research institutions (e.g., Museum of Natural History and many Planetariums have research arms, as well) count!`}</p>
                <p>{`Still unsure? Let us know - we'd be happy to talk it through.`}</p>
              </Panel>

              <Panel header={`I'm not currently at a university or research institution - can I still apply?`}>
                <p>{`Fellows are required to be based at a university or research institution for the 10 month tenure. Mozilla cannot assist Fellows in finding placements.`}</p>
              </Panel>

              <Panel header={`Can I continue my research, coursework or teaching during this time?`}>
                <p>{`It depends. Fellows are allowed to spend up to 20% of their time maintaining their work for their home institution - think, 1 day a week. Please note: This is a time commitment, and Fellows are expected to devote the majority of their time to the Fellowship, their projects and interaction with the Mozilla community. If you have a standing commitment that you think may affect your time, please note in your application.`}</p>
                <p>{`Fellowship applicants must have buy-in from their supervisors in advance, and include supervisors' contact information on the application. Supervisors will be interviewed separately should applicants move on to the second round, and their support will be a critical consideration for acceptance of fellows.`}</p>
              </Panel>

              <Panel header={`When are Fellowships intended to start? And end?`}>
                <p>{`The anticipated start date for Fellows is in September 2016, running through July 2017.`}</p>
              </Panel>

              <Panel header={`When will we be notified if we're selected?`}>
                <p>{`The notification date will vary depending on the volume of applications received but we project that prospective candidates will be contacted by the last week in August, 2016.`}</p>
              </Panel>

              <Panel header={`What sort of travel is expected?`}>
                <p>{`There are a few events and times over the course of the 10 months that fellows are expected to travel and come together at a minimum. There's onboarding (likely late Sept / early October), the Mozilla Festival (Oct. 28-30 in London), and two workweeks in 2016 - location TBD.`}</p>
              </Panel>

              <Panel header={`I'm a pre-tenure, early career faculty member - does that rule me out?`}>
                <p>{`Not necessarily! Be sure to list your teaching commitments in the application, as there are travel obligations and expectations that we want to make sure you have adequate time for.`}</p>
              </Panel>

              <Panel header={`What role does my advisor play in this process?`}>
                <p>{`We want to make sure Fellows, as they'll be working somewhat autonomously within their institution are in supportive environments. We find this is best achieved with advisors who are supportive and tuned in to the challenges around open research practice and data sharing within the university, and are open to Fellows working more full-time for 10 months to build momentum, teach, and collaborate to advance those goals within those labs and research settings.`}</p>
              </Panel>

              <Panel header={`How will I be funded over the Fellowship?`}>
                <p>{`Funding and apitional supplements for which fellows may be eligible are allocated to the individual directly on a monthly basis, not run through institutions. No university overhead-like arrangements - the funding goes straight to the Fellow themselves.`}</p>
              </Panel>

              <Panel header={`What are the tax considerations alluded to in the call for applications?`}>
                <p>{`Proposed fellowship amounts are gross amounts and may be reduced by applicable taxes.  Fellows are responsible to pay all applicable taxes, whether in their home jurisdictions, the jurisdiction where the fellowship occurs, or any other jurisdiction.  In some cases Mozilla may be required to withhold such taxes at the time of payment, and reduce the amount of fellows’ payments accordingly.  For instance, Mozilla may have to withhold up to 30% of any stipend payments attributable to fellowship activities taking place in the U.S., although fellows may be able to claim reduced rates of withholding or refund of a portion of these taxes.  It is fellows’ responsibility to communicate in advance with Mozilla about where they will be located throughout the fellowship.`}</p>
              </Panel>
            </Collapse>
          </ContentContainer>
        </div>
        <Footer/>
      </div>
    );
  }
});
