import axios from 'axios'

export default {
  hostname: process.env.BASE_URL,
	gzip: true,
  defaults: {
    changefreq: 'daily',
    priority: 0.8,
    lastmod: new Date()
  },
  exclude: [],
  routes: async () => {
    const routeSitemap = []
    const axiosGet = axios.create({
      baseURL: process.env.API_URL,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    })

    const getData = await Promise.all([
      axiosGet.get('/api/ideas', {
        params: {
          'fields[ideas]': 'slug',
          sort: '-published_at',
          'page[size]': 100
        }
      })
    ])

    getData[0].data.data.forEach(i => {
      routeSitemap.push('/ideas/' + i.slug)
    })

    return routeSitemap
  }
}