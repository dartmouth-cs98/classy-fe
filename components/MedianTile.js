import React from 'react'
import getColor from '../pages/courseinfo/colorscheme'
import stylesCI from '../styles/CourseInfo.module.css'

function MedianTile(props) {
    const terms = {
        'f': 'Fall',
        'w': 'Winter',
        's': 'Spring',
        'x': 'Summer'
    }
    const year = "20" + props.term.substring(0, 2);
    const term = terms[props.term[2]];
    return (
        <div className={stylesCI.medianTile} style={{background: getColor("median", props.median)}}>
            <div className={stylesCI.tileText}>{props.median}</div>
            <div className={stylesCI.tileText}>{term} {year}</div>
        </div>
    );
}

export default MedianTile;