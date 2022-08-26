<template>
    <div class="app">
        <div class="wrapper">
            <div class="header">
                <h2>
                    Добавление товара
                </h2>
                <my-select
                    :model-value="selectedSort"
                    @update:model-value="setSelectedSort"
                    :options="sortOptions"
                />
            </div>
            <div class="main">
                <div class="sidebar">
                    <product-form @create="createProduct" />
                    <div />
                </div>
                <div class="content">
                    <products-list
                        :products="sortedProduct"
                        @remove="removeProduct"
                    />
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import ProductForm from '@/components/ProductForm';
import MySelect from '@/components/UI/MySelect';
import ProductsList from '@/components/ProductsList';
import { mapState, mapGetters, mapMutations } from 'vuex';

export default {
  components: { ProductsList, MySelect, ProductForm },
  data() {
    return {};
  },
  computed: {
    ...mapState({
      products: state => state.product.products,
      selectedSort: state => state.product.selectedSort,
      sortOptions: state => state.product.sortOptions
    }),
    ...mapGetters({
      sortedProduct: 'product/sortedProduct'
    })

  },
  methods: {
    ...mapMutations({
      setSelectedSort: 'product/setSelectedSort',
      removeProduct: 'product/removeProduct',
      createProduct: 'product/createProduct'
    })
  }
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Source Sans Pro', sans-serif;
  font-style: normal;
}

.app {
  min-height: 100vh;
  background-color: $main;

  .wrapper {
    max-width: 1400px;
    margin: 0 auto;
    padding: 0 15px 0 15px;

    .header {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      height: 85px;
    }

    .main {
      display: flex;
      @media screen and (max-width: 700px) {
        flex-direction: column;
        align-items: center;
      }
    }

    .sidebar {
      height: 100%;
      position: sticky;
      top: 24px;
      margin-bottom: 16px;
      @media screen and (max-width: 700px) {
        position: static;
      }

      .content {
        width: 75%;
        height: 100%;
      }
    }
  }

}
.app h2 {
  color: $text;
}

</style>
