/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/react-in-jsx-scope */
import Head from 'next/head';
// import SideNavbar from '../components/SideNavbar'
import Link from 'next/link';
// import 'bootstrap/dist/css/bootstrap.min.css';

export default function Home() {
  return (
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

          <a href="/courseinfo/" className="card">
            <h3>Course Info &rarr;</h3>
            <p>View available courses.</p>
          </a>

          <a href="/professorInfo" className="card">
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
