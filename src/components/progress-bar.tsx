'use strict'

import React from 'react'
import '../css/rstrtt.css'

const ProgressBar = (props: { showPercent?: string | number, success?: string | number | boolean, percent: number }) => {
  const classname = {
    undefined: 'progress-bar',
    false: 'progress-bar',
    true: 'progress-bar-show-percent'
  }[props.showPercent !== undefined ? props.showPercent : 'undefined']
  const classbarfilled = {
    undefined: 'progress-bar-filled',
    false: 'progress-bar-filled-error',
    true: 'progress-bar-filled-success'
  }[props.success !== undefined ? props.success.toString() : 'undefined']
  const style = { width: props.percent + '%' }
  const dataFilled = `Loading ${props.percent}%`
  return (<div className={classname}><div className={classbarfilled} style={style} data-filled={dataFilled} /></div>)
}

export default ProgressBar
