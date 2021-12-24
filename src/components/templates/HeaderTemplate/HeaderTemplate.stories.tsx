import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import HeaderTemplate from './HeaderTemplate'

export default {
  title: 'templates/HeaderTemplate',
  component: HeaderTemplate,
} as ComponentMeta<typeof HeaderTemplate>

const Template: ComponentStory<typeof HeaderTemplate> = (args) => (
  <HeaderTemplate {...args} />
)

export const Primary = Template.bind({})
Primary.args = {
  heading: 'Featured',
  children: (
    <div className='flex items-center justify-center w-full p-2 bg-gray-100 border-2 border-gray-500 border-dashed rounded-lg h-96'>
      <p className='italic text-gray-500'>Any content goes inside here.</p>
    </div>
  ),
}
Primary.parameters = {}
