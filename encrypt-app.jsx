/* eslint-disable no-unused-vars */
import React from 'react';
/* eslint-disable no-unused-vars */
import { render } from 'react-dom';
import routes from './encrypt-main.jsx';
import { Router, browserHistory } from 'react-router';

render(<Router history={browserHistory} routes={routes}/>, document.getElementById(`my-app`));
