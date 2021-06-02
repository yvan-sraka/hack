'use strict'

import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import { ProgressBar, List } from './components'

function ProgressBarSample () {
  let [prcnt, setPrcnt] = useState(0)
  setTimeout(function increment () {
    if (prcnt < 100) {
      setPrcnt(prcnt += 10)
      setTimeout(increment, 1000)
    }
  }, 1000)
  return (<ProgressBar percent={prcnt} />)
}

function ProgressBarSample_WithPercents () {
  let [prcnt, setPrcnt] = useState(0)
  setTimeout(function increment () {
    if (prcnt < 100) {
      setPrcnt(prcnt += 10)
      setTimeout(increment, 1000)
    }
  }, 1000)
  return (<ProgressBar percent={prcnt} show='True' />)
}

function ProgressBarSample_success () {
  let [prcnt, setPrcnt] = useState(0)
  setTimeout(function increment () {
    if (prcnt < 100) {
      setPrcnt(prcnt += 10)
      setTimeout(increment, 1000)
    }
  }, 1000)
  return (<ProgressBar percent={prcnt} show='True' success={prcnt == 100 || undefined} />)
}

function ProgressBarSample_error () {
  let [prcnt, setPrcnt] = useState(0)
  setTimeout(function increment () {
    if (prcnt < 100) {
      setPrcnt(prcnt += 10)
      setTimeout(increment, 1000)
    }
  }, 1000)
  let sccss
  if (prcnt == 100) sccss = false
  return (<ProgressBar percent={prcnt} show='True' success={sccss} />)
}

const mountNode = document.getElementById('app')
ReactDOM.render(
  <div>
    <ProgressBarSample /><br />
    <ProgressBarSample_WithPercents /><br />
    <ProgressBarSample_success /><br />
    <ProgressBarSample_error /><br />
    <List data={[{ value: 'shadock language', next: ['ga', 'bu', 'zo', 'meu'] }, 'one', 'two', 'three']} />
  </div>, mountNode)
