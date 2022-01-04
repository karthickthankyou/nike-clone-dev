import { ReactElement } from 'react'
import ExclamationCircleIcon from '@heroicons/react/solid/ExclamationCircleIcon'
import { Transition } from '@headlessui/react'

export interface IErrorMessageProps {
  show: boolean
  children: ReactElement | string
}

const ErrorMessage = ({ show, children }: IErrorMessageProps) => {
  if (!show) return null
  return (
    <div className='flex mt-2 mb-3'>
      <ExclamationCircleIcon className='flex-shrink-0 w-5 h-5 mr-1 text-red-500' />
      <div className='text-sm text-left'>{children}</div>
    </div>
  )
}

export default ErrorMessage
