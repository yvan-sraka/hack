import * as React from 'react'
import { HTML } from '../components'

const sampleHtml = `
<div class="card">
  <header class="card-header">title</header>
  <div class="card-content">
    <div class="inner">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita, quas ex vero enim in doloribus officiis ullam vel nam esse sapiente velit incidunt. Eaque quod et, aut maiores excepturi sint.</div>
  </div>
</div>

`

function CardSection () {
  return <div>
      <h4>Card</h4>
      <div className="grid">
        <div className="cell -4of12">
          <div className="card">
            <header className="card-header">title</header>
            <div className="card-body">
              <div className="inner">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Expedita, quas ex vero enim in doloribus officiis ullam vel
                nam esse sapiente velit incidunt. Eaque quod et, aut maiores
                excepturi sint.
              </div>
            </div>
          </div>
        </div>
      </div><pre><code className="lang-html"></code></pre>
      <HTML data={ sampleHtml } />
    </div>
}

export {
  CardSection
}
