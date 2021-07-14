import * as React from 'react'
import { HTML } from '../components'

const code = `.form-group.form-success
.form-group.form-error
.form-group.form-warning
`
const code2 = `<form class="form">
  <fieldset class="form-group">
    <label for="username">USERNAME:</label>
    <input id="username" type="text" placeholder="type your name..." class="form-control" />
  </fieldset>
  <fieldset class="form-group">
    <label for="email">EMAIL:</label>
    <input id="email" type="email" placeholder="" class="form-control" />
  </fieldset>
  <fieldset class="form-group">
    <label for="country">COUNTRY:</label>
    <select id="country" class="form-control">
      <option>China</option>
      <option>U.S.</option>
      <option>U.K.</option>
      <option>Japan</option>
    </select>
  </fieldset>
  <fieldset class="form-group form-textarea">
    <label for="message">MESSAGE:</label>
    <textarea id="message" rows="5" class="form-control"></textarea>
  </fieldset>
  <div class="form-actions">
    <button type="button" class="btn btn-primary btn-block">Submit</button>
  </div>
</form>
`

function Form () {
  return <div>
    <h4>Form</h4>
      <form className="form">
        <fieldset className="form-group">
          <label htmlFor="username">USERNAME:</label>
          <input
            id="username"
            type="text"
            placeholder="type your name..."
            className="form-control"
          />
        </fieldset>
        <fieldset className="form-group">
          <label htmlFor="email">EMAIL:</label>
          <input
            id="email"
            type="email"
            placeholder=""
            className="form-control"
          />
        </fieldset>
        <fieldset className="form-group">
          <label htmlFor="country">COUNTRY:</label>
          <select id="country" className="form-control">
            <option>China</option>
            <option>U.S.</option>
            <option>U.K.</option>
            <option>Japan</option>
          </select>
        </fieldset>
        <fieldset className="form-group form-textarea">
          <label
            htmlFor="message">
              MESSAGE:
          </label>
          <textarea
            id="message"
            rows={5}
            className="form-control"
            >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam placeat ratione nisi assumenda quo saepe quasi iste temporibus asperiores. Soluta cupiditate quam at reprehenderit facere. Asperiores nulla rerum earum pariatur.</textarea>
        </fieldset>
        <div className="form-actions">
          <button
            type="button"
            className="btn btn-primary btn-block">
              Submit
          </button>
        </div>
      </form>
      <HTML data={ code2 } />
      <h5>Stateful Form</h5>
      <form className="form">
        <fieldset className="form-group form-success">
          <label htmlFor="username2">USERNAME:</label>
          <input
            id="username2"
            type="text"
            placeholder="type your name..."
            className="form-control"
            />
        </fieldset>
        <fieldset
          className="form-group form-warning"
          >
          <label htmlFor="age">
            AGE:
          </label>
          <input
            id="age"
            type="text"
            placeholder=""
            className="form-control"
            />
        </fieldset>
      </form>
      <HTML data={ code } />
    </div>
}

export {
  Form
}
