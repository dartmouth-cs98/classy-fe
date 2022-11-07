import React, { useState, setState } from 'react'
import getColor from '../pages/courseinfo/colorscheme';
import styles from "../styles/Home.module.css"
import stylesCI from '../styles/CourseInfo.module.css'

function CourseInfoTitle(props) {
    const [taken, setTaken] = useState(false);

    const onTakenClick = () => {
        setTaken(!taken);
    }

    return (
        <div className={stylesCI.ciTitle}>
            <h1 className={styles.title}>
                {props.course.course_code.course_dept} {props.course.course_code.course_number} {props.course.course_title}
            </h1>
            <button type="button" className={stylesCI.ciButton} style={{background: getColor("cititle", taken)}} onClick={onTakenClick}>
                {taken ? "Mark as Not Taken" : "Mark as Taken"}
            </button>
        </div>
    );
}

export default CourseInfoTitle;