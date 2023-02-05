/* eslint-disable no-unused-vars */
import React from 'react';
import Modal from './Modal';
import { H2, H3 } from '../ui/typography';

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
