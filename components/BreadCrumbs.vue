<template>
	<ul class="list-nostyle breadcrumbs">
		<li>
			<nuxt-link to="/"><i class="bzi-home"></i></nuxt-link>
		</li>
		<li v-for="(item, index) in crumbs" :key="index">
			<span class="icon-crumbs bzi-angle-right"></span>
			<a v-if="index === crumbs.length - 1" :href="item.url">{{
				item.title
			}}</a>
			<nuxt-link v-else :to="item.url">{{ item.title }}</nuxt-link>
		</li>
	</ul>
</template>

<script>
export default {
	name: 'BreadCrumbs',
	computed: {
		crumbs() {
			const newItems = []
			const pathsItem = []
			const fullPath = this.$route.path
			const items = fullPath.split('/')

			items.shift()

			items.forEach((b, i) => {
				b = b.split('-').join(' ')
				newItems.push(b)

				const url = newItems.slice(0, i + 1).toString()

				pathsItem.push({
					title: b,
					url: '/' + url.split(',').join('/')
				})
			})

			return pathsItem
		}
	}
}
</script>

<style lang="scss" scoped>
.breadcrumbs {
	display: flex;
	flex-wrap: wrap;
	font-size: 13px;
	align-items: center;
	text-transform: capitalize;
	margin-bottom: 24px;

	.icon-crumbs {
		display: inline-block;
		padding: 0 4px;
	}

	li a {
		color: $black40;
	}

	li:last-child a {
		color: $link;
	}
}
</style>
