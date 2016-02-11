/* eslint-disable no-unused-vars */
import React from 'react';
/* eslint-disable no-unused-vars */
import { render } from 'react-dom';
import routes from './encrypt-main.jsx';
import ga  from 'react-ga';
import { Router, browserHistory } from 'react-router';

ga.initialize(process.env.GA_TRACKING_ID);
render(<Router history={browserHistory} routes={routes}/>, document.getElementById(`my-app`));
