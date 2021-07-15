import * as React from 'react'
import { HTML } from '../components'

const sampleHtml = `
<!-- left align -->
<div class="media">
  <div class="media-left">
    <div class="avatarholder">e</div>
  </div>
  <div class="media-body">
    <div class="media-heading">EGOIST @egoist</div>
    <div class="media-content">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga vel, voluptates, doloremque nesciunt illum est corrupti nostrum expedita adipisci dicta vitae? Eveniet maxime quibusdam modi molestias alias et incidunt est.</div>
  </div>
</div>

<!-- right align -->
<div class="media">
  <div class="media-body">
    <div class="media-heading">EGOIST @egoist</div>
    <div class="media-content">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga vel, voluptates, doloremque nesciunt illum est corrupti nostrum expedita adipisci dicta vitae? Eveniet maxime quibusdam modi molestias alias et incidunt est.</div>
  </div>
  <div class="media-right">
    <div class="avatarholder">e</div>
  </div>
</div>
`

function Media () {
  return <div>
      <h4>Media</h4>
      <p>This is useful if you intend to display a list of items, like the Twitter timeline.</p>
      <div className="example">
        <div className="media">
          <div className="media-left">
            <div className="avatarholder">e</div>
          </div>
          <div className="media-body">
            <div className="media-heading">EGOIST @egoist</div>
            <div className="media-content">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Fuga vel, voluptates, doloremque nesciunt illum est corrupti
              nostrum expedita adipisci dicta vitae? Eveniet maxime quibusdam
              modi molestias alias et incidunt est.
            </div>
          </div>
        </div>
      </div>
      <div className="media">
        <div className="media-body">
          <div className="media-heading">EGOIST @egoist</div>
          <div className="media-content">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Fuga vel, voluptates, doloremque nesciunt illum est corrupti
              nostrum expedita adipisci dicta vitae? Eveniet maxime quibusdam
              modi molestias alias et incidunt est.
            </div>
        </div>
        <div className="media-right">
          <div className="avatarholder">e</div>
        </div>
      </div>
      <HTML data={ sampleHtml } />
    </div>
}

export {
  Media
}
