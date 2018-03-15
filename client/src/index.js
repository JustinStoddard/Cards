import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import Hub from './Hub';
import 'semantic-ui-css/semantic.min.css';

ReactDOM.render(
  <Provider>
    <Router>
      <App />
    </Router>
  </Provider>,
document.getElementById('root')
);
registerServiceWorker();
