<template>
  <div
    :class="[`filters-menu show-queries--${showQueries}`, {
      showcasing: !!showcase,
      [`showcasing--${showcase}`]: !!showcase,
      'show-queries': showQueries !== 'never',
      'has-custom-search': search !== '',
    }]">
    <div class="filters-menu__header">
      <GsfLogo size="1.5em"/>
      <span class="input">{{ search ? search : 'Search saved filters...' }}</span>
      <GsfIcon icon="gear"/>
    </div>
    <div v-if="showOptions" class="filters-menu__options">
      <span class="option">
        <span class="option__label">Match search on</span>
        <span class="option__items">
          <span class="option__item">Name</span>
          <span class="option__item">Query</span>
          <span class="option__item selected">Both</span>
        </span>
      </span>
      <span class="option">
        <span class="option__label">Show query</span>
        <span class="option__items">
          <span class="option__item show-queries-on-hover">On hover</span>
          <span class="option__item show-queries-always">Always</span>
          <span class="option__item show-queries-never">Never</span>
        </span>
      </span>
    </div>

    <div v-if="!hidePinned" class="filters-menu__pinned">
      <div
        v-for="{ name, query } of pinnedFilters"
        :key="`pinnedFilter:${name}`"
        class="filter pinned-filter">
        <GsfIcon icon="pin"/>
        <GsfIcon icon="repo"/>
        <span class="name">{{ name }}</span>
        <span class="query">{{ query }}</span>
      </div>
    </div>

    <div class="filters-menu__global">
      <header>
        <span class="title">Saved Global Filters</span>
        <span class="count">{{ globalFilters.length }}</span>
      </header>
      <span
        v-for="{ name, query, selected } of globalFilters"
        :key="`globalFilter:${name}`"
        :class="['filter global-filter', { 'filter--selected': selected }]">
        {{ name }}
        <span
          v-if="selected"
          class="actions">
           <GsfIcon icon="trash"/>
           <GsfIcon icon="edit"/>
           <GsfIcon icon="pin"/>
        </span>
        <span class="query">{{ query }}</span>
      </span>
    </div>

    <div class="filters-menu__repo">
      <header>
        <span class="title">Saved Repo Filters</span>
        <span class="count">{{ repoFilters.length }}</span>
      </header>
      <span
        v-for="{ name, query, selected } of repoFilters"
        :key="`repoFilter:${name}`"
        :class="['filter', { 'filter--selected': selected }]">
        <GsfIcon icon="repo"/>
        {{ name }}
        <span
          v-if="selected"
          class="actions">
           <GsfIcon icon="trash"/>
           <GsfIcon icon="edit"/>
           <GsfIcon icon="pin"/>
        </span>
        <span class="query">{{ query }}</span>
      </span>
    </div>

    <div class="filters-menu__default">
      <header>
        <span class="title">Default Filters</span>
      </header>
      <span
        v-for="{ name, query, selected } of defaultFilters"
        :key="`defaultFilter:${name}`"
        :class="['filter', { 'filter--selected': selected }]">
        <GsfIcon icon="github"/>
        {{ name }}
        <span
          v-if="selected"
          class="actions">
           <GsfIcon icon="trash"/>
           <GsfIcon icon="edit"/>
           <GsfIcon icon="pin"/>
        </span>
        <span class="query">{{ query }}</span>
      </span>
    </div>

    <div class="filters-menu__link filters-menu__link--import">
      <GsfIcon icon="symlink"/>
      Import filters
    </div>
    <div class="filters-menu__link filters-menu__link--backup">
      <GsfIcon icon="backupRestore"/>
      Backup filters
    </div>
    <div class="filters-menu__link filters-menu__link--docs">
      <GsfIcon icon="externalLink"/>
      View advanced search syntax
    </div>
  </div>
</template>

