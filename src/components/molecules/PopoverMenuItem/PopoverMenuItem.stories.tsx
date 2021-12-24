import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import PopoverParent, {
  PopoverButton,
  PopoverOverlay,
  PopoverPanel,
} from './PopoverMenuItem'

export default {
  title: 'molecules/PopoverMenuItem',
  component: PopoverParent,
} as ComponentMeta<typeof PopoverParent>

const Template: ComponentStory<typeof PopoverParent> = () => (
  <div className='relative'>
    <PopoverParent>
      <PopoverButton>Hello</PopoverButton>
      <PopoverOverlay />
      <PopoverPanel>Helo World</PopoverPanel>
    </PopoverParent>
  </div>
)

export const Primary = Template.bind({})
Primary.args = {}
Primary.parameters = {}
