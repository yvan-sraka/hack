'use strict'

import * as React from 'react'
import '../css/rstrtt.css'

const Button = props => {
  const { type } = props
  switch (type) {
    case "primary": return <div className="btn btn-primary">Primary</div>
    case "success": return <div className="btn btn-success">Success</div>
    case "info": return <div className="btn btn-info">Info</div>
    case "warning": return <div className="btn btn-warning">Warning</div>
    case "error": return <div className="btn btn-error">Error</div>
    case "block": return <div className="btn btn-primary btn-block">Block Level Button</div>
    case "btn-ghost": return <div className="btn btn-default btn-ghost">Default Ghost</div>
    case "primary-ghost": return <div className="btn btn-primary btn-ghost">Primary Ghost</div>
    case "success-ghost": return <div className="btn btn-success btn-ghost">Success Ghost</div>
    case "info-ghost": return <div className="btn btn-info btn-ghost">Info Ghost</div>
    case "warning-ghost": return <div className="btn btn-warning btn-ghost">Warning Ghost</div>
    case "error-ghost": return <div className="btn btn-error btn-ghost">Error Ghost</div>
    default: return <div className="btn btn-default">Default</div>
  }
}

export default Button
