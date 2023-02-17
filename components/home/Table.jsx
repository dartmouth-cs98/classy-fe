/* eslint-disable no-underscore-dangle */
/* eslint-disable no-unused-vars */
import React from 'react';
import Link from 'next/link';
import { useDispatch } from 'react-redux';
import { B1 } from '../ui/typography';
import styles from '../../styles/Home.module.css';
import stylesw from '../../styles/WaitlistDetail.module.css';
import { markCourse } from '../../actions';

function Table(props) {
  const {
    courses, mode, studentId,
  } = props;
  const dispatch = useDispatch();
  const removeCourse = (courseId) => {
    if (mode === 'cart') {
      dispatch(markCourse(studentId, courseId, 'cart', true));
    } else if (mode === 'completed') {
      dispatch(markCourse(studentId, courseId, 'taken', true));
    }
  };

  const loadCourses = () => courses.map((course) => {
    console.log('course', course);
    return (
      <tr>
        <td>
          <B1>
            <Link href={`/courses/${course.courseDept}/${course.courseNum}`}>
              {`${course.courseDept} ${course.courseNum}`}
            </Link>
          </B1>
        </td>
        <td>
          <Link href={`/courses/${course.courseDept}/${course.courseNum}`}>
            <B1>{course.courseTitle}</B1>
          </Link>
        </td>
        <td>
          <Link href="/home">
            <button
              type="button"
              className={stylesw.button}
              onClick={removeCourse(course._id)}
            >
              X
            </button>
          </Link>
        </td>
      </tr>
    );
  });

  const tableOrEmpty = () => {
    if (courses?.length > 0) {
      return (
        <table>
          <thead>
            <th>Course Code</th>
            <th>Course Title</th>
            <th>Remove</th>
          </thead>
          <tbody>{loadCourses()}</tbody>
        </table>
      );
    }
    if (mode === 'cart') {
      return <B1>Add courses to your shopping cart</B1>;
    }
    if (mode === 'completed') {
      return <B1>Mark courses as completed</B1>;
    }
    return '';
  };
  return (
    <div
      className={styles.table}
    >
      {tableOrEmpty()}
    </div>
  );
}

export default Table;
