<template>
	<div class="common-layout">
		<el-container>
			<el-header>
				<!-- 这里是导航 -->
				<div class="logo">
					<Icon class="icon" icon="logos:element" />
					<span class="title"> s22y-tool-template </span>
				</div>
				<nav class="guider">
					<router-link to="/">
						<span>Home</span>
					</router-link>
					<router-link to="/about">
						<span>About</span>
					</router-link>
				</nav>
			</el-header>
			<el-main>
				<!-- 这里是主体部分 -->
				<router-view />
			</el-main>
			<el-footer>
				<!-- 这里是页脚部分 -->
				<span>Released under the MIT License.</span>
				<span>Copyright © 2024 Sooooooooooooooooootheby</span>
			</el-footer>
		</el-container>
	</div>
</template>

<script setup>
</script>

<style lang="scss" scoped>
@import "./assets/style/handle.scss";

.el-header {
	height: 64px;
	padding: 0 64px;
	border-bottom: 2px dashed var(--el-border-color);
	@include flex-center($direction: row, $content: space-between);
	* {
		transition: 0.3s;
	}

	.logo {
		@include flex-center($direction: row, $content: start);

		.icon {
			font-size: 2rem;
			color: $themeColor;
		}
		.title {
			margin-left: 24px;
			font-size: 1.1rem;
			font-weight: bold;
		}
	}
	.guider {
		height: 64px;
		display: flex;
		align-items: center;
		a {
			height: 100%;
			margin-left: 12px;
			padding: 0 24px;
			color: #000000;
			text-decoration: none;
			@include flex-center($direction: row);
		}
		a:hover {
			background-color: rgba($color: $themeColor, $alpha: 0.5);
		}
		img {
			width: 38px;
			height: 38px;
			margin-left: 12px;
			border-radius: 999px;
			border: 4px solid transparent;
		}
		img:hover {
			border: 4px solid rgba($color: $themeColor, $alpha: 0.5);
		}
	}
}
.el-main {
	min-height: calc(100vh - 64px);
}
.el-footer {
	min-height: 128px;
	border-top: 2px dashed var(--el-border-color);
	color: #3c3c43c7;
	font-size: 0.9rem;
	@include flex-center;
}

@media (max-width: 900px) {
	.el-header {
		padding: 0 20px;
	}
}
</style>
