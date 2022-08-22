<template>
    <div class="app">
        <div class="wrapper">
            <div class="header">
                <h2>
                    Добавление товара
                </h2>
                <my-select
                    v-model="selectedSort"
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

export default {
  components: { ProductsList, MySelect, ProductForm },
  data() {
    return {
      products: [
        {
          id: 1,
          img: 'https://ammo1.ru/aa/pic20b/4gcam01.jpg',
          title: 'Наименование товара',
          body: 'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк',
          price: 1000
        },
        {
          id: 2,
          img: 'https://ammo1.ru/aa/pic20b/4gcam01.jpg',
          title: 'какой-то продукт б',
          body: 'какой-то продукт2',
          price: 2
        },
        {
          id: 3,
          img: 'https://ammo1.ru/aa/pic20b/4gcam01.jpg',
          title: 'какой-то продукт г',
          body: 'какой-то продукт3',
          price: 100
        },
        {
          id: 4,
          img: 'https://ammo1.ru/aa/pic20b/4gcam01.jpg',
          title: 'какой-то продукт е',
          body: 'какой-то продукт3',
          price: 44
        },
        {
          id: 5,
          img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnGwEiK8eS0HHGcBl0sZYrcjTh9ZFrMRK99Q&usqp=CAU',
          title: 'какой-то продукт5',
          body: 'какой-то продукт3',
          price: 55
        },
        {
          id: 6,
          img: 'https://ammo1.ru/aa/pic20b/4gcam01.jpg',
          title: 'какой-то продукт6',
          body: 'какой-то продукт13',
          price: 6
        }
      ],
      selectedSort: '',
      sortOptions: [
        {
          value: 'title',
          name: 'По наименованию'
        },
        {
          value: 'priceMax',
          name: 'По цене max'
        },
        {
          value: 'priceMin',
          name: 'По цене min'
        }
      ]
    };
  },
  computed: {
    sortedProduct() {
      const sortedTitle = [...this.products].sort((product1, product2) => product1[this.selectedSort]
        ?.localeCompare(product2[this.selectedSort]));
      const sortedPrice = [...this.products].sort((product1, product2) => (product1.price >= product2.price ? -1 : 1));
      if (this.selectedSort === 'title') {
        return sortedTitle;
      }
      if (this.selectedSort === 'priceMax') {
        return sortedPrice;
      }
      if (this.selectedSort === 'priceMin') {
        return sortedPrice.reverse();
      }
      return this.products;
    }
  },
  methods: {
    createProduct(product) {
      this.products.unshift(product);
    },
    removeProduct(product) {
      this.products = this.product.filter(p => p.id !== product.id);
    }
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

</style>
