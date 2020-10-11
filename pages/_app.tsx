import { Layout } from '@components/Layout'
import { pageview } from '@utils/gtag'
import { AppProps } from 'next/app'
import Head from 'next/head'
import Router from 'next/router'
import React, { useEffect } from 'react'
import pkg from '../package.json'
import '../styles/globals.css'

const App = ({ Component, pageProps }: AppProps) => {
  useEffect(() => {
    if (!process.env.NEXT_PUBLIC_GA_TRACKING_ID) return

    const handleRouteChange = (url: string) => {
      pageview(url)
    }

    Router.events.on('routeChangeComplete', handleRouteChange)

    return () => {
      Router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [])

  return (
    <>
      <Head>
        <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
        <title>nextjs-starter v{pkg.version}</title>
        <meta name="title" content="" />
        <meta name="description" content="" />
        <meta property="og:title" content="" />
        <meta property="og:description" content="" />
        <meta property="og:url" content="" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="" />
        <meta property="twitter:url" content="" />
        <meta property="twitter:title" content="" />
        <meta property="twitter:description" content="" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:image" content="" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,maximum-scale=1"
        />
        {process.env.NEXT_PUBLIC_GA_TRACKING_ID && (
          <>
            <script
              async
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_TRACKING_ID}`}
            />
            <script
              dangerouslySetInnerHTML={{
                __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
              }}
            />
          </>
        )}
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

export default App
