import React from 'react';
// import ReactDOM from 'react-dom';
// import { AuthProvider } from './AuthProvider';
import Register from '../../components/register/Register';
// import { H2, B1 } from '../../components/ui/typography';
import styles from '../../styles/Login.module.css';

export default function RegisterHome() {
  return (
    <div className={styles.registerContainer}>
      <main className="RegisterHome">
        <Register />
      </main>
    </div>
  );
}
