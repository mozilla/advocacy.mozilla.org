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
            <p><a href={this.props.companyHref}>{this.props.company}</a></p>
            <p>{`"` + this.props.quote + `"`} <a href={this.props.handleHref}>{`@` + this.props.handle}</a></p>
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
      <div className="past-fellows-page fellows-page">
        <Header/>
        <HeroUnit className="fellows-hero-unit" image="/assets/fellows.jpg">
          <h1>2015 Hosts & Fellows</h1>
        </HeroUnit>
        <FellowsHeader/>
        <div className="page">
          <ContentContainer>
            <p className="intro">We are a network of technologists, makers, policy wonks, and civil society advocates passionate about protecting the free and open internet. We are now <a href="https://mozilla.forms.fm/2017-ford-mozilla-open-web-fellowship">accepting applications</a> for 2017 host organizations.</p>
            <h2>Meet Our Fellows</h2>
            <p className="fellows-description">Ford-Mozilla Open Web Fellows are activists and technologists on the front lines of the open internet movement. They’re a diverse group: makers, artists, developers, and data scientists from across the globe. But Fellows all share a common belief: The world can be made a better place by leveraging the open internet.</p>
          </ContentContainer>
          <ContentContainer className="grey slant">
            <FellowBlock
              name="Paola Villarreal"
              image="/assets/fellows/1-Paola.png"
              company="American Civil Liberties Union"
              companyHref="https://aclum.org/"
              quote="I am who I am because of the openness of the Web."
              handle="paw"
              handleHref="https://twitter.com/paw"
            >
              Paola is a self-taught systems programmer who, since 1998, has worked and played with all things “open” in governments, NGOs, and the private sector. She previously worked with the government of Mexico City on several civic innovation projects to build real, effective tools that defend democracy. She has also worked at Xamarin Inc. Her passion for open government and data, civic tech, and civil rights has fomented a curiosity to explore how and where technology, openness, and code can strengthen human rights. During her fellowship, Paola collaborated with the ACLU of Massachusetts on various projects, and started building <a href="http://dev.justicesos.org/" target="_blank">Data for Justice</a> using open data from the City of Boston to show where police officers perform stop-and-frisks and fight the war on drugs.
            </FellowBlock>
          </ContentContainer>
          <ContentContainer>
            <FellowBlock
              name="Tim Sammut"
              image="/assets/fellows/2-Tim.png"
              company="Amnesty International"
              companyHref="https://www.amnesty.org/en/"
              quote="The Internet is critical to free expression and access to information. It is paramount that it be open to everyone without limits."
              handle="t1msammut"
              handleHref="https://twitter.com/t1msammut"
            >
              Tim is a network security engineer and advocate with a career that has encompassed support, deployment, architecture, consulting, and innovation roles. He currently focuses on the opportunities and issues created by the blend of people, human rights, and technology around the world. During his time as an Open Web Fellow at Amnesty’s International Secretariat in London, he analyzed data on global hacks like the Hacking Team data breach, helped expose network throttling and vulnerabilities in collaboration with Amnesty branches around the world, and increased his colleagues’ skills with his <a href="https://teamsammut.com/scf/" target="_blank">Secure Communications Framework</a>.
            </FellowBlock>
          </ContentContainer>
          <ContentContainer className="grey slant">
            <FellowBlock
              name="Andrea Del Rio"
              image="/assets/fellows/3-Andrea.png"
              company="Association for Progressive Communications"
              companyHref="https://www.apc.org/"
              quote="On the Web, we are all the same. Once we have access to it, the possibilities are endless."
              handle="andredelrio"
              handleHref="https://twitter.com/andredelrio"
            >
              Andrea is a software developer with a passion for closing the gender gap in STEM industries. She believes that combining technology and education can drive development and break the cycle of poverty, and as such, teaches programming to young women from vulnerable populations at Laboratoria in Lima, Peru. She is also the founder of coders.pe, an open online library of resources to learn how to code, and is passionate about using her skills to have a positive social impact. As an Open Web Fellow, Andrea helped the Association for Progressive Communications create interactive experiences around their Feminist Principles for the Internet and the African Declaration of Internet Rights, and also helped build the <a href="https://www.apc.org/en/irhr/digital-security-first-aid-kit" target="_blank">Digital Security First Aid Kit for Human Rights Defenders</a>.
            </FellowBlock>
          </ContentContainer>
          <ContentContainer>
            <FellowBlock
              name="Drew Wilson"
              image="/assets/fellows/4-Drew.png"
              company="Free Press"
              companyHref="https://www.freepress.net/"
              quote="Without the freedom to organize, communicate, and campaign, all social movements suffer."
              handle="DrewSaysGoVeg"
              handleHref="https://twitter.com/DrewSaysGoVeg"
            >
              Drew is an organizer and software developer who’s passionate about using web technology to accelerate social change movements. With a background in computer science, he’s interested in using modern web technology as a tool to create a more participatory society. Previously, Drew was the technical lead at advocacy organizations focused on international refugee issues, animal protection, and transparency in government. In 2014, he was a Code for America fellow, where he worked with the city of Denver, Colorado to improve civic engagement using open data. In 2010, he founded New England VegFest, an annual vegetarian food festival, and is president of the VegFest Foundation. During the Open Web Fellowship, Drew was based at Free Press and launched the national Internet 2016 campaign, started a podcast about tech activism with two other fellows (<a href="https://netposi.com/" target="_blank">NetPosi</a>), and conducted research around digital tools for activism.
            </FellowBlock>
          </ContentContainer>
          <ContentContainer className="grey slant">
            <FellowBlock
              name="Gem Barrett"
              image="/assets/fellows/5-Gem.png"
              company="Open Technology Institute"
              companyHref="https://www.newamerica.org/oti/"
              quote="The Internet has given people a voice like no medium has before, and the ability for people to freely express themselves without fear of surveillance or censorship must be defended."
              handle="gembarrett"
              handleHref="https://twitter.com/gembarrett"
            >
              Gem is a technologist and speaker who specializes in the use of APIs in web and iOS development. Her extensive experience in design and development allows her to combine creativity and programming with open-source tools to experiment with various frameworks and languages. Being self-taught, she is looking for opportunities to mentor other female coders, and sees this Fellowship as a chance to positively promote women in technology. Her spare time is spent studying towards a BSc in Computing, IT and Design through the Open University, and she is also a keen gamer, cat owner, and tea-drinker. While at OTI, she collaborated with the Measurement Lab initiative to help build the Seattle Broadband Speed Test, launched the <a href="http://www.gembarrett.com/portfolio/coconduct-builder.html" target="_blank">Code of Conduct Builder</a>, and consulted on the Transparency Reporting Toolkit project. Gem also received the 2016 DCFemTech Award and was named one of the Powerful Women Programmers.
            </FellowBlock>
          </ContentContainer>
          <ContentContainer>
            <FellowBlock
              name="Tennyson Holloway"
              image="/assets/fellows/6-Tennyson.png"
              company="Public Knowledge"
              companyHref="https://www.publicknowledge.org/"
              quote="I see computer science as a unique field; it is exceptionally accessible and the capacity for meaningful impact is remarkably high."
              handle="BaronTennyson"
              handleHref="https://twitter.com/BaronTennyson"
            >
              Tennyson is a Free Culture enthusiast, video game edutech programmer, and college radio engineer. He operates a Tor relay, has hosted a weekly Creative Commons-only music show, and solves math problems in his free time. Tennyson believes more people can and should talk about protecting the open web through tools that inform users about their privacy and interaction online. As such, he is dedicated to building open-source technologies that educate, inspire, and liberate communities and users. When not at his computer, Tennyson enjoys traveling, camping, and rock climbing. During his Open Web Fellowship at Public Knowledge, Tennyson experimented with building games to raise awareness amongst policymakers and the general public, provided valuable technical expertise to various FCC filings, and built an <a href="https://tennysonholloway.github.io/sms-vote-updates/" target="_blank">SMS Vote Updater</a> to inform constituents of their representatives’ voting practices.
            </FellowBlock>
          </ContentContainer>
        </div>
        <Footer/>
      </div>
    );
  }
});
