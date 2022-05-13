<template>
  <div
    class="search-bar"
    :style="{ fontSize: `${fontSize}%` }">
    <span class="search-bar__button">
      Filters
      <GsfIcon icon="caretFilled"/>
    </span>
    <span class="search-bar__input">
      <GsfIcon
        class="search-icon"
        icon="search"/>
      <GsfFilterTag
        v-if="isSaved"
        v-bind="{ filter }"/>
      <span
        v-else
        class="query">
        {{ query }}
      </span>
      <GsfIcon
        class="action-icon"
        :icon="actionIcon"/>
    </span>
  </div>
</template>

<script>
export default {
  name: 'GsfSearchBar',
  props: {
    variant: {
      type: String,
      validator: (variant) => ['new', 'repo', 'default', 'global'].includes(variant),
      default: 'default',
    },
    name: {
      type: String,
      default: '',
    },
    query: {
      type: String,
      default: 'is:open is:issue label:bug',
    },
    fontSize: {
      type: [Number, String],
      default: 140,
    },
  },
  computed: {
    isSaved () {
      return this.variant !== 'new'
    },
    actionIcon () {
      return {
        new: 'heartOutline',
        repo: 'heart',
        default: 'lock',
        global: 'heart',
      }[this.variant]
    },
    filter () {
      const { variant, name } = this
      return {
        isDefault: variant === 'default',
        isGlobal: variant === 'global',
        name: name || {
          default: 'Open PRs',
          repo: 'My work this sprint',
          global: 'All the bugs',
        }[variant]
      }
    }
  }
}
</script>

<style lang="scss">
@import "@styles/vars";

:root {
  --gsf-search-bar-button-bg: #{$grey-light};
  --gsf-search-bar-border: #bababa;
}

html.dark {
  --gsf-search-bar-button-bg: #{$grey-dark};
  --gsf-search-bar-border: #{$gh-search-text};
}
</style>

<style lang="scss" scoped>
@import "@styles/vars";

.search-bar {
  display: flex;
  width: 100%;
  line-height: 1.7;

  &__button,
  &__input {
    border: 1px solid var(--gsf-search-bar-border);
  }

  &__button {
    flex-shrink: 0;
    padding: 0.25em 0.75em 0.25em 1em;
    border-radius: 0.5em 0 0 0.5em;
    background: var(--gsf-search-bar-button-bg);
    color: var(--gsf-text-stark);
    font-size: 0.9em;
    cursor: pointer;

    .gsf-icon {
      width: 1em !important;
      height: 1em !important;
    }
  }

  &__input {
    display: flex;
    flex: 1 0 auto;
    align-items: center;
    padding: 0 0.5em;
    border-left: none;
    border-radius: 0 0.5em 0.5em 0;

    :deep(.gsf-icon) {
      cursor: default;
    }

    .search-icon {
      width: 1em !important;
      height: 1em !important;
      margin-right: 0.6em;
      color: var(--gsf-text-stark);
    }

    .gsf-filter-tag {
      height: auto;
      font-size: 0.7em;
      cursor: default;
    }

    .query {
      font-size: 0.8em;
    }

    .action-icon {
      width: 1em !important;
      height: 1em !important;
      margin-left: auto;
      color: var(--gsf-text-stark);

      &.gsf-icon,
      :deep(.gsf-icon) {
        cursor: pointer;
      }
    }
  }
}
</style>
