<script setup lang="ts">
defineProps<{
	productData: {
		id: string;
		name: string;
		category: string;
		price: string;
		imageUrl: string;
	};
}>();
</script>

<template>
	<div class="product-wrapper">
		<div class="image-wrapper">
			<img :src="productData.imageUrl" :alt="productData.name" class="image" />
		</div>
		<div class="content">
			<span class="name">{{ productData.name }}</span>
			<div class="row">
				<span class="category">{{ productData.category }}</span>
				<span class="price">{{ productData.price }} $</span>
			</div>
			<button class="add-to-cart-button">Add to cart <nuxt-icon name="cart-plus-solid" class="icon" filled /></button>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.product-wrapper {
	border-radius: 12px;
	box-shadow: 0 1px 12px rgb(152 255 231 / 38%);
	box-shadow: 0 2px 16px rgb(95 180 183 / 38%);
	box-shadow: 0 2px 16px rgb(74 229 170 / 26%);
	overflow: hidden;
}

.image {
	width: 100%;
}

.content {
	display: flex;
	flex-direction: column;
	gap: 0.4rem;
	padding: 1.6rem;
}

.row {
	display: flex;
	justify-content: space-between;
	align-items: center;
}

.name {
	font-weight: 600;
	font-size: 1.8rem;
}

.category {
	color: #444;
	font-size: 1.4rem;
}

.add-to-cart-button {
	position: relative;
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 8px;
	margin-top: 0.8rem;
	padding: 1.2rem 2.4rem;
	border-radius: 999px;
	border: none;
	background-color: rgb(251 165 117);
	color: #fff;
	font-size: 1.5rem;
	font-weight: 600;
	letter-spacing: 1px;

	&::after {
		content: '';
		position: absolute;
		inset: 0;
		border-radius: 999px;
		box-shadow: 0 4px 8px rgb(0 0 0 / 0.27) inset;
		opacity: 0;
		transition: opacity 0.2s;
	}

	&:hover {
		&::after {
			opacity: 1;
		}
	}
}

:deep(.nuxt-icon svg) {
	display: inline-block;
	width: 20px;
	height: 20px;
}
</style>
