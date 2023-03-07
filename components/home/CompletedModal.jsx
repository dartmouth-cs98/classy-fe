/* eslint-disable no-underscore-dangle */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Button } from '@mui/material';
import Modal from '../Modal';
import SaveButton from './SaveButton';
import Table from './Table';
import { H3, H4, A } from '../ui/typography';
import CourseSearchDropdown from '../CourseSearchDropdown';
import { clearDropdown } from '../../actions';
import styles from '../../styles/components/Modal.module.css';
import ModalContents from './ModalContents';

function CompletedModal(props) {
  const {
    isOpen, setIsOpen, user,
  } = props;

  const dispatch = useDispatch();

  const [inputValue, setInputValue] = useState('');
  const [selectedCourse, setSelectedCourse] = useState(null);

  const [adding, setAdding] = useState(false);

  return (
    <Modal
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      header="Edit Completed Courses"
      button={(
        <SaveButton
          onClick={() => {
            setIsOpen(false);
            // onImageSubmit();
          }}
          adding={adding}
        />
      )}
    >
      <ModalContents user={user} adding={adding} setAdding={setAdding} mode="completed" />
    </Modal>
  );
}

export default CompletedModal;
