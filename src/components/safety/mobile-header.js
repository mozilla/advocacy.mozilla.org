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
        <div className="mobile-header-logo-container">
          <a href="https://mozilla.org/">
            <img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIwLjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCAzNjAgMTAyLjgiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDM2MCAxMDIuODsiIHhtbDpzcGFjZT0icHJlc2VydmUiPgo8c3R5bGUgdHlwZT0idGV4dC9jc3MiPgoJLnN0MHtmaWxsOiNGRkZGRkY7fQo8L3N0eWxlPgo8Zz4KCTxyZWN0IHk9Ii0wLjIiIHdpZHRoPSIzNjAiIGhlaWdodD0iMTAyLjkiLz4KCTxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0zNDMuOCw3My43Yy0wLjcsMC4yLTEuMywwLjMtMS45LDAuM2MtMi4xLDAtMy4xLTAuOS0zLjEtMy41VjUxYzAtMTAuMy04LjItMTUuMy0xNy45LTE1LjMKCQljLTcuNCwwLTExLjQsMC45LTE5LjMsNC4xTDMwMCw1MC4ybDEwLjMsMS4xbDEuNS01LjFjMi4xLTEuMSw0LjItMS4zLDYuOS0xLjNjNy4zLDAsNy40LDUuNSw3LjQsMTAuMXYxLjUKCQljLTIuMy0wLjMtNC45LTAuNC03LjQtMC40Yy0xMC4zLDAtMjEsMi42LTIxLDEzLjdjMCw5LjQsNy40LDEyLjksMTMuOSwxMi45YzcuMywwLDExLjktNC40LDE0LjUtOWMwLjYsNS41LDMuOSw5LDkuOSw5CgkJYzIuOCwwLDUuNy0wLjgsOC4xLTIuMUwzNDMuOCw3My43eiBNMzE2LjIsNzMuNGMtMy45LDAtNS4zLTIuMy01LjMtNS4yYzAtNC45LDQtNi4yLDguNi02LjJjMi4xLDAsNC40LDAuMyw2LjUsMC42CgkJQzMyNS43LDcwLjEsMzIwLjgsNzMuNCwzMTYuMiw3My40eiBNMjk4LjksMTIuOWwtMTkuNSw2OC43aC0xMi43bDE5LjUtNjguN0gyOTguOXogTTI3Mi43LDEyLjlsLTE5LjUsNjguN2gtMTIuN0wyNjAsMTIuOUgyNzIuN3oKCQkgTTIxOC43LDM2LjZoMTMuNXYxNi4yaC0xMy41VjM2LjZ6IE0yMTguNyw2NS41aDEzLjV2MTYuMmgtMTMuNVY2NS41eiBNMTk5LDY0LjlsMTAuMiwxbC0yLjgsMTUuOGgtMzkuM2wtMS4zLTYuOGwyNC44LTI4LjVoLTE0LjEKCQlsLTIsN2wtOS4zLTFsMS42LTE1LjhoMzkuNWwxLDYuOGwtMjUsMjguNWgxNC42TDE5OSw2NC45eiBNMTM0LjUsMzUuN2MtMTYuMiwwLTI0LjIsMTAuOS0yNC4yLDI0LjFjMCwxNC40LDkuNiwyMi45LDIzLjUsMjIuOQoJCWMxNC40LDAsMjQuOC05LjEsMjQuOC0yMy41QzE1OC42LDQ2LjYsMTUwLjcsMzUuNywxMzQuNSwzNS43eiBNMTM0LjIsNzIuN2MtNywwLTEwLjYtNi0xMC42LTEzLjhjMC04LjUsNC4xLTEzLjQsMTAuNy0xMy40CgkJYzYuMSwwLDExLDQuMSwxMSwxMy4yQzE0NS4zLDY3LjQsMTQwLjksNzIuNywxMzQuMiw3Mi43eiBNOTguNyw3MS44aDZ2OS44SDg1LjlWNTYuM2MwLTcuOC0yLjYtMTAuOC03LjctMTAuOAoJCWMtNi4yLDAtOC43LDQuNC04LjcsMTAuN3YxNS43aDZ2OS44SDU2LjZWNTYuM2MwLTcuOC0yLjYtMTAuOC03LjctMTAuOGMtNi4yLDAtOC43LDQuNC04LjcsMTAuN3YxNS43aDguNnY5LjhIMjEuNHYtOS44aDZWNDYuNGgtNgoJCXYtOS44aDE4Ljl2Ni44YzIuNy00LjgsNy40LTcuNywxMy43LTcuN2M2LjUsMCwxMi41LDMuMSwxNC43LDkuN2MyLjUtNiw3LjYtOS43LDE0LjctOS43YzguMSwwLDE1LjUsNC45LDE1LjUsMTUuNlY3MS44eiIvPgo8L2c+Cjwvc3ZnPgo="/>
          </a>
        </div>
        {imageContainer}
      </div>
    );
  }
});

module.exports = MobileHeader;
