import React from 'react'
import { render } from '@testing-library/react'
import ProductCard01 from './ProductCard01'

describe('ProductCard01 Component', () => {
  test('ProductCard01 renders', () => {
    render(
      <ProductCard01
        displayName=''
        category=''
        imgUrl='https://tailwindui.com/img/flags/flag-canada.svg'
        price={99}
      />,
    )
  })
})
