/* eslint-disable no-unused-vars */
import React from 'react';
/* eslint-disable no-unused-vars */
import { render } from 'react-dom';
import ga  from 'react-ga';
import { Router, browserHistory } from 'react-router';

var Page = require('./components/Page.jsx');
var routes = require('./encrypt-main.jsx')(Page);

ga.initialize(process.env.GA_TRACKING_ID);
render(<Router routes={routes} history={browserHistory}/>, document.getElementById(`my-app`));
