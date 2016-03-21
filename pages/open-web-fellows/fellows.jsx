var React = require(`react`);
var Footer = require(`../../components/footer.jsx`);
var Header = require(`../../components/header.jsx`);
var HeroUnit = require(`../../components/hero-unit.jsx`);
var Apply = require(`../../components/apply.jsx`);
var FellowsHeader = require(`../../components/fellows-header.jsx`);
var ContentContainer = require(`../../components/content-container.jsx`);

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
      <div className="fellows-page">
        <Header/>
        <HeroUnit className="fellows-hero-unit" image="/assets/fellows.jpg">
          <h1>2015 Hosts & Fellows</h1>
        </HeroUnit>
        <FellowsHeader/>
        <div className="page">
          <ContentContainer>
            <FellowBlock
              name="Paola Villarreal"
              image="/assets/fellows/1-Paola.png"
              company="American Civil Liberties Union"
              companyHref="https://aclum.org/"
              quote="I am who I am because of the openness of the Web."
              handle="paw"
              handleHref="https://twitter.com/paw"
            >
              Paola is a self-taught systems programmer who, since 1998, has worked and played with all things “open” in governments, NGOs, and the private sector. She recently worked with the government of Mexico City on several civic innovation projects to build real, effective tools that defend democracy. She has also worked at Xamarin Inc. Her passion for open government and data, civic tech, and civil rights has fomented a curiosity to explore how and where technology, openness, and code can strengthen human rights. Paola will be working with the ACLU of Massachusetts on various projects, including collaboration with graduate students at the Massachusetts Institute of Technology on mobile applications that expose surveillance techniques employed by others.
            </FellowBlock>
          </ContentContainer>
          <ContentContainer className="grey slant">
            <FellowBlock
              name="Tim Sammut"
              image="/assets/fellows/2-Tim.png"
              company="Amnesty International"
              companyHref="https://www.amnesty.org/en/"
              quote="The Internet is critical to free expression and access to information. It is paramount that it be open to everyone without limits."
              handle="t1msammut"
              handleHref="https://twitter.com/t1msammut"
            >
              Tim is a network security engineer and advocate with a career that has encompassed support, deployment, architecture, consulting, and innovation roles. He currently focuses on the opportunities and issues created by the blend of people, human rights, and technology around the world. He is looking forward to merging his interests, expertise, and creativity as an Open Web Fellow and hopes to make a positive impact on issues related to the Internet and human rights. Tim will be working at Amnesty International’s International Secretariat on both tools and policies to protect human rights workers online from targeted attacks, so they can continue the work to improve the world.
            </FellowBlock>
          </ContentContainer>
          <ContentContainer>
            <FellowBlock
              name="Andrea Del Rio"
              image="/assets/fellows/3-Andrea.png"
              company="Association for Progressive Communications"
              companyHref="https://www.apc.org/"
              quote="On the Web, we are all the same. Once we have access to it, the possibilities are endless."
              handle="andredelrio"
              handleHref="https://twitter.com/andredelrio"
            >
              Andrea is a software developer with a passion for closing the gender gap in STEM industries. She believes that combining technology and education can drive development and break the cycle of poverty, and as such, teaches programming to young women from vulnerable populations at Laboratoria in Lima, Peru. She is also the founder of coders.pe, an open online library of resources to learn how to code, and is passionate about using her skills to have a positive social impact. Andrea will be working with the Association of Progressive Communications on their Policy Program to make the African Declaration of Internet Rights more accessible, and with the Women’s Rights Program to protect women and other disenfranchised demographics online.
            </FellowBlock>
          </ContentContainer>
          <ContentContainer className="grey slant">
            <FellowBlock
              name="Drew Wilson"
              image="/assets/fellows/4-Drew.png"
              company="Free Press"
              companyHref="https://www.freepress.net/"
              quote="Without the freedom to organize, communicate, and campaign, all social movements suffer."
              handle="DrewSaysGoVeg"
              handleHref="https://twitter.com/DrewSaysGoVeg"
            >
              Drew is an organizer and software developer who’s passionate about using web technology to accelerate social change movements. With a background in computer science, he’s interested in using modern web technology as a tool to create a more participatory society. Previously, Drew was the technical lead at advocacy organizations focused on international refugee issues, animal protection, and transparency in government. In 2014, he was a Code for America fellow, where he worked with the city of Denver, Colorado to improve civic engagement using open data. In 2010, he founded New England VegFest, an annual vegetarian food festival, and is president of the VegFest foundation. Drew will be working with Free Press to provide educational context and tools to the public, and help Free Press’ digital campaigning efforts.
            </FellowBlock>
          </ContentContainer>
          <ContentContainer>
            <FellowBlock
              name="Gem Barrett"
              image="/assets/fellows/5-Gem.png"
              company="Open Technology Institute"
              companyHref="https://www.newamerica.org/oti/"
              quote="The Internet has given people a voice like no medium has before, and the ability for people to freely express themselves without fear of surveillance or censorship must be defended."
              handle="gembarrett"
              handleHref="https://twitter.com/gembarrett"
            >
              Gem is a technologist and speaker who specializes in the use of APIs in web and iOS development. Her extensive experience in design and development allows her to combine creativity and programming with open-source tools to experiment with various frameworks and languages. Being self-taught, she is looking for opportunities to mentor other female coders, and sees this Fellowship as a chance to positively promote women in technology. Her spare time is spent studying towards a BSc in Computing, IT and Design through the Open University, and she is also a keen gamer, cat owner, and tea-drinker. She will be working with OTI on their Measurement Lab initiative, analyzing and presenting data in visualizing stimulating ways to inform and empower the public about their broadband and mobile connections in an effort to sustain a healthy, innovative Internet.
            </FellowBlock>
          </ContentContainer>
          <ContentContainer className="grey slant flat-bottom">
            <FellowBlock
              name="Tennyson Holloway"
              image="/assets/fellows/6-Tennyson.png"
              company="Public Knowledge"
              companyHref="https://www.publicknowledge.org/"
              quote="I see computer science as a unique field; it is exceptionally accessible and the capacity for meaningful impact is remarkably high."
              handle="BaronTennyson"
              handleHref="https://twitter.com/BaronTennyson"
            >
              Tennyson is a Free Culture enthusiast, video game edutech programmer, and college radio engineer. He operates a Tor relay, has hosted a weekly Creative Commons-only music show, and solves math problems in his free time. Tennyson believes more people can and should talk about protecting the open Web through tools that inform users about their privacy and interaction online. As such, he is dedicated to building open-source technologies that educate, inspire, and liberate communities and users. When not at his computer, Tennyson enjoys traveling, camping, and rock climbing. He will be working with Public Knowledge on initiatives to better inform policy makers in DC, and on projects that creatively educate people about threats to the open Internet.
            </FellowBlock>
          </ContentContainer>
        </div>
        <Apply/>
        <Footer/>
      </div>
    );
  }
});
