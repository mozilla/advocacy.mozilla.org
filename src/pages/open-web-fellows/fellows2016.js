var React = require(`react`);
var Footer = require(`../../components/footer.js`);
var Header = require(`../../components/header.js`);
var HeroUnit = require(`../../components/hero-unit.js`);
var Apply = require(`../../components/apply.js`);
var FellowsHeader = require(`../../components/fellows-header.js`);
var ContentContainer = require(`../../components/content-container.js`);

var FellowBlock = React.createClass({
  render: function() {
    return (
      <div className="fellow-block">
        <div className="fellow-info-container">
          <div className="fellow-image-container">
            <img height="200" width="200" src={this.props.image}/>
          </div>
          <div className="fellow-info">
            <h2>{this.props.name}</h2>
            <div className="fellow-bio-links">
            {this.props.handle ? <span className="fellow-bio-link"><a href={this.props.handleHref}>@{this.props.handle}</a></span>  : null }
            {this.props.link ? <span className="fellow-bio-link"><a href={this.props.link}>{this.props.linkName}</a></span> : null }
            {this.props.company ? <span className="fellow-bio-link"><a href={this.props.companyHref}>{this.props.company}</a></span> : null }
            </div>
          </div>
        </div>
        <p>{this.props.children}</p>
      </div>
    );
  }
});

