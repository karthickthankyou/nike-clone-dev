/* eslint-disable react/jsx-props-no-spreading */
/* This example requires Tailwind CSS v2.0+ */
import { Dispatch, SetStateAction } from 'react'
import { HiCheck } from '@react-icons/all-files/hi/HiCheck'
import Link from 'src/components/atoms/Link'
import Dialog, { Title } from 'src/components/molecules/Dialog/Dialog'

import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import ErrorMessage from 'src/components/molecules/ErrorMessage'

const Example = ({
  open,
  setOpen,
}: {
  open: boolean
  setOpen: Dispatch<SetStateAction<boolean>>
}) => {
  const userLoginSchema = yup.object().shape({
    email: yup.string().required().email().label('Email'),
    password: yup.string().required().min(8).max(32).label('Password'),
    rememberMe: yup.bool(),
  })

  type UserLogin = yup.InferType<typeof userLoginSchema>

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(userLoginSchema),
  })

  const onSubmit = (data: UserLogin) => console.log(data)
  return (
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
        <form
          className='w-full mt-6 accent-black '
          onSubmit={handleSubmit(onSubmit)}
        >
          <input
            type='email'
            className={`w-full p-3 mt-2 border rounded-sm ${
              errors.email && 'border-red-500'
            }`}
            placeholder='Email address'
            {...register('email')}
          />
          <ErrorMessage show={errors.email}>
            {errors.email?.message}
          </ErrorMessage>
          <input
            type='password'
            className={`w-full p-3 mt-2 border rounded-sm ${
              errors.password && 'border-red-500'
            }`}
            placeholder='Password'
            {...register('password')}
          />
          <ErrorMessage show={errors.password}>
            {errors.password?.message}
          </ErrorMessage>
          <div className='flex justify-between py-2 mt-2 text-xs'>
            <label>
              <input
                type='checkbox'
                className='mr-1 '
                {...register('rememberMe')}
              />
              Keep me signed in
            </label>
            <Link href='/'>Forgotten your password?</Link>
          </div>

          <p className='mt-2 text-xs text-gray-500'>
            By logging in, you agree to Nike&apos;s{' '}
            <Link href='/'>Privacy Policy</Link> <br /> and{' '}
            <Link href='/'>Terms of Use</Link>.
          </p>
          <button
            type='submit'
            className='inline-flex justify-center w-full p-3 mt-4 text-xs font-medium text-white uppercase bg-black rounded-sm'
          >
            Sign in
          </button>
        </form>
      </div>

      <div className='mt-4 text-xs text-center text-gray-600'>
        Not a Member?<Link href='/'>Join Us</Link>
      </div>
    </Dialog>
  )
}

export default Example
