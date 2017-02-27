// 入口
import 'normalize.css';
import './styles/site.scss';
import React from 'react';
import { render } from 'react-dom';
// import injectTapEventPlugin from 'react-tap-event-plugin';

import { Provider } from 'react-redux';

import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import routes from './routes';
import configureStore from './store';
import DevTools from './components/DevTools';




const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store);

// injectTapEventPlugin();

render(
    <Provider store={store}>
      <div>
        <Router history={history} routes={routes} />
        <DevTools />
      </div>
    </Provider>,
    document.getElementById('myApp')
);
