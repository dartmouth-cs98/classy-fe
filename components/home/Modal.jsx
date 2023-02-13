/* eslint-disable no-unused-vars */
import React from 'react';
import ReactModal from 'react-modal';
import CloseIcon from '@mui/icons-material/Close';
import { H2 } from '../ui/typography';

ReactModal.setAppElement('#__next');

function Modal(props) {
  const {
    isOpen, setIsOpen, header, children,
  } = props;

  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={() => setIsOpen(false)}
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
          // position: 'absolute',
          // top: '40px',
          // left: '300px',
          // right: '40px',
          // bottom: '40px',
          position: 'relative',
          left: '50%',
          top: '50%',
          transform: 'translate(-40%, -50%)',
          height: '600px',
          width: '1000px',
          border: '1px solid #ccc',
          background: '#fff',
          overflow: 'auto',
          WebkitOverflowScrolling: 'touch',
          borderRadius: '20px',
          outline: 'none',
          padding: '40px 40px 25px 40px',
        },
      }}
    >
      <div style={{
        display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between', height: '100%',
      }}
      >
        <div style={{
          display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start', width: '100%',
        }}
        >
          <H2>{header}</H2>
          <CloseIcon onClick={() => setIsOpen(false)} style={{ cursor: 'pointer' }} />
        </div>
        {children}
        {/* <button
          onClick={() => setIsOpen(false)}
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
        </button> */}

      </div>
    </ReactModal>
  );
}

export default Modal;
