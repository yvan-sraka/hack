'use strict'

import React from 'react'
import '../css/rstrtt.css'

function ProgressBar (props) {
  const classname = {
    undefined: 'progress-bar',
    false: 'progress-bar',
    true: 'progress-bar-show-percent'
  }[props.showPercent]
  const classbarfilled = {
    undefined: 'progress-bar-filled',
    false: 'progress-bar-filled-error',
    true: 'progress-bar-filled-success'
  }[props.success]
  const stl = { width: props.percent + '%' }
  const dtflld = `Loading ${props.percent}%`
  return (<div className={classname}><div className={classbarfilled} style={stl} data-filled={dtflld} /></div>)
}

export default ProgressBar
