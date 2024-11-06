<template>
	<div class="about">
		<Icon class="icon" icon="logos:element" />
		<div class="info">
			<span class="title">这是什么?</span>
			<p>这是一个工具类网站的模板, 使用<code>element-plus</code>对页面进行UI开发, 集成了<code>iconify</code><code>sass</code><code>pinia</code></p>
			<p>你只需要把他当成一个你用<code>pnpm create vue@latest</code>新建的项目去编写你的站点就好了</p>
			<br />
			<p>我加上了4个我自己常用的字体, 其中两个为英文字体(JetBrains Mono, Pointfree), 两个为中文字体(苹方Light & Medium)</p>
		</div>
	</div>
</template>

<script setup></script>

<style lang="scss" scoped>
@import "@/assets/style/handle.scss";

.about {
	height: calc(100vh - 64px - 40px);
	@include flex-center($direction: row);
	.icon {
		font-size: 15rem;
		margin-right: 10vw;
	}
	.info {
		max-width: 700px;
		.title {
			font-size: 2rem;
			font-family: Pingfang-m;
		}
	}
}
</style>
