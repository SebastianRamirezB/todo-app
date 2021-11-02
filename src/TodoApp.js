import React from 'react';
import { Provider } from 'react-redux';

import { store } from './store/store';
import AppRouter from './routers/AppRouter';

function TodoApp() {
  return (
    <Provider store={store} >
      <AppRouter />
    </Provider>
  );
}

export default TodoApp;
