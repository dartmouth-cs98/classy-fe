import React from 'react'
import getColor from '../pages/courseinfo/colorscheme'
import stylesCI from '../styles/CourseInfo.module.css'

function extraText(type) {
    if (type === "Workload") {
        return " hrs/week";
    }
    if (type === "Difficulty") {
        return "/5";
    }
    if (type === "Quality") {
        return "/5";
    }
    return "";
}

function CourseInfoTile(props) {
    return (
        <div className={stylesCI.tile} style={{background: getColor(props.title, props.val)}}>
            <div className={stylesCI.subtitle}>{props.title}</div>
            <div className={stylesCI.tileText}>{props.val}{extraText(props.title)}</div>
        </div>
    );
}

export default CourseInfoTile;