'use strict'

import * as React from 'react'
import '../css/rstrtt.css'

const ProgressBar = props => {
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
  const style = { width: props.percent + '%' }
  const dataFilled = `Loading ${props.percent}%`
  return (<div className={classname}><div className={classbarfilled} style={style} data-filled={dataFilled} /></div>)
}

export default ProgressBar
