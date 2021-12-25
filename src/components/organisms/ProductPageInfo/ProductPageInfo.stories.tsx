import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import ProductPageInfo from './ProductPageInfo'

export default {
  title: 'src/components/organisms/ProductPageInfo',
  component: ProductPageInfo,
} as ComponentMeta<typeof ProductPageInfo>

const Template: ComponentStory<typeof ProductPageInfo> = (args) => (
  <ProductPageInfo />
)

export const Primary = Template.bind({})
Primary.args = {}
Primary.parameters = {}
