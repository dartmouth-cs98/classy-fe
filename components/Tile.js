import React from 'react'
import getColor from '../pages/courseinfo/colorscheme'
import stylesCI from '../styles/CourseInfo.module.css'

function CourseInfoTile(props) {
    return (
        <div className={stylesCI.tile} style={{background: getColor(props.title, props.val)}}>
            <div className={stylesCI.subtitle}>{props.title}</div>
            <div className={stylesCI.tileText}>{props.val}</div>
        </div>
    );
}

export default CourseInfoTile;