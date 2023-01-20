import React from 'react';
import Link from 'next/link';
import { Button, Modal } from 'reactstrap';
import styles from '../../styles/WaitlistDetail.module.css';
// reactstrap components
import 'bootstrap/dist/css/bootstrap.min.css';

function RemoveWaitlist(props) {
  const { dept, num, offering } = props;
  //   const [modalDefaultOpen, setModalDefaultOpen] = React.useState(false);
  const [modalNotificationOpen, setModalNotificationOpen] = React.useState(
    false,
  );
  //   const [modalFormOpen, setModalFormOpen] = React.useState(false);
  return (
    <>
      <button className={styles.button} onClick={() => setModalNotificationOpen(true)} type="button">
        Withdraw
      </button>

      <Modal isOpen={modalNotificationOpen} className="modal-danger" contentClassName="bg-gradient-danger" onClick={() => setModalNotificationOpen(false)}>
        <div className=" modal-body">
          <div className=" py-3 text-center">
            <i className=" ni ni-bell-55 ni-3x" />
            <h4 className=" heading mt-4">{`Withdraw from waitlist for ${dept} ${num} (${offering.term})?`}</h4>
            <p>
              Once you withdraw your spot, you will be placed on the end of the waitlist
              should you choose to get back on.
            </p>
          </div>
        </div>
        <div className=" modal-footer">
          <Link href="/waitlist/">
            <button className={styles.button} type="button">
              Yes, withdraw
            </button>
          </Link>
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
