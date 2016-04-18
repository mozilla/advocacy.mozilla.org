/* eslint-disable no-unused-vars */
import React from 'react';
/* eslint-disable no-unused-vars */
import { render } from 'react-dom';
import ga  from 'react-ga';
import { match, Router } from 'react-router';
import { createHistory, useQueries } from 'history';
import routes from './encrypt-main.jsx';
import OptimizelyContext from './components/optimizely-context.jsx';
import OptimizelyExperimentLoader from './components/optimizely-experiment-loader.jsx';

const history = useQueries(createHistory)();

ga.initialize(process.env.GA_TRACKING_ID);
match({routes, history }, (error, redirectLocation, renderProps) => {
  render((
    <OptimizelyContext>
      <OptimizelyExperimentLoader/>
      <Router {...renderProps} />
    </OptimizelyContext>
  ), document.getElementById(`my-app`));
});
