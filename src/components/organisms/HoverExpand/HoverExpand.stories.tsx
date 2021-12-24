import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import HoverExpand from './HoverExpand'

export default {
  title: 'src/components/organisms/HoverExpand',
  component: HoverExpand,
} as ComponentMeta<typeof HoverExpand>

const Template: ComponentStory<typeof HoverExpand> = () => <HoverExpand />

export const Primary = Template.bind({})
Primary.args = {}
Primary.parameters = {}
