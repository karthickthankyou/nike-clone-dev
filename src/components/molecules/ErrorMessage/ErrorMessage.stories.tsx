import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import ErrorMessage from './ErrorMessage'

export default {
  title: 'src/components/molecules/ErrorMessage',
  component: ErrorMessage,
} as ComponentMeta<typeof ErrorMessage>

const Template: ComponentStory<typeof ErrorMessage> = (args) => (
  <ErrorMessage {...args} />
)

export const Primary = Template.bind({})
Primary.args = {
  show: false,
  children: 'Sample error message',
}
Primary.parameters = {}
