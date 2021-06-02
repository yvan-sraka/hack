'use strict'

import * as React from 'react'
import { useState } from 'react'
import * as ReactDOM from 'react-dom'
import { ProgressBar, List } from './components'

const ProgressBarSample = () => {
  let [percent, setPercent] = useState(0)
  setTimeout(function increment () {
    if (percent < 100) {
      setPercent(percent += 10)
      setTimeout(increment, 1000)
    }
  }, 1000)
  return (<ProgressBar percent={percent} />)
}

const ProgressBarSampleWithPercents = () => {
  let [percent, setPercent] = useState(0)
  setTimeout(function increment () {
    if (percent < 100) {
      setPercent(percent += 10)
      setTimeout(increment, 1000)
    }
  }, 1000)
  return (<ProgressBar percent={percent} show='True' />)
}

const ProgressBarSampleSuccess = () => {
  let [percent, setPercent] = useState(0)
  setTimeout(function increment () {
    if (percent < 100) {
      setPercent(percent += 10)
      setTimeout(increment, 1000)
    }
  }, 1000)
  return (<ProgressBar percent={percent} show='True' success={percent == 100 || undefined} />)
}

const ProgressBarSampleError = () => {
  let [percent, setPercent] = useState(0)
  setTimeout(function increment () {
    if (percent < 100) {
      setPercent(percent += 10)
      setTimeout(increment, 1000)
    }
  }, 1000)
  let success = true
  if (percent == 100) success = false
  return (<ProgressBar percent={percent} show='True' success={success} />)
}

const mountNode = document.getElementById('app')
ReactDOM.render(
  <div>
    <ProgressBarSample /><br />
    <ProgressBarSampleWithPercents /><br />
    <ProgressBarSampleSuccess /><br />
    <ProgressBarSampleError /><br />
    <List data={[{ value: 'shadock language', next: ['ga', 'bu', 'zo', 'meu'] }, 'one', 'two', 'three']} />
  </div>, mountNode)
