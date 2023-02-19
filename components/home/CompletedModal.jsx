/* eslint-disable no-unused-vars */
import React from 'react';
import Modal from './Modal';

function CompletedModal(props) {
  const {
    isOpen, setIsOpen,
  } = props;

  return (
    <Modal
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      header="Edit Completed Courses"
    />
  );
}

export default CompletedModal;
