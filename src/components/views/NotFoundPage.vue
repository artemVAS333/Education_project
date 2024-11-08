<template>
	<div class="page_container">
		<div class="code">404</div>
		<div class="title">Page not found :(</div>
		<RouterLink :to="{ name: 'home' }">
			<div class="home_page-btn">Go to main page</div>
		</RouterLink>
	</div>
</template>

<style lang="scss">
	.page_container {
		width: 100%;
		height: 100%;
		background-color: #000;
		color: #fff;

		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;

		font-weight: bold;
		text-align: center;
		margin: 0 5px;

		.code {
			font-size: clamp(40px, 32vw, 220px);
			transition: 0.3s ease;
			cursor: pointer;

			&::before {
				content: '#';
				color: $main-color;
				opacity: 0.8;
			}
		}

		.title {
		}

		.home_page-btn {
			margin: 30px auto;
			max-width: 200px;
			border: 2px solid $main-color;
			border-radius: 5px;
			padding: 8px 16px;
			cursor: pointer;
			transition: 0.3s;

			&:hover {
				background-color: $main-color;
				color: #000;
			}
		}
	}
</style>
