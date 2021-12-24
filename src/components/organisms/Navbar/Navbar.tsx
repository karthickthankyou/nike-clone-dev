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
import CarouselAd from 'src/components/molecules/CarouselAd'
import PopoverParent, {
  PopoverButton,
  // PopoverOverlay,
  PopoverPanel,
} from 'src/components/molecules/PopoverMenuItem'
import MenuItemPartition from 'src/components/molecules/MenuItemPartition'

export interface INavbarProps {}

const SubNavbar = () => (
  <div className='py-2 text-xs bg-gray-100'>
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

const Navbar = () => (
  <nav className='bg-white'>
    <SubNavbar />
    <div className='relative w-full h-16 bg-white'>
      <div className='absolute inset-0 py-2'>
        <div className='container flex items-center justify-between mx-auto'>
          <Link href='/'>
            <RiDatabaseFill className='w-5 h-5' />
          </Link>
          <div className='flex items-center space-x-2 '>
            <input
              placeholder='Search'
              className='py-1 pl-4 pr-2 bg-gray-100 rounded-full'
              type='text'
            />
            <Link href='/'>
              <RiDatabaseFill className='w-5 h-5' />
            </Link>
            <Link href='/'>
              <RiDatabaseFill className='w-5 h-5' />
            </Link>
          </div>
        </div>
      </div>
      <div className='absolute inset-0 py-2'>
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

export default Navbar
