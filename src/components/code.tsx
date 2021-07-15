import * as React from 'react'

function Code (props: {lang: string, data: string}) {
  return <code className={props.lang}>
    {props.data}
  </code>
}

function HTML (props: {data: string}) {
  return <pre className="lang-html">
    <code className="lang-html">
      {props.data}
    </code>
  </pre>
}

export {
  Code,
  HTML
}
