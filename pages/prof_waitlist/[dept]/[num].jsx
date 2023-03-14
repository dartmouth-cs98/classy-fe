/* eslint-disable no-unused-vars */
/* eslint-disable no-underscore-dangle */
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { Alert } from '@mui/material';
import {
  MdOutlineHome,
  MdOutlineLogout,
} from 'react-icons/md';
import Image from 'next/image';
import { fetchUser, fetchCourse, fetchProfessor } from '../../../actions';
import { B1, H1, H4 } from '../../../components/ui/typography';

import styles from '../../../styles/ProfWaitlist.module.css';
import ProfWaitlistTerm from '../../../components/profWaitlist/ProfWaitlistTerm';
import NavbarLink from '../../../components/NavbarLink';
import logo from '../../../images/logo.png';

const cardColors = [
  { pastel: '#FCF0E3', dark: '#BA7D37' },
  { pastel: '#EBF9FA', dark: '#5B8A8D' },
  { pastel: '#EFFAEB', dark: '#75946A' },
  { pastel: '#EFE7FA', dark: '#7E5DAC' },
  { pastel: '#FAEBF6', dark: '#AE5E99' },
  { pastel: '#F9F3FC', dark: '#8E5BA8' },
];

function ProfWaitlist() {
  // prof hide nav
  const router = useRouter();
  const dispatch = useDispatch();

  const { dept, num } = router.query;
  const { user } = useSelector((state) => state.user);
  const [updatedUser, setUpdatedUser] = useState(false);

  useEffect(() => {
    dispatch(fetchUser(user._id));
  }, [updatedUser === true]);

  const name = `${user.firstName} ${user.lastName}`;

  const sidenavIconStyles = 'text-2xl text-white group-hover:text-black ';

  const course = useSelector((reduxState) => reduxState.courses.current.course);
  const currentProfessor = useSelector(
    (reduxState) => reduxState.professors.current,
  );
  if (
    !course
    || course.courseDept !== dept
    || course.courseNum !== num
  ) {
    dispatch(fetchCourse(dept, num));
    return <B1 key="loading">Loading...</B1>;
  }

  if (!currentProfessor) {
    dispatch(fetchProfessor(name));
    return <B1 key="loading">Loading...</B1>;
  }

  const loadProfOfferings = () => {
    const results = course?.offerings?.map((offering, i) => {
      if (offering.professors.includes(name)) {
        if ((offering.waitlist.length + offering.priorityWaitlist.length) > 0) {
          return (
            <ProfWaitlistTerm
              color={cardColors[i % cardColors.length]}
              key={offering.professors}
              i={i}
              courseId={course?._id}
              dept={course.courseDept}
              num={course.courseNum}
              offering={offering}
            />
          );
        }
      }
      return '';
    });
    if (results.length === 0) {
      return <B1>No students on any waitlists yet!</B1>;
    }
    return results;
  };

  return (
    <div className={styles.all}>
      <div className="p-6 w-1/2 h-screen bg-black z-20 fixed top-0 -left-96 lg:w-60 lg:left-0 peer-focus:left-0 peer:transition ease-out delay-150 duration-200">
        <div className="flex flex-col justify-start items-center my-6">
          <Image src={logo} width={60} height={60} alt="classy logo" />
          <H4
            color="white"
            className="text-base text-center font-bold pb-4 w-full mt-3.5"
          >
            Classy
          </H4>

          {/* main tabs */}
          <div className="my-60 pb-10 w-full">
            <NavbarLink
              link="prof_home"
              title="Home"
              icon={<MdOutlineHome className={sidenavIconStyles} />}
            />

            {/* logout */}
            <div className="my-60 w-full">
              <NavbarLink
                link=""
                title="Logout"
                icon={<MdOutlineLogout className={sidenavIconStyles} />}
              />
            </div>
          </div>
        </div>
      </div>

      <div className={styles.header}>
        <H1>{`${dept} ${num} Waitlists`}</H1>
      </div>
      <Alert severity="info" style={{ width: '100%', marginBottom: '1em' }}>
        Changes will be updated once you refresh the page
      </Alert>
      <br />

      <div className={styles.body}>
        <br />
        {loadProfOfferings()}
      </div>
    </div>
  );
}

export default ProfWaitlist;
