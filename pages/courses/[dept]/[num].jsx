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

  if (!currentCourse.course || (currentCourse.course.courseDept !== dept
    || currentCourse.course.courseNum !== num)) {
    dispatch(fetchCourse(dept, num));
    return (
      <B1 key="loading">Loading...</B1>
    );
  }

  return (
    <div className={styles.container}>

      <CourseInfoTitle key="cit" course={currentCourse.course || { dept, num }} />
      <Link key={`${dept}-courses`} href={`/courses/${dept}`}><A>{`Find more ${dept} courses`}</A></Link>
      <CourseInfoSubtitle key="cis" text="Description" />
      <B1 key="description">{currentCourse.course ? currentCourse.course.description : ''}</B1>

      <CourseInfoSubtitle key="glancetext" text="At a Glance" />
      <Glance
        key="glance"
        distribs={currentCourse.course ? currentCourse.course.distribs : ''}
        wc={currentCourse.course ? currentCourse.course.wc : ''}
        avgMedian={currentCourse.course ? convertMedian(currentCourse.course.avgMedian) : ''}
        waitlist={currentCourse.course ? currentCourse.course.waitlist : 'Unknown'}
        dept={currentCourse.course ? currentCourse.course.courseDept : ''}
        num={currentCourse.course ? currentCourse.course.courseNum : ''}
        nr={currentCourse.course ? currentCourse.course.nrEligible : ''}
      />

      <CourseInfoSubtitle key="prereqs" text="Prerequisites" />
      {currentCourse.course ? getPrereqs(currentCourse.course.required, currentCourse.course.counts) : ''}

      <CourseInfoSubtitle key="students" text="What Students Say" />
      <StudentsSay
        key="studentssay"
        workload={currentCourse.course && currentCourse.course.workload ? currentCourse.course.workload : 'Not Enough Data'}
        difficulty={currentCourse.course && currentCourse.course.difficulty ? currentCourse.course.difficulty : 'Not Enough Data'}
        quality={currentCourse.course && currentCourse.course.quality ? currentCourse.course.quality : 'Not Enough Data'}
      />

      <CourseInfoSubtitle key="offered" text="Offered" />
      {currentCourse.course.offerings ? <Offered key="offerings" course={currentCourse.course} /> : <B1 key="no offerings">No Data</B1>}

      <CourseInfoSubtitle key="medians" text="Medians" />
      {currentCourse.course.medians ? <Medians key="mediantiles" medians={currentCourse.course.medians} /> : <B1 key="no data">No Data</B1>}

      <CourseInfoSubtitle key="reviews" text="Reviews" />
      {currentCourse.reviews && currentCourse.reviews.length > 0
        ? currentCourse.reviews.map((review) => <B1>{review.content}</B1>) : <B1>No Reviews</B1>}

      <CourseInfoSubtitle key="addreview" text="Add a Review" />
      <ReviewForm dept={dept} num={num} key="form" users={currentCourse.users} offerings={currentCourse.course.offerings} />
    </div>
  );
}
