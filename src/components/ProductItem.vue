<template>
    <div class="productBlock">
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
                {{ product.price }} руб.
            </div>
        </div>
    </div>
</template>

<script>

export default {
  props: {
    product: {
      type: Object,
      required: true
    }
  }

};
</script>

<style scoped lang="scss">
.productBlock {
  width: 330px;
  height: 430px;
  margin: 0 0 16px 16px;
  background: $second;
  box-shadow: 0 20px 30px rgba(0, 0, 0, 0.04), 0 6px 10px rgba(0, 0, 0, 0.02);
  border-radius: 4px;
  overflow: hidden;
  transition: 0.5s;
  @media screen and (max-width: 700px) {
    margin: 0 0 16px 0;
  }

  &:hover {
    cursor: pointer;
    box-shadow: 0 20px 30px rgba(0, 0, 0, 0.11), 0 6px 10px rgba(0, 0, 0, 0.32);
    transform: scale(1.02);
    transition: 0.5s;
  }

  .imgWrapper {
    width: 100%;
    height: 200px;

    .img {
      object-fit: cover;
      width: 100%;
      height: 200px;
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
