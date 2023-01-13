export default (context, inject) => {
	const setCurrency = number => {
		return Number(number).toLocaleString('id-ID')
	}
	const catch404 = {
		statusCode: 404,
		message: 'Page Not Found'
	}
	const catch500 = {
		statusCode: 503,
		message: 'Error Code'
	}
	const add = (a, b) => {
		return a + b
	}

	const sum = arr => {
		return arr.reduce(add)
	}

	const dataImg = (img, size) => {
		let image

		if (img === undefined) {
			image = `/img/default-${size}.png`
		} else {
			image = img[0].conversion[size]
		}

		return image
	}

	const sanitizeQstring = q => {
		return q.replace(/[^=&]+=(&|$)/g, '').replace(/&$/, '')
	}

	const isEmptyObj = Obj => {
		return Object.keys(Obj).length === 0 && Obj.constructor === Object
	}

	const scrollTop = () => {
		window.scrollTo(0, 0)
	}

	const SEOMeta = ({ metaTitle, metaImage, metaDesc, metaKeywords }) => {
		const contentImage = metaImage || '/icon.png'
		const contentDesc = metaDesc || process.env.npm_package_description
		return {
			title: metaTitle,
			meta: [
				{
					hid: 'description',
					name: 'description',
					content: contentDesc
				},
				{
					hid: 'og:title',
					property: 'og:title',
					content: metaTitle
				},
				{
					hid: 'og:description',
					property: 'og:description',
					content: contentDesc
				},
				{
					hid: 'og:image',
					property: 'og:image',
					content: contentImage
				},
				{
					hid: 'twitter:title',
					name: 'twitter:title',
					content: metaTitle
				},
				{
					hid: 'twitter:description',
					name: 'twitter:description',
					content: contentDesc
				},
				{
					hid: 'twitter:image',
					name: 'twitter:image',
					content: contentImage
				},
				{
					hid: 'keywords',
					name: 'keywords',
					content: metaKeywords || ''
				}
			]
		}
	}

	const StrongPassword = (min, password) => {
		return (
			/[a-z]/.test(password) && // checks for a-z
			/[A-Z]/.test(password) && // checks for a-z
			/[0-9]/.test(password) && // checks for 0-9
			/\W|_/.test(password) && // checks for special char
			password.length >= 8
		)
	}

	inject('setCurrency', setCurrency)
	inject('catch404', catch404)
	inject('catch500', catch500)
	inject('sum', sum)
	inject('dataImg', dataImg)
	inject('isEmptyObj', isEmptyObj)
	inject('sanitizeQstring', sanitizeQstring)
	inject('scrollTop', scrollTop)
	inject('SEOMeta', SEOMeta)
	inject('StrongPassword', StrongPassword)
}

export function isEmpty(data) {
	return (data || []).length === 0 || Object.keys(data).length === 0
}