<template>
  <div
    class="filter-form"
    :style="{ fontSize: `${fontSize}%` }">
    <div class="filter-form__header">
      <img src="/logo.png">
      <span class="title">{{ isNew ? 'New' : 'Edit' }} filter</span>
      <GsfIcon icon="close"/>
    </div>

    <div class="filter-form__content">
      <div class="form-item name">
        <label>Name</label>
        <span class="input input--with-counter">
          {{ isNew ? '' : name }}
          <span class="counter">{{ 30 - (isNew ? '' : name).length }}/30</span>
        </span>
      </div>
      <div class="form-item query">
        <label>Query</label>
        <span class="input">{{ query }}</span>
      </div>
    </div>

    <div class="filter-form__footer">
      <label>Filter scope</label>
      <GsfButtonGroup v-if="!isGlobal" :options="['Global', 'This repo']"/>
      <span class="buttons">
        <GsfButton v-if="!isNew" lg outline theme="error">Delete</GsfButton>
        <GsfButton lg outline>Reset</GsfButton>
        <GsfButton lg theme="success">Save</GsfButton>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GsfFilterForm',
  props: {
    isGlobal: {
      type: Boolean,
      default: false,
    },
    isNew: {
      type: Boolean,
      default: false,
    },
    name: {
      type: String,
      default: 'Bugs'
    },
    query: {
      type: String,
      default: 'is:open is:issue label:bug'
    },
    fontSize: {
      type: [Number, String],
      default: 120,
    },
  }
}
</script>

<style lang="scss">
@import "@styles/vars";

:root {
  --gsf-filter-form-bg: #f4f4f4;
  --gsf-filter-form-input: #ebebeb;
  --gsf-filter-form-border: #888;
  --gsf-filter-form-highlight: #586069;
  --gsf-filter-form-selected: #ddd;
  --gsf-filter-form-trash-color: #{$error};
}

html.dark {
  --gsf-filter-form-bg: #2c323a;
  --gsf-filter-form-input: #1d1d1d;
  --gsf-filter-form-border: #586069;
  --gsf-filter-form-highlight: #bababa;
  --gsf-filter-form-selected: #373e47;
  --gsf-filter-form-trash-color: #f9606c;
}
</style>

<style lang="scss" scoped>
@import "@styles/vars";

.filter-form {
  max-width: 28em;
  margin: auto;
  border: 1px solid var(--gsf-filter-form-border);
  border-radius: 0 0 0.3em 0.3em;
  background: var(--gsf-filter-form-bg);
  color: var(--c-text);

  label {
    margin-bottom: 0.15em;
    font-size: 0.75em;
    font-weight: 600;
  }

  &__content,
  &__footer {
    padding: 0.75em;
  }

  &__header {
    display: flex;
    padding: 0.35em 0.35em 0.25em 0.75em;
    border-bottom: 1px solid var(--gsf-filter-form-border);

    img {
      width: 1em;
      height: 1em;
      margin-right: 0.5em;
    }

    .title {
      font-size: 0.9em;
      font-weight: 600;
    }

    .gsf-icon {
      margin-left: auto;
    }
  }

  &__content {
    padding-top: 1em;
    padding-bottom: 0;

    .form-item {
      display: flex;
      flex-direction: column;

      .input {
        min-height: 1.2em;
        padding: 0.5em;
        border: 1px solid var(--gsf-filter-form-border);
        border-radius: 0.3em;
        background: var(--gsf-filter-form-input);
        font-size: 0.65em;
        cursor: text;

        &--with-counter {
          position: relative;

          .counter {
            position: absolute;
            right: 0.15em;
            bottom: 0.15em;
            font-size: 0.9em;
          }
        }
      }

      &:last-child {
        margin-top: 0.75em;

        .input {
          min-height: 2.75em;
        }
      }
    }
  }

  &__footer {
    display: grid;
    grid-template-areas:
      "label     buttons"
      "btn-group buttons";
    align-items: flex-end;
    justify-content: space-between;

    label {
      grid-area: label;
    }

    .button-group {
      grid-area: btn-group;

      :deep(.button-group__btn) {
        font-size: 0.75em;
      }
    }

    .buttons {
      grid-area: buttons;
    }
  }
}
</style>
