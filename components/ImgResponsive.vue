<template>
	<picture>
		<source v-lazy-load media="(min-width: 768px)" :data-srcset="largeImg" />
		<img v-lazy-load :data-src="smallImg" class="" alt="" />
	</picture>
</template>

<script>
export default {
	name: 'ImgResponsive',
	props: {
		smallImg: {
			type: String,
			default: ''
		},
		largeImg: {
			type: String,
			default: ''
		}
	}
}
</script>

<style lang="scss" scoped>
img {
	max-width: none;
	width: 100%;
	height: 100%;
	object-fit: cover;
}
</style>
