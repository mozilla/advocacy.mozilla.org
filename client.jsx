var React = require('react'),
    Router = require('react-router'),
    Route = Router.Route;

var routes = (
  <Route>
    <Route name="home" path="/" handler={require('./pages/home.jsx')} />
    <Route name="open-web-fellows-fellows" path="/open-web-fellows/fellows" handler={require('./pages/open-web-fellows/fellows.jsx')} />
    <Route name="open-web-fellows-overview" path="/open-web-fellows/overview" handler={require('./pages/open-web-fellows/overview.jsx')} />
    <Route name="open-web-fellows-info" path="/open-web-fellows/info" handler={require('./pages/open-web-fellows/info.jsx')} />
  </Route>
);

Router.run(routes, Router.HistoryLocation, function (Handler) {
  React.render(<Handler/>, document.querySelector("#my-app"));
});
