<template>
  <div class="dates-menu">
    <div class="dates-menu__header">
      <GsfLogo/>
      <span>Apply dates to your query</span>
      <GsfIcon
        icon="close"
        size="auto"/>
    </div>
    <div
      :empty="isEmpty"
      class="dates-menu__row dates-menu__row--example">
      <span class="title">archived</span>
      <GsfButton
        theme="stark"
        :disabled="!isValid"
        outline
        sm>
        Add
      </GsfButton>
      <template v-if="isRange">
        <span
          aria-label="from"
          :invalid="!isValid"
          class="input input-1 input--from">
          {{ dateShown.from }}
        </span>
        <span
          aria-label="to"
          :invalid="!isValid"
          class="input input-2 input--to">
          {{ dateShown.to }}
        </span>
      </template>
      <span
        v-else
        aria-label="on"
        :invalid="!isValid"
        class="input input-1 input--on">
        {{ dateShown.on }}
      </span>
      <GsfIcon
        v-if="!isRange"
        icon="calendar"
        size="16"/>
      <GsfIcon
        v-else
        icon="calendarRange"
        size="16"/>
      <GsfIcon
        icon="trash"
        size="18"/>
    </div>
    <div class="dates-menu__row">
      <span>closed</span>
      <GsfButton outline sm theme="stark">Add</GsfButton>
    </div>
    <div class="dates-menu__row">
      <span>created</span>
      <GsfButton outline sm theme="stark">Add</GsfButton>
    </div>
    <div class="dates-menu__row">
      <span>merged</span>
      <GsfButton outline sm theme="stark">Add</GsfButton>
    </div>
    <div class="dates-menu__row">
      <span>updated</span>
      <GsfButton outline sm theme="stark">Add</GsfButton>
    </div>
    <div class="dates-menu__footer">
      <GsfButton
        outline
        theme="stark"
        :disabled="isEmpty || hasNoChanges">
        Reset
      </GsfButton>
      <GsfButton
        theme="success"
        :disabled="!isValid || hasNoChanges">
        Apply
      </GsfButton>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GsfDatesMenu',
  props: {
    isRange: {
      type: Boolean,
      default: false,
    },
    isEmpty: {
      type: Boolean,
      default: false,
    },
    isValid: {
      type: Boolean,
      default: false,
    },
    populatedDates: {
      type: Object,
      default: () => [],
    },
    hasNoChanges: {
      type: Boolean,
      default: false,
    }
  },
  computed: {
    dateShown () {
      const { populatedDates } = this
      const empty = 'dd/mm/yyyy'
      const firstDate = '01/04/2020'
      const endDate = '01/10/2021'
      return {
        on: populatedDates.includes('on') ? firstDate : empty,
        from: populatedDates.includes('from') ? firstDate : empty,
        to: populatedDates.includes('to') ? endDate : empty,
      }
    }
  }
}
</script>

<style lang="scss">
@import "@styles/vars";

:root {
  --gsf-dates-menu-bg: #f4f4f4;
  --gsf-dates-menu-border: #bababa;
  --gsf-dates-menu-button-outline: #{$gh-search-text};
  --gsf-dates-menu-input-color: #{$gh-search-text};
  --gsf-dates-menu-trash-color: #{$error};
}

html.dark {
  --gsf-dates-menu-bg: #{$grey-dark};
  --gsf-dates-menu-border: #{$gh-search-text};
  --gsf-dates-menu-button-outline: #{$grey-lightest};
  --gsf-dates-menu-input-color: #{$grey-lightest};
  --gsf-dates-menu-trash-color: #f9606c;
}
</style>

<style lang="scss" scoped>
@import "@styles/vars";

.dates-menu,
.dates-menu * {
  transition: all 0.1s ease;
  user-select: none;
}

.dates-menu__header .gsf-close-icon,
.dates-menu__row .gsf-icon {
  cursor: pointer;
}

.dates-menu {
  width: 20em;
  max-width: 20em;
  border: 1px solid var(--gsf-dates-menu-border);
  border-radius: 6px;
  background: var(--gsf-dates-menu-bg);
  color: var(--c-text);
  font-size: 120%;

  &__header {
    display: flex;
    align-items: center;
    padding: 0.75em 0.75em 0.75em 1.25em;
    font-size: 0.85em;
    font-weight: 600;

    .gsf-logo {
      margin-right: 0.5em;
    }

    .gsf-icon {
      width: 1.25em;
      height: 1.25em;
      margin-left: auto;
    }
  }

  &__row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.75em 1.25em;
    border-top: 1px solid var(--gsf-dates-menu-border);
    font-size: 0.85em;
    font-weight: 600;

    .gsf-button {
      padding: 0.25em 0.5em;
      font-size: 0.75em;
      font-weight: 600;
    }

    &--example {
      display: grid;
      grid-template:
        "title    .         button    button"     2em
        "input-1  input-2   cal-icon  trash-icon" 1.35em;
      grid-template-columns: 1fr 1fr 2em 1.25em;

      .title {
        grid-area: title;
        align-self: flex-start;
      }

      .gsf-button {
        grid-area: button;
        justify-self: flex-end;
        align-self: flex-start;
      }

      .input {
        position: relative;
        padding: 0.25em 0.3em 0.2em;
        border: 1px solid var(--gsf-dates-menu-input-color);
        border-radius: 0.25em;
        color: var(--gsf-dates-menu-input-color);
        font-size: 0.8em;
        font-weight: 500;
        cursor: pointer;

        &::before {
          content: attr(aria-label);
          display: inline-block;
          position: absolute;
          top: -0.65em;
          left: 0.65em;
          background: var(--gsf-dates-menu-bg);
          font-size: 0.75em;
        }

        &[invalid="true"] {
          border-color: #d47a51;
          color: #d47a51;
        }
      }

      .input-1 {
        grid-area: input-1;
      }

      .input-2 {
        grid-area: input-2;
        margin-left: 0.5em;
      }

      .gsf-icon {
        grid-area: cal-icon;
        justify-self: flex-end;
      }

      .gsf-icon:last-child {
        grid-area: trash-icon;
        color: var(--gsf-dates-menu-trash-color);
      }

      &[empty="true"] {
        grid-template-rows: 1.35em 0;

        .title {
          align-self: center;
        }

        .input,
        .gsf-icon {
          display: none;
        }
      }
    }
  }

  &__footer {
    display: flex;
    justify-content: flex-end;
    padding: 0.5em;
    border-top: 1px solid var(--gsf-dates-menu-border);
  }
}
</style>
