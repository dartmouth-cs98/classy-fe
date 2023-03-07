import React from 'react';
// import ReactDOM from 'react-dom';
// import { AuthProvider } from './AuthProvider';
import Login from '../../components/login/Login';
// import { H2, B1 } from '../../components/ui/typography';
import styles from '../../styles/Login.module.css';

export default function LoginHome() {
  return (
    <div className={styles.loginContainer}>
      <main className="LoginHome">
        <Login />
      </main>
    </div>
  );
}
