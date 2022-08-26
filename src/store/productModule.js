export const productModule = {
  state: () => ({
    products: [{
      id: 1,
      img: 'https://c.dns-shop.ru/thumb/st1/fit/500/500/5a773af1c239097a4ce9f4dd34ca30c2/5a8d91e717a10f42e29eb93e85eb924239c1c728b1b9cb9eecfb531b6d27df96.jpg.webp',
      title: '14.2" Ноутбук Apple MacBook Pro серебристый',
      body: '3024x1964, mini-LED, Apple M1 Pro, ядра: 8 + 2, RAM 16 ГБ, SSD 512 ГБ, Apple M1 Pro 14-Core , macOS ',
      price: 254999
    }, {
      id: 2,
      img: 'https://c.dns-shop.ru/thumb/st1/fit/500/500/61f7965fa49ebbcd1fc5ccd2d2073680/93ba7a81a786695bdf44bb60000b82231d2c42bdddbb48c877cb0b559af6f608.jpg.webp',
      title: 'Смартфон Apple iPhone 13 256 ГБ синий',
      body: '6x(1.8 ГГц, 3.2 ГГц), 1 SIM, OLED, 2532х1170, камера 12+12 Мп, NFC, 5G, GPS',
      price: 98999
    }, {
      id: 3,
      img: 'https://c.dns-shop.ru/thumb/st4/fit/500/500/21708b6e2551f8bfc525f565a2134a78/f867d7fb9cb2a879fe2ab0c404784fa317e6dec4482b03d3d710d7680facdbac.jpg.webp',
      title: 'Смарт-часы Apple Watch Series 7 45mm',
      body: 'корпус - черный, ремешок - черный, OLED, 484x396, IPX6, Bluetooth, Wi-Fi, для iOS 15 и выше',
      price: 45999
    }, {
      id: 4,
      img: 'https://c.dns-shop.ru/thumb/st1/fit/500/500/62e9f2b68380913cb05af1ac6fed42ec/753d782b12db70a0a59a5462320d4d403c5310719b4b7d2a0b26022f5117d895.jpg.webp',
      title: '24" Моноблок Apple iMac',
      body: 'Apple M1, 4x2 ГГц, IPS, 4480х2520, 16 ГБ LPDDR4X, SSD 256 ГБ, macOS',
      price: 189999
    }, {
      id: 5,
      img: 'https://c.dns-shop.ru/thumb/st1/fit/wm/0/0/31d68c3f630c15c4745f495b3f2627dc/ddcfc067359d9b6cc5ca0bd8f2a2ecbac7bd5ec164a420a8d3efc76abafa67bb.jpg.webp',
      title: 'Наушники TWS Apple AirPods Pro белые',
      body: '2.0, внутриканальные, Bluetooth, 5.0, с функцией б/п зарядки',
      price: 20999
    }, {
      id: 6,
      img: 'https://c.dns-shop.ru/thumb/st4/fit/500/500/0d9397b8694f1075a0115c3fbc59c4a4/c9f1cfa88b47647f19f5794229c6e77f33354d25295f3328fc44a73e2e97b56f.jpg.webp',
      title: 'Bluetooth гарнитура Apple AirPods Max синий',
      body: '2.0, охватывающие, Bluetooth, 5.0 ',
      price: 62999
    },
    {
      id: 7,
      img: 'https://c.dns-shop.ru/thumb/st1/fit/500/500/0f4aa919fae707fc0e9ce9c55ed93eb0/444fc526ec10782d1d039f1ac1de4c70e49eb4e54ea8d7e57b5054f8277728d2.jpg.webp',
      title: '10.2" Планшет Apple iPad 2021 Wi-Fi 64 ГБ серый',
      body: '2160×1620, IPS, 6x2.66 ГГц, BT, iPadOS',
      price: 45999
    },
    {
      id: 8,
      img: 'https://c.dns-shop.ru/thumb/st4/fit/500/500/29db81d93e98e6a445d6856266722f9d/75078ff01ffddbbb8c22e3fb712498b72f4895bfe607e886952bfeb059f8cef1.jpg.webp',
      title: '10.9" Планшет Apple iPad Air 2020 Wi-Fi 256 ГБ серый',
      body: '2360x1640, IPS, 6x3.1 ГГц, BT, iPadOS',
      price: 70499
    },
    {
      id: 9,
      img: 'https://c.dns-shop.ru/thumb/st4/fit/500/500/b38dab00490a401a1a7fac1c421d9721/135bf80ed325e9fdda1ea5dd5fccfa04343bbc328659e2c32608e6e17bcc8569.jpg.webp',
      title: '4.7" Смартфон Apple iPhone SE 2020 64 ГБ красный',
      body: '6x(2.5 ГГц), 3 Гб, 1 SIM, IPS, 1334x750, камера 12 Мп, NFC, 4G, GPS, 1821 мА*ч',
      price: 39999
    }],
    selectedSort: '',
    sortOptions: [{
      id: 1, value: 'title', name: 'По наименованию'
    }, {
      id: 2, value: 'priceMax', name: 'По цене max'
    }, {
      id: 3, value: 'priceMin', name: 'По цене min'
    }, {
      id: 4, value: 'default', name: 'По умолчанию'
    }]
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
