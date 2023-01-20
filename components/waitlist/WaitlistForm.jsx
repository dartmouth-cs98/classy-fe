/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import Link from 'next/link';
import { Button, Modal } from 'reactstrap';
import { useDispatch } from 'react-redux';
import styles from '../../styles/WaitlistDetail.module.css';
// reactstrap components
import 'bootstrap/dist/css/bootstrap.min.css';
import { B1, H3, H4 } from '../ui/typography';

function WaitlistForm(props) {
  const dispatch = useDispatch();
  const {
    course, studentId,
  } = props;
  //   const [modalDefaultOpen, setModalDefaultOpen] = React.useState(false);
  const [modalNotificationOpen, setModalNotificationOpen] = React.useState(
    false,
  );
  const [reason, setReason] = React.useState('');
  const [terms, setTerms] = React.useState([]);

  const onInputChange = (event) => {
    // URL Validation: https://stackoverflow.com/questions/3809401/what-is-a-good-regular-expression-to-match-a-url
    if (event.target.id === 'reason') {
      setReason(event.target.value);
    } else {
      setTerms(event.target.value);
    }
  };

  const onSubmit = (event) => {
    event.preventDefault();
    const waitlistRequest = {
      courseNum: course.courseNum,
      courseDept: course.courseDept,
      studentId,
      reason,
      terms,
    };
    setReason('');
    dispatch(joinWaitlists(waitlistREquest));
  };

  const loadOfferings = () => {
    course.offerings.map((offering) => (
      <label htmlFor={`${offering.term}-${offering.professors[0]}`}>
        <input type="checkbox" id={`${offering.term}-${offering.professors[0]}`} />
        {`${offering.term} ${offering.professors.join(', ')}`}
      </label>
    ));
  };

  //   const [modalFormOpen, setModalFormOpen] = React.useState(false);
  return (
    <>
      <H3>
        <button className={styles.button} onClick={() => setModalNotificationOpen(true)} type="button">
          {`Join ${course.courseDept} ${course.courseNum} Waitlists`}
        </button>
      </H3>

      <Modal isOpen={modalNotificationOpen} className="modal-danger" contentClassName="bg-gradient-danger">
        <div className=" modal-body">
          <div className=" py-3 text-center">
            <i className=" ni ni-bell-55 ni-3x" />
            <H3>
              {`Join ${course.courseDept} ${course.courseNum} Waitlists`}
            </H3>
          </div>
          <div className="py-3">
            <form onSubmit={onSubmit}>
              <H4>Select the waitlists you wish to join.</H4>
              {loadOfferings()}
              <H4>
                Make your case to the professor(s) about why you want to take their course.
                Be concise.
              </H4>
              <input type="text" onChange={onInputChange} id="reason" />
            </form>
          </div>
        </div>
        <div className="modal-footer">
          <Link href="/waitlist/">
            <B1>
              <button
                className={styles.button}
                type="button"
                onClick={() => {
                  setModalNotificationOpen(false);
                }}
              >
                Sign Up
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
              Cancel
            </Button>
          </B1>
        </div>
      </Modal>
    </>
  );
}

export default WaitlistForm;
