<template>
	<div class="header-nav">
		<button class="btn--ghost-grey nav-toggle" type="button" aria-label="Menu">
			<span class="bzi-bars bzi-1_2x" aria-hidden="true"></span>
		</button>
		<div v-if="!$fetchState.pending" class="nav-container">
			<headerMainNav :main-nav-data="mainNav" />
		</div>
	</div>
</template>

<script>
export default {
	name: 'HeaderNav',
	data() {
		return {
			mainNav: []
		}
	},
	async fetch() {
		await this.$axios
			.get(`/json/menus.json`)
			.then(res => {
				this.mainNav = res.data.data
			})
			.catch(error => {
				const errData = error.response?.data
				const errMessage =
					error.response.data?.message || error.response.statusText
				if (errData.status === 404 || error.response.status === 404)
					this.$nuxt.error(this.$catch404)
				else {
					this.$nuxt.error(this.$catch500)
					const consoleError = new Error(errMessage)
					consoleError.code = errData?.status || error.response.status
					throw consoleError
				}
			})
	}
}
</script>

<style lang="scss">
.header-nav {
	height: 100%;
}

.nav-toggle {
	@media #{$medium} {
		display: none;
	}
}

.nav-container {
	display: flex;
	height: 100%;
}

.header-link {
	color: $dark-grey;
	height: 100%;
	display: flex;
	align-items: center;
	padding: 5px 10px;
	border-right: 3px solid transparent;
	border-bottom: 3px solid transparent;

	&:hover,
	&:focus,
	&.is-active {
		color: $link;
	}

	&.is-active {
		border-right-color: $link;
	}

	@media #{$medium} {
		&.is-active {
			border-right-color: transparent;
			border-bottom-color: $link;
		}
	}
}
</style>
