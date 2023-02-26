/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import Button from '@mui/material/Button';
import { useSelector, useDispatch } from 'react-redux';
import {
  TextField, FormControl, InputLabel, MenuItem, Select,
} from '@mui/material';
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
  const [pic, setPic] = useState({ url: user.user.profileImageUrl, img: null, file: null });
  const thisYear = (new Date()).getFullYear() - 2000;
  const years = Array.from(new Array(6), (val, index) => `'${index + thisYear - 2}`);
  const [year, setYear] = useState('');

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
      <TextField placeholder="First Name" />
      <TextField placeholder="Last Name" />
      <Button variant="contained">Test</Button>

      <FormControl size="small">
        {year ? null : <InputLabel>Year</InputLabel>}

        <TextField
          select
          style={{ width: 400 }}
          onChange={(e) => {
            setYear(e.target.value);
          }}
          value={year}
        >
          {
          years.map((classYear, index) => (
            <MenuItem
              key={classYear}
              value={classYear}
            >
              {classYear}
            </MenuItem>
          ))
        }
        </TextField>
      </FormControl>

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
