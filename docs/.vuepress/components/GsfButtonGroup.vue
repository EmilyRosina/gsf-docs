<template>
  <span
    :id="`gsf-button-group--${id}`"
    :key="`gsf-button-group--${id}:${value}`"
    class="button-group option">
    <template
      v-for="{ text, value: optionValue } of options"
      :key="`option:${optionValue}`">
      <input
        :id="`${id}--${optionValue}`"
        class="button-group__input"
        type="radio"
        :name="`optionGroup:${id}`"
        :value="optionValue"
        :checked="value === optionValue"
        v-bind="{ disabled }">
      <label
        class="button-group__btn"
        :for="`${id}--${optionValue}`"
        v-bind="{ disabled }">
        {{ text }}
      </label>
    </template>
  </span>
</template>

<script>
export default {
  name: 'GsfButtonGroup',
  props: {
    options: {
      type: Array,
      required: true,
    },
    id: {
      type: String,
      required: true,
    },
    value: {
      type: [String, Number, Boolean],
      required: true,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<style lang="scss" scoped>
@import '../styles/vars';

.button-group {
  display: flex;

  &__btn {
    padding: 0 6px;
    border: 1px solid $dark_dimmed-text;
    user-select: none;
    cursor: pointer;
    font-size: 12px;
    border-radius: 0;
    margin-left: -1px;

    &:first-of-type {
      border-top-left-radius: 3px;
      border-bottom-left-radius: 3px;
      margin-left: 0;
    }
    &:last-of-type {
      border-top-right-radius: 3px;
      border-bottom-right-radius: 3px;
    }
  }

  &__input {
    display: none;

    &:checked,
    &:active:not([disabled]) {
      + .button-group__btn {
        background: $dark_dimmed-text;
        color: $dark_dimmed-bg-tertiary;
      }
    }
  }

  &[disabled] {
    .button-group__btn {
      cursor: not-allowed;
    }
  }
}
</style>