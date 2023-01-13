<template>
	<nav class="main-nav">
		<ul class="list-nostyle">
			<li v-for="(nav, i) in mainNavData" :key="i" class="main-nav__item">
				<nuxt-link class="header-link" :to="nav.url">{{ nav.title }}</nuxt-link>
			</li>
		</ul>
	</nav>
</template>

<script>
export default {
	name: 'MainNav',
	props: {
		mainNavData: {
			type: Array,
			default: null
		}
	}
}
</script>

<style lang="scss" scoped>
.main-nav {
	@media #{$medium} {
		& > ul {
			display: flex;
		}
	}

	li {
		font-weight: 400;
		display: flex;
		align-items: center;

		a {
			color: #fff;
		}
	}

	ul,
	li {
		height: 100%;
	}
}
</style>
