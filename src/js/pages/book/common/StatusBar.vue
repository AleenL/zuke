<template>
	<div :style="statusBarObj" class="bg_ff"></div>
</template>

<script>
	export default {
		data() {
			return {
				statusBarObj: {}
			}
		},
		created() {
			this.statusBarObj.height = weex.config.env.statusBarHeight
		}
	}
</script>

<style scoped>
	.bg_ff {
		background-color: #ffffff;
		width: 750px;
	}
</style>