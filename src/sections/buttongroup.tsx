import * as React from 'react'
import { HTML } from '../components'

const sampleHtml = `
<div class="btn-group">
  <button class="btn btn-success btn-ghost">Left</button>
  <button class="btn btn-success btn-ghost">Middle</button>
  <button class="btn btn-success btn-ghost">Right</button>
</div>
`

function ButtonGroupSection () {
  return <div>
      <h4>Button group</h4>
      <div className="example">
        <div className="btn-group">
          <button className="btn btn-success btn-ghost">Left</button>
          <button className="btn btn-success btn-ghost">Middle</button>
          <button className="btn btn-success btn-ghost">Right</button>
        </div>
      </div>
      <HTML data={ sampleHtml } />
    </div>
}

export {
  ButtonGroupSection
}
