import * as React from 'react'
import { List } from '../components'

function Basic () {
  return <div>
    <h3>Basic</h3>
      <p>Use <code>.container</code> to centralize the main content.</p>
      <p>Use <strong>flexbox</strong> to make layouts.</p>
      <div className="example">
        <div className="grid grid-example">
          <div className="cell -4of12">
            <div className="content">4</div>
          </div>
          <div className="cell -4of12">
            <div className="content">4</div>
          </div>
          <div className="cell -4of12">
            <div className="content">4</div>
          </div>
        </div>
        <div className="grid grid-example">
          <div className="cell -4of12">
            <div className="content">4</div>
          </div>
          <div className="cell -8of12">
            <div className="content">8</div>
          </div>
        </div>
        <div className="grid grid-example">
          <div className="cell">
            <div className="content">1</div>
          </div>
          <div className="cell">
            <div className="content">1</div>
          </div>
          <div className="cell">
            <div className="content">1</div>
          </div>
          <div className="cell">
            <div className="content">1</div>
          </div>
          <div className="cell">
            <div className="content">1</div>
          </div>
          <div className="cell">
            <div className="content">1</div>
          </div>
          <div className="cell">
            <div className="content">1</div>
          </div>
          <div className="cell">
            <div className="content">1</div>
          </div>
          <div className="cell">
            <div className="content">1</div>
          </div>
          <div className="cell">
            <div className="content">1</div>
          </div>
          <div className="cell">
            <div className="content">1</div>
          </div>
          <div className="cell">
            <div className="content">1</div>
          </div>
        </div>
      </div>
      <h4><code>.grid</code> modifiers</h4>
      <List data={[
        {
          value: 'To align items with <strong>align-items</strong>',
          next: [
            '<strong>-top</strong>: To top',
            '<strong>-middle</strong>: To middle',
            '<strong>-bottom</strong>: To bottom',
            '<strong>-stretch</strong>: Stretch items',
            '<strong>-baseline</strong>: To baseline'
          ]
        },
        {
          value: 'To layout contents with <strong>justify-content</strong>',
          next: [
            '<strong>-left</strong>: To left',
            '<strong>-center</strong>: To center',
            '<strong>-right</strong>: To right',
            '<strong>-between</strong>: Add spaces between items',
            '<strong>-around</strong>: Add spaces around items'
          ]
        }
      ]} />
      <h4><code>.cell</code> modifiers</h4>
      <List data={[
        '<strong>-1of12</strong>: Set item width to 8.3% of parent',
        '<strong>-2of12</strong>: Set item width to 16.7% of parent',
        '<strong>-3of12</strong>: Set item width to 25% of parent',
        '<strong>-4of12</strong>: Set item width to 33% of parent',
        '<strong>-5of12</strong>: Set item width to 41.7% of parent',
        '<strong>-6of12</strong>: Set item width to 50% of parent',
        '<strong>-7of12</strong>: Set item width to 58.3% of parent',
        '<strong>-8of12</strong>: Set item width to 66.7% of parent',
        '<strong>-9of12</strong>: Set item width to 75% of parent',
        '<strong>-10of12</strong>: Set item width to 83.3% of parent',
        '<strong>-11of12</strong>: Set item width to 91.7% of parent',
        '<strong>-12of12</strong>: Set item width to 100% of parent'
      ]} />
    </div>
}

export default Basic
