import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import ProductCard01 from './ProductCard01'

export default {
  title: 'src/components/organisms/ProductCard01',
  component: ProductCard01,
} as ComponentMeta<typeof ProductCard01>

const Template: ComponentStory<typeof ProductCard01> = (args) => (
  <ProductCard01 {...args} />
)

export const Primary = Template.bind({})
Primary.args = {
  displayName: 'Air Jordan 1 Mid',
  price: 9995,
  category: 'Shoes',
}
Primary.parameters = {}
