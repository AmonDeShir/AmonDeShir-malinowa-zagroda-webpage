import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from "styled-components";
import theme from "./styles/theme";
import GlobalStyle from './styles/GlobalStyle';

import * as serviceWorker from './serviceWorker';
import App from './App';


ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle/>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();