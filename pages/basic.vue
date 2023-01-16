<template>
	<main class="site-main relative">
		<div class="flex v-center h-center">
			<div class="circle"></div>
			<div class="controller flex flex-row v-center h-center col-gap-12">
				<button class="btn" @click="animateFromTo">fromTo</button>
				<button class="btn" @click="animateTo">to</button>
				<button class="btn" @click="animateFrom">from</button>
				<button class="btn" @click="animateTimeline">Timeline</button>
				<button class="btn" @click="reset">reset</button>
			</div>
		</div>
	</main>
</template>

<script>
export default {
	data() {
		return {}
	},
	methods: {
		animateFromTo() {
			this.$gsap.fromTo(
				'.circle',
				{
					x: '-100',
					opacity: 0,
					duration: 1
				},
				{
					x: '300',
					opacity: 1,
					duration: 1,
					ease: 'back.out(1.7)'
				}
			)
		},
		animateTo() {
			this.$gsap.to('.circle', {
				x: '200',
				duration: 1,
				ease: 'bounce.in'
			})
		},
		animateFrom() {
			this.$gsap.from('.circle', {
				x: '500',
				duration: 1,
				ease: 'ease.in'
			})
		},
		animateTimeline() {
			const timeline = this.$gsap.timeline()
			timeline.to('.circle', {
				x: '100',
				duration: 0.5,
				ease: 'sine.inOut'
			})
			timeline.to('.circle', {
				y: '100',
				duration: 0.5,
				ease: 'sine.inOut'
			})
			timeline.to('.circle', {
				x: '-200',
				duration: 1,
				ease: 'sine.inOut'
			})
			timeline.to('.circle', {
				y: '0',
				duration: 0.5,
				ease: 'sine.inOut'
			})
			timeline.to('.circle', {
				x: '0',
				duration: 0.5,
				ease: 'sine.inOut'
			})
			timeline.to('.circle', {
				width: '100%',
				height: '100%',
				top: 0,
				left: 0,
				borderRadius: 0,
				duration: 0.5,
				ease: 'sine.inOut'
			})
		},
		reset() {
			this.$gsap.to('.circle', {
				top: '30%',
				left: '50%',
				x: 0,
				y: 0,
				duration: 1,
				height: '64px',
				width: '64px',
				borderRadius: '50%'
			})
		}
	}
}
</script>

<style lang="scss" scoped>
.site-main {
	height: calc(100% - 70px);
	color: #fff;
}

.container {
	height: 100%;
}

.circle {
	width: 64px;
	height: 64px;
	border-radius: 50%;
	background: #fff;
	position: absolute;
	top: 30%;
}

.controller {
	position: fixed;
	bottom: 4em;
	width: 60%;
	background: rgba($color: #fff, $alpha: 0.8);
	border-radius: 8px;
	padding: 12px 0;
	z-index: 10;

	.btn {
		background: #22a4cd;
		border-radius: 8px;
	}
}
</style>
