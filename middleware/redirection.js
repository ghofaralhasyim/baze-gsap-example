import rules from './redirectRules'

export default function ({ route, redirect }) {
	const pages = rules.data

	for (let index = 0; index < pages.length; index++) {
		const page = pages[index]
		if (route.fullPath === page.old_url) {
			redirect(301, page.new_url)
		}
	}
}
