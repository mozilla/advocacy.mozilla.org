/* eslint-disable no-unused-vars */
import React from 'react';
/* eslint-disable no-unused-vars */
import { render } from 'react-dom';
import ga  from 'react-ga';
import { match, Router } from 'react-router';
import { createHistory, useQueries } from 'history';
import routes from './encrypt-main.js';

const history = useQueries(createHistory)();

ga.initialize(process.env.GA_TRACKING_ID);
match({routes, history }, (error, redirectLocation, renderProps) => {
  render(<Router {...renderProps} />, document.getElementById(`my-app`));
});
