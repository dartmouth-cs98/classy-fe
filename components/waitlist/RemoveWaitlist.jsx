import React from 'react';
import Link from 'next/link';
import { Button, Modal } from 'reactstrap';
import { useDispatch } from 'react-redux';
import styles from '../../styles/WaitlistDetail.module.css';
// reactstrap components
// import 'bootstrap/dist/css/bootstrap.min.css';
import { removeFromWaitlist, withdrawFromWaitlist } from '../../actions';
import { B1, H3, H4 } from '../ui/typography';

function RemoveWaitlist(props) {
  const dispatch = useDispatch();
  const {
    dept, num, offering, offeringIndex, studentId,
  } = props;
  //   const [modalDefaultOpen, setModalDefaultOpen] = React.useState(false);
  const [modalNotificationOpen, setModalNotificationOpen] = React.useState(
    false,
  );
  //   const [modalFormOpen, setModalFormOpen] = React.useState(false);

  return (
    <>
      {offering
        ? (
          <B1>
            <button className={styles.button} onClick={() => setModalNotificationOpen(true)} type="button">
              Remove Request
            </button>
          </B1>
        )
        : (
          <H3>
            <button className={styles.button} onClick={() => setModalNotificationOpen(true)} type="button">
              {`Withdraw from All ${dept} ${num} Waitlists`}
            </button>
          </H3>
        )}

      <Modal isOpen={modalNotificationOpen} className="modal-danger" contentClassName="bg-gradient-danger" onClick={() => setModalNotificationOpen(false)}>
        <div className=" modal-body">
          <div className=" py-3 text-center">
            <i className=" ni ni-bell-55 ni-3x" />
            <H4>
              {offering
                ? `Remove request for ${dept} ${num} (${offering.term}) waitlist?`
                : `Withdraw from all ${dept} ${num} waitlists?`}
            </H4>
            <B1>
              {`Once you ${offering ? 'remove' : 'withdraw'} your spot, you will be placed on the end of the waitlist
              ${offering ? 'for the term' : ''} should you choose to get back on.`}
            </B1>
          </div>
        </div>
        <div className=" modal-footer">
          <Link href={`/courses/${dept}/${num}`}>
            <B1>
              <button
                className={styles.button}
                type="button"
                onClick={() => {
                  if (offering) {
                    dispatch(removeFromWaitlist({
                      courseDept: dept,
                      courseNum: num,
                      offeringIndex,
                      studentId,
                    }));
                  } else {
                    dispatch(withdrawFromWaitlist({
                      courseDept: dept,
                      courseNum: num,
                      studentId,
                    }));
                  }
                  setModalNotificationOpen(false);
                }}
              >
                Yes, withdraw
              </button>
            </B1>
          </Link>
          <B1>
            <Button
              className=" text-black ml-auto"
              color="default"
              onClick={() => setModalNotificationOpen(false)}
              type="button"
            >
              No, keep me on the waitlist
            </Button>
          </B1>
        </div>
      </Modal>
    </>
  );
}

export default RemoveWaitlist;
