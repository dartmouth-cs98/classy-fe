/* eslint-disable react/react-in-jsx-scope */
import Head from 'next/head';
import Link from 'next/link';
// import SideNavbar from '../components/SideNavbar';
import 'bootstrap/dist/css/bootstrap.min.css';
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
      </Head>

      {/* <SideNavbar /> */}

      <main>
        <h1 className="title">
          <Link href="/waitlist/waitlist-home">Classy</Link>
        </h1>

        <p className="description">
          Get started by editing
          {' '}
          <code>pages/index.js</code>
        </p>

        <div className="grid">
          <a href="/waitlist/waitlist-home" className="card">
            <h3>Waitlist &rarr;</h3>
            <p>View my waitlists.</p>
          </a>

          <Link href="/courses/COSC/10" className="card">
            CS 10
          </Link>

          <Link href="/courses/COSC/25.01" className="card">
            CS 25
          </Link>

          <Link href="/courses/COSC/52" className="card">
            CS 52
          </Link>

          <Link href="/courses/COSC/74" className="card">
            CS 74
          </Link>

          <Link href="/courses/COSC/98.01" className="card">
            CS 98
          </Link>

          <Link
            href="/courseinfo/"
            state={{ courseName: 'COSC 98' }}
            className="card"
          >
            <a href="https://nextjs.org/learn">
              <h3>Course Info &rarr;</h3>
              <p>View available courses.</p>
            </a>
          </Link>

          <a href="/professors" className="card">
            <h3>Professor Info &rarr;</h3>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className="card"
          >
            <h3>Examples &rarr;</h3>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className="card"
          >
            <h3>Deploy &rarr;</h3>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
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
