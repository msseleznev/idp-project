<template>
    <select
        class="select"
        :value="modelValue"
        @change="changeOption"
        aria-label="modelValue"
    >
        <option
            disabled
            value=""
        >
            Выберите из списка
        </option>
        <option
            v-for="option in options"
            :key="option.value"
            :value="option.value"
        >
            {{ option.name }}
        </option>
    </select>
</template>

<script>
export default {
  name: 'MySelect',
  props: {
    modelValue: {
      type: String,
      required: true
    },
    options: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    changeOption(event) {
      this.$emit('update:modelValue', event.target.value);
    }
  }
};
</script>

<style scoped lang="scss">
.select {
  width: 160px;
  height: 36px;
  padding: 10px 11px;
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
  border-radius: 4px;
  color: $secondTextLight;
  background-color: $second;
  background-image: none;
  border: none;
  box-shadow: 0 2px 5px $shadow;
  -webkit-transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s;
  transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s;
  cursor:pointer;
  &:focus {
    border-color: #dfdfdf;
    outline: 0;
    box-shadow: inset 0 1px 1px rgba(0,0,0,.075), 0 0 8px rgba(223, 223, 223, 0.6);
  }
}
</style>
