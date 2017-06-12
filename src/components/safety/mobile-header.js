import React from 'react';
var Router = require(`react-router`);
var Link = Router.Link;

var MobileHeader = React.createClass({
  render: function() {
    var linkTo = this.props.linkTo;
    var image = (
      <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyMDguOTEgMjEuNTYiPjxkZWZzPjxzdHlsZT4uY2xzLTF7ZmlsbDojYjc0ZmJhO308L3N0eWxlPjwvZGVmcz48dGl0bGU+QXNzZXQgMjwvdGl0bGU+PGcgaWQ9IkxheWVyXzIiIGRhdGEtbmFtZT0iTGF5ZXIgMiI+PGcgaWQ9IkhlYWRlciI+PHBhdGggY2xhc3M9ImNscy0xIiBkPSJNMCw5LjE5VjMuMDZIMi45MlY5LjE5Wm0wLDkuMTlWMTUuMzFIMi45MnYzLjA2Wk0yLjkyLDMuMDZWMEgxNy40OVYzLjA2Wm0wLDYuMTNIMTcuNDl2My4wNkgyLjkyWm0wLDkuMTlIMTcuNDl2My4wNkgyLjkyWk0xNy40OSw2LjEzVjMuMDZoMi45MlY2LjEzWm0wLDEyLjI1VjEyLjI1aDIuOTJ2Ni4xM1oiLz48cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Ik0yMy4zMywyMS40NFY5LjE5aDIuOTJ2My4wNkg0MC44MlY5LjE5aDIuOTJWMjEuNDRINDAuODJWMTUuMzFIMjYuMjR2Ni4xM1pNMjkuMTYsNi4xM1Y5LjE5SDI2LjI0VjYuMTNabTAtMy4wNmgyLjkyVjYuMTNIMjkuMTZaTTM1LDBWMy4wNkgzMi4wN1YwWm0wLDYuMTNWMy4wNkgzNy45VjYuMTNabTUuODMsMFY5LjE5SDM3LjlWNi4xM1oiLz48cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Ik00Ni42NSwyMS40NFYwSDY3LjA2VjMuMDZINDkuNTdWOS4xOUg2MS4yM3YzLjA2SDQ5LjU3djkuMTlaIi8+PHBhdGggY2xhc3M9ImNscy0xIiBkPSJNNzAsMjEuNDRWMEg5MC4zOVYzLjA2SDcyLjg5VjkuMTlIODQuNTZ2My4wNkg3Mi44OXY2LjEzSDkwLjM5djMuMDZaIi8+PHBhdGggY2xhc3M9ImNscy0xIiBkPSJNMTA1LDIxLjQ0aC0yLjkyVjMuMDZIOTMuM1YwaDIwLjQxVjMuMDZIMTA1WiIvPjxwYXRoIGNsYXNzPSJjbHMtMSIgZD0iTTExNi42MywzLjA2VjBoMi45MlYzLjA2Wm0yLjkyLDMuMDZWMy4wNmgyLjkyVjYuMTNabTIuOTIsMGgyLjkyVjkuMTloLTIuOTJabTIuOTIsMTUuMzFWOS4xOWgyLjkyVjIxLjQ0Wm0yLjkyLTEyLjI1VjYuMTNoMi45MlY5LjE5Wm0yLjkyLTMuMDZWMy4wNmgyLjkyVjYuMTNabTIuOTItMy4wNlYwSDEzN1YzLjA2WiIvPjxwYXRoIGNsYXNzPSJjbHMtMSIgZD0iTTE0Ni4wOCwyMS41NlYuMzhoMTIuMnYzSDE0Ny45MVY5LjQ2aDcuMzF2M2gtNy4zMXY5LjA4WiIvPjxwYXRoIGNsYXNzPSJjbHMtMSIgZD0iTTE2OC42NywyMS41NlYuMzhoMTF2M0gxNzAuNVY5LjQ2aDkuMTR2M2gtMS44M3YzSDE3NnYtM0gxNzAuNXY5LjA4Wm05LjE0LTYuMDVoMS44M3YzaC0xLjgzWm0xLjgzLTYuMDVWMy40aDEuODNWOS40NlptMCw5LjA4aDEuODN2M2gtMS44M1oiLz48cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Ik0xODQuNTgsOS40NlYzLjRoMS44M1Y5LjQ2Wm0wLDkuMDh2LTNoMS44M3YzWk0xODYuNDEsMy40di0zaDkuMTR2M1ptMCw2LjA1aDkuMTR2M2gtOS4xNFptMCw5LjA4aDkuMTR2M2gtOS4xNFptOS4xNC0xMi4xMXYtM2gxLjgzdjNabTAsMTIuMTFWMTIuNDhoMS44M3Y2LjA1WiIvPjxyZWN0IGNsYXNzPSJjbHMtMSIgeD0iMTYxLjkxIiB5PSIwLjM4IiB3aWR0aD0iMS45IiBoZWlnaHQ9IjIxLjE4Ii8+PHBhdGggY2xhc3M9ImNscy0xIiBkPSJNMjA1LDIxLjU2aC0xLjgzVjMuNEgxOTl2LTNoOS44OHYzSDIwNVoiLz48L2c+PC9nPjwvc3ZnPg==" className="mobile-header-image"/>
    );
    var imageContainer = (
      <div className="mobile-header-image-container">
        {image}
      </div>
    );
    if (linkTo) {
      imageContainer = (
        <Link to={linkTo} className="home-link">
          {image}
        </Link>
      );
    }
    return (
      <div className="mobile-header">
        <a href="https://mozilla.org/" className="moz-logo">mozilla</a>
        {imageContainer}
      </div>
    );
  }
});

module.exports = MobileHeader;
