/* eslint-disable no-underscore-dangle */
/* eslint-disable no-unused-vars */
import React from 'react';
import Link from 'next/link';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import { B1 } from '../ui/typography';
import styles from '../../styles/Home.module.css';
import stylesw from '../../styles/WaitlistDetail.module.css';
import { markCourse } from '../../actions';

function Table(props) {
  const {
    courses, mode, studentId,
  } = props;
  const dispatch = useDispatch();
  const router = useRouter();

  if (courses?.length > 0) {
    return (
      <div className={styles.table}>
        <table style={{ margin: '5px 0' }}>
          <tbody>
            {courses.map((course) => (
              <tr onClick={() => router.push(`/courses/${course.courseDept}/${course.courseNum}`)} style={{ cursor: 'pointer' }}>
                <td align="left" style={{ minWidth: '130px' }}>
                  <B1>
                    {`${course.courseDept} ${course.courseNum}`}
                  </B1>
                </td>
                <td style={{
                  maxWidth: '450px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap',
                }}
                >
                  <B1>
                    {course.courseTitle}
                  </B1>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    );
  }
  if (mode === 'cart') {
    return (
      <div className={styles.table}>
        <B1>Add courses to your shopping cart</B1>
      </div>
    );
  }
  if (mode === 'completed') {
    return (
      <div className={styles.table}>
        <B1>Mark courses as completed</B1>
      </div>
    );
  }
  return '';
}

export default Table;
