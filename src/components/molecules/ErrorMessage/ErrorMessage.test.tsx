import React from 'react'
import { render } from '@testing-library/react'
import ErrorMessage from './ErrorMessage'

describe('ErrorMessage Component', () => {
  test('ErrorMessage renders', () => {
    render(<ErrorMessage show={false}>This is error message.</ErrorMessage>)
  })
})
