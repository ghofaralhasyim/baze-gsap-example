export default [
  { charset: 'utf-8' },
  { name: 'viewport', content: 'width=device-width, initial-scale=1' },
  {
    hid: 'description',
    name: 'description',
    content: process.env.npm_package_description || ''
  },
  {
    name: 'theme-color',
    content: '#ffffff'
  },
  {
    name: 'format-detection',
    content: 'telephone=no'
  },
  {
    hid: 'og:url',
    property: 'og:url',
    content: '/'
  },
  {
    hid: 'og:title',
    property: 'og:title',
    content: process.env.npm_package_name || ''
  },
  {
    hid: 'og:site_name',
    property: 'og:site_name',
    content: process.env.npm_package_name
  },
  {
    hid: 'og:description',
    property: 'og:description',
    content: process.env.npm_package_description || ''
  },
  {
    hid: 'og:image',
    property: 'og:image',
    content: '/icon.png'
  },
  {
    hid: 'og:type',
    property: 'og:type',
    content: 'website'
  },
  {
    hid: 'fb:app_id',
    property: 'fb:app_id',
    content: ''
  },

  {
    hid: 'twitter:card',
    name: 'twitter:card',
    content: ''
  },
  {
    hid: 'twitter:site',
    name: 'twitter:site',
    content: '/'
  },
  {
    hid: 'twitter:description',
    name: 'twitter:description',
    content: process.env.npm_package_description || ''
  },
  {
    hid: 'twitter:title',
    name: 'twitter:title',
    content: process.env.npm_package_name || ''
  },
  {
    hid: 'twitter:image',
    name: 'twitter:image',
    content: '/icon.png'
  },
  {
    hid: 'keywords',
    name: 'keywords',
    content: ''
  }
]