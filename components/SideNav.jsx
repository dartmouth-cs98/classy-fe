import React from 'react';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

function SideNav() {
  return (
    <nav className={styles.mainnav}>
      <Link href="/home">Home</Link>
      <Link href="/search">Search</Link>
      <Link href="/social">Social</Link>
      <Link href="/waitlist">Waitlists</Link>
      <Link href="/settings">Settings</Link>
    </nav>
  );
}

export default SideNav;

// in case we want to make a vanilla css sidenav
