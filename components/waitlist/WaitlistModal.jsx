/* eslint-disable no-unsafe-optional-chaining */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-shadow */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import Link from 'next/link';
import { Button } from 'reactstrap';
import { useDispatch } from 'react-redux';
import Modal2 from '../ModalWaitlist';
import styles from '../../styles/WaitlistDetail.module.css';
import styleswt from '../../styles/WaitlistTileCard.module.css';
// reactstrap components
// import 'bootstrap/dist/css/bootstrap.min.css';
import {
  B1, H2, H3, H4, TextLabel,
} from '../ui/typography';
import RemoveWaitlist from './RemoveWaitlist';
import { addToOneWaitlist, joinWaitlists } from '../../actions';
import stylesCI from '../../styles/CourseInfo.module.css';

const cardColor = ['#EBF9FA', '#EFFAEB', '#FCF0E3', '#EFE7FA', '#FAEBF6', '#F9F3FC'];
const textColor = ['#5B8A8D', '#75946A', '#BA7D37', '#7E5DAC', '#AE5E99', '#8E5BA8'];

function WaitlistModal(props) {
  const dispatch = useDispatch();
  const {
    course, studentId, onWaitlist, index, entryPoint,
  } = props;
  //   const [modalDefaultOpen, setModalDefaultOpen] = React.useState(false);
  const [modalNotificationOpen, setModalNotificationOpen] = React.useState(
    false,
  );
  const [reason, setReason] = React.useState('');
  const offerings = [];

  const onInputChange = (event) => {
    if (event.target.id === 'reason') {
      setReason(event.target.value);
    } else if (offerings.includes(event.target.value)) {
      offerings.splice(offerings.indexOf(event.target.value), 1);
    } else {
      offerings.push(event.target.value);
    }
  };

  const onSubmit = () => {
    const waitlistRequest = {
      courseNum: course.courseNum,
      courseDept: course.courseDept,
      studentId,
      reason,
      offerings,
    };
    setReason('');
    dispatch(joinWaitlists(waitlistRequest));
  };

  const loadOfferings = () => {
    let index = -1;
    return course.offerings.map((offering) => {
      index += 1;
      let position = -1;
      const totalLength = offering?.priorityWaitlist?.length + offering?.waitlist?.length;
      let onOfferingWaitlist = false;
      if (offering?.approved?.includes(studentId)) {
        position = 'Approved';
      } else if (offering?.priorityWaitlist?.includes(studentId)) {
        position = 'Priority';
        onOfferingWaitlist = true;
      } else if (offering?.waitlist?.includes(studentId)) {
        position = `${offering.priorityWaitlist.length + offering.waitlist.indexOf(studentId) + 1}/${totalLength}`;
        onOfferingWaitlist = true;
      }

      const positionDisplay = () => {
        if (position === -1) {
          if (!onOfferingWaitlist && !(parseInt(offering.term.substring(0, 2), 10) <= 22 || offering.term === '23w')) {
            return (
              <B1>
                <Link href="/waitlist">
                  <button
                    key={`button${offering.index}`}
                    className={styles.button}
                    type="button"
                    onClick={() => dispatch(addToOneWaitlist({
                      courseDept: course.courseDept,
                      courseNum: course.courseNum,
                      studentId,
                      offeringIndex: index,
                    }))}
                  >
                    {`Join ${offering.term} Waitlist`}
                  </button>
                </Link>
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
            offeringIndex={index}
            onOfferingWaitlist={onOfferingWaitlist}
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
  };

  const modalButton = (entryPoint) => {
    const studentWaitlists = {};
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < course.offerings.length; i++) {
      // look through each course offering and look for student on reg/priority waitlists
      if (course?.offerings[i]?.approved?.includes(studentId)) {
        studentWaitlists[course.offerings[i].term] = 'Approved';
      } else if (course?.offerings[i]?.priorityWaitlist?.includes(studentId)) {
        studentWaitlists[course.offerings[i].term] = 'Priority';
      } else if (course?.offerings[i]?.waitlist?.includes(studentId)) {
        // eslint-disable-next-line max-len
        const totalStudents = course.offerings[i].priorityWaitlist.length
          + course.offerings[i].waitlist.length;
        // eslint-disable-next-line max-len
        const studentPos = course.offerings[i].priorityWaitlist.length
          + course.offerings[i].waitlist.indexOf(studentId)
          + 1;
        const position = `${studentPos} / ${totalStudents}`;
        studentWaitlists[course.offerings[i].term] = position;
      }
    }
    // get list of terms student is signed up for and format
    const termArray = Object.keys(studentWaitlists);
    const waitlistTerms = termArray.join(', ');
    // Get next term and student's position
    const nextTerm = termArray[0];
    const nextTermPos = studentWaitlists[nextTerm];

    if (entryPoint === 'waitlist') {
      return (
        <div
          className={styleswt.card}
          style={{ background: cardColor[index] }}
        >
          <div className={styleswt.waitlistCardsContainer}>
            <H3>
              {` ${course.courseDept} ${course.courseNum}`}
            </H3>
            <Link href={`/courses/${course.courseDept}/${course.courseNum}`}>
              <H3 color={textColor[index]}>{course.courseTitle}</H3>
            </Link>
          </div>
          <div className={styleswt.waitlistCardsContainer}>
            <div>
              <H3 color={textColor[index]}>terms enrolled</H3>
              <H3>{waitlistTerms}</H3>
            </div>
            <div>
              <H3 color={textColor[index]}>
                status for
                {' '}
                {nextTerm}
              </H3>
              {/* <H4>For additonal terms, select edit below</H4> */}
              <H3>{nextTermPos}</H3>
              {/* <H3>{course.offerings[1].waitlist.length}</H3> */}
            </div>
          </div>
          <div className={styleswt.bottomButtons}>
            <button className={styleswt.btn} type="button" onClick={() => setModalNotificationOpen(true)}>
              {/* Could also say details, not sure what is clearer */}
              {/* Details */}
              Edit
            </button>
          </div>
        </div>
      );
    }
    return (
      <button
        className={stylesCI.ciButton}
        style={{ background: 'var(--navy)' }}
        onClick={() => setModalNotificationOpen(true)}
        type="button"
      >
        <TextLabel color="var(--white)">
          {onWaitlist
            ? 'Check Waitlist Status'
            : `Join ${course.courseDept} ${course.courseNum} Waitlists`}
        </TextLabel>
      </button>
    );
  };

  const loadFormOfferings = () => {
    let index = -1;
    return course.offerings.map((offering) => {
      index += 1;
      if ((parseInt(offering.term.substring(0, 2), 10) <= 22 || offering.term === '23w')) return <label />;
      return (
        <label className={styles.cblabel} htmlFor={`offering${index}`}>
          <B1>
            <input
              type="checkbox"
              className={styles.cb}
              id={`offering${index}`}
              value={index}
              onChange={onInputChange}
            />
            {`${offering.term} ${offering.professors.join(', ')}`}
          </B1>
        </label>
      );
    });
  };

  //   const [modalFormOpen, setModalFormOpen] = React.useState(false);
  return (
    <>
      {modalButton(entryPoint)}
      <Modal2 isOpen={modalNotificationOpen}>
        {onWaitlist
          ? (
            <>
              <div className={styles.page_header}>
                <H2 className={styles.title}>
                  {`Waitlist for ${course.courseDept} ${course.courseNum}`}
                </H2>
              </div>
              <div className={styles.waitlist_btns}>
                {onWaitlist
                  ? (
                    <RemoveWaitlist
                      dept={course.courseDept}
                      num={course.courseNum}
                      studentId={studentId}
                    />
                  )
                  : ''}
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
            </>
          )
          : (
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
                    <input type="textarea" onChange={onInputChange} id="reason" />
                  </form>
                </div>
              </div>
              <div className="modal-footer">
                <B1>
                  <Link href="/waitlist">
                    <button
                      className={styles.button}
                      type="submit"
                      onClick={onSubmit}
                    >
                      Sign Up
                    </button>
                  </Link>
                </B1>
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
          )}

        <div className=" py-3 text-center">
          <B1>
            <Button
              className={styles.button}
              type="button"
              onClick={() => { setModalNotificationOpen(false); }}
            >
              Close Modal
            </Button>
          </B1>
        </div>
      </Modal2>
    </>
  );
}

export default WaitlistModal;
