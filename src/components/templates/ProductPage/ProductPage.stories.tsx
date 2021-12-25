import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import ProductPage from './ProductPage'

export default {
  title: 'src/components/templates/ProductPage',
  component: ProductPage,
} as ComponentMeta<typeof ProductPage>

const Template: ComponentStory<typeof ProductPage> = (args) => (
  <div className='container mx-auto'>
    <ProductPage />
  </div>
)

export const Primary = Template.bind({})
Primary.args = {}
Primary.parameters = {}
