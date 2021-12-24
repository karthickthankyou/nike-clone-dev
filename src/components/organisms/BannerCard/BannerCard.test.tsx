import React from 'react'
import { render } from '@testing-library/react'
import BannerCard from './BannerCard'

describe('BannerCard Component', () => {
  test('BannerCard renders', () => {
    render(<BannerCard imgSrc='/' />)
  })
})
