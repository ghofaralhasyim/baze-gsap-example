<template>
	<main class="site-main">
		<div class="container">
			<div class="section-1 flex flex-col v-center h-center">
				<div class="flex flex-row">
					<div class="p-16 flex flex-col">
						<span>Original</span>
						<h1>{{ number }}</h1>
					</div>
					<div class="p-16 flex flex-col">
						<span>Tween</span>
						<h1>{{ tweenedNumber.toFixed(0) }}</h1>
					</div>
				</div>
				<button class="btn" @click="increaseCount">Increase</button>
			</div>
		</div>
	</main>
</template>

<script>
export default {
	data() {
		return {
			number: 0,
			tweenedNumber: 0
		}
	},
	watch: {
		// if value of number changed, trigger tween
		number(newValue) {
			this.tween(newValue)
		}
	},
	methods: {
		increaseCount() {
			this.number += 100
		},
		tween(number) {
			this.$gsap.to(this.$data, {
				duration: 1,
				ease: 'circ.out',
				tweenedNumber: number
			})
		}
	}
}
</script>

<style lang="scss" scoped>
.site-main {
	color: #fff;
}
.section-1 {
	height: 100vh;
	h1 {
		font-size: 4em;
	}
}

.btn {
	background: #22a4cd;
	color: #fff;
	border-radius: 4px;
}
</style>
