import { useEffect, useState } from 'react'
import { Transition } from '@headlessui/react'

export interface ICarouselAdProps {}
const scrollData = [
  {
    id: 0,
    title: 'GET YOUR GIFTS ON TIME',
    description:
      'Order by 12 December to receive it by 24 December. Shop Learn More',
  },
  {
    id: 1,
    title: 'HELLO NIKE APP',
    description: 'Download the app to access everything Nike. Get Your Great',
  },
  {
    id: 2,
    title: 'FREE DELIVERY',
    description: 'Applies to orders of ₹14,000 or more. View details',
  },
  {
    id: 3,
    title: 'SAVE UP TO 40%',
    description: 'Shop All Our New Markdowns',
  },
]

const CarouselAd = () => {
  const [index, setIndex] = useState(3)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((state) => (state + 1) % scrollData.length)
    }, 2000)

    return () => {
      clearInterval(interval)
    }
  }, [])

  return (
    <div className='relative h-16 overflow-hidden bg-gray-100'>
      {scrollData.map((item) => (
        <Transition
          show={item.id === index}
          enter='transition-all duration-1000 '
          enterFrom=' left-full'
          enterTo=' left-0'
          leave='transition-all duration-1000 '
          leaveFrom=' right-0'
          leaveTo=' right-full'
          key={item.id}
          className='absolute w-full p-2 text-sm text-center'
        >
          <div className='font-bold'>{item.title}</div>
          <div className='mt-1 text-gray-700'>{item.description}</div>
        </Transition>
      ))}
    </div>
  )
}

export default CarouselAd
