import React  from 'react';
import Footer from '../../components/net-neutrality/footer.js';
import Header from '../../components/net-neutrality/header.js';
import { SimpleNav } from '../../components/net-neutrality/nav.js';
import SignupForm from '../../components/net-neutrality/signup-form.js';

var readResources = [
  {
    title: "Innovators Take Action",
    titleLink: "http://www.innovatorsact.eu/",
    paragraph: "EU Copyright Reform is coming. The question is whether it will leave space for competitive startups.",
    author: "Allied for Startups",
    authorLink: "http://alliedforstartups.org/"
  }, {
    title: "EU Copyright Reform Proposals Unfit for the Digital Age",
    titleLink: "http://www.create.ac.uk/policy-responses/eu-copyright-reform/",
    paragraph: "An Open Letter to Members of the European Parliament and the Council of the European Union",
    author: "CREATe",
    authorLink: "http://www.create.ac.uk/"
  }, {
    title: "Technology is Culture",
    titleLink: "http://www.techisculture.eu/",
    paragraph: "The link between technology and cultural industries is essential: digital provides new options, allowing creative industries to benefit from these opportunities.",
    author: "EDiMA",
    authorLink: "http://www.europeandigitalmediaassociation.org/"
  }, {
    title: "Copyright Reform: Document Pool",
    titleLink: "https://edri.org/copyright-reform-document-pool/",
    paragraph: "All the relevant documents on the EU copyright reform that will be published or leaked. Follow this crucial file for EU citizens’ rights to access to culture, and to their freedom of expression.",
    author: "EDRi",
    authorLink: "https://edri.org/"
  }, {
    title: "Don’t go back on the deal: Joint library statement on EU implementation of the Marrakesh Treaty",
    titleLink: "http://www.eifl.net/system/files/resources/201701/dont_go_back_on_the_deal.pdf",
    paragraph: "Joint statement on Europe’s implementation of the Marrakesh Treaty ahead of Council Working Party on IP meeting",
    authors: [
      {
        name: "EIFL",
        link: "http://www.eifl.net/"
      }, {
        name: "IFLA",
        link: "http://www.ifla.org/"
      }, {
        name: "EBLIDA",
        link: "http://www.eblida.org/"
      }
    ]
  }, {
    title: "Open Letter to the European Commission",
    titleLink: "https://medium.com/eu-copyright-reform/open-letter-to-the-european-commission-6560c7b5cac0#.p2wa8l4s1",
    paragraph: "40 academics from all over the EU express their concern about the Copyright reform.",
    author: "EU Copyright Reform",
    authorLink: "https://medium.com/eu-copyright-reform"
  }, {
    title: "Mozilla position on the Commission proposal for a directive on copyright in the digital single market",
    titleLink: "https://drive.google.com/file/d/0BybHRPPm37TJS0R6cFRpa0x5SmdGWk82YjN2M1Bla19hN3hZ/view",
    paragraph: "A one-pager that summarises Mozilla’s position on the European Commission’s proposal for a directive on copyright in the digital single market.",
    author: "Mozilla",
    authorLink: "https://www.mozilla.org/"
  }, {
    title: "EU Copyright Reform is coming. Is your startup ready?",
    titleLink: "https://medium.com/silicon-allee/eu-copyright-reform-is-coming-is-your-startup-ready-4be81a5fabf7#.ldakcvv2r",
    paragraph: "The forthcoming copyright reform proposed by the European Commission severely threatens the success and momentum that startups have gained in the EU.",
    author: "Silicon Allee Team",
    authorLink: "https://medium.com/@siliconallee"
  }
];
var watchResources = [
  {
    title: "A Meme is born",
    titleLink: "https://www.youtube.com/watch?v=Exc9PAXhOd0",
    paragraph: "Learn how outdate copyright laws threaten online creativity.",
    author: "Mozilla",
    authorLink: "https://www.mozilla.org/"
  },
  {
    title: "Copy (aka copyright) Tells the Story of His Life",
    titleLink: "https://www.youtube.com/watch?v=0fdUDecJ6jc",
    paragraph: "Learn about copyright from birth to internet explosion.",
    author: "Copyright for Creativity",
    authorLink: "http://copyright4creativity.eu/"
  }, {
    title: "Meet Copy’s Cousin ‘Ancy’ (short for Ancillary Copyright)",
    titleLink: "https://www.youtube.com/watch?v=jiBxdH4MM_0",
    paragraph: "Explaining “the role of publishers in the copyright value chain”. In plain English this refers to the so-called neighbouring rights, and more specifically the notion of ‘ancillary copyright’.",
    author: "Copyright for Creativity",
    authorLink: "http://copyright4creativity.eu/"
  }, {
    title: "Robocopyright 2.0 -- The 2016 Copyright Review",
    titleLink: "https://www.youtube.com/watch?v=-CdfIpTiE3g",
    paragraph: "Copy (short for copyright) tells the incredible story of how the EC ignored all other stakeholders, created 'RoboCopyright 2.0' and put his Cousin 'Ancy' (short for Ancillary Copyright) on steroids.",
    author: "Copyright for Creativity",
    authorLink: "http://copyright4creativity.eu/"
  }, {
    title: "Experts on How to Make Copyright Work Again",
    titleLink: "http://www.communia-association.org/2016/09/20/video-experts-on-how-to-make-copyright-work-again/",
    paragraph: "Copyright policy experts from civil society organisations share their views on the current copyright reform: what are the biggest hopes, fears, and concrete plans to improve the current copyright regime to fit our digital society?",
    authors: [
      {
        name: "Communia",
        link: "http://www.communia-association.org/"
      },
      {
        name: "EDRi",
        link: "https://edri.org/"
      }
    ]
  }, {
    title: "European Internet Forum: Copyright and Creation in the Internet Era - Mozilla on the Copyright Directive Proposal",
    titleLink: "https://www.youtube.com/watch?v=MnvS702Kav8",
    paragraph: "At the EIF lunch debate on the EU's copyright rules reform, Raegan MacDonald (Mozilla’s Sr. EU Policy Manager) speaks about Mozilla’s stance.",
    author: "European Internet Forum",
    authorLink: "http://www.eifonline.org/"
  }, {
    title: "Copywrongs 2.0",
    titleLink: "https://media.ccc.de/v/33c3-8229-copywrongs_2_0",
    paragraph: "At 33C3, Julia Reda speaks to how the EU copyright reform threatens freedom of expression: making sharing even the tiniest snippets of news content subject to costly licensing, and obligating internet platforms to monitor all user uploads.",
    author: "Julia Reda",
    authorLink: "https://juliareda.eu/"
  }, {
    title: "Réforme du droit d'auteur pour le 21e siècle",
    titleLink: "https://air.mozilla.org/copyright-reform-for-the-21st-century-2017-01-09/",
    paragraph: "Ecoutez Wikimedia France, La Quadrature du Net et d'autres nous parler des opportunités et défis qui entourent cette réforme du droit d'auteur et ce que vous pouvez faire pour aider.",
    authors: [
      {
        name: "Mozilla",
        link: "https://www.mozilla.org/"
      }, {
        name: "Wikimedia France",
        link: "http://www.wikimedia.fr/"
      }, {
        name: "La Quadrature du Net",
        link: "https://www.laquadrature.net/"
      }
    ]
  }, {
    title: "EU-Urheberrechtsreform erklärt",
    titleLink: "https://air.mozilla.org/EU-Urheberrechtsreform-erklart-Event-2017-03-02/",
    paragraph: "EU-Urheberrechtsreform - das geht doch besser! Angesichts bislang enttäuschender Reformvorschläge müssen wir aktiv werden - und zwar alle.",
    authors: [
      {
        name: "Mozilla",
        link: "https://www.mozilla.org/"
      }, {
        name: "Wikimedia Deutschland",
        link: "https://www.wikimedia.de/wiki/Hauptseite"
      }, {
        name: "iRights",
        link: "http://irights.org/"
      }, {
        name: "CCC",
        link: "https://www.ccc.de/"
      }, {
        name: "Julia Reda",
        link: "https://juliareda.eu/"
      }
    ]
  }
];
var chatFollowResources = [
  {
    title: "#Copyright4Startups",
    titleLink: "https://twitter.com/search?f=tweets&vertical=default&q=%23copyright4startups&src=typd",
    paragraph: "Join the chat on Twitter to defend innovation and startups amidst copyright reform."
  }, {
    title: "#FixCopyright",
    titleLink: "https://twitter.com/hashtag/fixcopyright?f=tweets&vertical=default&src=hash",
    paragraph: "Join the chat on Twitter to call for better copyright reform."
  }, {
    title: "Allied for Startups",
    titleLink: "https://medium.com/@Allied4Startups",
    paragraph: "Join the conversation on the Allied for Startups Medium channel."
  }, {
    title: "The EU Copyright Reform: Why Stakeholders Agree it Must Be Changed",
    titleLink: "https://medium.com/eu-copyright-reform",
    paragraph: "Join the conversation on the EU Copyright Reform Medium channel."
  }
];

