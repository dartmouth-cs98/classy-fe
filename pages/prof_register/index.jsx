import React from 'react';
// import ReactDOM from 'react-dom';
// import { AuthProvider } from './AuthProvider';
import Register from '../../components/register/ProfRegister';
// import { H2, B1 } from '../../components/ui/typography';
import styles from '../../styles/ProfRegister.module.css';

export default function ProfRegister() {
  return (
    <div className={styles.container}>
      <main className="RegisterHome">
        <Register />
      </main>
    </div>
  );
}
