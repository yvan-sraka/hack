import * as React from 'react'
import { HTML } from '../components'

const sampleHtml = `
<fieldset class="form-group form-success">
  <label for="phone">Phone Number:</label>
  <input id="phone" type="text" placeholder="" class="form-control" />
  <div class="help-block">In this format: +86 xxx xxx xxxxx</div>
</fieldset>
`

function Help () {
  return <div>
      <h5>Help Block</h5>
      <form className="form">
        <fieldset className="form-group form-success">
          <label htmlFor="phone">Phone Number:</label>
          <input id="phone" type="text" value="+86 180 800 8000" placeholder="" className="form-control" />
          <div className="help-block">In this format: +86 xxx xxx xxxxx</div>
        </fieldset>
        <fieldset className="form-group form-error">
          <label htmlFor="email3">EMAIL:</label>
          <input id="email3" type="email" placeholder="" className="form-control" />
        </fieldset>
      </form>
      <HTML data={ sampleHtml } />
    </div>
}

export {
  Help
}
