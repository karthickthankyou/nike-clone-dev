import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import BannerCard from './BannerCard'

export default {
  title: 'organisms/BannerCard',
  component: BannerCard,
} as ComponentMeta<typeof BannerCard>

const Template: ComponentStory<typeof BannerCard> = ({ imgSrc }) => (
  <BannerCard imgSrc={imgSrc}>
    <BannerCard.Text variant='displayText'>
      NIKE YOGA COLLECTION
    </BannerCard.Text>
    <BannerCard.Text variant='title' className='mt-4'>
      Everyone needs yoga.
    </BannerCard.Text>
    <BannerCard.Text variant='description' className='mt-2'>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo et eum
      impedit veritatis eos libero soluta quo, aperiam qui, saepe alias est
      illum.
    </BannerCard.Text>
    <div className='flex mt-2 space-x-2'>
      <BannerCard.Button href='/'>Shop</BannerCard.Button>
      <BannerCard.Button href='/'>Wishlist</BannerCard.Button>
    </div>
  </BannerCard>
)

const Template2: ComponentStory<typeof BannerCard> = ({ imgSrc }) => (
  <BannerCard imgSrc={imgSrc}>
    <BannerCard.Text variant='title' className='mt-4 text-2xl'>
      Jordon Holiday Collection
    </BannerCard.Text>

    <BannerCard.Button href='/' className='mt-4'>
      Shop
    </BannerCard.Button>
  </BannerCard>
)
const Template3: ComponentStory<typeof BannerCard> = ({ imgSrc }) => (
  <BannerCard imgSrc={imgSrc}>
    <BannerCard.Button href='/' className='mt-4'>
      Shop
    </BannerCard.Button>
  </BannerCard>
)

const Template4: ComponentStory<typeof BannerCard> = ({ imgSrc }) => (
  <BannerCard imgSrc={imgSrc} />
)

export const AllParts = Template.bind({})
AllParts.args = {
  imgSrc: '/',
}
AllParts.parameters = {}

export const NoTitle = Template2.bind({})
NoTitle.args = {
  imgSrc: '/',
}
NoTitle.parameters = {}

export const OnlyButton = Template3.bind({})
OnlyButton.args = {
  imgSrc: '/',
}
OnlyButton.parameters = {}

export const OnlyImage = Template4.bind({})
OnlyImage.args = {
  imgSrc: '/',
}
OnlyImage.parameters = {}
