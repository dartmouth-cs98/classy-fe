/* eslint-disable react/jsx-props-no-spreading */
import '../styles/globals.css';
import '../styles/WaitlistDetail.module.css';
import '../styles/WaitlistHome.module.css';
import '../styles/Home.module.css';
import React from 'react';

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
