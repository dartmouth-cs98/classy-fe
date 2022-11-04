import Head from 'next/head'
import styles from "../../styles/Home.module.css"
import { getDistribColor, getNRColor, getMedianColor, getWaitlistColor, 
    getDifficultyColor, getWorkloadColor, getQualityColor } from './colorscheme';
import CourseData from './data';

export default function CourseInfo() {
    const data = CourseData();
    const currentCourse = data["COSC 98.01"];
    return (
        <>
            <div className={styles.container}>
                <Head>
                    <title>Classy</title>
                    <meta name="description" content="class selection made easy" />
                    <link rel="icon" href="/favicon.ico" />
                </Head>

                <h1 className={styles.title}>
                    {currentCourse.course_code.course_dept} {currentCourse.course_code.course_number}  {currentCourse.course_title}
                </h1>

                <h2 className={styles.title}>Description</h2>
                <div className={styles.description}>{currentCourse.description}</div>

                <h2 className={styles.title}>At a Glance</h2>
            </div>
            
        </>
    );
}
