import React from 'react'
import { render } from '@testing-library/react'
import Accordion from 'src/components/molecules/Accordion'
import WithSidebar from './WithSidebar'

describe('WithSidebar Component', () => {
  test('WithSidebar renders', () => {
    render(
      <WithSidebar SidebarComponent={<Accordion />} heading='Featured'>
        <div>Hello</div>
      </WithSidebar>,
    )
  })
})
