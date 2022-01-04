import React from 'react'
import { render } from '@testing-library/react'
import HeaderTemplate from './HeaderTemplate'

describe('HeaderTemplate Component', () => {
  test('HeaderTemplate renders', () => {
    render(
      <HeaderTemplate heading='Featured'>
        <div>Hello World</div>
      </HeaderTemplate>,
    )
  })
})
