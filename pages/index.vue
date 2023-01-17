<template>
	<main class="site-main">
		<section class="hero-section">
			<div class="relative">
				<div class="content flex flex-col h-center container">
					<h1>Hi Suitmedian!</h1>
					<p>
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores
						sed optio necessitatibus consequuntur consequatur est non, illo
						accusantium assumenda sapiente aspernatur placeat nisi commodi,
						error magnam minus similique impedit ad nemo mollitia voluptate
						officiis? Sunt ad iure corporis assumenda vel vitae fuga mollitia
						hic at quaerat eveniet similique, dicta veniam.
					</p>
				</div>
				<div class="background">
					<svg
						width="100%"
						height="100vh"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<g id="c1">
							<circle
								class="c1"
								cx="200"
								cy="500"
								r="550"
								stroke="#E9E9E9"
								stroke-width="1.5"
							/>
						</g>
						<g id="c2">
							<circle
								class="c2"
								cx="1100"
								cy="780"
								r="190"
								stroke="#E9E9E9"
								stroke-width="2"
							/>
						</g>
						<g id="c3">
							<circle
								class="c3"
								cx="1200"
								cy="0"
								r="300"
								stroke="#E9E9E9"
								stroke-width="2"
							/>
						</g>
					</svg>
				</div>
			</div>
		</section>
		<section class="section-1">
			<div class="container">
				<h1>About</h1>
				<div class="flex flex-row">
					<p id="para1" class="fg-1">
						Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore
						mollitia sed dignissimos esse odit, veritatis aut voluptas
						voluptates? Ratione harum voluptatem, labore velit consectetur cum
						minima architecto repellat. Porro inventore laborum aliquid rerum
						mollitia modi harum quidem assumenda, nihil aut tempora, fuga
						voluptates quaerat magnam facilis itaque esse officia animi. Lorem,
						ipsum dolor sit amet consectetur adipisicing elit. Labore mollitia
						sed dignissimos esse odit, veritatis aut voluptas voluptates?
						Ratione harum voluptatem, labore velit consectetur cum minima
						architecto repellat. Porro inventore laborum aliquid rerum mollitia
						modi harum quidem assumenda, nihil aut tempora, fuga voluptates
						quaerat magnam facilis itaque esse officia animi.
					</p>
					<p id="para2" class="fg-1">
						Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore
						mollitia sed dignissimos esse odit, veritatis aut voluptas
						voluptates? Ratione harum voluptatem, labore velit consectetur cum
						minima architecto repellat. Porro inventore laborum aliquid rerum
						mollitia modi harum quidem assumenda, nihil aut tempora, fuga
						voluptates quaerat magnam facilis itaque esse officia animi. Lorem,
						ipsum dolor sit amet consectetur adipisicing elit. Labore mollitia
						sed dignissimos esse odit, veritatis aut voluptas voluptates?
						Ratione harum voluptatem, labore velit consectetur cum minima
						architecto repellat. Porro inventore laborum aliquid rerum mollitia
						modi harum quidem assumenda, nihil aut tempora, fuga voluptates
						quaerat magnam facilis itaque esse officia animi.
					</p>
				</div>
			</div>
		</section>
		<section class="section-2">
			<div class="container flex flex-row">
				<div class="fg-1 wrapper-1">
					<div class="content-sec-2 flex flex-col">
						<div class="content-wrapper">
							<span>ABCD</span>
							<span>DEFGHI</span>
							<span>JKLMN</span>
						</div>
					</div>
					<div class="overlay-1"></div>
					<img id="img1" src="~assets/img/unsplash-003.jpg" alt="" />
				</div>
				<div class="fg-1 wrapper-2 flex flex-row col-gap-32">
					<div class="flex v-end full-height">
						<div class="overlay-2"></div>
						<img id="img2" src="~assets/img/unsplash-002.jpg" alt="" />
					</div>
					<img id="img3" src="~assets/img/unsplash-002.jpg" alt="" />
				</div>
			</div>
		</section>

		<section class="compare">
			<div class="comparisonSection">
				<div class="comparisonImage beforeImage">
					<img src="~assets/img/before.jpg" alt="before" />
				</div>
				<div class="comparisonImage afterImage">
					<img src="~assets/img/after.jpg" alt="after" />
				</div>
			</div>
		</section>
	</main>
