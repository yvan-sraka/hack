'use strict'

import * as React from 'react'
import '../css/rstrtt.css'

const BlockQuote = props => {
  if (!props.data) return null
  return (<blockquote>{props.data}</blockquote>)
}

export default BlockQuote
