import Head from 'next/head'
import RemoveWaitlist from '../../components/RemoveWaitlist'
import styles from '../../styles/WaitlistDetail.module.css'

export default function WaitlistDetail() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Classy</title>
        <meta name="description" content="Cool tagline here" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.page_header}>
        <h1 className={styles.title}>
          My Waitlists
        </h1>
        <div className={styles.course_title}>
          <h1>COSC 052</h1>
          <h3>Full-Stack Web Development</h3>
        </div>
      </div>

      <main className={styles.main}>
        <div className={styles.left_info}>
          <div className={styles.waitlist_btns}>
            <RemoveWaitlist />
            <button className={styles.button}>Edit Waitlist Request</button>
            <button className={styles.button}>Course Info Page</button>
          </div>

          <div className={styles.waitlist_details_container}>
            <div className={styles.waitlist_element}>
              <h2>Estimated terms remaining: 2 terms</h2>
            </div>
            <div className={styles.waitlist_element}>
              <h2>Average time spent on waitlist: 4 terms</h2>
              <h2>Joined the waitlist: 10 June 22</h2>
            </div>
          </div>
        </div>

        <div className={styles.right_info}>

          <div className={styles.waitlist_position}>
            <div className={styles.info_graphic}>10 / 76</div>
            <p>waitlist position</p>
          </div>

          <div className={styles.prof_info_container}>
            <div className={styles.profile_picture}>
              photo
            </div>
            <h3>Professor Jane</h3>
            <button className={styles.email_btn}>
              Email
            </button>
          </div>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="_blank"
          target="_blank"
          rel="noopener noreferrer"
        >
          Classy</a>
      </footer>
    </div>
  )
}