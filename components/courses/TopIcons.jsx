/* eslint-disable no-underscore-dangle */
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { RemoveShoppingCart } from '@mui/icons-material';
import styles from '../../styles/CourseInfo.module.css';
import RecommendCourseModal from './RecommendCourseModal';
import { markCourse } from '../../actions';

function TopIcons(props) {
  const { course, student } = props;

  const dispatch = useDispatch();
  useEffect(() => {
  }, []);
  // eslint-disable-next-line max-len
  const [cart, setCart] = useState(
    student?.shoppingCart?.includes(course._id),
  );
  const onCartClick = () => {
    setCart(!cart);
    dispatch(markCourse(student._id, course._id, 'cart', cart));
  };

  const loadCartButton = () => {
    if (student.currentCourses.includes(course._id) || student.coursesTaken.includes(course._id)) {
      return '';
    }
    return (
      <button type="button" onClick={onCartClick}>
        {student?.shoppingCart?.includes(course._id) ? (
          <RemoveShoppingCart fontSize="large" />
        ) : (
          <AddShoppingCartIcon fontSize="large" />
        )}
      </button>
    );
  };

  return (
    <div className={styles.topicons}>
      {loadCartButton()}
      <RecommendCourseModal course={course} />
    </div>
  );
}

export default TopIcons;
