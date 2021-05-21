"use strict"

import React from 'react';
import './css/rstrtt.css';

function ProgressBar(props) {
    const classname = {
        undefined: 'progress-bar',
        false: 'progress-bar',
        true: 'progress-bar-show-percent'
    }[props['showPercent']];
    let stl = {width: props.percent+"%"};
    let dtflld = `Loading ${props.percent}%`;
    return (<div className={classname}><div className="progress-bar-filled" style={stl} data-filled={dtflld}/></div>)
}

export default ProgressBar;