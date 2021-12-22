/* eslint-disable react/jsx-props-no-spreading */
import type { AppProps } from 'next/app'
import React from 'react'
import { Provider } from 'react-redux'
import { store } from 'src/store'
import '../globals.css'

const MyApp = ({ Component, pageProps }: AppProps) => (
  <Provider store={store}>
    <Component {...pageProps} />
  </Provider>
)

export default MyApp
