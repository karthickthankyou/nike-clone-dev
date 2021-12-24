import Link from 'src/components/atoms/Link'
import { Popover } from '@headlessui/react'
import {
  menMenu,
  womenMenu,
  kidsMenu,
  customiseMenu,
  salemenu,
} from 'src/static/menuItems'

import { RiDatabaseFill } from '@react-icons/all-files/ri/RiDatabaseFill'
import MenuIcon from '@heroicons/react/outline/MenuIcon'
import ShoppingBagIcon from '@heroicons/react/outline/ShoppingBagIcon'
import HeartIcon from '@heroicons/react/outline/HeartIcon'
import SearchIcon from '@heroicons/react/outline/SearchIcon'
import CarouselAd from 'src/components/molecules/CarouselAd'
import PopoverParent, {
  PopoverButton,
  // PopoverOverlay,
  PopoverPanel,
} from 'src/components/molecules/PopoverMenuItem'
import MenuItemPartition from 'src/components/molecules/MenuItemPartition'
import { useState } from 'react'
import Sidebar from '../Sidebar2'

export interface INavbarProps {}

const SubNavbar = () => (
  <div className='hidden py-2 text-xs bg-gray-100 md:block'>
    <div className='container flex items-center mx-auto'>
      <Link href='/'>
        <RiDatabaseFill className='w-5 h-5' />
      </Link>
      <div className='ml-auto space-x-4 divide-x divide-gray-700'>
        <Link className='text-gray-700 hover:text-black' href='/'>
          Help
        </Link>
        <Link className='pl-2 text-gray-700 hover:text-black' href='/'>
          Join Us
        </Link>
        <Link className='pl-2 text-gray-700 hover:text-black' href='/'>
          Sign In
        </Link>
      </div>
    </div>
  </div>
)

const Navbar = () => {
  const [open, setOpen] = useState(false)
  return (
    <nav>
      <SubNavbar />
      <Sidebar open={open} setOpen={setOpen}>
        <div>hi</div>
      </Sidebar>
      <div className='container relative w-full h-16 mx-auto'>
        <div className='absolute left-0 py-2'>
          <Link href='/'>
            <RiDatabaseFill className='w-5 h-5' />
          </Link>
        </div>
        <div className='absolute right-0 py-2'>
          <div className='container flex items-center justify-between mx-auto'>
            <div className='flex items-center space-x-2 '>
              <div className='flex items-center'>
                <SearchIcon className='z-10 w-6 h-6 -mr-8' />
                <input
                  placeholder='Search'
                  className='py-2 pl-10 pr-2 bg-gray-100 rounded-full'
                  type='text'
                />
              </div>
              <Link href='/'>
                <HeartIcon className='w-6 h-6' />
              </Link>
              <Link href='/'>
                <ShoppingBagIcon className='w-6 h-6' />
              </Link>
              <button
                type='button'
                onClick={() => setOpen((state) => !state)}
                className='md:hidden'
              >
                <MenuIcon className='z-40 w-5 h-5' />
              </button>
            </div>
          </div>
        </div>
        <div className='hidden py-2 mx-auto md:block'>
          <Popover.Group className='z-20 flex items-center justify-center space-x-4'>
            <PopoverParent>
              <PopoverButton>Men</PopoverButton>
              <PopoverPanel>
                <MenuItemPartition text={menMenu[0]} />
                <MenuItemPartition text={menMenu[1]} />
                <MenuItemPartition text={menMenu[2]} />
                <MenuItemPartition text={[menMenu[3], menMenu[4]]} />
                <MenuItemPartition text={menMenu[5]} />
              </PopoverPanel>
            </PopoverParent>
            <PopoverParent>
              <PopoverButton>Women</PopoverButton>
              <PopoverPanel>
                <MenuItemPartition text={womenMenu[0]} />
                <MenuItemPartition text={womenMenu[1]} />
                <MenuItemPartition text={womenMenu[2]} />
                <MenuItemPartition text={[womenMenu[3], womenMenu[4]]} />
                <MenuItemPartition text={womenMenu[5]} />
              </PopoverPanel>
            </PopoverParent>
            <PopoverParent>
              <PopoverButton>Kids</PopoverButton>
              <PopoverPanel>
                <MenuItemPartition text={kidsMenu[0]} />
                <MenuItemPartition text={[kidsMenu[1], kidsMenu[2]]} />
                <MenuItemPartition text={[kidsMenu[3], kidsMenu[4]]} />
                <MenuItemPartition text={kidsMenu[5]} />
              </PopoverPanel>
            </PopoverParent>
            <PopoverParent>
              <PopoverButton>Customize</PopoverButton>
              <PopoverPanel>
                <MenuItemPartition text={customiseMenu[0]} />
                <MenuItemPartition text={customiseMenu[1]} />
                <MenuItemPartition text={customiseMenu[2]} />
                <MenuItemPartition text={customiseMenu[3]} />
              </PopoverPanel>
            </PopoverParent>
            <PopoverParent>
              <PopoverButton>Sale</PopoverButton>
              <PopoverPanel>
                <MenuItemPartition text={salemenu[0]} />
                <MenuItemPartition text={salemenu[1]} />
                <MenuItemPartition text={salemenu[2]} />
                <MenuItemPartition text={salemenu[3]} />
              </PopoverPanel>
            </PopoverParent>
            <PopoverParent>
              <PopoverButton href='/'>SNKRS</PopoverButton>
            </PopoverParent>
          </Popover.Group>
        </div>
      </div>
      <CarouselAd />
    </nav>
  )
}

export default Navbar
