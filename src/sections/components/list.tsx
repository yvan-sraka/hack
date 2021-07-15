import * as React from 'react'
import { BlockQuote, HTML, List } from '../../components'

const htmlSample = `
<ul>
  <li>foo
    <ul>
      <li>sub foo</li>
      <li>sub bar</li>
      <li>sub baz</li>
    </ul>
  </li>
  <li>bar</li>
  <li>baz</li>
</ul>
`
const reactSample = `
<List data={[{
  value: 'foo',
  next: [
    'sub foo',
    'sub bar',
    'sub baz'
  ]
},
'bar',
'baz'
]} />
`

function ListDocumentation () {
  return <div>
    <h3>List</h3>
    <List data={[{
      value: 'foo',
      next: [
        'sub foo',
        'sub bar',
        'sub baz'
      ]
    },
    'bar',
    'baz'
    ]} />
    In html you can write:{'\n'}
    <HTML data={htmlSample} />
    Or in react you can write:{'\n'}
    <HTML data={reactSample} />
    <BlockQuote>
      You can change the *value* and *next* key
      to adapt to your code
    </BlockQuote>
    </div>
}

export default ListDocumentation
