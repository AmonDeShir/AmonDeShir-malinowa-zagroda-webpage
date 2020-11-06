import React from 'react';
import ReactDOM from 'react-dom';
import { Normalize } from 'styled-normalize';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './styles/GlobalStyle';
import theme from "./styles/theme";

 
import * as serviceWorker from './serviceWorker';
import App from './App';


ReactDOM.render(
  <React.StrictMode>
    <Normalize/>
    <GlobalStyle/>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();