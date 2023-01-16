<template>
	<main class="site-main full-height">
		<div class="container flex flex-col v-center h-center full-height">
			<div v-gsap.to="{ rotation: 360, duration: 2 }" class="box"></div>
		</div>
	</main>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.site-main {
	height: calc(100% - 70px);
}

.box {
	width: 64px;
	height: 64px;
	background: $blue;
}
</style>
