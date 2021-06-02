'use strict'

import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { List } from '.'

// # Test all ristretto react components

// ## Test List component

test('test list simple', async () => {
  render(<List data={['one', 'two', 'three']} />)
  expect(screen.getByRole('list')).toContainHTML(
    '<ul> <li>one</li><li>two</li><li>three</li></ul>')
})

test('test list with a list', async () => {
  render(<List data={[{ value: 'foo', next: ['sub foo', 'sub bar', 'sub baz'] }, 'bar', 'baz']} />)
  expect(screen.getAllByRole('list')[0]).toContainHTML(
    '<ul> <li>foo<ul> <li>sub foo</li><li>sub bar</li><li>sub baz</li></ul></li><li>bar</li><li>baz</li></ul>')
})

test('test list with a list with otpions', async () => {
  const data = [{ name: 'foo', childs: ['sub foo', 'sub bar', 'sub baz'] }, 'bar', 'baz']
  render(<List data={data} options={{ value: 'name', next: 'childs' }} />)
  expect(screen.getAllByRole('list')[0]).toContainHTML(
    '<ul> <li>foo<ul> <li>sub foo</li><li>sub bar</li><li>sub baz</li></ul></li><li>bar</li><li>baz</li></ul>')
})
