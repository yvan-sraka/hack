import * as React from 'react'
import { HTML } from '../components'

const sampleHtml = `
<div class="alert alert-success">Success message</div>
<div class="alert alert-info">Info message</div>
<div class="alert alert-warning">Warning message</div>
<div class="alert alert-error">Error message</div>
`

function Alert () {
  return <div>
      <h4>Alerts</h4>
      <div className="example">
        <div className="alert alert-success">Success message</div>
        <div className="alert alert-info">Info message</div>
        <div className="alert alert-warning">Warning message</div>
        <div className="alert alert-error">Error message</div>
      </div>
      <HTML data={ sampleHtml } />
    </div>
}

export {
  Alert
}