<script>
export default {
  name: 'GsfFiltersMenu',
  props: {
    showOptions: {
      type: Boolean,
      default: false,
    },
    hideHovered: {
      type: Boolean,
      default: false
    },
    hidePinned: {
      type: Boolean,
      default: false
    },
    showQueries: {
      type: String,
      default: 'never',
    },
    matchOn: {
      type: String,
      default: 'both',
    },
    showcase: {
      type: String,
      default: '',
    },
    search: {
      type: String,
      default: '',
    },
    mini: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    pinnedFilters () {
      const filters = [
        {
          name: 'Bugs',
          query: 'is:open label:bug',
        },
      ].filter(this.matchesSearch)
      return filters
    },
    globalFilters () {
      const filters = [
        {
          name: 'High bugs',
          query: 'is:open label:bug label:high',
        },
        {
          name: 'My closed items this month',
          query: 'assignee:@me closed:>2022-05-01 closed:<2022-06-01',
        },
      ].filter(this.matchesSearch)
      return this.mini ? filters.slice(0, 2) : filters
    },
    repoFilters () {
      const filters = [
        {
          name: 'My Chores',
          query: 'is:open label:chores assignee:@me',
        },
        {
          name: 'Enhancements',
          query: 'is:open label:enhancement',
          selected: !this.hideHovered,
        },
        {
          name: 'Opened this week',
          query: 'is:issue is:open created:>2022-05-16',
        },
      ].filter(this.matchesSearch)
      return this.mini ? filters.slice(0, 2) : filters
    },
    defaultFilters () {
      const filters = [
        {
          name: 'Everything assigned to you',
          query: 'is:open assignee:@me',
        },
        {
          name: 'Everything mentioning you',
          query: 'is:open mentions:@me',
        },
        {
          name: 'Open issues and pull requests',
          query: 'is:open',
        },
      ].filter(this.matchesSearch)
      return this.mini ? filters.slice(0, 2) : filters
    }
  },
  methods: {
    matchesSearch ({ name, query }) {
      return this.search === '' || {
        both: `${name}  ${query}`.includes(this.search),
        name: name.includes(this.search),
        query: query.includes(this.search),
      }[this.matchOn]
    }
  }
}
</script>

<style lang="scss">
@import "@styles/vars";

:root {
  --gsf-filters-menu-bg: #f4f4f4;
  --gsf-filters-menu-input: #ebebeb;
  --gsf-filters-menu-border: #888;
  --gsf-filters-menu-highlight: #586069;
  --gsf-filters-menu-selected: #ddd;
  --gsf-filters-menu-trash-color: #{$error};
}

html.dark {
  --gsf-filters-menu-bg: #{$grey-dark};
  --gsf-filters-menu-input: #111;
  --gsf-filters-menu-border: #586069;
  --gsf-filters-menu-highlight: #bababa;
  --gsf-filters-menu-selected: #373e47;
  --gsf-filters-menu-trash-color: #f9606c;
}
</style>

<style lang="scss" scoped>
@import "@styles/vars";

