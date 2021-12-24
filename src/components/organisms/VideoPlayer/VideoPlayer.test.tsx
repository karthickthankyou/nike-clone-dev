import React from 'react'
import { render } from '@testing-library/react'
import VideoPlayer from './VideoPlayer'

describe('VideoPlayer Component', () => {
  test('VideoPlayer renders', () => {
    render(<VideoPlayer />)
  })
})
