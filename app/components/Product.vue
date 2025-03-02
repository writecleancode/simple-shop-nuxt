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
	<div>
		<img :src="productData.imageUrl" :alt="productData.name" />
		<span>{{ productData.name }}</span>
		<span>{{ productData.category }}</span>
		<span>{{ productData.price }}</span>
	</div>
</template>

<style lang="scss" scoped></style>
