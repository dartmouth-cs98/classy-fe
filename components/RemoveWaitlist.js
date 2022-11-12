/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { Button, Modal } from 'reactstrap';
import styles from '../styles/WaitlistDetail.module.css';
// reactstrap components
import 'bootstrap/dist/css/bootstrap.min.css';

function RemoveWaitlist() {
//   const [modalDefaultOpen, setModalDefaultOpen] = React.useState(false);
  const [modalNotificationOpen, setModalNotificationOpen] = React.useState(
    false,
  );
  //   const [modalFormOpen, setModalFormOpen] = React.useState(false);
  return (
    <>
      <Button className={styles.button} onClick={() => setModalNotificationOpen(true)} type="button">
        Remove Waitlist Request
      </Button>

      <Modal isOpen={modalNotificationOpen} className="modal-danger" contentClassName="bg-gradient-danger" onClick={() => setModalNotificationOpen(false)}>
        <div className=" modal-body">
          <div className=" py-3 text-center">
            <i className=" ni ni-bell-55 ni-3x" />
            <h4 className=" heading mt-4">Remove Waitlist Request</h4>
            <p>
              If you would like to be removed from this wailtist, please confirm your intent below
            </p>
          </div>
        </div>
        <div className=" modal-footer">
          <a href="/waitlist/waitlist-home" className={styles.button}>Yes, remove request</a>
          <Button
            className=" text-black ml-auto"
            color="default"
            onClick={() => setModalNotificationOpen(false)}
            type="button"
          >
            No, keep me on the waitlist
          </Button>
        </div>
      </Modal>
    </>
  );
}

export default RemoveWaitlist;