var Resource = React.createClass({
  render: function() {
    var author = null;
    var authorLink = null;
    if (this.props.author) {
      authorLink = this.props.author;
      if (this.props.authorLink) {
        authorLink = (<a href={this.props.authorLink}>{this.props.author}</a>);
      }
      author = (<h4>By {authorLink}</h4>);
    }
    if (this.props.authors) {
      author = this.props.authors.map((author, index) => {
        var seperator = ", ";
        if (index === this.props.authors.length - 2) {
          seperator = " and ";
        }
        if (index === this.props.authors.length - 1) {
          seperator = "";
        }
        return (
          <span key={"author-" + index}><a href={author.link}>{author.name}</a>{seperator}</span>
        );
      });
      author = (<h4>By {author}</h4>);
    }
    return (
      <div className="resource-container">
        <div className="resource-content-container">
          <h4><a href={this.props.titleLink}>{this.props.title}</a></h4>
          <p>{this.props.paragraph}</p>
          {author}
        </div>
      </div>
    );
  }
});

var Resources = React.createClass({
  contextTypes: {
    intl: React.PropTypes.object
  },
  render: function() {
    var className = "signup";
    if (this.props.test) {
      className += " " + this.props.test;
    }
    return (
      <div className={className}>
        <div className="page">
          <SimpleNav active="resources"/>
          <div className="resources-page-container">
            <div className="resources-page">
              <h2>Resources</h2>
              <p>Learn more about copyright Reform</p>
              <div className="read">
                <h4 className="link-like">Read</h4>
                <div className="horizontal-rule"></div>
                <div className="resources-container">
                  {
                    readResources.map((resource, index) => {
                      return (
                        <Resource key={"read-" + index} {...resource}/>
                      );
                    })
                  }
                </div>
              </div>
              <div className="watch">
                <h4 className="link-like">Watch</h4>
                <div className="horizontal-rule"></div>
                <div className="resources-container">
                  {
                    watchResources.map((resource, index) => {
                      return (
                        <Resource key={"watch-" + index} {...resource}/>
                      );
                    })
                  }
                </div>
              </div>
              <div className="chat-follow">
                <h4 className="link-like">Chat + Follow</h4>
                <div className="horizontal-rule"></div>
                <div className="resources-container chat-follow-container">
                  {
                    chatFollowResources.map((resource, index) => {
                      return (
                        <Resource key={"chat-follow-" + index} {...resource}/>
                      );
                    })
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer/>
      </div>
    );
  }
});

module.exports = Resources;
