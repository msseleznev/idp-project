<template>
    <div class="formBlock">
        <form
            @submit.prevent
            class="form"
        >
            <my-input
                class="formItem"
                label="Наименование товара"
                type="text"
                placeholder="Введите наименование товара"
                v-model="product.title"
            />
            <my-textarea
                class="formItem"
                label="Описание товара"
                type="text"
                placeholder="Введите описание товара"
                v-model="product.body"
            />
            <my-input
                class="formItem"
                label="Ссылка на изображение товара"
                type="text"
                placeholder="Введите ссылку"
                v-model="product.img"
            />
            <my-input
                class="formItem"
                label="Цена товара"
                type="text"
                placeholder="Введите цену"
                v-model="product.price"
            />

            <my-button
                class="btn"
                @click="createProduct"
            >
                Добавить товар
            </my-button>
        </form>
    </div>
</template>

<script>

export default {

  data() {
    return {
      product: {
        title: '',
        body: '',
        img: '',
        price: 0
      }
    };
  },
  methods: {
    createProduct() {
      this.product.id = Date.now();
      this.$emit('create', this.product);
      this.product = {
        title: '',
        body: '',
        img: '',
        price: 0
      };
    }
  }
};
</script>

<style scoped lang="scss">
.formBlock {
  padding: 24px;
  width: 332px;
  background: $second;
  box-shadow: 0 20px 30px rgba(0, 0, 0, 0.04), 0 6px 10px rgba(0, 0, 0, 0.02);
  border-radius: 4px;
}
.form {
  display: flex;
  flex-direction: column;
}

.formItem {
  margin-top: 16px;
}

.btn  {
  align-self: flex-end;
  margin-top: 24px;
}

</style>
