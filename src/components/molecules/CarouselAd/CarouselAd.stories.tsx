import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import CarouselAd from './CarouselAd'

export default {
  title: 'molecules/CarouselAd',
  component: CarouselAd,
} as ComponentMeta<typeof CarouselAd>

const Template: ComponentStory<typeof CarouselAd> = () => <CarouselAd />

export const Primary = Template.bind({})
Primary.args = {}
Primary.parameters = {}
