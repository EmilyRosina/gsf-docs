<template>
  <div class="filters-menu">
    <div class="filters-menu__header">
      <img src="/logo.png">
      <span class="input">Search saved filters...</span>
      <GsfIcon icon="gear"/>
    </div>
    <div v-if="showOptions" class="filters-menu__options">
      <span class="option">
        <span class="option__label">Match search on</span>
        <span class="option__items">
          <span>Name</span>
          <span>Query</span>
          <span class="selected">Both</span>
        </span>
      </span>
      <span class="option">
        <span class="option__label">Show query</span>
        <span class="option__items">
          <span>On hover</span>
          <span>Always</span>
          <span class="selected">Never</span>
        </span>
      </span>
    </div>
    <div class="filters-menu__pinned">
      <div class="filter pinned-filter">
        <GsfIcon icon="pin"/>
        <GsfIcon icon="repo"/>
        <span class="name">Bugs</span>
      </div>
    </div>
    <div class="filters-menu__global">
      <header>
        <span class="title">Saved Global Filters</span>
        <span class="count">2</span>
      </header>
      <span class="filter">My issues this week</span>
      <span class="filter">My issues this month</span>
    </div>
    <div class="filters-menu__repo">
      <header>
        <span class="title">Saved Repo Filters</span>
        <span class="count">4</span>
      </header>
      <span class="filter">
        <GsfIcon icon="repo"/>
        Chores
      </span>
      <span :class="['filter', { 'filter--selected': !hideHovered }]">
        <GsfIcon icon="repo"/>
        Enhancements
        <span class="actions">
           <GsfIcon icon="trash"/>
           <GsfIcon icon="edit"/>
           <GsfIcon icon="pin"/>
        </span>
      </span>
      <span class="filter">
        <GsfIcon icon="repo"/>
        Needs spec
      </span>
      <span class="filter">
        <GsfIcon icon="repo"/>
        Opened this week
      </span>
    </div>
    <div class="filters-menu__default">
      <header>
        <span class="title">Default Filters</span>
      </header>
      <span class="filter">
        <GsfIcon icon="github"/>
        Everything assigned to you
      </span>
      <span class="filter">
        <GsfIcon icon="github"/>
        Everything mentioning you
      </span>
      <span class="filter">
        <GsfIcon icon="github"/>
        Open issues
      </span>
      <span class="filter">
        <GsfIcon icon="github"/>
        Open issues and pull requests
      </span>
      <span class="filter">
        <GsfIcon icon="github"/>
        Your issues
      </span>
    </div>
    <div class="filters-menu__link">
      <GsfIcon icon="symlink"/>
      Import filters
    </div>
    <div class="filters-menu__link">
      <GsfIcon icon="backupRestore"/>
      Backup filters
    </div>
    <div class="filters-menu__link">
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
  --gsf-dates-menu-trash-color: #{$error};
}

html.dark {
  --gsf-filters-menu-bg: #{$grey-dark};
  --gsf-filters-menu-input: #111;
  --gsf-filters-menu-border: #586069;
  --gsf-filters-menu-highlight: #bababa;
  --gsf-filters-menu-selected: #373e47;
  --gsf-dates-menu-trash-color: #f9606c;
}
</style>

<style lang="scss" scoped>
@import "@styles/vars";

.filters-menu {
  width: 20em;
  max-width: 20em;
  border: 1px solid var(--gsf-filters-menu-border);
  border-radius: 0.5em;
  background: var(--gsf-filters-menu-bg);
  font-size: 105%;
  user-select: none;

  &__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.3em 0.5em;

    img {
      width: 1.5em;
    }

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

        > * {
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
            color: var(--gsf-dates-menu-trash-color);
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
    cursor: pointer;
  }
}
</style>
