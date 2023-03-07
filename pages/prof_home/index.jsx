/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Image from 'next/image';
import {
  MdOutlineHome,
  MdOutlineLogout,
} from 'react-icons/md';
import { fetchProfessorHome } from '../../actions';
import CourseSimple from '../../components/profWaitlist/CourseSimple';
import {
  A, H3, H1, B1, H4,
} from '../../components/ui/typography';
import styles from '../../styles/components/ProfHome.module.css';
import logo from '../../images/logo.png';
import NavbarLink from '../../components/NavbarLink';
import ProfProfileModal from '../../components/profWaitlist/ProfProfileModal';

const cardColors = [
  { pastel: '#FCF0E3', dark: '#BA7D37' },
  { pastel: '#EBF9FA', dark: '#5B8A8D' },
  { pastel: '#EFFAEB', dark: '#75946A' },
  { pastel: '#EFE7FA', dark: '#7E5DAC' },
  { pastel: '#FAEBF6', dark: '#AE5E99' },
  { pastel: '#F9F3FC', dark: '#8E5BA8' },
];

function ProfHome() {
  // prof hide nav
  const name = 'Lorie Loeb';
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProfessorHome(name));
  }, []);
  const { user } = useSelector((state) => state.user);

  const sidenavIconStyles = 'text-2xl text-white group-hover:text-black ';

  const [updatedUser, setUpdatedUser] = useState(false);
  const [profileModalIsOpen, setProfileModalIsOpen] = useState(false);

  const currentProfHome = useSelector((reduxState) => reduxState.profHome.current);
  if (!currentProfHome) {
    dispatch(fetchProfessorHome(name));
    return <B1 key="loading">Loading...</B1>;
  }

  const pic = 'https://web.cs.dartmouth.edu/sites/department_computer_science/files/styles/profile_portrait/public/LorieLoeb.png?itok=A6088OY8';
  return (
    <div>
      <ProfProfileModal
        isOpen={profileModalIsOpen}
        setIsOpen={setProfileModalIsOpen}
        user={user}
        setUpdatedUser={setUpdatedUser}
      />

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

      <div className={styles.main}>
        <div style={{
          display: 'flex', flexDirection: 'row', alignItems: 'flex-end', gap: '20px',
        }}
        >
          <img className={styles.pic} src={pic} alt="Lorie" />
          <div style={{ display: 'flex', flexDirection: 'column', gap: '3px' }}>
            <A onClick={() => setProfileModalIsOpen(true)}>Edit Profile</A>
            <H1>{currentProfHome?.professor?.name}</H1>
            <B1 color="var(--darkest-grey)" style={{ marginTop: '5px' }}>
              {`Professor of ${currentProfHome?.professor?.departments?.join(', ')}`}
            </B1>
          </div>
        </div>

        <div className={styles.container}>
          <div className={styles.header}>
            <H3>My Courses</H3>
          </div>

          <div className={styles.resultContainer}>
            {currentProfHome?.courses?.map((course, i) => (
              <CourseSimple
                key={course?.courseName}
                course={course}
                color={cardColors[i % cardColors.length]}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfHome;
