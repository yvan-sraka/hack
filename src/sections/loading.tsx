import * as React from 'react'
import { HTML } from '../components'

const sampleHtml = `
<div class="loading"></div>

<button class="btn btn-info btn-ghost">
  Loading&amp;hellip;
  <span class="loading"></span>
</button>

<div class="alert alert-info">
  <span class="loading"></span>
  Loading in an alert box&amp;hellip;
</div>
`

function Loading () {
  return <div>
      <h4> Loading</h4>
      <p>hack.css gives you a default loading element, but you can find more at <a href="https://www.pexels.com/blog/css-only-loaders/">CSS-only loaders</a>.</p>
      <div className="example">
        <div className="loading"></div>
      </div>
      <div className="example">
        <button className="btn btn-info btn-ghost">Loading&hellip;<span className="loading"></span></button>
      </div>
      <div className="example">
        <div className="alert alert-info"><span className="loading"></span>Loading in an alert box&hellip;</div>
      </div>
      <HTML data={ sampleHtml } />
    </div>
}

export {
  Loading
}
