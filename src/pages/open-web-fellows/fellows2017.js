var React = require(`react`);
var Footer = require(`../../components/footer.js`);
var Header = require(`../../components/header.js`);
var HeroUnit = require(`../../components/hero-unit.js`);
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
      <div className="fellows-page-2017 fellows-page">
        <Header/>
        <HeroUnit className="fellows-hero-unit" image="/assets/2016-hero@2x.jpg">
          <h1>2017 Hosts & Fellows</h1>
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
              name="Sarah Aoun"
              image="/assets/fellows2017/Saraha@2x.jpg"
              company="Hollaback!"
              companyHref="https://www.ihollaback.org/"
              handle="sa0un"
              handleHref="https://twitter.com/sa0un"
              link="http://www.sarahaoun.com/"
              linkName="Sarah's website"
            >
              Sarah is a data activist, operational security trainer, and programmer. Her work lies at the intersection of tech, human rights, and transformative justice. She’s collaborated with activists, journalists, grassroots social movements, and NGOs in the US and MENA region on digital security, ethical data & privacy, and data-driven storytelling. Sarah grew up in Lebanon and holds a B.A. in International Relations from Brown University.
            </FellowBlock>
          </ContentContainer>
          <ContentContainer>
            <FellowBlock
              name="Carlos Guerra"
              image="/assets/fellows2017/Carlos@2x.jpg"
              company="Derechos Digitales"
              companyHref="https://derechosdigitales.org/"
              handle="cguerrave"
              handleHref="https://twitter.com/cguerrave"
            >
              Carlos works in information security training and auditing Human Rights defender organizations and independent media outlets in Latin America. He is one of the founders of Venezuela Inteligente, an NGO focused on the application of new technologies to promote participation and accountability. With this organization Carlos has worked in technical Internet censorship monitoring and Human Rights violations documentation. Carlos is particularly interested in Organizational Security, threat modelling, Human Rights incident documentation, electoral monitoring, technical censorship, surveillance and security controls. Carlos will be supporting Derechos Digitales by developing research, awareness and education projects on privacy, surveillance, security and compliance online.
            </FellowBlock>
          </ContentContainer>
          <ContentContainer className="grey slant">
            <FellowBlock
              name="Sarah Kiden"
              image="/assets/fellows2017/Sarahk@2x.jpg"
              company="Research ICT Africa"
              companyHref="http://www.researchictafrica.net/home.php"
              handle="MsKiden"
              handleHref="https://twitter.com/MsKiden"
            >
              Sarah is a technologist, academic and trainer, passionate about Open Source solutions, Internet Policy and ICT for Development. She is on the core engineering team at Research and Education Network for Uganda, coordinating capacity building initiatives for Universities and Research Institutions in Uganda. She volunteers with the Internet Society Uganda Chapter, ICANN’s At-Large Advisory Committee, is a Board Advisor for One Mobile Projector per Trainer and a Co-Founder of DigiWave Africa. Sarah holds an MSc in Information Systems. As an Open Web Fellow, Sarah will be based at Research ICT Africa, where she will work on the Internet measurements project, focusing on broadband performance, Internet peering and users behavior.
            </FellowBlock>
          </ContentContainer>
          <ContentContainer>
            <FellowBlock
              name="Bram Abramson"
              image="/assets/fellows2017/Bram@2x.jpg"
              company="Citizen Lab"
              companyHref="https://citizenlab.org/"
              handle="bramabramson"
              handleHref="https://twitter.com/bramabramson"
            >
              Bram is a telecom, media and technology lawyer and public policy leader with a passion for privacy and commitment to clarity.  Past roles include head of law, regulation, and public policy at TekSavvy, communications lawyer at McCarthy Tétrault, and senior analyst at Ottawa’s CRTC and Washington, DC’s TeleGeography.  As an Open Web Fellow Bram will work with Citizen Lab, the interdisciplinary laboratory based at the Munk School of Global Affairs, University of Toronto.
            </FellowBlock>
          </ContentContainer>
          <ContentContainer className="grey slant">
            <FellowBlock
              name="Freddy Martinez"
              image="/assets/fellows2017/Freddy@2x.jpg"
              company="Freedom of the Press Foundation"
              companyHref="https://freedom.press/"
              handle="B_Meson"
              handleHref="https://twitter.com/B_Meson"
            >
              Freddy is a activist, security engineer, and was previously a physicist. He is also the Director of Lucy Parsons Labs, a police accountability and transparency non-profit based in Chicago. His interests include computer security, hacking, politics and open source software.
            </FellowBlock>
          </ContentContainer>
          <ContentContainer>
            <FellowBlock
              name="Rishab Nithyanand"
              image="/assets/fellows2017/Rishab@2x.jpg"
              company="Data & Society"
              companyHref="http://www.datasociety.net/"
              handle="rishabn_"
              handleHref="https://twitter.com/rishabn_"
              linkName="Rishab’s website"
              link="https://www.rishabn.com/"
            >
              Rishab has research interests in the areas of security, privacy, and Internet measurement. More specifically, he enjoys research geared towards defending anonymity, understanding Internet censorship, measuring aspects of the advertising and tracking ecosystem, and generally understanding the impact of the Internet on the sociopolitical realities of today. In the past, he dabbled in usable security and computer theory. In the coming year, he plans to work towards understanding of how the Internet impacts political action and discourse.
            </FellowBlock>
          </ContentContainer>
          <ContentContainer className="grey slant">
            <FellowBlock
              name="Rebecca Ricks"
              image="/assets/fellows2017/Rebecca@2x.jpg"
              company="Human Rights Watch"
              companyHref="https://www.hrw.org/"
              handle="baricks"
              handleHref="https://twitter.com/baricks"
              link="http://beccaricks.space/"
              linkName="Rebecca's website"
            >
              Rebecca is a multidisciplinary software developer, researcher, and activist who is engaged in issues of privacy and freedom of expression online. She holds a master's degree from NYU-ITP., where she has researched and built interactive experiences that probe algorithmic and surveillance systems.  A self-taught programmer, she is passionate about building digital tools for activists. As an Open Web Fellow, Rebecca will contribute to advocacy work at Human Rights Watch, with a particular emphasis on privacy and surveillance.
            </FellowBlock>
          </ContentContainer>
          <ContentContainer>
            <FellowBlock
              name="Maya Wagoner"
              image="/assets/fellows2017/Maya@2x.jpg"
              company="Brooklyn Public Library"
              companyHref="https://www.bklynlibrary.org/"
              handle="mayawagon"
              handleHref="https://twitter.com/mayawagon"
              link="http://mayawagon.github.io/"
              linkName="Maya's website"
            >
              Maya is a researcher, user experience designer, and organizer passionate about critical pedagogy and democratizing technology. She previously worked at the Open Technology Institute on a participatory action research project to understand how activists, advocates, educators, and technologists work with technology for social justice. While at MIT, Maya helped develop curricula with the Imagination, Computation, and Expression Lab to understand how identity and the use of avatars play a role in computer science education. Prior to this, she served as a co-chair of the UC Santa Cruz African/Black Student Alliance, and an organizer of Code for San Francisco, a volunteer civic technology group.
            </FellowBlock>
          </ContentContainer>
          <ContentContainer className="grey slant">
            <FellowBlock
              name="Aleksandar Todorović (r3bl)"
              image="/assets/fellows2017/Aleksandar@2x.jpg"
              company="Bits of Freedom"
              companyHref="https://www.bof.nl/"
              handle="@r3bl_"
              handleHref="https://twitter.com/r3bl_"
              link="https://r3bl.me"
              linkName="Aleksandar's website"
            >
            Aleksandar describes himself as an open source advocate with a passion in information security. So far, he has contributed to some worldly-known projects such as reddit and elementary OS. Previously he has been working for an investigative journalism organization (Organized Crime and Corruption Reporting Project), where, amongst other things, he was helping journalists to become more secure in their communication with their sources and between themselves.
            </FellowBlock>
          </ContentContainer>
          <ContentContainer>
            <FellowBlock
              name="Orlando Del Aguila"
              image="/assets/fellows2017/Orlando@2x.jpg"
              company="Majal"
              companyHref="https://majal.org/"
              handle="eatcodetravel"
              handleHref="https://twitter.com/eatcodetravel"
              link="https://www.hashlabs.com"
              linkName="Orlando's website"
            >
              Orlando is a software engineer, entrepreneur and a consultant who is experienced in high scalability projects. He aims to take on more social projects that impact the lives of underrepresented communities, however he is a traveler and a foodie at heart.
            </FellowBlock>
          </ContentContainer>
          <ContentContainer className="grey slant flat-bottom">
            <FellowBlock
              name="Nasma Ahmed"
              image="/assets/fellows2017/Nasma@2x.jpg"
              company="MPower Change"
              companyHref="https://mpowerchange.org/"
              handle="nasma_ahmed"
              handleHref="https://twitter.com/nasma_ahmed"
              link="http://www.nasmaahmed.ca/"
              linkName="Nasma's website"
            >
              Nasma is a black Muslimah working within the intersections of social justice, technology and policy. She is a technologist and capacity builder based in Toronto. Currently she works with feminist organizations based in Canada focusing on digital literacy and digital security. Recently she finished a degree at the University of Toronto majoring in Public Policy and City Studies. She is passionate about building accessible and inclusive technology for communities she cares about.
            </FellowBlock>
          </ContentContainer>
        </div>
        <Footer/>
      </div>
    );
  }
});
