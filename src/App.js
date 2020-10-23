import React from 'react';
import {Provider} from 'react-redux';
import { GlobalStyle } from './style'
import {renderRoutes} from 'react-router-config'
import {IconStyle} from './assets/iconfont/iconfont'
import store from './store'
import routers from './routers/index.js'
import {HashRouter} from 'react-router-dom'

function App() {
  return (
    <Provider store={store}>
      <HashRouter>
        <GlobalStyle></GlobalStyle>
        <IconStyle></IconStyle>
        {renderRoutes(routers)}
      </HashRouter>
    </Provider>
  );
}

export default App;