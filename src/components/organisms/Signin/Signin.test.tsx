import React from 'react'
import { render } from '@testing-library/react'
import Signin from './Signin'

describe('Signin Component', () => {
  test('Signin renders', () => {
    render(<Signin open setOpen={() => {}} />)
  })
})
