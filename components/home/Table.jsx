/* eslint-disable no-underscore-dangle */
/* eslint-disable no-unused-vars */
import React from 'react';
import Link from 'next/link';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import { IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import RemoveIcon from '@mui/icons-material/Remove';
import { B1 } from '../ui/typography';
import styles from '../../styles/Home.module.css';
import { markCourse } from '../../actions';

function Table(props) {
  const {
    courses, mode, removing, studentId,
  } = props;
  const dispatch = useDispatch();
  const router = useRouter();

  const removeCourse = (courseId) => {
    if (mode === 'cart') {
      dispatch(markCourse(studentId, courseId, 'cart', true));
    } else if (mode === 'completed') {
      dispatch(markCourse(studentId, courseId, 'taken', true));
    }
  };

  const loadCourses = () => courses.map((course) => (
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
            onClick={() => removeCourse(course._id)}
          >
            X
          </button>
        </Link>
      </td>
    </tr>
  ));

  const mockRow = () => (
    <tr>
      <td align="left" style={{ minWidth: '130px', height: '40px' }}>
        <B1>
          COSC 10
        </B1>
      </td>
      <td style={{
        maxWidth: '450px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap',
      }}
      >
        <B1>
          Title here
        </B1>
      </td>
      {removing ? (
        // <IconButton>
        <td>
          {/* <IconButton> */}
          <CloseIcon style={{ cursor: 'pointer', width: '70px' }} />
          {/* </IconButton> */}
        </td>

        // </IconButton>
      ) : null}

    </tr>

  );

  if (courses?.length > 0) {
    return (
      <div style={{
        overflow: 'auto', width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center',
      }}
      >
        <table style={{ margin: '5px 0' }}>
          <tbody>
            {courses.map((course) => (
              <tr>
                <td align="left" style={{ minWidth: '130px', height: '40px' }}>
                  <B1 style={{ cursor: 'pointer' }} onClick={() => router.push(`/courses/${course.courseDept}/${course.courseNum}`)}>
                    {`${course.courseDept} ${course.courseNum}`}
                  </B1>
                </td>
                <td style={{
                  maxWidth: '450px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', height: '40px',
                }}
                >
                  <B1 style={{ cursor: 'pointer' }} onClick={() => router.push(`/courses/${course.courseDept}/${course.courseNum}`)}>
                    {course.courseTitle}
                  </B1>
                </td>
                {removing ? (
                  // <IconButton>
                  <td style={{ height: '40px' }}>
                    {/* <IconButton> */}
                    <CloseIcon style={{ cursor: 'pointer', width: '70px' }} />
                    {/* </IconButton> */}

                  </td>

                  // </IconButton>
                ) : null}
              </tr>
            ))}
            {mockRow()}
            {mockRow()}
            {mockRow()}
            {mockRow()}
            {mockRow()}
            {mockRow()}
            {mockRow()}
            {mockRow()}
            {mockRow()}
            {mockRow()}
            {mockRow()}
            {mockRow()}
            {mockRow()}
            {mockRow()}
            {mockRow()}
            {mockRow()}
            {mockRow()}
            {mockRow()}
          </tbody>
        </table>
      </div>

    );
  }
  if (mode === 'cart') {
    return (
      <div className={styles.table}>
        <B1>Add courses to your shopping cart.</B1>
      </div>
    );
  }
  if (mode === 'completed') {
    return (
      <div className={styles.table}>
        <B1>Add completed courses.</B1>
      </div>
    );
  }
  return '';
}

export default Table;
