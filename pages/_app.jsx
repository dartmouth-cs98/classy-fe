/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import '../styles/globals.css';
import '../styles/WaitlistDetail.module.css';
import '../styles/WaitlistHome.module.css';
import '../styles/Home.module.css';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { ThemeProvider } from '@mui/material';
import SideNavbar from '../components/SideNavbar';
import rootReducer from '../reducers';
import theme from '../styles/theme';

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(thunk),
});

function MyApp({ Component, pageProps }) {
  const componenttest = String(Component);
  // const containsPages = componenttest.includes('Ready to explore');
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <Component {...pageProps} />
        {!componenttest.includes('Ready to explore') ? <SideNavbar /> : ''}
      </Provider>
    </ThemeProvider>
  );
}

export default MyApp;
