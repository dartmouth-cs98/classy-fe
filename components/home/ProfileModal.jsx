/* eslint-disable no-underscore-dangle */
/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import { useSelector, useDispatch } from 'react-redux';
import {
  TextField, FormControl, InputLabel, MenuItem, Select, Chip,
} from '@mui/material';
import Modal from '../Modal';
import { H3, H4, A } from '../ui/typography';
import styles from '../../styles/components/HomePage.module.css';
import uploadImage from '../../services/s3';
import { updateUser, fetchUser } from '../../actions';
import modalStyles from '../../styles/components/Modal.module.css';
import SaveButton from './SaveButton';
import AddMajorMinor from './AddMajorMinor';
import { defaultUserImageURL } from '../../constants/mockData';
import MajorMinorSearchDropdown from '../MajorMinorSearchDropdown';

function ProfileModal(props) {
  const {
    isOpen, setIsOpen, user, setUpdatedUser,
  } = props;
  // const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [pic, setPic] = useState({
    url: user?.profileImageUrl?.length > 0
      ? user?.profileImageUrl : defaultUserImageURL,
    img: null,
    file: null,
  });
  const thisYear = (new Date()).getFullYear();
  const years = Array.from(new Array(6), (val, index) => `${index + thisYear - 2}`);
  // const [year, setYear] = useState();
  const [addingMajor, setAddingMajor] = useState(false);
  const [addingMinor, setAddingMinor] = useState(false);

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [classYear, setClassYear] = useState('');
  // console.log(user);

  const [majors, setMajors] = useState();
  const [minors, setMinors] = useState();

  useEffect(() => {
    if (user.firstName) {
      setFirstName(user.firstName);
    }
    if (user.lastName) {
      setLastName(user.lastName);
    }
    if (user.student?.classYear) {
      setClassYear(user.student?.classYear);
    }
    if (user.student?.majors) {
      setMajors(user.student.majors);
    }
    if (user.student?.minors) {
      setMinors(user.student.minors);
    }
  }, [user]);

  // console.log(user.student.classYear);

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
        dispatch(updateUser(user?._id, { ...user.user, profileImageUrl: url }));
        // setUpdatedUser(true);
        dispatch(fetchUser(user._id));
        setIsOpen(false);
      }).catch((error) => {
        // handle error
        console.log('error in submitting image', error);
      });
    }
  };

  const handleDeleteMajor = (majorName) => {
    dispatch(updateUser(
      user?._id,
      {
        ...user,
      },
      {
        ...user.student,
        majors: user.student.majors.filter((major) => major.name !== majorName),
      },
    ));
  };

  const addMajor = (major) => {
    dispatch(updateUser(
      user?._id,
      {
        ...user,
      },
      { ...user.student, majors: user?.student?.majors.concat(major) },
    ));
  };

  const handleDeleteMinor = (minorName) => {
    dispatch(updateUser(
      user?._id,
      {
        ...user,
      },
      {
        ...user.student,
        minors: user.student.minors.filter((minor) => minor.name !== minorName),
      },
    ));
  };

  const addMinor = (minor) => {
    dispatch(updateUser(
      user?._id,
      {
        ...user,
      },
      { ...user.student, minors: user?.student?.minors.concat(minor) },
    ));
  };

  return (
    <Modal
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      header="Edit Profile"
      button={(
        <SaveButton
          onClick={() => {
            onImageSubmit();
            dispatch(updateUser(
              user?._id,
              {
                ...user,
                firstName,
                lastName,
              },
              { ...user.student, classYear },
            ));
            // dispatch(fetchUser(user._id));
            setIsOpen(false);
          }}
          adding={addingMajor || addingMinor}
        />
      )}
    >
      <div className={modalStyles.horizontalContainer} style={{ gap: '40px' }}>
        <div className={modalStyles.verticalContainer} style={{ width: '300px' }}>
          <img className={styles.pic} src={pic.url ? pic.url : pic.img} alt="Profile Image" />
          <Button component="label" variant="outlined" style={{ margin: '10px' }}>
            Upload Image
            <input hidden accept="image/*" multiple type="file" name="coverImage" onChange={onImageUpload} />
          </Button>
        </div>

        <div
          className={modalStyles.verticalContainer}
          style={{
            height: '440px', width: '900px', overflowY: 'auto', paddingRight: '30px',
          }}
        >
          <div className={modalStyles.header}>
            <div className={modalStyles.field} style={{ width: 'auto' }}>
              <H4>First Name</H4>
              <TextField sx={{ width: 250 }} placeholder="First Name" defaultValue={user?.firstName} onChange={(e) => setFirstName(e.target.value)} />
            </div>

            <div className={modalStyles.field} style={{ width: 'auto' }}>
              <H4>Last Name</H4>
              <TextField sx={{ width: 250 }} placeholder="Last Name" defaultValue={user?.lastName} onChange={(e) => setLastName(e.target.value)} />
            </div>

            <div className={modalStyles.field} style={{ width: 'auto' }}>
              <H4>Year</H4>
              <FormControl size="small">
                {classYear ? null : <InputLabel>Year</InputLabel>}
                <TextField
                  select
                  sx={{ width: 90 }}
                  onChange={(e) => {
                    setClassYear(e.target.value);
                  }}
                  // value="2023"
                  value={classYear}
                >
                  {
                    years.map((year, index) => (
                      <MenuItem
                        key={year}
                        value={year}
                      >
                        {year}
                      </MenuItem>
                    ))
                  }
                </TextField>
              </FormControl>
            </div>

          </div>

          <AddMajorMinor
            setAdding={setAddingMajor}
            adding={addingMajor}
            depts={majors}
            addingMajor={addingMajor}
            addingMinor={addingMinor}
            title="Major"
            user={user}
            handleDelete={handleDeleteMajor}
            addDept={addMajor}
          />

          <AddMajorMinor
            setAdding={setAddingMinor}
            adding={addingMinor}
            depts={minors}
            addingMajor={addingMajor}
            addingMinor={addingMinor}
            title="Minor"
            user={user}
            handleDelete={handleDeleteMinor}
            addDept={addMinor}
          />

        </div>

      </div>
    </Modal>
  );
}

export default ProfileModal;