.filters-menu {
  width: 20em;
  height: auto;
  border: 1px solid var(--gsf-filters-menu-border);
  border-radius: 0.5em;
  background: var(--gsf-filters-menu-bg);
  color: var(--c-text);
  font-size: 110%;
  user-select: none;

  &__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.3em 0.5em;

    .input {
      display: flex;
      flex: 1 0 auto;
      margin: 0 0.5em;
      padding: 0.5em 0.8em;
      border: 1px solid var(--gsf-filters-menu-border);
      border-radius: 0.5em;
      background: var(--gsf-filters-menu-input);
      color: var(--gsf-filters-menu-border);
      font-size: 0.9em;
      cursor: pointer;
    }

    .gsf-icon {
      width: 1.5em;
      height: 1.5em;
      color: var(--gsf-filters-menu-border);
    }
  }

  &__options {
    padding: 1.35em;
    font-size: 0.85em;

    .option {
      display: flex;
      justify-content: space-between;
      color: var(--gsf-filters-menu-highlight);
      font-weight: 500;

      &__items {
        display: flex;
        border: 1px solid var(--gsf-filters-menu-highlight);
        border-radius: 0.4em;

        .option__item {
          padding: 0.1em 0.5em;
          cursor: pointer;

          &:not(:first-child):not(:last-child) {
            border-right: 1px solid var(--gsf-filters-menu-highlight);
            border-left: 1px solid var(--gsf-filters-menu-highlight);
          }
        }

        .selected {
          background: var(--gsf-filters-menu-highlight);
          color: var(--gsf-filters-menu-bg);
        }
      }

      &:not(:first-child) {
        margin-top: 0.35em;
      }
    }
  }

  &__pinned {
    .pinned-filter {
      margin: 0.7em 0.5em;
      padding: 0.3em 0.5em;
      border-radius: 0.5em;
      background: var(--gsf-filters-menu-selected);
      color: var(--gsf-text-stark);
      font-size: 0.8em;

      .gsf-icon {
        &:first-child {
          margin-right: 0.3em;
          font-size: 1.2em;
        }

        &:nth-child(2) {
          margin-right: 0.2em;
          font-size: 0.9em;
        }
      }
    }
  }

  &__global,
  &__repo,
  &__default {
    display: flex;
    flex-direction: column;

    .filter {
      display: flex;
      align-items: center;
      padding: 0.5em 0.25em 0.5em 1em;
      font-size: 0.9em;

      :is(.gsf-icon) {
        margin-right: 0.2em;
        font-size: 1.1em;
      }

      .actions {
        display: none;
        margin-left: auto;
      }

      &--selected {
        background: var(--gsf-filters-menu-selected);

        .actions {
          display: inline-flex;

          .gsf-icon {
            margin-right: 0;
            font-size: 1.3em;
          }

          :is(.gsf-trash-icon) {
            color: var(--gsf-filters-menu-trash-color);
          }
        }
      }
    }

    header {
      display: flex;
      justify-content: space-between;
      padding: 0.75em 0.5em 0.25em;

      .title {
        color: var(--gsf-text-stark);
        font-size: 0.9em;
        font-weight: 600;
      }

      .count {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 2em;
        height: 2em;
        border-radius: 50%;
        background: var(--gsf-filters-menu-border);
        color: #fff;
        font-size: 0.75em;
      }
    }
  }

  &__global,
  &__repo,
  &__default,
  &__link {
    border-top: 1px solid var(--gsf-filters-menu-border);
    font-size: 0.85em;
  }

  &__link {
    padding: 0.65em;
    padding: 0.5em;
    cursor: pointer;
  }

  .filter {
    flex-wrap: wrap;
    cursor: pointer;

    .query {
      display: none;
      padding-left: 2.1em;
      font-size: 0.8em;
    }

    &.pinned-filter .query {
      padding-left: 2.6em;
    }

    &.global-filter .query {
      padding-left: 0;
    }
  }

  &.showcasing {
    $dull-amount: 0.2;

    &--links {
      .filters-menu {
        &__header,
        &__options,
        &__pinned,
        &__global,
        &__repo,
        &__default,
        &__link--docs {
          opacity: $dull-amount;
          cursor: default;
          user-select: none;

          * {
            cursor: default;
            user-select: none;
          }
        }

        &__link--backup {
          border-bottom: 1px solid var(--gsf-filters-menu-border);
        }
      }
    }

    &--backup .filters-menu,
    &--import .filters-menu {
      &__header,
      &__options,
      &__pinned,
      &__global,
      &__repo,
      &__default {
        opacity: $dull-amount;
        cursor: default;
        user-select: none;

        * {
          cursor: default;
          user-select: none;
        }
      }
    }

    &--backup .filters-menu {
      &__link:not(.filters-menu__link--backup) {
        opacity: $dull-amount;
        cursor: default;
        user-select: none;

        * {
          cursor: default;
          user-select: none;
        }
      }

      &__link--backup {
        border-bottom: 1px solid var(--gsf-filters-menu-border);
      }
    }

    &--import .filters-menu {
      &__link:not(.filters-menu__link--import) {
        opacity: $dull-amount;
        cursor: default;
        user-select: none;

        * {
          cursor: default;
          user-select: none;
        }
      }

      &__link--import {
        border-bottom: 1px solid var(--gsf-filters-menu-border);
      }
    }
  }

  %selected-query-option {
    background: var(--gsf-filters-menu-highlight);
    color: var(--gsf-filters-menu-bg);
  }

  &.show-queries--never {
    .option .show-queries-never {
      @extend %selected-query-option;
    }
  }

  &.show-queries--always {
    .filter .query {
      display: block;
      width: 100%;
    }

    .option .show-queries-always {
      @extend %selected-query-option;
    }
  }

  &.show-queries--on-hover {
    .filter--selected .query {
      display: block;
      width: 100%;
    }

    .option .show-queries-on-hover {
      @extend %selected-query-option;
    }
  }

  &.has-custom-search {
    .input {
      color: var(--c-text);
    }
  }
}

@media screen and (max-width: 760px) {
  .filters-menu {
    font-size: 90%;
  }
}

@media screen and (max-width: 600px) {
  .filters-menu {
    font-size: 80%;
  }
}
</style>
