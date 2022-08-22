<template>
    <button
        :class="{btnActive: isActive, btnDisable: !isActive}"
        :disabled="!isActive"
    >
        <slot />
    </button>
</template>

<script>
export default {
  name: 'MyButton',
  props: {
    isActive: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style scoped lang="scss">
.btnActive{
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
.btnActive:active {
  box-shadow: 0 0 4px $btnActive;
}
.btnDisable{
  padding: 10px 15px;
  width: 100%;
  background: none;
  border: none;
  color: $secondTextLight;
  background: $bntDisable;
  border-radius: 10px;
  cursor: not-allowed;
}
</style>