</template>

<script>
import LandingAnimation from '~/animation/LandingAnimation'
export default {
	data() {
		return {}
	},
	head() {
		return {
			...this.$SEOMeta({
				metaTitle: 'Suit Baze'
			})
		}
	},
	mounted() {
		// Example animate using methods function
		this.heroAnimation()
		// Use separated script ~animation/LandingAnimation.js
		LandingAnimation()
	},
	methods: {
		heroAnimation() {
			const gsap = this.$gsap
			const timeline = this.$gsap.timeline({ repeat: -1 })
			timeline.to('.c1', {
				transform: 'translateY(30px)',
				duration: 2,
				ease: 'sine.inOut'
			})
			timeline.to('.c1', {
				transform: 'translateY(0px)',
				duration: 2,
				ease: 'sine.inOut',
				delay: -0.3
			})
			gsap.fromTo(
				'.content',
				{
					x: -1000,
					opacity: 0
				},
				{
					x: 0,
					opacity: 1,
					duration: 1
				}
			)
		}
	}
}
</script>

<style lang="scss" scoped>
.site-main {
	margin-top: 0;
}
.hero {
	&-section {
		background: #000f1d;
		color: #fff;
		min-height: 100vh;

		h1 {
			text-transform: uppercase;
			font-size: 3em;
		}

		p {
			max-width: 600px;
		}

		.content {
			position: relative;
			height: 100vh;
			width: 100%;
			z-index: 1;
		}

		.background {
			position: absolute;
			top: 0;
			left: 0;
			z-index: 0;
			width: 100%;
			max-height: 100%;
			max-width: 100%;
		}
	}
}

.section-1 {
	padding: 64px 0;
	background: #fff;
}

.section-2 {
	height: 100vh;

	.container {
		height: 100%;
	}

	.wrapper-1 {
		width: 50%;
		height: 800px;
		overflow: hidden;
		padding: 0 4em 4em 0;
		position: relative;
		.content-sec-2 {
			position: absolute;
			margin-top: 4em;
			z-index: 2;
			max-height: 500px;
			overflow: hidden;
			span {
				letter-spacing: 16px;
				font-size: 5em;
				color: #fff;
				font-weight: 900;
			}
		}
		.content-wrapper {
			transform: translate(0, 100%);
		}
		.overlay-1 {
			padding-left: 4em;
			bottom: 0;
			width: 100%;
			height: 100%;
			position: absolute;
			background: $dark;
			z-index: 1;
		}
		img {
			padding-left: 4em;
			height: 100%;
			object-fit: cover;
		}
	}
	.wrapper-2 {
		position: relative;
		width: 50%;
		height: 100%;

		.overlay-2 {
			width: 100%;
			height: 100%;
			top: 0;
			position: absolute;
			background: $dark;
			z-index: 1;
		}
		#img2 {
			max-width: 250px;
			min-height: 600px;
			object-fit: cover;
		}
		#img3 {
			padding-top: 4em;
			bottom: 0;
			max-width: 250px;
			max-height: 600px;
			object-fit: cover;
		}
	}
}

.comparisonSection {
	position: relative;
	padding-bottom: 56.25%; /* to maintain aspect ratio (responsive!) */
}
.comparisonImage {
	width: 100%;
	height: 100%;
}
.afterImage {
	position: absolute;
	overflow: hidden;
	top: 0;
	transform: translate(100%, 0px);
}
.afterImage img {
	transform: translate(-100%, 0px);
}
.comparisonImage img {
	width: 100%;
	height: 100%;
	position: absolute;
	top: 0;
}

.compare {
	overflow-x: hidden;
	height: 300vh;
}
</style>
