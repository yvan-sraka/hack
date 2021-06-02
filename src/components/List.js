'use strict'

import React from 'react'
import '../css/rstrtt.css'

function List (props) {
  const { data, options } = props
  if (data === undefined || data == null) return null
  let [value, next] = ['value', 'next']
  if (options !== undefined) {
    value = options.value
    next = options.next
  }
  let key = 0
  function l (v) {
    if (v == null || !Array.isArray(v)) { return null }
    return (
      <ul key={key++}> {v.map(a => {
        return typeof a === 'string'
          ? <li key={key++}>{a}</li>
          : <li key={key++}>{a[value]}{l(a[next])}</li>
      })}
      </ul>
    )
  };
  return l(data)
}

export default List
