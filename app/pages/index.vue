<script setup lang="ts">
import { products } from '~/assets/data/products';
</script>

<template>
	<div class="wrapper">
		<h1>Products list:</h1>
		<ul>
			<li v-for="product in products" :key="product.id">
				<Product :product-data="product" />
			</li>
		</ul>
	</div>
</template>

<style lang="scss" scoped>
.wrapper {
	background-color: #fff;
}
</style>
