/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import '../styles/globals.css';
import '../styles/WaitlistDetail.module.css';
import '../styles/WaitlistHome.module.css';
import '../styles/Home.module.css';
// import SideNav from '../components/SideNav';
import SideNavbar from '../components/SideNavbar';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <SideNavbar />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
