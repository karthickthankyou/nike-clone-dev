/* This example requires Tailwind CSS v2.0+ */
import { Dispatch, SetStateAction } from 'react'
import { HiCheck } from '@react-icons/all-files/hi/HiCheck'
import Link from 'src/components/atoms/Link'
import Dialog, { Title } from 'src/components/molecules/Dialog/Dialog'

const Example = ({
  open,
  setOpen,
}: {
  open: boolean
  setOpen: Dispatch<SetStateAction<boolean>>
}) => (
  <Dialog open={open} setOpen={setOpen}>
    <div className='flex items-center justify-center w-12 h-12 mx-auto'>
      <HiCheck className='w-6 h-6 text-black' aria-hidden='true' />
    </div>
    <div className='mt-3 text-center sm:mt-5'>
      <Title
        as='h3'
        className='text-lg font-bold leading-6 tracking-tight text-gray-900 uppercase'
      >
        your account for
        <br />
        everything nike
      </Title>
      <form className='w-full mt-6 accent-black '>
        <input
          type='text'
          className='w-full p-3 border rounded-sm '
          placeholder='Email address'
        />
        <input
          type='password'
          className='w-full p-3 mt-2 border rounded-sm '
          placeholder='Password'
        />
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
        className='inline-flex justify-center w-full p-3 text-xs font-medium text-white uppercase bg-black rounded-sm'
        onClick={() => setOpen(false)}
      >
        Sign in
      </button>
    </div>
    <div className='mt-4 text-xs text-center text-gray-600'>
      Not a Member? <Link href='/'>Join Us</Link>
    </div>
  </Dialog>
)

export default Example
