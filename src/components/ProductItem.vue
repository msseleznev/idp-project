<template>
    <div class="productBlock">
        <div
            class="removeBtn"
            @click="$emit('remove', product)"
            @keydown="$emit('remove', product)"
        >
            <img
                style="position: absolute; z-index: 0;"
                :src="trash"
                alt="my-logo"
            >
        </div>
        <div class="imgWrapper">
            <img
                class="img"
                alt="product photo"
                :src="product.img"
            >
        </div>
        <div class="contentItem">
            <div class="title">
                {{ product.title }}
            </div>
            <div class="body">
                {{ product.body }}
            </div>
            <div class="price">
                {{ product.price.toLocaleString('ru-RU') }} руб.
            </div>
        </div>
    </div>
</template>

<script>
import trash from '@/assets/trash.svg';

export default {
  props: {
    product: {
      type: Object,
      required: true
    }
  },
  setup() {
    return {
      trash
    };
  }

};
</script>

<style scoped lang="scss">
.productBlock {
  width: 330px;
  height: 430px;
  margin: 0 0 16px 16px;
  background: $second;
  color: $text;
  box-shadow: 0 20px 30px rgba(0, 0, 0, 0.04), 0 6px 10px rgba(0, 0, 0, 0.02);
  border-radius: 4px;
  transition: 0.5s;
  @media screen and (max-width: 700px) {
    margin: 0 0 16px 0;
  }

  &:hover {
    cursor: pointer;
    box-shadow: 0 20px 30px rgba(0, 0, 0, 0.11), 0 6px 10px rgba(0, 0, 0, 0.32);
    transform: scale(1.02);
    transition: 0.5s;
    .removeBtn {
      padding: 8px;
      position: absolute;
      width: 32px;
      height: 32px;
      border-radius: 10px;
      left: 305px;
      top: -10px;
      background: $warning;
      z-index: 1;
    }
  }

  .imgWrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 200px;
    border-radius: 4px 4px 0 0;
    overflow: hidden;
    position: relative;

    .img {
      //object-fit: cover;
      max-width: 100%;
      max-height: 100%;
      //height: 200px;
      //object-position: 0 0;
    }
  }

  .contentItem {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 16px 16px 24px 16px;
    width: 100%;
    height: 230px;

    .title {
      font-weight: 600;
      font-size: 20px;
      line-height: 25px;
    }

    .body {
      min-height: 100px;
      font-weight: 400;
      font-size: 16px;
      line-height: 20px;
      text-align: justify;
    }

    .price {
      font-weight: 600;
      font-size: 24px;
      line-height: 30px;
    }
  }

}

</style>
