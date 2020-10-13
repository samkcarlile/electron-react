import React from 'react';
import { render } from 'react-dom';
import 'regenerator-runtime';

import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/index.css';

import App from './components/App';

render(<App />, document.querySelector('#app'));
