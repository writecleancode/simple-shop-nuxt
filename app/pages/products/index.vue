<script setup lang="ts">
import { products } from '~/assets/data/products';
</script>

<template>
	<div class="wrapper">
		<ul class="products-list">
			<li v-for="product in products" :key="product.id">
				<Product :product-data="product" />
			</li>
		</ul>
	</div>
</template>

<style lang="scss" scoped>
.wrapper {
	margin-inline: auto;
	padding: 6.4rem 3.2rem;
	max-width: 1464px;
	background-color: #fff;

	.products-list {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		gap: 4.8rem;
		list-style: none;
	}
}
</style>
