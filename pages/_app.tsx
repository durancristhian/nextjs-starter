import { AppProps } from 'next/app'
import Head from 'next/head'
import React from 'react'
import { Layout } from '../components/Layout'
import pkg from '../package.json'
import '../styles/globals.css'

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>nextjs-starter v{pkg.version}</title>
        <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,maximum-scale=1"
        />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

export default App
