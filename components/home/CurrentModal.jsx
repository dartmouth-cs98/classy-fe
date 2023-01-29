/* eslint-disable no-unused-vars */
import React from 'react';
import Modal from './Modal';
import { H2, H3 } from '../ui/typography';

function CurrentModal(props) {
  const {
    isOpen, setIsOpen,
  } = props;

  return (
    <Modal
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      header="Edit Current Courses"
    />
  );
}

export default CurrentModal;
