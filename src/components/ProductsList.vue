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
    <h3
        v-else
        style=" color: red"
    >
        Список постов пуст
    </h3>
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
  justify-content: space-between;
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

</style>
