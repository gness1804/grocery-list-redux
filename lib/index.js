  import React from 'react';
  import { render } from 'react-dom';
  import { createStore } from 'redux';
  import { Provider } from 'react-redux';

  import Application from './components/Application.jsx';
  import items from './reducers/items';

  require('./styles.scss');

  const enhancers = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

  const store = createStore(items, [], enhancers);

  render(
    <Provider store={store}>
      <Application />
    </Provider>,
            document.getElementById('application'));
