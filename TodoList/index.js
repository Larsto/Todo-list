import { AppRegistry } from 'react-native';
import React from 'react';
import App from './App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { reducer } from './src/components/todoListRedux';

const store = createStore(reducer)

const AppWithStore = () => (
  <Provider store={store}>
    <App />
  </Provider>
)

AppRegistry.registerComponent('TodoList', () => AppWithStore);
