import React from 'react'
import CourseInfoTile from './Tile';
import styles from '../styles/CourseInfo.module.css'

function Glance(props) {
    return (
        <div className={[styles.glance]}>
            <CourseInfoTile title={"Distrib"} val={props.distribs.length > 0 ? props.distribs: "N/A"}/>
            <CourseInfoTile title={"WC"} val={props.wc ? props.wc: "N/A"}/>
            <CourseInfoTile title={"NR Eligible"} val={props.nr ? props.nr: "N/A"}/>
            <CourseInfoTile title={"Avg Median"} val={props.avgMedian ? props.avgMedian: "N/A"}/>
            <CourseInfoTile title={"Waitlist"} val={props.waitlist ? "Required": "Not Required"}/>
        </div>
    );
}

export default Glance;