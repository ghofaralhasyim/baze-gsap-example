<template>
	<div id="app" class="sticky-footer-container">
		<div class="sticky-footer-container-item">
			<Header />
		</div>
		<div class="sticky-footer-container-item --pushed">
			<nuxt />
		</div>
		<div class="sticky-footer-container-item">
			<Footer />
		</div>
	</div>
</template>

<script>
export default {
	name: 'DefaultLayout',
	head() {
		return {
			link: [
				{
					rel: 'canonical',
					href: process.env.API_URL + this.$route.path
				}
			]
		}
	}
}
</script>
