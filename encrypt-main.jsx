const home = {
  path: '/encrypt',
  component: require('./pages/encrypt/default.jsx')
};

const v2 = {
  path: '/encrypt/v2',
  component: require('./pages/encrypt/v2.jsx')
};
const v3 = {
  path: '/encrypt/v3',
  component: require('./pages/encrypt/v3.jsx')
};

module.exports = {
  routes: [ home, v2, v3 ],
  notFoundRedirect: '/'
};
