/* eslint-disable react/jsx-filename-extension */
import React, { useState } from 'react';
import styles from '../styles/WaitlistDetail.module.css';

function EditWaitlist() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div>
      <div>
        <button
          type="button"
          className={styles.button}
          onClick={() => setShowModal(true)}
        >
          Edit Waitlist Request

        </button>
      </div>

      {showModal ? (
        <div className={styles.modal}>
          Test
        </div>
      ) : null}

    </div>

  );
}

export default EditWaitlist;
