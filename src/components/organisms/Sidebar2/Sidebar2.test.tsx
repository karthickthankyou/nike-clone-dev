import React from 'react'
import { render } from '@testing-library/react'
import Sidebar2 from './Sidebar2'

describe('Sidebar2 Component', () => {
  test('Sidebar2 renders', () => {
    render(
      <Sidebar2 open={false} setOpen={() => {}}>
        <div>Hello</div>
      </Sidebar2>
    )
  })
})
