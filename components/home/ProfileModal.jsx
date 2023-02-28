/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import Button from '@mui/material/Button';
import { useSelector, useDispatch } from 'react-redux';
import Modal from '../Modal';
import { H3 } from '../ui/typography';
import styles from '../../styles/components/HomePage.module.css';
import uploadImage from '../../services/s3';
import { updateUser } from '../../actions';

function ProfileModal(props) {
  const {
    isOpen, setIsOpen, user, setUpdatedUser,
  } = props;
  // const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [pic, setPic] = useState({ url: user?.profileImageUrl, img: null, file: null });
  const thisYear = (new Date()).getFullYear() - 2000;
  const years = Array.from(new Array(6), (val, index) => `'${index + thisYear - 2}`);

  const onImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setPic({
        ...pic, img: window.URL.createObjectURL(file), file, url: null,
      });
    }
  };

  const onImageSubmit = () => {
    if (pic.file) {
      uploadImage(pic.file).then((url) => {
        setIsOpen(false);
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
      onButtonClick={onImageSubmit}
      buttonText="Save"
      header="Edit Profile"
    >
      <img className={styles.pic} src={pic.url ? pic.url : pic.img} alt="Profile Image" />

      <Button variant="contained" component="label">
        Upload Image
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
    </Modal>
  );
}

export default ProfileModal;
