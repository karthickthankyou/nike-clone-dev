import { useState } from 'react'
import FilterIcon from '@heroicons/react/solid/FilterIcon'
import Sidebar from 'src/components/organisms/Sidebar'

export interface IProductListProps {}

const filters = [
  {
    id: 'category2',
    name: 'Category',
    options: [
      { value: 'new-arrivals', label: 'All New Arrivals' },
      { value: 'tees', label: 'Tees' },
      { value: 'crewnecks', label: 'Crewnecks' },
      { value: 'sweatshirts', label: 'Sweatshirts' },
      { value: 'pants-shorts', label: 'Pants & Shorts' },
    ],
  },
  {
    id: 'category3',
    name: 'Category',
    options: [
      { value: 'new-arrivals', label: 'All New Arrivals' },
      { value: 'tees', label: 'Tees' },
      { value: 'crewnecks', label: 'Crewnecks' },
      { value: 'sweatshirts', label: 'Sweatshirts' },
      { value: 'pants-shorts', label: 'Pants & Shorts' },
    ],
  },
  {
    id: 'category',
    name: 'Category',
    options: [
      { value: 'new-arrivals', label: 'All New Arrivals' },
      { value: 'tees', label: 'Tees' },
      { value: 'crewnecks', label: 'Crewnecks' },
      { value: 'sweatshirts', label: 'Sweatshirts' },
      { value: 'pants-shorts', label: 'Pants & Shorts' },
    ],
  },
  {
    id: 'sizes',
    name: 'Sizes',
    options: [
      { value: 'xs', label: 'XS' },
      { value: 's', label: 'S' },
      { value: 'm', label: 'M' },
      { value: 'l', label: 'L' },
      { value: 'xl', label: 'XL' },
      { value: '2xl', label: '2XL' },
    ],
  },
]

const ProductList = () => {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)

  return (
    <div className='bg-white'>
      {/* Mobile filter dialog */}
      <Sidebar open={mobileFiltersOpen} setOpen={setMobileFiltersOpen}>
        <div>Hello</div>
      </Sidebar>

      <main className='max-w-2xl px-4 mx-auto lg:max-w-7xl lg:px-8'>
        <h1 className='text-2xl font-semibold tracking-tight text-gray-900'>
          New Arrivals
        </h1>

        <button
          type='button'
          className='inline-flex items-center lg:hidden'
          onClick={() => setMobileFiltersOpen(true)}
        >
          <FilterIcon
            className='flex-shrink-0 w-5 h-5 ml-1 text-gray-400'
            aria-hidden='true'
          />
        </button>
        <div className='flex items-stretch h-screen'>
          <aside className='relative hidden h-full mr-2 bg-blue-100 lg:block lg:w-96'>
            <form className='sticky inset-x-0 top-0 space-y-10 overflow-y-auto'>
              {filters.map((section, sectionIdx) => (
                <div
                  key={section.name}
                  className={sectionIdx === 0 ? undefined : 'pt-10'}
                >
                  <fieldset>
                    <legend className='block text-sm font-medium text-gray-900'>
                      {section.name}
                    </legend>
                    <div className='pt-6 space-y-3'>
                      {section.options.map((option, optionIdx) => (
                        <div key={option.value} className='flex items-center'>
                          <input
                            id={`${section.id}-${optionIdx}`}
                            name={`${section.id}[]`}
                            defaultValue={option.value}
                            type='checkbox'
                            className='w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500'
                          />
                          <label
                            htmlFor={`${section.id}-${optionIdx}`}
                            className='ml-3 text-sm text-gray-600'
                          >
                            {option.label}
                          </label>
                        </div>
                      ))}
                    </div>
                  </fieldset>
                </div>
              ))}
            </form>
          </aside>

          <section className='relative w-full'>
            <div
              aria-labelledby='product-heading'
              className='grid grid-cols-2 gap-2'
            >
              <div className='grid grid-cols-1 px-2 bg-blue-100 py-28 gap-y-4 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:gap-x-8 xl:grid-cols-3'>
                Products go here
              </div>
              <div className='grid grid-cols-1 px-2 bg-blue-100 py-28 gap-y-4 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:gap-x-8 xl:grid-cols-3'>
                Products go here
              </div>
              <div className='grid grid-cols-1 px-2 bg-blue-100 py-28 gap-y-4 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:gap-x-8 xl:grid-cols-3'>
                Products go here
              </div>
              <div className='grid grid-cols-1 px-2 bg-blue-100 py-28 gap-y-4 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:gap-x-8 xl:grid-cols-3'>
                Products go here
              </div>
              <div className='grid grid-cols-1 px-2 bg-blue-100 py-28 gap-y-4 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:gap-x-8 xl:grid-cols-3'>
                Products go here
              </div>
              <div className='grid grid-cols-1 px-2 bg-blue-100 py-28 gap-y-4 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:gap-x-8 xl:grid-cols-3'>
                Products go here
              </div>
              <div className='grid grid-cols-1 px-2 bg-blue-100 py-28 gap-y-4 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:gap-x-8 xl:grid-cols-3'>
                Products go here
              </div>
              <div className='grid grid-cols-1 px-2 bg-blue-100 py-28 gap-y-4 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:gap-x-8 xl:grid-cols-3'>
                Products go here
              </div>
              <div className='grid grid-cols-1 px-2 bg-blue-100 py-28 gap-y-4 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:gap-x-8 xl:grid-cols-3'>
                Products go here
              </div>
              <div className='grid grid-cols-1 px-2 bg-blue-100 py-28 gap-y-4 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:gap-x-8 xl:grid-cols-3'>
                Products go here
              </div>
              <div className='grid grid-cols-1 px-2 bg-blue-100 py-28 gap-y-4 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:gap-x-8 xl:grid-cols-3'>
                Products go here
              </div>
              <div className='grid grid-cols-1 px-2 bg-blue-100 py-28 gap-y-4 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:gap-x-8 xl:grid-cols-3'>
                Products go here
              </div>
              <div className='grid grid-cols-1 px-2 bg-blue-100 py-28 gap-y-4 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:gap-x-8 xl:grid-cols-3'>
                Products go here
              </div>
              <div className='grid grid-cols-1 px-2 bg-blue-100 py-28 gap-y-4 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:gap-x-8 xl:grid-cols-3'>
                Products go here
              </div>
              <div className='grid grid-cols-1 px-2 bg-blue-100 py-28 gap-y-4 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:gap-x-8 xl:grid-cols-3'>
                Products go here
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}

export default ProductList
