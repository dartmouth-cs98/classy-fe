/* eslint-disable no-restricted-syntax */
/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
  CircularProgressbarWithChildren,
  buildStyles,
} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import {
  A, H3, H2, H1, B1, H4,
} from '../../components/ui/typography';
import CourseSimple from '../../components/profWaitlist/CourseSimple';
import DataBox from '../../components/home/DataBox';
import Table from '../../components/home/Table';
import styles from '../../styles/components/HomePage.module.css';
import ProfileModal from '../../components/home/ProfileModal';
import CurrentModal from '../../components/home/CurrentModal';
import ShoppingModal from '../../components/home/ShoppingModal';
import CompletedModal from '../../components/home/CompletedModal';

import { fetchUser } from '../../actions';
import { userId } from '../../constants/mockData';

const cardColors = [
  { pastel: '#FCF0E3', dark: '#BA7D37' },
  { pastel: '#EBF9FA', dark: '#5B8A8D' },
  { pastel: '#EFFAEB', dark: '#75946A' },
  { pastel: '#EFE7FA', dark: '#7E5DAC' },
  { pastel: '#FAEBF6', dark: '#AE5E99' },
  { pastel: '#F9F3FC', dark: '#8E5BA8' },
];

function HomePage() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUser(userId));
  }, []);
  const { user } = useSelector((state) => state.user);
  const [updatedUser, setUpdatedUser] = useState(false);
  useEffect(() => {
    dispatch(fetchUser(userId));
  }, [updatedUser === true]);

  const [profileModalIsOpen, setProfileModalIsOpen] = useState(false);
  const [currentModalIsOpen, setCurrentModalIsOpen] = useState(false);
  const [shoppingModalIsOpen, setShoppingModalIsOpen] = useState(false);
  const [completedModalIsOpen, setCompletedModalIsOpen] = useState(false);

  const progress = user?.student?.coursesTaken
    ? Math.round((100 * user.student.coursesTaken.length) / 35, 10)
    : 0;

  const loadMajors = () => {
    const majorNames = [];
    for (const major of user.student.majors) {
      majorNames.push(major.name);
    }
    return majorNames.join(',');
  };

  return (
    <div style={{ padding: '20px 80px 50px 275px' }}>
      <ProfileModal
        isOpen={profileModalIsOpen}
        setIsOpen={setProfileModalIsOpen}
        user={user}
        setUpdatedUser={setUpdatedUser}
      />
      <ShoppingModal
        isOpen={shoppingModalIsOpen}
        setIsOpen={setShoppingModalIsOpen}
      />
      <CurrentModal
        isOpen={currentModalIsOpen}
        setIsOpen={setCurrentModalIsOpen}
      />
      <CompletedModal
        isOpen={completedModalIsOpen}
        setIsOpen={setCompletedModalIsOpen}
      />
      <div className={styles.verticalContainer} style={{ gap: '50px' }}>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'flex-end',
            gap: '35px',
          }}
        >
          <img className={styles.pic} src={user?.profileImageUrl} alt="Profile Image" />
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <A onClick={() => setProfileModalIsOpen(true)}>Edit Profile</A>
            <H1>{`${user?.firstName} ${user?.lastName}`}</H1>
            <B1 color="var(--darkest-grey)" style={{ marginTop: '5px' }}>
              {`${user?.student?.majors ? loadMajors() : 'Undecided'} Major(s)`}
            </B1>
          </div>
        </div>

        <div className={styles.verticalContainer}>
          <div
            className={styles.horizontalContainer}
            style={{ height: '350px' }}
          >
            <div
              className={styles.box}
              style={{
                backgroundColor: 'var(--navy)',
                width: '100%',
              }}
            >
              <div className={styles.header}>
                <H3 color="var(--white)">Current Courses</H3>
                <A
                  color="var(--white)"
                  onClick={() => setCurrentModalIsOpen(true)}
                >
                  Edit
                </A>
              </div>
              <div
                style={{
                  display: 'flex',
                  width: '100%',
                  flexDirection: 'row',
                  justifyContent: 'flex-start',
                  gap: '40px',
                  overflow: 'scroll',
                  padding: '0 30px',
                }}
              >
                {user?.student?.currentCourses?.map((course, i) => (
                  <CourseSimple
                    key={course?.courseTitle}
                    course={course}
                    color={cardColors[i % cardColors.length]}
                    type="home"
                  />
                ))}
              </div>
            </div>
          </div>

          <div className={styles.horizontalContainer}>
            <div className={styles.verticalContainer} style={{ width: '70%' }}>
              <div
                className={styles.box}
                style={{
                  backgroundColor: 'var(--lightest-grey)',
                  height: '320px',
                  minWidth: '615px',
                }}
              >
                <div className={styles.header}>
                  <H3>Shopping Cart for Next Term</H3>
                  <A onClick={() => setShoppingModalIsOpen(true)}>Edit</A>
                </div>
                {/* {console.log('shopping cart', user?.student?.shoppingCart)} */}
                <Table
                  courses={user?.student?.shoppingCart}
                  mode="cart"
                  studentId={user?.student?._id}
                />
              </div>

              <div
                className={styles.box}
                style={{
                  backgroundColor: 'var(--lightest-grey)',
                  height: '320px',
                  minWidth: '615px',
                }}
              >
                <div className={styles.header}>
                  <H3>Completed Courses</H3>
                  <A onClick={() => setCompletedModalIsOpen(true)}>Edit</A>
                </div>

                <Table
                  courses={user?.student?.coursesTaken}
                  mode="completed"
                  studentId={user?.student?._id}
                />
              </div>
            </div>

            <div className={styles.verticalContainer} style={{ width: '30%' }}>
              <div
                className={styles.box}
                style={{
                  backgroundColor: 'var(--lightest-grey)',
                  paddingBottom: '35px',
                }}
              >
                <div className={styles.header}>
                  <H3>Your Progress</H3>
                </div>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '10px',
                  }}
                >
                  <div
                    style={{ width: '75%', height: '75%', marginTop: '20px' }}
                  >
                    <CircularProgressbarWithChildren
                      value={progress}
                      styles={buildStyles({
                        // How long animation takes to go from one percentage to another, in seconds
                        pathTransitionDuration: 0.5,
                        // Colors
                        pathColor: 'var(--dark-green)',
                        trailColor: 'var(--light-grey)',
                      })}
                      strokeWidth="18"
                    >
                      <H2>
                        {progress}
                        %
                      </H2>
                    </CircularProgressbarWithChildren>
                  </div>

                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      gap: '2px',
                    }}
                  >
                    <H4>Degree</H4>
                    <B1 color="var(--dark-grey)">{`${user?.student?.coursesTaken?.length}/35 Courses Completed`}</B1>
                  </div>
                </div>
              </div>

              <div
                className={styles.horizontalContainer}
                style={{ width: '100%' }}
              >
                <DataBox
                  height="150px"
                  text="Friends"
                  data={user?.student?.friends?.length}
                  pastelColor="var(--pastel-pink)"
                  darkColor="var(--dark-pink) "
                />
                <DataBox
                  height="150px"
                  text="Waitlists Joined"
                  data={user?.student?.waitlists?.length || 0}
                  pastelColor="var(--pastel-violet)"
                  darkColor="var(--dark-violet) "
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
