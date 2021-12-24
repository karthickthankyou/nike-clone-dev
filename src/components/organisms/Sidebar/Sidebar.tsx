import { Dispatch, Fragment, ReactElement, SetStateAction } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { XIcon } from '@heroicons/react/solid'

export interface ISidebarProps {
  open: boolean
  setOpen: Dispatch<SetStateAction<boolean>>
  children: ReactElement | ReactElement[]
}

const Sidebar = ({ open, setOpen, children }: ISidebarProps) => (
  <Transition.Root show={open} as={Fragment}>
    <Dialog
      as='div'
      className='fixed inset-y-0 right-0 z-40 flex lg:hidden'
      onClose={() => setOpen(false)}
    >
      <Transition.Child
        as={Fragment}
        enter='transition-opacity ease-linear duration-300'
        enterFrom='opacity-0'
        enterTo='opacity-100'
        leave='transition-opacity ease-linear duration-300'
        leaveFrom='opacity-100'
        leaveTo='opacity-0'
      >
        <Dialog.Overlay className='fixed inset-0 bg-black bg-opacity-25 backdrop-filter backdrop-blur-sm' />
      </Transition.Child>

      <Transition.Child
        as={Fragment}
        enter='transition ease-in-out duration-150 transform'
        enterFrom='translate-x-full'
        enterTo='translate-x-0'
        leave='transition ease-in-out duration-100 transform'
        leaveFrom='translate-x-0'
        leaveTo='translate-x-full'
      >
        <div className='relative flex flex-col overflow-y-auto bg-white shadow-xl w-80'>
          <button
            type='button'
            className='flex items-center justify-center p-3 ml-auto'
            onClick={() => setOpen(false)}
          >
            <XIcon className='w-6 h-6 text-gray-600' />
          </button>

          {/* Links */}

          <div className='p-3'>{children}</div>
        </div>
      </Transition.Child>
    </Dialog>
  </Transition.Root>
)

export default Sidebar
