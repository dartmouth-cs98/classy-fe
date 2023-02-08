/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import Link from 'next/link';
import { Button, Modal } from 'reactstrap';
import { useDispatch } from 'react-redux';
import styles from '../../styles/WaitlistDetail.module.css';
// reactstrap components
import 'bootstrap/dist/css/bootstrap.min.css';
import { B1, H2, H3, H4, TextLabel } from '../ui/typography';
import RemoveWaitlist from './RemoveWaitlist';
import { addToOneWaitlist } from '../../actions';
import stylesCI from '../../styles/CourseInfo.module.css';


function WaitlistModal(props) {
  const dispatch = useDispatch();
  const {
    course, studentId, onWaitlist
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

  const loadOfferings = () => course.offerings.map((offering) => {
    let position = -1;
    const totalLength = offering.priorityWaitlist.length + offering.waitlist.length;
    var onOfferingWaitlist = false;
    if (offering.priorityWaitlist.includes(studentId)) {
      position = 'Priority';
      onOfferingWaitlist = true;
    } else if (offering.waitlist.includes(studentId)) {
      position = `${offering.priorityWaitlist.length + offering.waitlist.indexOf(studentId) + 1}/${totalLength}`;
      onOfferingWaitlist = true;
    }

    const positionDisplay = () => {
      if (position === -1) {
        if (!onOfferingWaitlist && !(parseInt(offering.term.substring(0, 2), 10) <= 22 || offering.term === "23w")) {
          return (
            <B1>
              <button
                className={styles.button}
                type="button"
                onClick={dispatch(addToOneWaitlist({
                  courseDept: course.courseDept,
                  courseNum: course.courseNum,
                  studentId: studentId,
                  term: offering.term,
                }))}
              >
                {`Join ${offering.term} Waitlist`}
              </button>
            </B1>
          );
        }
        return '-';
      }
      return (
        <RemoveWaitlist
          dept={course.courseDept}
          num={course.courseNum}
          offering={offering}
          studentId={studentId}
        />
      );
    };

    // display position out of total if on a waitlist for the term,
    // otherwise just show waitlist length
    return (
      <tr key={offering.term}>
        <td><B1>{offering.term}</B1></td>
        <td><B1>{offering.professors.join(', ')}</B1></td>
        <td><B1>{position === -1 ? totalLength : position}</B1></td>
        <td>
          <B1>{positionDisplay()}</B1>
        </td>
      </tr>
    );
  });

  const loadFormOfferings = () => {
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
        <button className={stylesCI.ciButton} style={{ background: '#FCF0E3' }} onClick={() => setModalNotificationOpen(true)} type="button">
          <TextLabel>
            {onWaitlist ? `Check Waitlist Status` : `Join ${course.courseDept} ${course.courseNum} Waitlists`}
          </TextLabel>
        </button>

      <Modal isOpen={modalNotificationOpen} className="modal-danger" contentClassName="bg-gradient-danger">
        {onWaitlist ?
        <>
        <div className={styles.page_header}>
        <H2 className={styles.title}>
          {`Waitlist for ${course.courseDept} ${course.courseNum}`}
        </H2>
      </div>

        <div className={styles.left_info}>
          <div className={styles.waitlist_btns}>
            {onWaitlist
              ? (
                <RemoveWaitlist
                  dept={course.courseDept}
                  num={course.courseNum}
                  studentId={`ObjectId('${studentId}')`}
                />
              )
              : (
                <WaitlistForm
                  course={course}
                  studentId={`ObjectId('${studentId}')`}
                />
              )}
          </div>

          <div className={styles.waitlist_details_container}>
            <table>
              <thead>
                <tr>
                  <th><H4>Term</H4></th>
                  <th><H4>Professor(s)</H4></th>
                  <th><H4># on Waitlist</H4></th>
                  <th><H4>Action</H4></th>
                </tr>
              </thead>
              <tbody>
                {loadOfferings()}
              </tbody>
            </table>
          </div>
        </div>
        </> 
        : 
        <>
        <div className="modal-body">
            <div className=" py-3 text-center">
                <i className=" ni ni-bell-55 ni-3x" />
                <H3>
                {`Join ${course.courseDept} ${course.courseNum} Waitlists`}
                </H3>
            </div>
            <div className="py-3">
                <form onSubmit={onSubmit}>
                <H4>Select the waitlists you wish to join.</H4>
                {loadFormOfferings()}
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
    </>
}

    <div className=" py-3 text-center">
        <B1>
            <Button
                className={styles.button}
                type="button"
                onClick={() => {setModalNotificationOpen(false);}}
            >
                Close Modal
            </Button>
        </B1>
    </div>
</Modal>
</>
  );
}

export default WaitlistModal;
