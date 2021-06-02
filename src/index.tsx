'use strict'

import * as React from 'react'
import { useState } from 'react'
import * as ReactDOM from 'react-dom'
import { ProgressBar, List, Button } from './components'

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
  <div className="container">
    <ProgressBarSample /><br />
    <ProgressBarSampleWithPercents /><br />
    <ProgressBarSampleSuccess /><br />
    <ProgressBarSampleError /><br />
    <List data={[{ value: 'shadock language', next: ['ga', 'bu', 'zo', 'meu'] }, 'one', 'two', 'three']} />
    <br />
    <h2> Buttons</h2>
    <p>
      <Button />
      <Button type="primary"/>
      <Button type="success"/>
      <Button type="info"/>
      <Button type="warning"/>
      <Button type="error"/>
    </p>
    <p>
      <Button type="btn-ghost" />
      <Button type="primary-ghost" />
      <Button type="success-ghost" />
      <Button type="info-ghost" />
      <Button type="warning-ghost" />
      <Button type="error-ghost" />
    </p>
    <p>
      <Button type="block" />
    </p>
    {/* TODO: add code */}
    {/* <pre>
      <code  className="lang-html">
        &lt;button className=&quot;btn btn-default&quot;/&gt;
        &lt;button className=&quot;btn btn-primary&quot;/&gt;
        &lt;button className=&quot;btn btn-success&quot;/&gt;
        &lt;button className=&quot;btn btn-info&quot;/&gt;
        &lt;button className=&quot;btn btn-warning&quot;/&gt;
        &lt;button className=&quot;btn btn-error&quot;/&gt;

        &lt;button className=&quot;btn btn-primary btn-ghost&quot;&gt;Ghost Button/&gt;

        &lt;button className=&quot;btn btn-primary btn-block&quot;&gt;Block Level Button/&gt;
      </code>
    </pre> */}
  </div>, mountNode)
