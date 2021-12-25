import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import ProductList from './ProductList'

export default {
  title: 'src/components/templates/ProductList',
  component: ProductList,
} as ComponentMeta<typeof ProductList>

const Template: ComponentStory<typeof ProductList> = () => <ProductList />

export const Primary = Template.bind({})
Primary.args = {}
Primary.parameters = {}
