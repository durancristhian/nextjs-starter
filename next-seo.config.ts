import { NextSeoProps } from 'next-seo'

const TITLE = 'nextjs-starter'
const DESCRIPTION = 'nextjs-starter'
const BASE_URL = 'https://nextjs-starter.com'

const SEO: NextSeoProps = {
  title: TITLE,
  description: DESCRIPTION,
  canonical: BASE_URL,
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: BASE_URL,
    title: TITLE,
    description: DESCRIPTION,
    site_name: TITLE,
    images: [{ url: `${BASE_URL}/social.jpg`, alt: TITLE }],
  },
  twitter: {
    handle: '@nextjs-starter',
    cardType: 'summary_large_image',
  },
}

export default SEO