module.exports = React.createClass({
  render: function() {
    return (
      <div className="current-fellows-page fellows-page">
        <Header/>
        <HeroUnit className="fellows-hero-unit" image="/assets/2016-hero@2x.jpg">
          <h1>2016 Hosts & Fellows</h1>
        </HeroUnit>
        <FellowsHeader/>
        <div className="page">
          <ContentContainer>
            <p className="intro">We are a network of technologists, makers, policy wonks, and civil society advocates passionate about protecting the free and open internet.</p>
            <h2>Meet Our Fellows</h2>
            <p className="fellows-description">Ford-Mozilla Open Web Fellows are activists and technologists on the front lines of the open internet movement. They’re a diverse group: makers, artists, developers, and data scientists from across the globe. But Fellows all share a common belief: The world can be made a better place by leveraging the open internet.</p>
          </ContentContainer>
          <ContentContainer className="grey slant">
            <FellowBlock
              name="Steffania Paola Costa di Albanez"
              image="/assets/fellows2016/Steffania@2x.jpg"
              company="Derechos Digitales"
              companyHref="https://derechosdigitales.org/"
              handle="stepaola"
              handleHref="https://twitter.com/stepaola"
            >
              Steffania is a feminist, self-taught developer, multidisciplinary designer, and visual artist. She also works as a digital security and coding trainer. Steffania has collaborated with civil society organizations and independent groups in Brazil that engage with issues like solidarity economy, intersectional feminism, privacy, and free speech. Steffania uses her skills to help these organizations increase the impact of advocacy efforts, build websites, applications and data visualizations, and plan workshops and toolkits. As an Open Web Fellow, Steffania will be collaborating with Derechos Digitales to help the civil society sector in Latin America better promote human rights in the digital environment.
            </FellowBlock>
          </ContentContainer>
          <ContentContainer>
            <FellowBlock
              name="Éireann Leverett"
              image="/assets/fellows2016/Eireann@2x.jpg"
              company="Privacy International"
              companyHref="https://www.privacyinternational.org/"
              handle="blackswanburst"
              handleHref="https://twitter.com/blackswanburst"
              link="http://www.concinnity-risks.com/"
              linkName="Éireann’s website"
            >
              Éireann is an academic, a red teamer, and an entrepreneur, and has deep experience working with computer emergency response teams to protect critical infrastructures. Éireann is fascinated by malware, vulnerabilities, cryptography, networks, information theory, and economics — and he believes hacking can win victories for humanity. Currently, Éireann is Founder and CEO of Concinnity Risks and Senior Risk Researcher at Cambridge Centre for Risk Studies. As an Open Web Fellow, Éireann will be working with Privacy International’s Tech Team to analyze surveillance documentation and data, identify and analyze new technologies, and help develop briefings and educational programming with a technical understanding.
            </FellowBlock>
          </ContentContainer>
          <ContentContainer className="grey slant">
            <FellowBlock
              name="Jennifer Helsby"
              image="/assets/fellows2016/Jen@2x.jpg"
              company="Freedom of the Press Foundation"
              companyHref="https://freedom.press/"
              handle="redshiftzero"
              handleHref="https://twitter.com/redshiftzero"
              link="https://redshiftzero.github.io/"
              linkName="Jennifer’s GitHub"
            >
              Jennifer is a data scientist and researcher passionate about using data and technology to catalyze social change. Previously, she was a postdoctoral researcher at the Center for Data Science and Public Policy at the University of Chicago, where she worked on applying machine learning methods to problems in public policy. Currently, Jennifer is a co-founder and CTO of Lucy Parsons Labs, a Chicago-based nonprofit that focuses on police accountability and surveillance oversight. She is also a co-organizer for Cryptoparty Chicago, which teaches everyday people about digital security. As an Open Web Fellow, Jennifer will be working with the Freedom of the Press Foundation to improve SecureDrop, an anonymous whistleblowing platform.
            </FellowBlock>
          </ContentContainer>
          <ContentContainer>
            <FellowBlock
              name="Berhan Taye"
              image="/assets/fellows2016/Berhan@2x.jpg"
              company="Center for Intellectual Property and Information"
              companyHref="https://www.cipit.org/"
              handle="btayeg"
              handleHref="https://twitter.com/btayeg"
              link="https://subalterntones.wordpress.com/"
              linkName="Berhan’s blog"
            >
              Berhan is a social justice activist, a peace studies practitioner, and an avid advocate for open data and the open web. Berhan previously worked at a Conflict Early Warning and Early Response Center mitigating violence in East Africa. She has also conducted research on transitional justice and criminal violence at the University of Notre Dame, consulted for intergovernmental bodies in Addis Ababa and Nairobi, and engaged legislative processes related to land rights in Cape Town. As an Open Web Fellow, Berhan will be based at the Center for Intellectual Property and Information Technology (CIPIT) at the Strathmore Law School in Nairobi, Kenya, focusing on internet freedom in Eastern Africa.
            </FellowBlock>
          </ContentContainer>
          <ContentContainer className="grey slant">
            <FellowBlock
              name="Etienne Maynier"
              image="/assets/fellows2016/Etienne@2x.jpg"
              company="Citizen Lab"
              companyHref="https://citizenlab.org/"
              handle=""
              handleHref=""
            >
              Etienne is a security engineer passionate about issues related to security and digital surveillance. He has worked on penetration testing and incident response for several years, and is now honing his focus on analyzing and better understanding how technologies are used to spy on citizens. Etienne believes in creating and fostering a robust public debate on privacy and surveillance issues. Etienne is a volunteer with Toulouse Hackerspace Factory. As an Open Web Fellow, Etienne will be based at Citizen Lab, an interdisciplinary laboratory based at the Munk School of Global Affairs, University of Toronto, focusing on projects like measuring Internet filtering and network interference and investigating malware attacks.
            </FellowBlock>
          </ContentContainer>
          <ContentContainer>
            <FellowBlock
              name="Siddharth (Sid) Rao"
              image="/assets/fellows2016/Sid@2x.jpg"
              company="European Digital Rights (EDRi)"
              companyHref="https://edri.org/"
              handle="sidnext2none"
              handleHref="https://twitter.com/sidnext2none"
              linkName="Sid’s website"
              link="https://users.aalto.fi/~raos1/"
            >
              Sid is a Free and Open Source Software (FOSS) enthusiast and a privacy fanatic who specializes in the security analysis of communication protocols. He is also passionate about internet services and infrastructure in developing nations. Sid co-founded the social venture ThirdEye, which builds affordable e-­readers for visually-challenged people. He is a past Erasmus Mundus fellow and holds double master's degrees from Aalto University, Finland (Information and Network Security) and University of Tartu, Estonia (Cryptography). As an Open Web Fellow, Sid will be based at European Digital Rights (EDRi), where he will help define policies related to data protection, surveillance, copyright, and network neutrality.
            </FellowBlock>
          </ContentContainer>
          <ContentContainer className="grey slant">
            <FellowBlock
              name="Matt Mitchell"
              image="/assets/fellows2016/Matt@2x.jpg"
              company="ColorofChange"
              companyHref="http://www.colorofchange.org/"
              handle="geminiimatt"
              handleHref="https://twitter.com/geminiimatt"
              link="https://about.me/geminiimatt"
              linkName="Matt’s website"
            >
              Matt is a security researcher, operational security trainer, and data journalist who leads CryptoHarlem, impromptu workshops teaching basic cryptography tools to the predominately African American community in upper Manhattan. Previously, he worked as a data journalist for The New York Times and as a developer for CNN, Aol/Huffington Post, and other news organizations. Matt currently trains activists and journalists in digital security, with a special focus on marginalized populations who are often aggressively monitored, over-policed, and disenfranchised. As an Open Web Fellow, Matt will be based at ColorOfChange pioneering tools and discovering compelling user engagement strategies.
            </FellowBlock>
          </ContentContainer>
          <ContentContainer>
            <FellowBlock
              name="Suchana Seth"
              image="/assets/fellows2016/Suchana@2x.jpg"
              company="Data & Society"
              companyHref="http://www.datasociety.net/"
              handleHref=""
            >
            Suchana is a physicist-turned-data scientist from India. She has built scalable data science solutions and patent-pending applications in text mining and natural language processing for startups and industry research labs. Suchana believes in the power of data to drive positive change, and volunteers with DataKind to mentor data-for-good projects. She is also passionate about closing the gender gap in data science, and leads data science workshops with organizations like Women Who Code. As an Open Web Fellow, Suchana will be based at Data & Society, where she will enable data scientists and technology teams to better use anonymized data.
            </FellowBlock>
          </ContentContainer>
        </div>
        <Footer/>
      </div>
    );
  }
});
