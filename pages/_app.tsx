import { ChakraProvider } from '@chakra-ui/react'
import '@fontsource/open-sans/400.css'
import '@fontsource/open-sans/700.css'
import { Layout } from 'components/Layout'
import { DefaultSeo } from 'next-seo'
import SEO from 'next-seo.config'
import { AppProps } from 'next/app'
import Head from 'next/head'
import React from 'react'
import theme from 'styles/theme'

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <DefaultSeo {...SEO} />
      <Head>
        <title>nextjs-starter</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,user-scalable=no"
        />
      </Head>
      <ChakraProvider theme={theme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ChakraProvider>
    </>
  )
}

export default App
