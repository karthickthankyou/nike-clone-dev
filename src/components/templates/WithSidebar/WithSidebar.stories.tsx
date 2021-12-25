import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Accordion from 'src/components/molecules/Accordion'
import ProductCard01 from 'src/components/organisms/ProductCard01'
import WithSidebar from './WithSidebar'

export default {
  title: 'src/components/templates/WithSidebar',
  component: WithSidebar,
} as ComponentMeta<typeof WithSidebar>

const Template: ComponentStory<typeof WithSidebar> = (args) => (
  <div className='container mx-auto'>
    <div className='z-40'>Hello World</div>

    <WithSidebar {...args} />

    <div className='my-64'>Hello World</div>
    <div className='my-64'>Hello World</div>
    <WithSidebar {...args} />
    <div className='my-64'>Hello World</div>
  </div>
)

export const Primary = Template.bind({})
Primary.args = {
  SidebarComponent: <Accordion />,
  heading: 'Featured',
  children: [
    <ProductCard01
      category='Shoes'
      key='Air Jordan 1 Mid'
      displayName='Air Jordan 1 Mid'
      imgUrl='https://tailwindui.com/img/flags/flag-canada.svg'
      price={9995}
    />,
    <ProductCard01
      category='Shoes'
      key='Air Jordan 1 Mid 2'
      displayName='Air Jordan 1 Mid'
      imgUrl='https://tailwindui.com/img/flags/flag-canada.svg'
      price={9995}
    />,
    <ProductCard01
      category='Shoes'
      key='Air Jordan 1 Mid 2'
      displayName='Air Jordan 1 Mid'
      imgUrl='https://tailwindui.com/img/flags/flag-canada.svg'
      price={9995}
    />,
    <ProductCard01
      category='Shoes'
      key='Air Jordan 1 Mid 2'
      displayName='Air Jordan 1 Mid'
      imgUrl='https://tailwindui.com/img/flags/flag-canada.svg'
      price={9995}
    />,
    <ProductCard01
      category='Shoes'
      key='Air Jordan 1 Mid 2'
      displayName='Air Jordan 1 Mid'
      imgUrl='https://tailwindui.com/img/flags/flag-canada.svg'
      price={9995}
    />,
    <ProductCard01
      category='Shoes'
      key='Air Jordan 1 Mid 2'
      displayName='Air Jordan 1 Mid'
      imgUrl='https://tailwindui.com/img/flags/flag-canada.svg'
      price={9995}
    />,
    <ProductCard01
      category='Shoes'
      key='Air Jordan 1 Mid 2'
      displayName='Air Jordan 1 Mid'
      imgUrl='https://tailwindui.com/img/flags/flag-canada.svg'
      price={9995}
    />,
    <ProductCard01
      category='Shoes'
      key='Air Jordan 1 Mid 2'
      displayName='Air Jordan 1 Mid'
      imgUrl='https://tailwindui.com/img/flags/flag-canada.svg'
      price={9995}
    />,
    <ProductCard01
      category='Shoes'
      key='Air Jordan 1 Mid 2'
      displayName='Air Jordan 1 Mid'
      imgUrl='https://tailwindui.com/img/flags/flag-canada.svg'
      price={9995}
    />,
    <ProductCard01
      category='Shoes'
      key='Air Jordan 1 Mid 2'
      displayName='Air Jordan 1 Mid'
      imgUrl='https://tailwindui.com/img/flags/flag-canada.svg'
      price={9995}
    />,
    <ProductCard01
      category='Shoes'
      key='Air Jordan 1 Mid 2'
      displayName='Air Jordan 1 Mid'
      imgUrl='https://tailwindui.com/img/flags/flag-canada.svg'
      price={9995}
    />,
  ],
}
Primary.parameters = {}
