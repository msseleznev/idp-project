export const productModule = {
  state: () => ({
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
        id: 1,
        value: 'title',
        name: 'По наименованию'
      },
      {
        id: 2,
        value: 'priceMax',
        name: 'По цене max'
      },
      {
        id: 3,
        value: 'priceMin',
        name: 'По цене min'
      },
      {
        id: 4,
        value: 'default',
        name: 'По умолчанию'
      }
    ]
  }),
  getters: {
    sortedProduct(state) {
      const sortedTitle = [...state.products].sort((product1, product2) => product1[state.selectedSort]
        ?.localeCompare(product2[state.selectedSort]));
      const sortedPrice = [...state.products].sort((product1, product2) => (product1.price >= product2.price ? -1 : 1));
      if (state.selectedSort === 'title') {
        return sortedTitle;
      }
      if (state.selectedSort === 'priceMax') {
        return sortedPrice;
      }
      if (state.selectedSort === 'priceMin') {
        return sortedPrice.reverse();
      }
      return state.products;
    }
  },
  mutations: {
    setSelectedSort(state, selectedSort) {
      state.selectedSort = selectedSort;
    },
    removeProduct(state, product) {
      state.products = [...state.products].filter(p => p.id !== product.id);
    },
    createProduct(state, product) {
      state.products.unshift(product);
    }
  },
  namespaced: true
};
