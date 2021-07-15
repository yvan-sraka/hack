import * as React from 'react'
import { HTML } from '../components'

const codeHtml = `
<!-- required in all modes -->;
<link rel="stylesheet" href="/path/to/rstrtt.css">

<!-- markdown mode -->;
<body class="rstrtt"></body>

<!-- standard mode -->;
<link rel="stylesheet" href="/path/to/standard.css">
<body class="rstrtt standard"></body>

<!-- dark mode -->;
<link rel="stylesheet" href="/path/to/dark.css">
<body class="rstrtt dark"></body>
`

export default function UseCase () {
  return <div>
    <h2>Use cases</h2>
    <p>
      hack.css is
      <strong>perfect</strong>
      for the homepage of your open-source projects!
      happy <HTML data="<coding>" /> !</p>
    <h2>How to use?</h2>
    <p>
      Install via npm by running
      <code>npm install -S hack</code>
      and load it with your preferred pre-processor.
    </p>
    <p>You can also simply hot-link the url of the css file.</p>
    <p>The last step is to add the <code>.hack</code> class to your body element.</p>
    <HTML data={codeHtml} />
  </div>
}
