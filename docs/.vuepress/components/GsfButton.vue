<template>
  <div
    :class="['gsf-button', {
      'gsf-button--outline': outline,
      'gsf-button--error': theme === 'error',
      'gsf-button--success': theme === 'success',
      'gsf-button--sm': sm,
      'gsf-button--lg': lg,
    }]"
    :bind="$attrs">
    <slot/>
  </div>
</template>

<script>
const themes = ['grey', 'success', 'error']

export default {
  name: 'GsfButton',
  props: {
    theme: {
      type: String,
      validator: (theme) => themes.includes(theme),
      default: 'grey',
    },
    outline: {
      type: Boolean,
      default: false,
    },
    sm: {
      type: Boolean,
      default: false,
    },
    lg: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<style lang="scss" scoped>
@use "sass:color";
@import "@styles/vars";

.gsf-button {
  $btn-hover-opacity: 0.1;
  $btn-hover-darken: -3%;

  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.25em 0.75em;
  transition: 0.125s ease-in;
  border: 1px solid transparent;
  border-radius: 4px;
  outline: none;
  background: $grey-mid;
  color: white;
  font-size: 12px;
  cursor: pointer;

  + :deep(.gsf-button) {
    margin-left: 4px;
  }

  &:hover,
  &:active,
  &:focus {
    background: color.adjust($grey-mid, $lightness: $btn-hover-darken);
  }

  &--success,
  &--error,
  &--outline {
    @extend .gsf-button;
  }

  &--success {
    background: $success;

    &:hover,
    &:active,
    &:focus {
      background: color.adjust($success, $lightness: $btn-hover-darken);
    }
  }

  &--error {
    background: $error;

    &:hover,
    &:active,
    &:focus {
      background: color.adjust($error, $lightness: $btn-hover-darken);
    }
  }

  &[disabled] {
    opacity: 0.5;
    background: $disabled;
    cursor: default;
  }

  &--outline {
    border: 1px solid currentColor;
    background: none;
    color: $dark-dimmed-text;

    &:hover,
    &:active,
    &:focus {
      background: rgba($grey-mid, $btn-hover-opacity);
    }

    &[disabled] {
      background: none;
    }

    &.gsf-button {
      &--success {
        color: $success !important;

        &:hover,
        &:active,
        &:focus {
          background: rgba($success, $btn-hover-opacity);
        }
      }

      &--error {
        color: $error !important;

        &:hover,
        &:active,
        &:focus {
          background: rgba($error, $btn-hover-opacity);
        }
      }

      &[disabled] {
        background: none;
        color: $disabled;
      }
    }
  }

  &--sm {
    padding: 0.1em 0.65em;
    font-size: 0.75em;
  }

  &--lg {
    padding: 0.35em 0.75em;
    font-size: 0.75em;
  }
}
</style>
