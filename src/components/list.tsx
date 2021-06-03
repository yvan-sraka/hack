'use strict'

import * as React from 'react'
import '../css/rstrtt.css'

const List = props => {
  const { data, options } = props
  if (data === undefined || data == null) return null
  let [value, next] = ['value', 'next']
  if (options !== undefined) {
    value = options.value
    next = options.next
  }
  let key = 0
  const list = values => {
    if (values == null || !Array.isArray(values)) { return null }
    return (
      <ul key={key++}> {values.map(item => {
        return typeof item === 'string'
          ? <li key={key++}>{item}</li>
          : <li key={key++}>{item[value]}{list(item[next])}</li>
      })}
      </ul>
    )
  }
  return list(data)
}

export default List
