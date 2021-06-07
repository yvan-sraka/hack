'use strict'

import * as React from 'react'
import '../css/rstrtt.css'

const BlockQuote = (props: { data: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined }) => {
  return !props.data ? null : <blockquote>{props.data}</blockquote>
}

export default BlockQuote
