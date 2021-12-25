import FilterIcon from '@heroicons/react/solid/FilterIcon'
import { ReactElement, useState } from 'react'

import Dropdown from 'src/components/molecules/Dropdown'
import Sidebar from 'src/components/organisms/Sidebar'

export interface IWithSidebarProps {
  SidebarComponent: ReactElement
  heading: string | ReactElement
  children: ReactElement | ReactElement[]
}

const WithSidebar = ({
  SidebarComponent,
  heading,
  children,
}: IWithSidebarProps) => {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)
  const [hideFilter, setHideFilter] = useState(false)
  return (
    <div>
      <div className='sticky top-0 z-10 flex justify-between bg-white'>
        <h2 className='mb-2 text-xl font-semibold'>{heading}</h2>
        <div className='flex items-center gap-3'>
          <button
            type='button'
            className='items-center block lg:hidden'
            onClick={() => setMobileFiltersOpen(true)}
          >
            <FilterIcon
              className='flex-shrink-0 w-5 h-5 ml-1 text-gray-400'
              aria-hidden='true'
            />
          </button>
          <button
            type='button'
            className='items-center hidden lg:block'
            onClick={() => setHideFilter((state) => !state)}
          >
            {hideFilter ? 'Show Filters' : 'Hide Filters'}
          </button>
          <Dropdown />
        </div>
      </div>
      <Sidebar open={mobileFiltersOpen} setOpen={setMobileFiltersOpen}>
        {SidebarComponent}
      </Sidebar>
      <div className='flex h-screen'>
        {!hideFilter && (
          <div className='relative hidden w-96 lg:block'>
            <div className='absolute inset-y-0 w-full overflow-y-scroll '>
              {SidebarComponent}
            </div>
          </div>
        )}
        <div className='relative w-full'>
          <div className='absolute inset-y-0 w-full overflow-y-scroll '>
            <div className='grid gap-3 md:grid-cols-2 lg:grid-cols-3'>
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WithSidebar
