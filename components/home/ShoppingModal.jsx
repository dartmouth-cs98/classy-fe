/* eslint-disable no-unused-vars */
import React from 'react';
import Modal from '../Modal';

function ShoppingModal(props) {
  const {
    isOpen, setIsOpen,
  } = props;

  return (
    <Modal
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      header="Edit Shopping Cart"
    />
  );
}

export default ShoppingModal;
