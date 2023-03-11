/* eslint-disable no-unused-vars */
import React from 'react';
import ReactModal from 'react-modal';
import CloseIcon from '@mui/icons-material/Close';
import { Button } from '@mui/material';
import { H2, H3 } from './ui/typography';

ReactModal.setAppElement('#__next');

function Modal(props) {
  const {
    isOpen, setIsOpen, header, children, onButtonClick, buttonText, hideButton, buttons,
  } = props;

  return (
    <ReactModal
      isOpen={isOpen}
      style={{
        overlay: {
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(70, 70, 70, 0.75)',
        },
        content: {
          position: 'relative',
          left: '50%',
          top: '50%',
          transform: 'translate(-40%, -50%)',
          height: 'auto',
          overflow: 'auto',
          width: '1000px',
          border: '1px solid #ccc',
          background: '#fff',
          borderRadius: '20px',
          outline: 'none',
          padding: '40px 40px 25px 40px',
        },
      }}
    >
      <div style={{
        display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-around', height: '100%',
      }}
      >
        {children}
        <div style={{
          display: 'flex', flexDirection: 'row', width: '100%', justifyContent: 'flex-end',
        }}
        >
          {buttons}
        </div>
      </div>
    </ReactModal>
  );
}

export default Modal;
