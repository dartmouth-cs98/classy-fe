import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from '../../styles/components/SearchPage.module.css';
// eslint-disable-import/no-unresolved
import DepartmentCard from '../../components/DepartmentCard';
import { cardColors } from '../../data/colors';
import { fetchDepartments } from '../../actions';
import { H3, B1 } from '../../components/ui/typography';

export default function Departments() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchDepartments());
  }, []);
  const depts = useSelector((reduxState) => reduxState.departments.all);

  if (!depts) {
    dispatch(fetchDepartments());
    return (
      <B1>Loading...</B1>
    );
  }

  return (
    <div>
      <H3>Browse Departments</H3>
      <div className={styles.depts}>
        {depts ? depts.map((dept, i) => (
          <DepartmentCard
            key={dept.name}
            dept={dept}
            color={cardColors[i % cardColors.length]}
          />
        )) : ''}
      </div>
    </div>
  );
}
