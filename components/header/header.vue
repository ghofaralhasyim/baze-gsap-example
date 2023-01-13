<template>
	<header class="site-header">
		<div class="container">
			<div class="nav-brand">
				<nuxt-link to="/">.Baze</nuxt-link>
			</div>
			<HeaderNav />
		</div>
	</header>
</template>

<script>
export default {
	name: 'Header'
}
</script>

<style lang="scss">
.site-header {
	display: flex;
	position: fixed;
	z-index: 3;
	top: 0;
	left: 0;
	width: 100%;
	background-color: $dark;
	height: 60px;

	& > .container {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.nav-brand {
		a {
			color: #fff;
		}
		font-weight: 700;
		font-size: 1em;
	}

	&.transparent-header {
		background: transparent;

		.header-link {
			color: #fff;

			&:hover {
				color: $black20;
			}
		}
	}

	@media #{$large} {
		height: 70px;
	}
}
</style>
