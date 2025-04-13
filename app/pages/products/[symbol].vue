<script setup lang="ts">
import { products } from '~/assets/data/products';

const { params } = useRoute();

const productData = computed(() => products.find(product => product.symbol === params.symbol));
</script>

<template>
	<div class="product-wrapper">
		<div class="picture-wrapper">
			<img class="picture" :src="productData?.imageUrl" alt="product" />
		</div>
		<div class="details-wrapper">
			<h2 class="name">{{ productData?.name }}</h2>
			<p class="description">{{ productData?.description }}</p>
			<div class="purchase-wrapper">
				<span class="price">{{ productData?.price }} $</span>
				<div class="amount-wrapper">
					<button class="amount-button increase"><nuxt-icon name="plus-circle" filled /></button>
					<input value="1" type="number" class="amount" aria-label="amount of product to add to cart" />
					<button class="amount-button decrease"><nuxt-icon name="minus-circle" filled /></button>
				</div>
				<button class="add-to-cart-button">Add to cart</button>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
@use '@/assets/styles/variables' as *;

.product-wrapper {
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	grid-gap: 96px;
	padding: 128px;

	.picture {
		width: 100%;
	}

	.details-wrapper {
		display: flex;
		flex-direction: column;
		gap: 32px;

		.name {
			color: rgb(18, 96, 94);
			font-size: 4.8rem;
			font-weight: 600;
			line-height: 1.2;
		}
	}

	.purchase-wrapper {
		display: flex;
		gap: 32px;

		.price {
			font-size: 2rem;
			font-weight: 500;
		}

		.amount-button {
			border: none;
			border-radius: 50%;
			background-color: transparent;
		}

		:deep(.nuxt-icon),
		:deep(.nuxt-icon svg) {
			width: 24px;
			height: 24px;
		}

		:deep(.nuxt-icon) {
			display: inline-block;
			color: $color-primary;
		}
	}
}
</style>
