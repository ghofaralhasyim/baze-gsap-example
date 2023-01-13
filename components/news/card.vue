<template>
	<div class="news-card">
		<nuxt-link :to="detailUrl">
			{{ cardData.title }}
		</nuxt-link>
	</div>
</template>

<script>
export default {
	name: 'NewsCard',
	props: {
		cardData: {
			type: Object,
			default: null
		},
		path: {
			type: String,
			default: ''
		}
	},
	computed: {
		detailUrl() {
			return this.path + this.cardData.slug
		}
	}
}
</script>

<style lang="scss" scoped></style>
