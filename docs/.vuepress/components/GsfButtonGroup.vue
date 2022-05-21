<template>
  <span class="button-group option">
    <template
      v-for="text of options"
      :key="`option:${text}`">
      <label
        :class="['button-group__btn', {
          'button-group__btn--selected': text === (selected || options[0])
        }]">
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
    selected: {
      type: String,
      default: ''
    }
  },
}
</script>

<style lang="scss" scoped>
@import "@styles/vars";

.button-group {
  display: inline-flex;

  &__btn {
    margin-left: -1px;
    padding: 0.1em 0.5em;
    border: 1px solid $dark-dimmed-text;
    border-radius: 0;
    font-size: 12px;
    font-weight: 500;
    cursor: pointer;
    user-select: none;

    &:first-of-type {
      margin-left: 0;
      border-top-left-radius: 0.2em;
      border-bottom-left-radius: 0.2em;
    }

    &:last-of-type {
      border-top-right-radius: 0.2em;
      border-bottom-right-radius: 0.2em;
    }

    &--selected {
      background: $dark-dimmed-text;
      color: $dark-dimmed-bg-tertiary;
    }
  }
}
</style>
