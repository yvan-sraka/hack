'use strict'

import * as React from 'react'
import '../css/rstrtt.css'

// eslint-disable-next-line react/prop-types
const BlockQuote = ({ children }) => {
  return !children ? null : <blockquote>{children}</blockquote>
}

export default BlockQuote
