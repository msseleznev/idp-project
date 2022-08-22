<template>
    <div
        class="productsBlock"
        v-if=" products.length > 0"
    >
        <transition-group name="product-list">
            <product-item
                v-for="product in products"
                :key="product.id"
                :product="product"
                @remove="$emit('remove', product)"
            />
        </transition-group>
    </div>
    <div
        v-else
        class="errorBlock"
    >
        Список товаров пуст
    </div>
</template>

<script>
import ProductItem from '@/components/ProductItem';

export default {
  name: 'ProductsList',
  components: {
    ProductItem
  },
  props: {
    products: {
      type: Array,
      required: true
    }
  }
};
</script>

<style scoped lang="scss">
.productsBlock {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-start;
  @media screen and (max-width: 1420px) {
    justify-content: center;
  }

  .product-list-item {
    display: inline-block;
    margin-right: 10px;
  }

  .product-list-enter-active, .product-list-leave-active {
    transition: all 0.5s;
  }

  .product-list-enter, .product-list-leave-to {
    opacity: 0;
    transform: scale(0.5);
  }

  .product-list-move {
    transition: transform 0.5s;
  }
}

.errorBlock {
  margin-left: 16px;
  font-weight: 600;
  font-size: 20px;
  line-height: 25px;
  color: $warning;
}

</style>
