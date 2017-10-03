import React from 'react';
import Footer from '../../components/buyers-guide/footer.js';
import Header from '../../components/buyers-guide/header.js';

var Swiper;
if (typeof window !== "undefined") {
  Swiper = require("swiper");
}

var Category = React.createClass({
  render: function() {
    return (
      <div className="swiper-slide">
        <div>
          <p>{this.props.category}</p>
          <p>{this.props.header}</p>
          <a href={this.props.href}>Discover this type of gift</a>
        </div>
      </div>
    );
  }
});

var BuyersGuide = React.createClass({
  getInitialState: function() {
    return {
      galleryPosition: "bottom"
    };
  },
  contextTypes: {
    intl: React.PropTypes.object
  },
  onWheel: function(e) {
    if (this.state.galleryPosition !== "middle") {
      e.stopPropagation();
      // Wheel down
      if (e.deltaY > 0 && this.state.galleryPosition === "bottom") {
        if (this.headerInput.scrollTop === (this.headerInput.scrollHeight - this.headerInput.offsetHeight)) {
          this.slideUp();
        }
      }
      // Wheel up
      if (e.deltaY < 0 && this.state.galleryPosition === "top") {
        if (this.footerInput.scrollTop === 0) {
          this.slideDown();
        }
      }
    }
  },
  onKeyDown: function(e) {
    if (this.state.galleryPosition !== "middle") {
      e.stopPropagation();
      // Down key
      if (e.keyCode === 40 && this.state.galleryPosition === "bottom") {
        if (this.headerInput.scrollTop === (this.headerInput.scrollHeight - this.headerInput.offsetHeight)) {
          this.slideUp();
        }
      }
      // Up key
      if (e.keyCode === 38 && this.state.galleryPosition === "top") {
        if (this.footerInput.scrollTop === 0) {
          this.slideDown();
        }
      }
    }
  },
  onActiveIndexChange: function(swiper) {
    if (swiper.activeIndex === 0) {
      this.hideDown();
    }
    if (swiper.activeIndex === 6) {
      this.hideUp();
    }
  },
  onTopActiveIndexChange: function() {
    this.onActiveIndexChange(this.swiper);
  },
  onBottomActiveIndexChange: function() {
    this.onActiveIndexChange(this.swiperBottom);
  },
  componentDidMount: function() {
    this.swiper = new Swiper('.swiper-container-top', {
      direction: 'vertical',
      mousewheel: {enabled: true},
      keyboard: {enabled: true}
    });
    this.swiperBottom = new Swiper('.swiper-container-bottom', {
      direction: 'vertical',
      mousewheel: {enabled: true},
      effect: "fade"
    });

    this.swiper.controller.control = this.swiperBottom;
    this.swiperBottom.controller.control = this.swiper;

    this.swiper.on("activeIndexChange", this.onTopActiveIndexChange);
    this.swiperBottom.on("activeIndexChange", this.onBottomActiveIndexChange);
    window.addEventListener("wheel", this.onWheel, true);
    window.addEventListener("keydown", this.onKeyDown, true);
  },
  componentWillUnmount: function() {
    this.swiper.off("activeIndexChange", this.onTopActiveIndexChange);
    this.swiperBottom.off("activeIndexChange", this.onBottomActiveIndexChange);
    window.removeEventListener("wheel", this.onWheel, true);
    window.removeEventListener("keyDown", this.onKeyDown, true);
  },
  slideUp: function() {
    this.setState({
      galleryPosition: "middle"
    }, () => {
      this.swiper.slideTo(1);
    });
  },
  slideDown: function() {
    this.setState({
      galleryPosition: "middle"
    }, () => {
      this.swiper.slideTo(5);
    });
  },
  hideUp: function() {
    this.setState({
      galleryPosition: "top"
    });
  },
  hideDown: function() {
    this.setState({
      galleryPosition: "bottom"
    });
  },
  render: function() {
    var categoriesContainerClassName = "categories-container";
    var headerClassName = "header-section";
    var footerClassName = "footer";
    const locale = this.context.intl.locale;
    if (this.state.galleryPosition === "bottom") {
      categoriesContainerClassName += " bottom";
      footerClassName += " bottom";
    } else if (this.state.galleryPosition === "top") {
      categoriesContainerClassName += " top";
      headerClassName += " top";
    } else if (this.state.galleryPosition === "middle") {
      headerClassName += " top";
      footerClassName += " bottom";
    }
    return (
      <div className="buyers-guide buyers-guide-home">
        <Header/>
        <section ref={(input) => {this.headerInput = input;}} className={headerClassName}>
          <header className="red">
            <h1>The Most Wonderful Time Of The Year, But Wait</h1>
            <p>
              The holidays, it's the most wonderful time of the year. unless you buy a gift that spies on your kid or tracks your brother or gets your friend hacked.
            </p>
            <p>
              A PROJECT BY<br/>
              <span className="itallic">
                Mozilla with spcial thanks<br/>
                to Consumer Reports
              </span>
            </p>
            <div>ARROW</div>
          </header>
          <p>That's why mozilla</p>
          <div className="start-show" onTouchMove={this.slideUp} onClick={this.slideUp}>
            <p>See The Gift Guide</p>
            <p>DOWN ARROW</p>
          </div>
        </section>

        <div className={categoriesContainerClassName}>
          <div className="swiper-container-top">
            <div className="swiper-wrapper">
              <div className="swiper-slide swiper-end">swiper end</div>
              <Category
                category="TOYS"
                header="Gadgets for tots"
                href={"/" + locale + "/buyers-guide/category/toys"}
              />
              <Category
                category="GAME CONSOLES"
                header="Get your game on"
                href={"/" + locale + "/buyers-guide/category/game-consoles"}
              />
              <Category
                category="HOME HUBS"
                header="you always wanted a butler"
                href={"/" + locale + "/buyers-guide/category/home-hubs"}
              />
              <Category
                category="SMART HOME ACCESSORIES"
                header="Home is where the tech is"
                href={"/" + locale + "/buyers-guide/category/smart-home-accessories"}
              />
              <Category
                category="GADGETS & GIZMOS"
                header="THings you didn't know you need"
                href={"/" + locale + "/buyers-guide/category/gadgets-gizmos"}
              />
              <div className="swiper-slide swiper-end">swiper end</div>
            </div>
          </div>
          <div className="swiper-container-bottom">
            <div className="swiper-wrapper">
              <div className="swiper-slide swiper-end">swiper end</div>
              <img className="swiper-slide" src="/assets/126x126.jpg"/>
              <img className="swiper-slide" src="/assets/202.jpg"/>
              <img className="swiper-slide" src="/assets/302x201.jpg"/>
              <img className="swiper-slide" src="/assets/126x126.jpg"/>
              <img className="swiper-slide" src="/assets/202.jpg"/>
              <div className="swiper-slide swiper-end">swiper end</div>
            </div>
          </div>
        </div>

        <div ref={(input) => {this.footerInput = input;}} className={footerClassName}>
          <section className="red">
            <div onClick={this.slideDown} onTouchMove={this.slideDown}>
              <p>^</p>
              <p>Experience the journey again</p>
            </div>
            <p>Best wishes to you and yours</p>
            <p>SHARE THIS PAGE</p>
            <div><button>F</button><button>T</button><button>E</button></div>
          </section>
          <section className="red">
            <p>Mozilla is a non-profit fighting for the good of the internet. Become a supporter today.</p>
            <button>DONATE NOW</button>
          </section>
          <Footer/>
        </div>
      </div>
    );
  }
});

module.exports = BuyersGuide;
