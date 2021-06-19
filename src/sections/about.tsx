import * as React from 'react'
import { List } from '../components'

function About () {
  return <div>
    <h2>About</h2>
      <p>
        Many hackers enjoy the readability of markdown
        code, some stylings in hack.css are exactly the
        way markdown is.
      </p>
      <List
        data={[
          'conquer the world',
          'rule the web',
          'copy the code'
        ]} />
      <p>
        <a
          target="_blank" rel="noreferrer"
          href="https://daringfireball.net/projects/markdown/">
            kinda cool, huh?
        </a>
      </p>
      <p>hack.css is inspired by
        <a href="https://github.com/mrcoles/markdown-css"
        rel="noreferrer"
        target="_blank">
          markdown.css
        </a> and
        <a href="http://zeit.co"
        rel="noreferrer"
        target="_blank">
          zeit.co
        </a>
      </p>
    </div>
}

export {
  About
}
