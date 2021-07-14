import * as React from 'react'
import { HTML } from '../components'

const sampleHtml = `
<div class="menu">
   <a class="menu-item">
     item #1 <div class="pull-right">»</div>
   </a>
   <a class="menu-item active">
     item #2 <div class="pull-right">»</div>
   </a>
   <a class="menu-item">
     item #3 <div class="pull-right">»</div>
   </a>
 </div>
`

function Menu () {
  return <div>
      <h4>Menu</h4>
      <div className="example">
        <div className="grid">
          <div className="cell -3of12">
            <div className="menu">
              <a className="menu-item">
                item #1
                <div className="pull-right">
                  &#xbb;
                </div>
              </a>
              <a className="menu-item active">
                item #2
                <div className="pull-right">
                  &#xbb;
                </div>
              </a>
              <a className="menu-item">
                item #3
                <div className="pull-right">
                  &#xbb;
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
      <HTML data={ sampleHtml } />
    </div>
}

export {
  Menu
}
