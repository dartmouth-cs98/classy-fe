/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import Modal from './Modal';
import { H2, H3, A } from '../ui/typography';
import Button from '@mui/material/Button';
import styles from '../../styles/components/HomePage.module.css';
import uploadImage from '../../services/s3';
import { updateUser } from '../../actions';
import { useSelector, useDispatch } from 'react-redux';

function ProfileModal(props) {
  const {
    isOpen, setIsOpen, user, setUpdatedUser
  } = props;
  // const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [pic, setPic] = useState({ url: user.user.profileImageUrl, img: null, file: null });
  const thisYear = (new Date()).getFullYear() - 2000;
  const years = Array.from(new Array(6), (val, index) => `'${index + thisYear - 2}`);

  const onImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setPic({ ...pic, img: window.URL.createObjectURL(file), file, url: null });
    }
  };

  const onImageSubmit = () => {
    if (pic.file != null) {
      uploadImage(pic.file).then((url) => {
        setIsOpen(false)
        dispatch(updateUser(user.user._id, { ...user.user, profileImageUrl: url }));
        setUpdatedUser(true);
      }).catch((error) => {
        // handle error
        console.log('error in submitting image', error);
      });
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      header="Edit Profile"
    >
      <img className={styles.pic} src={pic.url ? pic.url : pic.img} alt="Profile Image" />

      <Button variant="contained" component="label">
        Upload Picture
        <input hidden accept="image/*" multiple type="file" name="coverImage" onChange={onImageUpload} />
      </Button>
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
      <button
        onClick={() => { onImageSubmit(); setIsOpen(false) }}
        style={{
          backgroundColor: 'var(--navy)',
          borderRadius: '8px',
          width: '130px',
          height: '60px',
          alignSelf: 'flex-end',
        }}
        type="submit"
      >
        <H3 color="var(--white)">Save</H3>
      </button>
    </Modal >
  );
}

export default ProfileModal;
