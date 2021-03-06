'use strict'

import * as React from 'react'
import './css/rstrtt.css'
import * as ReactDOM from 'react-dom'
import * as sections from './sections/index'

const mountNode = document.getElementById('app')
ReactDOM.render(
  <div className="main container">
    <h1>hack.css - dead simple css framework</h1>
    <sections.AlertInfo />
    <p>As you can see, this website is proudly built using hack.css.</p>
    <script async type="text/javascript"
      src="https://cdn.carbonads.com/carbon.js?zoneid=1673&amp;serve=C6AILKT&amp;placement=hackcsscom"
      id="_carbonads_js"/>
    <sections.About />
    <sections.UseCase />
    <sections.Basic />
    <sections.ListDocumentation />
    <sections.Form />
    <sections.Help />
    <sections.Table />
    <sections.ProgressBarSection />
    <sections.ButtonSection />
    <sections.ButtonGroupSection />
    <sections.CardSection />
    <sections.Alert />
    <sections.Media />
    <sections.Loading />
    <footer className="footer">Version 0.8.0 Build 1490883343</footer>
  </div>
  , mountNode)
