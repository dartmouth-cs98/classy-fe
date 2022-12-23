import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import Link from 'next/link';
import CourseInfoSubtitle from '../../../components/courses/CourseInfoSubtitle';
import Glance from '../../../components/courses/Glance';
import CourseInfoTitle from '../../../components/courses/CourseInfoTitle';
import Offered from '../../../components/courses/Offered';
import Medians, { convertMedian } from '../../../components/courses/Medians';
import StudentsSay from '../../../components/courses/StudentsSay';
import { fetchCourse } from '../../../actions';
import getPrereqs from '../../../data/courseinfohelpers';
import styles from '../../../styles/ExploreHome.module.css';
import ReviewForm from '../../../components/courses/ReviewForm';

import {
  B1, A,
} from '../../../components/ui/typography';

export default function CourseInfo() {
  const router = useRouter();
  const { dept, num } = router.query;

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCourse(dept, num));
  }, []);

  const currentCourse = useSelector((reduxState) => reduxState.courses.current);

  if (!currentCourse || (currentCourse.courseDept !== dept || currentCourse.courseNum !== num)) {
    dispatch(fetchCourse(dept, num));
    return (
      <B1 key="loading">Loading...</B1>
    );
  }

  return (
    <div className={styles.container}>

      <CourseInfoTitle key="cit" course={currentCourse || { dept, num }} />
      <Link key={`${dept}-courses`} href={`/courses/${dept}`}><A>{`Find more ${dept} courses`}</A></Link>
      <CourseInfoSubtitle key="cis" text="Description" />
      <B1 key="description">{currentCourse ? currentCourse.description : ''}</B1>

      <CourseInfoSubtitle key="glancetext" text="At a Glance" />
      <Glance
        key="glance"
        distribs={currentCourse ? currentCourse.distribs : ''}
        wc={currentCourse ? currentCourse.wc : ''}
        avgMedian={currentCourse ? convertMedian(currentCourse.avgMedian) : ''}
        waitlist={currentCourse ? currentCourse.waitlist : 'Unknown'}
        dept={currentCourse ? currentCourse.courseDept : ''}
        num={currentCourse ? currentCourse.courseNum : ''}
        nr={currentCourse ? currentCourse.nrEligible : ''}
      />

      <CourseInfoSubtitle key="prereqs" text="Prerequisites" />
      {currentCourse ? getPrereqs(currentCourse.required, currentCourse.counts) : ''}

      <CourseInfoSubtitle key="students" text="What Students Say" />
      <StudentsSay
        key="studentssay"
        workload={currentCourse && currentCourse.workload ? currentCourse.workload : 'Not Enough Data'}
        difficulty={currentCourse && currentCourse.difficulty ? currentCourse.difficulty : 'Not Enough Data'}
        quality={currentCourse && currentCourse.quality ? currentCourse.quality : 'Not Enough Data'}
      />

      <CourseInfoSubtitle key="offered" text="Offered" />
      {currentCourse.offerings ? <Offered key="offerings" course={currentCourse} /> : <B1 key="no offerings">No Data</B1>}

      <CourseInfoSubtitle key="medians" text="Medians" />
      {currentCourse.medians ? <Medians key="mediantiles" medians={currentCourse.medians} /> : <B1 key="no data">No Data</B1>}

      <CourseInfoSubtitle key="reviews" text="Reviews" />
      {/* {currentCourse.reviews && currentCourse.reviews.length > 0
        ? currentCourse.reviews.map((review) => review) : <B1>No Reviews</B1>} */}

      <CourseInfoSubtitle key="addreview" text="Add a Review" />
      <ReviewForm key="form" offerings={currentCourse.offerings} />
    </div>
  );
}
