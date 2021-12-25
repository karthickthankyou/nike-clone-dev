import React, { useState } from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Sidebar from './Sidebar'

export default {
  title: 'src/components/organisms/Sidebar',
  component: Sidebar,
} as ComponentMeta<typeof Sidebar>

const Template: ComponentStory<typeof Sidebar> = () => {
  const [open, setOpen] = useState(true)
  return (
    <Sidebar open={open} setOpen={setOpen}>
      <div>Hey</div>
      <div>Hey you</div>
      <div>Its me again.</div>
    </Sidebar>
  )
}

export const Primary = Template.bind({})
Primary.args = {}
Primary.parameters = {}
