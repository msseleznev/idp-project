<template>
    <label
        class="label"
        :for="label"
    > {{ label }}
        <textarea
            :id="label"
            class="textarea"
            :placeholder="placeholder"
            aria-label="placeholder"
            :value="modelValue"
            @input="updateTextarea"
        /></label>
</template>

<script>
export default {
  name: 'MyTextarea',
  props: {
    modelValue: {
      type: [String, Number],
      required: true
    },
    placeholder: {
      type: String,
      required: true
    },
    label: {
      type: String,
      default: ''
    }
  },
  methods: {
    updateTextarea(event) {
      this.$emit('update:modelValue', event.target.value);
    }
  }
};
</script>

<style scoped lang="scss">
.label {
  font-weight: 400;
  font-size: 10px;
  line-height: 13px;

  .textarea {
    width: 100%;
    background: $second;
    margin-top: 4px;
    border: none;
    box-shadow: 0px 2px 5px $shadow;
    border-radius: 4px;
    padding: 10px 15px;
    font-weight: 400;
    font-size: 12px;
    line-height: 15px;
    resize: none;
    overflow: hidden;
    min-height: 100px;
  }

  .textarea:focus {
    outline: none;
    box-shadow: 0 0 1px 1px #4d90f0;
  }
}

</style>
