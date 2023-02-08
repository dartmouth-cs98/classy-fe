/* eslint-disable no-underscore-dangle */
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
import styles from '../../../styles/CourseInfo.module.css';
import ReviewForm from '../../../components/courses/ReviewForm';

import {
  B1, A, H2,
} from '../../../components/ui/typography';
import ReviewComponent from '../../../components/courses/ReviewComponent';

export default function CourseInfo() {
  const router = useRouter();
  const { dept, num } = router.query;

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCourse(dept, num));
  }, []);

  const currentCourse = useSelector((reduxState) => reduxState.courses.current);

  if (!currentCourse || !currentCourse.course || (currentCourse.course.courseDept !== dept
    || currentCourse.course.courseNum !== num)) {
    dispatch(fetchCourse(dept, num));
    return (
      <B1 key="loading">Loading...</B1>
    );
  }

  const loadReviews = () => {
    if (!currentCourse.course.reviewCount) {
      return <B1>No Reviews</B1>;
    }
    return currentCourse.course.offerings.map(
      (offering) => offering.reviews.map(
        (review) => (
          <ReviewComponent
            key={review.content}
            // eslint-disable-next-line no-underscore-dangle
            user={currentCourse.users.find((user) => user._id === review.user)}
            term={offering.term}
            professors={offering.professors}
            review={review}
          />
        ),
      ),
    );
  };

  const showCourseCodes = (course) => {
    const xlists = course.xlists && course.xlists.length > 0 ? `/${course.xlists.join('/')} ` : ' ';
    return (
        <H2>
        {course.courseDept}
        {' '}
        {course.courseNum}
        {course.xlists ? xlists : ' '}
        {course.courseTitle}
        </H2>
    );
}

  return (
    <div className={styles.container}>
        <div className={styles.ciTitle}>
            {currentCourse.course ? (
                showCourseCodes(currentCourse.course)
            ) : <H2 />}
        </div>
        <Link key={`${dept}-courses`} href={`/courses/${dept}`}><A>{`Find more ${dept} courses`}</A></Link>
        <CourseInfoTitle
            key="cit"
            course={currentCourse.course || { dept, num }}
            studentId={currentCourse.student._id}
            onWaitlist={currentCourse.onWaitlist}
        />
      <CourseInfoSubtitle key="cis" text="Description" />
      <B1 key="description">{currentCourse.course ? currentCourse.course.description : ''}</B1>

      <CourseInfoSubtitle key="prereqs" text="Prerequisites" />
      {currentCourse.course ? getPrereqs(currentCourse.course.required, currentCourse.course.counts) : ''}
      <CourseInfoSubtitle text="At a Glance" />
      <Glance
        distribs={currentCourse.course ? currentCourse.course.distribs : ''}
        wc={currentCourse.course ? currentCourse.course.wc : ''}
        avgMedian={currentCourse.course ? convertMedian(currentCourse.course.avgMedian) : ''}
        dept={currentCourse.course ? currentCourse.course.courseDept : ''}
        num={currentCourse.course ? currentCourse.course.courseNum : ''}
        nr={currentCourse.course ? currentCourse.course.nrEligible : ''}
      />

      <CourseInfoSubtitle key="students" text="What Students Say" />
      <StudentsSay
        key="studentssay"
        workload={currentCourse.course && currentCourse.course.workload ? currentCourse.course.workload : 'Not Enough Data'}
        difficulty={currentCourse.course && currentCourse.course.difficulty ? currentCourse.course.difficulty : 'Not Enough Data'}
        quality={currentCourse.course && currentCourse.course.quality ? currentCourse.course.quality : 'Not Enough Data'}
      />

      <CourseInfoSubtitle key="offered" text="Offered" />
      {currentCourse.course.offerings ? <Offered key="offerings" offerings={currentCourse.course.offerings} /> : <B1 key="no offerings">No Data</B1>}

      <CourseInfoSubtitle key="medians" text="Medians" />
      {currentCourse.course.medians ? <Medians key="mediantiles" medians={currentCourse.course.medians} /> : <B1 key="no data">No Data</B1>}

      <CourseInfoSubtitle key="reviews" text="Reviews" />
      {loadReviews()}

      <CourseInfoSubtitle key="addreview" text="Add a Review" />
      <ReviewForm courseId={currentCourse.course._id} key="form" users={currentCourse.users} offerings={currentCourse.offerings} />
    </div>
  );
}
