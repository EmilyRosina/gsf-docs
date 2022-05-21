<template>
  <div
    :class="['gsf-popup', {
      showcasing: !!showcase,
      [`showcasing--${showcase}`]: !!showcase,
    }]">
    <header class="gsf-popup__header">
      <GsfLogo size="1.3em"/>
      <span class="title">Github Saved Filters</span>
      <span class="version">v2.0.0</span>
      <span class="links">
        <span v-if="hasNewChanges" class="link link--new-changes">New!</span>
        <span v-else class="link link--options">Options</span>
        <span class="spacer">|</span>
        <span class="link link--docs">Docs</span>
        <GsfIcon
          class="link--donate"
          icon="kofiLogo"
          size="24"/>
      </span>
    </header>

    <main class="gsf-popup__content">
      <div class="domain-url__wrapper">
        <div class="domain-url">
          <label class="domain-url__label">Domain URL</label>
          <span class="domain-url__value">https://github.com</span>
        </div>
        <GsfIcon
          class="domain-url__info"
          icon="info"
          size="26"/>
      </div>
      <div class="filters filters--global">
        <label class="filters__title">Global filters</label>
        <ul class="filters__list">
          <li>Global pulls</li>
          <li>Global issues</li>
        </ul>
      </div>
      <div class="filters filters--repo">
        <label class="filters__title">Repos that have saved filters</label>
        <ul class="filters__list">
          <li>EmilyRosina/gsf-docs</li>
          <li>vuejs/vuex</li>
        </ul>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: 'GsfPopup',
  props: {
    hasNewChanges: {
      type: Boolean,
      default: false,
    },
    showcase: {
      type: String,
      default: ''
    },
  }
}
</script>

<style lang="scss" scoped>
@import "@styles/vars";

%not-showcased {
  opacity: 0.25;
  cursor: default;
}

.gsf-popup {
  display: flex;
  flex-direction: column;
  min-width: fit-content;
  margin: 0 auto;
  padding: 1em;
  border: 2px solid transparent;
  border-image: $gradient-border;
  background: var(--c-bg-lightest);
  font-size: 100%;

  header {
    display: flex;
    align-items: center;
    margin-bottom: 1.5em;

    .gsf-logo {
      margin-right: 0.4em;
    }

    .title {
      color: var(--gsf-text-stark);
      font-size: 1.05em;
      white-space: nowrap;
    }

    .version {
      align-self: flex-start;
      margin-top: -0.2em;
      margin-right: 0.5em;
      color: #567492;
      font-family: monospace;
      font-size: 0.9em;
    }

    .links {
      display: flex;
      align-items: center;
      margin-top: -0.2em;
      margin-left: auto;

      .link {
        margin-left: 0.25em;
        color: $pink;
        font-size: 0.87em;
        cursor: pointer;

        &--new-changes {
          display: flex;
          align-items: center;

          &::before {
            content: "";
            display: inline-block;
            width: 0.4em;
            height: 0.4em;
            margin-right: 0.25em;
            border-radius: 50%;
            background: $pink;
            box-shadow: 0 0 6px $pink;
          }
        }
      }

      .spacer {
        margin-left: 0.25em;
        color: var(--c-text);
        font-size: 1.25em;
      }

      .gsf-icon {
        margin-left: 0.6em;

        :deep(circle) {
          fill: none;
        }
      }
    }
  }

  main {
    .domain-url {
      display: flex;
      flex: 1 0 auto;
      align-items: stretch;
      overflow: hidden;
      border: 1px solid #96beff;
      border-radius: 2em;

      &__wrapper {
        display: flex;
        align-items: center;
        margin-bottom: 1.5em;
      }

      &__label {
        display: flex;
        align-items: center;
        padding: 0 0.5em 0 0.75em;
        background: #96beff;
        color: #333;
        font-size: 0.9em;
        font-weight: 600;
      }

      &__value {
        padding: 0.35em 1em;
        color: var(--c-text);
        font-size: 0.9em;
      }

      &__info {
        margin-left: 0.75em;
        color: $disabled;
      }
    }

    .filters {
      font-size: 0.9em;

      &__title {
        color: #96beff;
        font-weight: 500;
      }

      &__list {
        margin: 0.5em 0 1em;
        padding-left: 1em;
        color: $secondary;
        line-height: 1.2;
        list-style: none;

        li {
          cursor: pointer;
        }
      }
    }
  }

  &.showcasing {
    &--docs,
    &--options,
    &--donate {
      .gsf-popup__header > *:not(.links),
      .gsf-popup__content {
        @extend %not-showcased;
      }
    }

    &--docs .gsf-popup__header > .links > *:not(.link--docs) {
      @extend %not-showcased;
    }

    &--donate .gsf-popup__header > .links > *:not(.link--donate) {
      @extend %not-showcased;
    }

    &--options .gsf-popup__header > .links > *:not(.link--options):not(.link--new-changes) {
      @extend %not-showcased;
    }

    &--domain-url,
    &--global-filters,
    &--repo-filters {
      .gsf-popup__header {
        @extend %not-showcased;
      }
    }

    &--domain-url {
      .gsf-popup__content {
        .filters--global,
        .filters--repo {
          @extend %not-showcased;
        }
      }
    }

    &--global-filters {
      .gsf-popup__content {
        .domain-url__wrapper,
        .filters--repo {
          @extend %not-showcased;
        }
      }
    }

    &--repo-filters {
      .gsf-popup__content {
        .domain-url__wrapper,
        .filters--global {
          @extend %not-showcased;
        }
      }
    }
  }
}

@media screen and (max-width: 760px) {
  .gsf-popup {
    font-size: 90%;
  }
}

@media screen and (max-width: 600px) {
  .gsf-popup {
    font-size: 80%;
  }
}

@media screen and (max-width: 350px) {
  .gsf-popup {
    font-size: 70%;
  }
}
</style>
