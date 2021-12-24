import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import VideoPlayer from './VideoPlayer'

export default {
  title: 'src/components/organisms/VideoPlayer',
  component: VideoPlayer,
} as ComponentMeta<typeof VideoPlayer>

const Template: ComponentStory<typeof VideoPlayer> = (args) => <VideoPlayer />

export const Primary = Template.bind({})
Primary.args = {}
Primary.parameters = {}
