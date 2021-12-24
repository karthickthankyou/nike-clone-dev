import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import BannerItems from './BannerItems'

export default {
  title: 'templates/BannerItems',
  component: BannerItems,
} as ComponentMeta<typeof BannerItems>

const Template: ComponentStory<typeof BannerItems> = () => (
  <BannerItems className='max-w-md text-center'>
    <BannerItems.Text color='black' variant='description'>
      Lorem ipsum amet
    </BannerItems.Text>
    <BannerItems.Text color='black' variant='displayText' className='uppercase'>
      Lorem ipsum dolor sit.
    </BannerItems.Text>
    <BannerItems.Text color='black' className='mt-4'>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
    </BannerItems.Text>
    <BannerItems.Button variant='black' className='inline-block mt-4' href='/'>
      Hello
    </BannerItems.Button>
  </BannerItems>
)

export const Primary = Template.bind({})
Primary.args = {}
Primary.parameters = {}
