/* eslint-disable no-unused-vars */
import React from 'react';
import Modal from './Modal';
import { H2, H3, A } from '../ui/typography';
import styles from '../../styles/components/HomePage.module.css';

function ProfileModal(props) {
  const {
    isOpen, setIsOpen, pic,
  } = props;

  const thisYear = (new Date()).getFullYear() - 2000;
  const years = Array.from(new Array(6), (val, index) => `'${index + thisYear - 2}`);

  return (
    <Modal
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      header="Edit Profile"
    >
      <img className={styles.pic} src={pic} alt="Tim" />
      <A>Change Photo</A>
      <input
        type="text"
        placeholder="First Name"
      />
      <input
        type="text"
        placeholder="Last Name"
      />

      <select defaultValue="">
        <option selected value="">Year</option>
        {
       years.map((year, index) => <option key={year} value={year}>{year}</option>)
     }
      </select>

      <input
        type="text"
        placeholder="Major"
      />
      <input
        type="text"
        placeholder="Minor"
      />
    </Modal>
  );
}

export default ProfileModal;
