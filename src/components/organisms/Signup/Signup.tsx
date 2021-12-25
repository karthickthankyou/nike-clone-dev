/* This example requires Tailwind CSS v2.0+ */
import { useState } from 'react'

import { HiCheck } from '@react-icons/all-files/hi/HiCheck'
import Link from 'src/components/atoms/Link'
import Dialog, { Title } from 'src/components/molecules/Dialog/Dialog'
import Select from 'src/components/molecules/Select'

const Example = () => {
  const [open, setOpen] = useState(true)

  return (
    <Dialog open={open} setOpen={setOpen}>
      <>
        <div className='flex items-center justify-center w-12 h-12 mx-auto'>
          <HiCheck className='w-6 h-6 text-black' aria-hidden='true' />
        </div>
        <div className='mt-3 text-center sm:mt-5'>
          <Title
            as='h3'
            className='text-lg font-bold leading-6 tracking-tight text-gray-900 uppercase'
          >
            BECOME A NIKE MEMBER
          </Title>
          <p className='mt-6 text-sm text-center text-gray-600'>
            Create your Nike Member profile and get first access to the very
            best of Nike products, <br /> inspiration and community.
          </p>
          <form className='w-full mt-6 accent-black '>
            <input
              type='email'
              className='w-full p-3 border rounded-sm '
              placeholder='Email address'
            />
            <input
              type='password'
              className='w-full p-3 mt-2 border rounded-sm '
              placeholder='Password'
            />
            <input
              type='text'
              className='w-full p-3 mt-2 border rounded-sm '
              placeholder='First Name'
            />
            <input
              type='text'
              className='w-full p-3 mt-2 border rounded-sm '
              placeholder='Last Name'
            />
            <input
              type='date'
              className='w-full p-3 mt-2 border rounded-sm '
              placeholder='dd/mm/yyyy'
            />
            <Select
              className='mt-2'
              options={[
                'Wade Cooper',
                'Arlene Mccoy',
                'Devon Webb',
                'Tom Cook',
                'Tanya Fox',
                'Hellen Schmidt',
                'India',
              ]}
            />
            <select
              name='country'
              id='country'
              autoComplete='country-name'
              className='p-3 mt-2 border rounded-sm '
            >
              <option>United States</option>
              <option>Mexico</option>
              <option>India</option>
            </select>
            <div className='flex justify-between py-2 mt-2 text-xs'>
              <label>
                <input type='checkbox' className='mr-1 ' />
                Keep me signed in
              </label>
              <Link href='/'>Forgotten your password?</Link>
            </div>

            <p className='mt-2 text-xs text-gray-500'>
              By logging in, you agree to Nike&apos;s{' '}
              <Link href='/'>Privacy Policy</Link> <br /> and{' '}
              <Link href='/'>Terms of Use</Link>.
            </p>
          </form>
        </div>

        <div className='mt-4'>
          <button
            type='button'
            className='inline-flex justify-center w-full px-4 py-2 text-xs font-medium text-white uppercase bg-black'
            onClick={() => setOpen(false)}
          >
            Sign Up
          </button>
        </div>
        <div className='mt-4 text-xs text-center text-gray-600'>
          Already a Member? <Link href='/'>Sign In</Link>
        </div>
      </>
    </Dialog>
  )
}

export default Example
