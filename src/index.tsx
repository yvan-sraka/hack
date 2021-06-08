'use strict'

import * as React from 'react'
import './css/rstrtt.css'
// import { useState } from 'react'
import * as ReactDOM from 'react-dom'
import { List, BlockQuote } from './components'

const mountNode = document.getElementById('app')
const quote = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates quis cumque similique voluptas facilis fugit inventore odit, quidem et ab, quos, blanditiis iure! Ipsum nostrum corrupti architecto fugit, culpa expedita.'
ReactDOM.render(
  <div className="main container">
    <h1>hack.css - dead simple css framework</h1>
    <p>As you can see, this website is proudly built using hack.css.</p>
    <div className="alert alert-info">New!
      <a href="https://cppccn.github.io/rstrtt/dark.html">dark</a>,
      <a href="https://cppccn.github.io/rstrtt/dark-grey.html">dark-grey</a>,
      <a href="https://cppccn.github.io/rstrtt/solarized-dark.html">solarized-dark</a> and
      <a href="https://cppccn.github.io/rstrtt/standard.html">standard</a> modes are now available!
    </div>
    <script async type="text/javascript"
      src="https://cdn.carbonads.com/carbon.js?zoneid=1673&amp;serve=C6AILKT&amp;placement=hackcsscom"
      id="_carbonads_js"/>
    <h2>About</h2>
      <p>Many hackers enjoy the readability of markdown code, some stylings in hack.css are exactly the way markdown is.</p>
      <List data={['conquer the world', 'rule the web', 'copy the code']} />
      <h4>Blockquote</h4>
      <BlockQuote data={quote} />
  </div>
  , mountNode)
