var React = require('react');
var Footer = require('../../components/footer.jsx');
var Header = require('../../components/header.jsx');
var HeroUnit = require('../../components/hero-unit.jsx');
var FellowsHeader = require('../../components/fellows-header.jsx');
var ContentContainer = require('../../components/content-container.jsx');

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
            <p>{"\"" + this.props.quote + "\""} <a href={this.props.handleHref}>{"@" + this.props.handle}</a></p>
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
        <HeroUnit image="/assets/fellows.jpg"></HeroUnit>
        <FellowsHeader/>
        <div className="page">
          <ContentContainer>
            <FellowBlock
              name="Paola Villarreal"
              image="/assets/fellows/1-Paola.png"
              company="American Civil Liberties Union"
              companyHref="#"
              quote="I am who I am because of the openness of the Web."
              handle="paw"
              handleHref="#"
            >
              Paola is a self-taught systems programmer who, since 1998, has worked and played with all things “open” in governments, NGOs, and the private sector. She recently worked with the government of Mexico City on several civic innovation projects to build real, effective tools that defend democracy. She has also worked at Xamarin Inc. Her passion for open government and data, civic tech, and civil rights has fomented a curiosity to explore how and where technology, openness, and code can strengthen human rights. Paola will be working with the ACLU of Massachusetts on various projects, including collaboration with graduate students at the Massachusetts Institute of Technology on mobile applications that expose surveillance techniques employed by others.
            </FellowBlock>
          </ContentContainer>
          <ContentContainer className="grey slant">
            <FellowBlock
              name="Paola Villarreal"
              image="/assets/fellows/1-Paola.png"
              company="American Civil Liberties Union"
              companyHref="#"
              quote="I am who I am because of the openness of the Web."
              handle="paw"
              handleHref="#"
            >
              Paola is a self-taught systems programmer who, since 1998, has worked and played with all things “open” in governments, NGOs, and the private sector. She recently worked with the government of Mexico City on several civic innovation projects to build real, effective tools that defend democracy. She has also worked at Xamarin Inc. Her passion for open government and data, civic tech, and civil rights has fomented a curiosity to explore how and where technology, openness, and code can strengthen human rights. Paola will be working with the ACLU of Massachusetts on various projects, including collaboration with graduate students at the Massachusetts Institute of Technology on mobile applications that expose surveillance techniques employed by others.
            </FellowBlock>
          </ContentContainer>
          <ContentContainer>
            <FellowBlock
              name="Paola Villarreal"
              image="/assets/fellows/1-Paola.png"
              company="American Civil Liberties Union"
              companyHref="#"
              quote="I am who I am because of the openness of the Web."
              handle="paw"
              handleHref="#"
            >
              Paola is a self-taught systems programmer who, since 1998, has worked and played with all things “open” in governments, NGOs, and the private sector. She recently worked with the government of Mexico City on several civic innovation projects to build real, effective tools that defend democracy. She has also worked at Xamarin Inc. Her passion for open government and data, civic tech, and civil rights has fomented a curiosity to explore how and where technology, openness, and code can strengthen human rights. Paola will be working with the ACLU of Massachusetts on various projects, including collaboration with graduate students at the Massachusetts Institute of Technology on mobile applications that expose surveillance techniques employed by others.
            </FellowBlock>
          </ContentContainer>
          <ContentContainer className="grey slant">
            <FellowBlock
              name="Paola Villarreal"
              image="/assets/fellows/1-Paola.png"
              company="American Civil Liberties Union"
              companyHref="#"
              quote="I am who I am because of the openness of the Web."
              handle="paw"
              handleHref="#"
            >
              Paola is a self-taught systems programmer who, since 1998, has worked and played with all things “open” in governments, NGOs, and the private sector. She recently worked with the government of Mexico City on several civic innovation projects to build real, effective tools that defend democracy. She has also worked at Xamarin Inc. Her passion for open government and data, civic tech, and civil rights has fomented a curiosity to explore how and where technology, openness, and code can strengthen human rights. Paola will be working with the ACLU of Massachusetts on various projects, including collaboration with graduate students at the Massachusetts Institute of Technology on mobile applications that expose surveillance techniques employed by others.
            </FellowBlock>
          </ContentContainer>
          <ContentContainer>
            <FellowBlock
              name="Paola Villarreal"
              image="/assets/fellows/1-Paola.png"
              company="American Civil Liberties Union"
              companyHref="#"
              quote="I am who I am because of the openness of the Web."
              handle="paw"
              handleHref="#"
            >
              Paola is a self-taught systems programmer who, since 1998, has worked and played with all things “open” in governments, NGOs, and the private sector. She recently worked with the government of Mexico City on several civic innovation projects to build real, effective tools that defend democracy. She has also worked at Xamarin Inc. Her passion for open government and data, civic tech, and civil rights has fomented a curiosity to explore how and where technology, openness, and code can strengthen human rights. Paola will be working with the ACLU of Massachusetts on various projects, including collaboration with graduate students at the Massachusetts Institute of Technology on mobile applications that expose surveillance techniques employed by others.
            </FellowBlock>
          </ContentContainer>
          <ContentContainer className="grey slant flat-bottom">
            <FellowBlock
              name="Paola Villarreal"
              image="/assets/fellows/1-Paola.png"
              company="American Civil Liberties Union"
              companyHref="#"
              quote="I am who I am because of the openness of the Web."
              handle="paw"
              handleHref="#"
            >
              Paola is a self-taught systems programmer who, since 1998, has worked and played with all things “open” in governments, NGOs, and the private sector. She recently worked with the government of Mexico City on several civic innovation projects to build real, effective tools that defend democracy. She has also worked at Xamarin Inc. Her passion for open government and data, civic tech, and civil rights has fomented a curiosity to explore how and where technology, openness, and code can strengthen human rights. Paola will be working with the ACLU of Massachusetts on various projects, including collaboration with graduate students at the Massachusetts Institute of Technology on mobile applications that expose surveillance techniques employed by others.
            </FellowBlock>
          </ContentContainer>
        </div>
        <Footer/>
      </div>
    );
  }
});
