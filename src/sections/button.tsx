import * as React from 'react'
import { HTML } from '../components'

const sampleHtml = `<button class="btn btn-default">Default</button>
<button class="btn btn-primary">Primary</button>
<button class="btn btn-success">Success</button>
<button class="btn btn-info">Info</button>
<button class="btn btn-warning">Warning</button>
<button class="btn btn-error">Error</button>
<button class="btn btn-primary btn-ghost">Ghost Button</button>
<button class="btn btn-primary btn-block">Block Level Button</button>
`

function ButtonSection () {
  return <div>
      <h4>Buttons</h4>
      <div className="example">
        <button className="btn btn-default">Default</button>
        <button className="btn btn-primary">Primary</button>
        <button className="btn btn-success">Success</button>
        <button className="btn btn-info">Info</button>
        <button className="btn btn-warning">Warning</button>
        <button className="btn btn-error">Error</button>
      </div>
      <div className="example">
        <button className="btn btn-default btn-ghost">Default Ghost</button>
        <button className="btn btn-primary btn-ghost">Primary Ghost</button>
        <button className="btn btn-success btn-ghost">Success Ghost</button>
        <button className="btn btn-info btn-ghost">Info Ghost</button>
        <button className="btn btn-warning btn-ghost">Warning Ghost</button>
        <button className="btn btn-error btn-ghost">Error Ghost</button>
      </div>
      <div className="example">
        <button className="btn btn-primary btn-block btn-ghost">Block Level Button</button>
      </div>
      <HTML data={ sampleHtml } />
    </div>
}

export {
  ButtonSection
}
