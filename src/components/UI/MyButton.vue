<template>
    <button class="btn">
        <slot />
    </button>
</template>

<script>
export default {
  name: 'MyButton'
};
</script>

<style scoped lang="scss">
.btn{
  padding: 10px 15px;
  width: 100%;
  background: none;
  border: none;
  color: $second;
  background: $btnActive;
  box-shadow: 0px 2px 4px $shadow;
  border-radius: 10px;
  cursor: pointer;
}
.btn:active {
  box-shadow: 0px 0px 4px $btnActive;
}
</style>
