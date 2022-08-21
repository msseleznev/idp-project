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
  box-shadow: 0 2px 4px $shadow;
  border-radius: 10px;
  cursor: pointer;
}
</style>
