import React from 'react'
import { render } from '@testing-library/react'
import ProductList from './ProductList'

describe('ProductList Component', () => {
  test('ProductList renders', () => {
    render(<ProductList />)
  })
})
