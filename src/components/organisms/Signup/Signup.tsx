/* eslint-disable react/jsx-props-no-spreading */
/* This example requires Tailwind CSS v2.0+ */
import { useState } from 'react'
import { useForm } from 'react-hook-form'

import { HiCheck } from '@react-icons/all-files/hi/HiCheck'
import Link from 'src/components/atoms/Link'
import Dialog, { Title } from 'src/components/molecules/Dialog/Dialog'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import ErrorMessage from 'src/components/molecules/ErrorMessage'

const Example = () => {
  const [open, setOpen] = useState(true)

  const userRegisterSchema = yup.object().shape({
    email: yup.string().required().email().label('Email'),
    password: yup.string().required().min(8).max(32).label('Password'),
    firstName: yup.string().required().label('First name'),
    lastName: yup.string().label('Last name'),
    country: yup.string().required().label('Country'),
    dob: yup.date().required().label('Date of birth'),
    rememberMe: yup.bool(),
  })

  type UserRegister = yup.InferType<typeof userRegisterSchema>

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(userRegisterSchema),
  })

  const onSubmit = (data: UserRegister) => console.log(data)

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
          <form
            className='w-full mt-6 accent-black '
            onSubmit={handleSubmit(onSubmit)}
          >
            <input
              type='email'
              className='w-full p-3 border rounded-sm '
              placeholder='Email address'
              {...register('email')}
            />
            <ErrorMessage show={errors.email}>
              {errors.email?.message}
            </ErrorMessage>

            <input
              type='password'
              className='w-full p-3 mt-2 border rounded-sm '
              placeholder='Password'
              {...register('password')}
            />
            <ErrorMessage show={errors.password}>
              {errors.password?.message}
            </ErrorMessage>

            <input
              type='text'
              className='w-full p-3 mt-2 border rounded-sm '
              placeholder='First Name'
              {...register('firstName')}
            />
            <ErrorMessage show={errors.firstName}>
              {errors.firstName?.message}
            </ErrorMessage>
            <input
              type='text'
              className='w-full p-3 mt-2 border rounded-sm '
              placeholder='Last Name'
              {...register('lastName')}
            />
            <ErrorMessage show={errors.lastName}>
              {errors.lastName?.message}
            </ErrorMessage>
            <input
              type='date'
              className='w-full p-3 mt-2 border rounded-sm '
              placeholder='Date of Birth'
              {...register('dob')}
            />
            <ErrorMessage show={errors.dob}>{errors.dob?.message}</ErrorMessage>

            <select
              autoComplete='country-name'
              className='p-3 mt-2 border rounded-sm '
              {...register('country')}
            >
              <option>United States</option>
              <option>Mexico</option>
              <option>India</option>
            </select>
            <ErrorMessage show={errors.country}>
              {errors.country?.message}
            </ErrorMessage>
            <div className='flex justify-between py-2 mt-2 text-xs'>
              <label htmlFor='rememberMe'>
                <input
                  id='rememberMe'
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
              className='inline-flex justify-center w-full p-3 mt-4 font-medium text-white uppercase bg-black'
            >
              Sign Up
            </button>
          </form>
        </div>

        <div className='mt-4 text-xs text-center text-gray-600'>
          Already a Member? <Link href='/login'>Sign In</Link>
        </div>
      </>
    </Dialog>
  )
}

export default Example
