import React from 'react'
import getColor from '../pages/courseinfo/colorscheme'
import stylesCI from '../styles/CourseInfo.module.css'

function OfferedTile(props) {
    return (
        <div className={stylesCI.tile} style={{background: getColor("term", props.term)}}>
            <div className={stylesCI.tileText}>{props.instructors}</div>
            <div className={stylesCI.tileText}>{props.term} ({props.period})</div>
        </div>
    );
}

export default OfferedTile;