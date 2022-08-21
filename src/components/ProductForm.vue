<template>
    <div class="formBlock">
        <form
            class="form"
        >
            <my-input
                class="formItem"
                label="Наименование товара"
                type="text"
                placeholder="Введите наименование товара"
            />
            <my-textarea
                class="formItem"
                label="Описание товара"
                type="text"
                placeholder="Введите описание товара"
            />
            <my-input
                class="formItem"
                label="Ссылка на изображение товара"
                type="text"
                placeholder="Введите ссылку"
            />
            <my-input
                class="formItem"
                label="Цена товара"
                type="text"
                placeholder="Введите цену"
            />

            <my-button
                class="btn"
            >
                Добавить товар
            </my-button>
        </form>
    </div>
</template>

<script>

export default {

  // data() {
  //   return {
  //     product: {
  //       title: '',
  //       body: ''
  //     }
  //   };
  // },
  // methods: {
  //   createPost() {
  //     this.post.id = Date.now();
  //     this.$emit('create', this.product);
  //     this.post = {
  //       title: '',
  //       body: ''
  //     };
  //   }
  // }
};
</script>

<style scoped lang="scss">
.formBlock {
  padding: 24px;
  width: 332px;
  background: $second;
  box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.04), 0px 6px 10px rgba(0, 0, 0, 0.02);
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
