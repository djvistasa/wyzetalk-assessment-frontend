import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { StoreProvider } from 'easy-peasy';
import { SnackbarProvider } from 'notistack';
import { theme } from './utils/theme';
import { store } from './store';
import App from './App';
import { GlobalStyles } from './global-styles';
import reportWebVitals from './reportWebVitals';

const createHistory = require('history').createBrowserHistory;

const history = createHistory();

export default function Root() {
  return (
    <React.StrictMode>
      <StoreProvider store={store}>
        <ThemeProvider theme={theme}>
          <SnackbarProvider maxSnack={3}>
            <Router history={history}>
              <GlobalStyles />
              <App />
            </Router>
          </SnackbarProvider>
        </ThemeProvider>
      </StoreProvider>
    </React.StrictMode>
  );
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
