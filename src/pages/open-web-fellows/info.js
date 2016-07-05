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
              <Panel header={`How can I apply to become an Open Web Fellow?`}>
                <p>{`The 2016 application period is closed at this time. The next call for applicants will open in the spring of 2017.`}</p>
              </Panel>
              <Panel header={`What is the time commitment?`}>
                <p>{`The fellowship is a 10-month program.`}</p>
              </Panel>
              <Panel header={`What sort of travel is expected?`}>
                <p>{`Fellows are expected to relocate to the location of their host organization. There are a few events and times over the course of the 10 months that fellows are expected to travel. There's onboarding, the Mozilla Festival, workweeks, Internet Freedom Festival, and RightsCon.`}</p>
              </Panel>
              <Panel header={`Who are the host organizations?`}>
                <p>{`Host organizations are leading policy and advocacy organizations dedicated to safeguarding the open internet. Host organizations include Centre for Intellectual Property and Information Technology Law , The Citizen Lab, University of Toronto, ColorOfChange, Data & Society, Derechos Digitales, European Digital Rights (EDRi), Freedom of the Press Foundation, Privacy International, American Civil Liberties Union, Amnesty International, Association for Progressive Communications, Free Press, Open Technology Institute, and Public Knowledge.`}</p>
              </Panel>
              <Panel header={`How are host organizations selected?`}>
                <p>Host organizations are selected via an open call for applications. The call for 2017 host organizations will open in fall of 2016. If you’re interested in being a host organization or learning more, please contact <a href="mailto:melissa@mozillafoundation.org">Melissa Romaine, Network Manager.</a></p>
              </Panel>
              <Panel header={`What kind of projects do the fellows work on?`}>
                <p>Fellows focus on three primary project areas during their participation in the fellowship: projects in development with the host organization, personal projects (either pre existing or new initiatives), and community created projects (with the fellowship cohort and or Mozilla’s Policy & Advocacy network at-large). A list of proposed 2016 host organization projects can be found <a href="https://blog.mozilla.org/netpolicy/2016/02/01/2016-open-web-fellows-program-host-organizations/" target="_blank">here</a>.</p>
              </Panel>
              <Panel header={`How are fellows funded over the fellowship?`}>
                <p>{`Funding and additional supplements for which fellows may be eligible are allocated to the individual directly on a monthly basis.`}</p>
              </Panel>
              <Panel header={`What are the tax considerations for the proposed fellowship amounts?`}>
                <p>{`Proposed fellowship amounts are gross amounts and may be reduced by applicable taxes. Fellows are responsible to pay all applicable taxes, whether in their home jurisdictions, the jurisdiction where the fellowship occurs, or any other jurisdiction. In some cases, Mozilla may be required to withhold such taxes at the time of payment, and reduce the amount of fellows’ payments accordingly. For instance, Mozilla may have to withhold up to 30% of any stipend payments attributable to fellowship activities taking place in the U.S., although fellows may be able to claim reduced rates of withholding or refund of a portion of these taxes. It is fellows’ responsibility to communicate in advance with Mozilla about where they will be located throughout the fellowship.`}</p>
              </Panel>
            </Collapse>
          </ContentContainer>
        </div>
        <Footer/>
      </div>
    );
  }
});
