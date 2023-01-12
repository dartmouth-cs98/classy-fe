/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import '../styles/globals.css';
import '../styles/WaitlistDetail.module.css';
import '../styles/WaitlistHome.module.css';
import '../styles/Home.module.css';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import SideNavbar from '../components/SideNavbar';
import rootReducer from '../reducers';

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(thunk),
});

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <SideNavbar />
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
