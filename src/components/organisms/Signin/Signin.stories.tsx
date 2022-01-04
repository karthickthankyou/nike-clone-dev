import React, { useState } from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Signin from './Signin'

export default {
  title: 'organisms/Signin',
  component: Signin,
} as ComponentMeta<typeof Signin>

const Template: ComponentStory<typeof Signin> = () => {
  const [state, setstate] = useState(true)
  return <Signin open={state} setOpen={setstate} />
}

export const Primary = Template.bind({})
Primary.args = {}
Primary.parameters = {}
