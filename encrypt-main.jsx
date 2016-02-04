var Path = require('path');

const home = {
  path: '/encrypt',
  pathToFile: Path.join(__dirname, './pages/encrypt/default.jsx')
};

const v2 = {
  path: '/encrypt/v2',
  pathToFile: Path.join(__dirname, './pages/encrypt/v2.jsx')
};
const v3 = {
  path: '/encrypt/v3',
  pathToFile: Path.join(__dirname, './pages/encrypt/v3.jsx')
};

module.exports = {
  routes: [ home, v2, v3 ],
  notFoundRedirect: '/'
};
