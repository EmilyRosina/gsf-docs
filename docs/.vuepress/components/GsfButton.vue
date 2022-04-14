<template>
  <div
    :class="['gsf-button', {
      'gsf-button--outline': outline,
      'gsf-button--error': theme === 'error',
      'gsf-button--success': theme === 'success',
      'gsf-button--sm': sm,
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
  },
}
</script>

<style lang="scss" scoped>
@import '../styles/vars';

.gsf-button {
  $btn-hover-opacity: 0.9;
  $btn-hover-darken: 3%;

  padding: 0.25em 0.75em;
  border-radius: 4px;
  font-size: 12px;
  outline: none;
  border: 1px solid transparent;
  background: $dark-grey;
  color: white;
  transition: 0.125s ease-in;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  + :deep(.gsf-button) {
    margin-left: 4px;
  }

  &:hover,
  &:active,
  &:focus {
    background: darken($dark-grey, $btn-hover-darken);
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
      background: darken($success, $btn-hover-darken);
    }
  }

  &--error {
    background: $error;

    &:hover,
    &:active,
    &:focus {
      background: darken($error, $btn-hover-darken);
    }
  }

  &[disabled] {
    background: $disabled;
    opacity: 0.5;
    cursor: default;
  }

  &--outline {
    background: none;
    border: 1px solid currentColor;
    color: $dark_dimmed-text;

    &:hover,
    &:active,
    &:focus {
      background: transparentize($dark-grey, $btn-hover-opacity);
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
          background: transparentize($success, $btn-hover-opacity);
        }
      }

      &--error {
        color: $error !important;

        &:hover,
        &:active,
        &:focus {
          background: transparentize($error, $btn-hover-opacity);
        }
      }

      &[disabled] {
        background: none;
        color: $disabled;
      }
    }
  }

  &--sm {
    font-size: 12px;
    padding: 0.1em 0.75em;
  }
}
</style>
