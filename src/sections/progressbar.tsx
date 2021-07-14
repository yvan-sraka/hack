import * as React from 'react'
import { HTML, ProgressBar } from '../components'

const sampleHtml = `
<!-- with only an arrow -->
<div class="progress-bar">
  <div class="progress-bar-filled" style="width: 40%"></div>
</div>

<!-- with a percentage showing above the arrow -->
<div class="progress-bar progress-bar-show-percent">
  <div class="progress-bar-filled" style="width: 40%" data-filled="Loading 40%"></div>
</div>
`

function ProgressBarSection () {
  return <div>
      <h4>Progress bar</h4>
      <ProgressBar percent={ 40 }></ProgressBar>
      <HTML data={ sampleHtml } />
    </div>
}

export {
  ProgressBarSection
}
