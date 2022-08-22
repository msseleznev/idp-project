<template>
    <label
        class="label"
        :for="label"
    > <div style="display: flex">
          {{ label }}<div
              v-if="true"
              class="circle"
          />
      </div>
        <input
            :id="label"
            class="input"
            type="text"
            :placeholder="placeholder"
            aria-label="placeholder"
            :value="modelValue"
            @input="updateInput"
        >
    </label>
</template>

<script>
export default {
  name: 'MyInput',
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
    updateInput(event) {
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
  .input {
    width: 100%;
    height: 36px;
    background: $second;
    margin-top: 4px;
    border: none;
    box-shadow: 0 2px 5px $shadow;
    border-radius: 4px;
    padding: 10px 15px;
    font-weight: 400;
    font-size: 12px;
    line-height: 15px;
  }
  .input:focus {
    outline: none;
    box-shadow: 0 0 1px 1px #4d90f0;
  }
  .circle {
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background: red;
  }
}

</style>
