<template>
	<div class="page_container">
		<div class="code">#404</div>
		<div class="title">Page not found :(((</div>
		<RouterLink :to="{ name: 'home' }">
			<div class="home_page-btn">Go to main page</div>
		</RouterLink>
	</div>
</template>

<style lang="scss">
.page_container {
	position: absolute;
	top: 35%;
	left: 50%;
	margin-right: -50%;
	transform: translate(-50%, -50%);

	font-weight: bold;
	text-align: center;

	.code {
		font-size: 150px;
	}

	.title {
		font-size: 30px;
	}

	.home_page-btn {
		margin-top: 30px;
		border: 2px solid $main-color;
		border-radius: 5px;
		padding: 10px 20px;
		cursor: pointer;
		transition: 0.3s;

		&:hover {
			background-color: $main-color;
			color: #000;
		}
	}
}
</style>
