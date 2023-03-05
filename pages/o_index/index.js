/* eslint-disable react/react-in-jsx-scope */
import Head from 'next/head';
import Link from 'next/link';
// import SideNavbar from '../components/SideNavbar';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { configureStore } from '@reduxjs/toolkit';
// import { Provider } from 'react-redux';
// import thunk from 'redux-thunk';
// import rootReducer from '../reducers';

// const store = configureStore({
//   reducer: rootReducer,
//   middleware: (getDefaultMiddleware) => getDefaultMiddleware(thunk),
// });

export default function Home() {
  return (
    // eslint-disable-next-line react/jsx-filename-extension
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />

        <link href="https://fonts.googleapis.com/css2?family=Asap:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&display=swap" rel="stylesheet" />

      </Head>

      {/* <SideNavbar /> */}

      <main>
        <h1 className="title">
          <Link href="/waitlist/waitlist-home">Classy</Link>
        </h1>
      </main>

      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by
          {' '}
        </a>
      </footer>
    </div>
  );
}
