import * as React from 'react'
import { HTML } from '../components'

const sampleHtml = `
<table>
  <thead>
    <tr>
      <th>editor</th>
      <th>speed</th>
      <th>extension</th>
      <th>interface</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>sublime</td>
      <td>90</td>
      <td>80</td>
      <td>70</td>
    </tr>
    <tr>
      <td>atom</td>
      <td>60</td>
      <td>85</td>
      <td>80</td>
    </tr>
    <tr>
      <td>vscode</td>
      <td>80</td>
      <td>65</td>
      <td>60</td>
    </tr>
  </tbody>
</table>
`

function Table () {
  return <div>
        <h4>Table</h4>
        <table>
          <thead>
            <tr>
              <th>editor</th>
              <th>speed</th>
              <th>extension</th>
              <th>interface</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>sublime</td>
              <td>90</td>
              <td>80</td>
              <td>70</td>
            </tr>
            <tr>
              <td>atom</td>
              <td>60</td>
              <td>85</td>
              <td>80</td>
            </tr>
            <tr>
              <td>vscode</td>
              <td>80</td>
              <td>65</td>
              <td>60</td>
            </tr>
          </tbody>
        </table>
      <HTML data={ sampleHtml } />
    </div>
}

export {
  Table
}
