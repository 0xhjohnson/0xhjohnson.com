const CONFIG = {
  openGraph: {
    url: 'https://0xhjohnson.com',
    type: 'website',
    locale: 'en-US',
    images: [
      {
        url: '/android-chrome-512x512.png',
        width: 512,
        height: 512,
        alt: 'Android chrome icon'
      },
      {
        url: '/apple-touch-icon.png',
        width: 180,
        height: 180,
        alt: 'Apple touch icon'
      }
    ]
  },
  twitter: {
    cardType: 'summary_large_image',
    site: '@0xhjohnson', // @username for the website
    handle: '@0xhjohnson' // @username for the author
  },
  additionalLinkTags: [
    {
      rel: 'icon',
      href: '/favicon.ico'
    }
  ]
};

export default CONFIG;