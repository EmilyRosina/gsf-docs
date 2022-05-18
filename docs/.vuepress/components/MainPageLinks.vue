<template>
  <div class="main-page-links">
    <div class="links">
      <!-- Source: https://codepen.io/dbenmore/pen/ExVxeyv -->
      <ul
        class="links__list"
        :style="`--item-total:${pageLinks.length}`">
        <li
          v-for="(link, index) of pageLinks"
          :key="index"
          class="links__item"
          :style="`--item-count:${index++}`"
          @mouseenter="elementPreview = link.elementPreview ?? ''"
          @mouseleave="elementPreview = ''">
          <router-link
            class="links__link"
            :to="link.to">
            <GsfIcon
              class="links__icon"
              :icon="link.icon"
              size="50"/>
            <span class="links__text">{{ link.name }}</span>
          </router-link>
        </li>
      </ul>
    </div>
    <div class="element-preview">
      <GsfDatesMenu
        :class="['element', { 'element--visible': elementPreview === 'dates-menu' }]"
        is-valid
        :populated-dates="['on']"/>
      <GsfFiltersMenu
        :class="['element', { 'element--visible': elementPreview === 'filters-menu' }]"
        mini/>
      <GsfSearchBar
        :class="['element', { 'element--visible': elementPreview === 'search-bar' }]"
        variant="repo"/>
      <GsfFilterForm
        :class="['element', { 'element--visible': elementPreview === 'filter-form' }]"/>
      <GsfPopup
        :class="['element', { 'element--visible': elementPreview === 'popup' }]"/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MainPageLinks',
  props: {
    pageName: {
      type: String,
      required: true,
    }
  },
  data: () => ({
    elementPreview: '',
  }),
  computed: {
    pageLinks () {
      return {
        howTo: [
          {
            name: 'Create a Filter',
            to: '/how-to/create-filter',
            icon: 'createFilter',
          },
          {
            name: 'Apply a Filter',
            to: '/how-to/apply-filter',
            icon: 'applyFilter',
          },
          {
            name: 'Edit a Filter',
            to: '/how-to/edit-filter',
            icon: 'editFilter',
          },
          {
            name: 'Delete a Filter',
            to: '/how-to/delete-filter',
            icon: 'deleteFilter',
          },
          {
            name: 'Share Filters',
            to: '/how-to/share-filters',
            icon: 'shareFilter',
          },
          {
            name: 'Backup Filters',
            to: '/how-to/backup-filters',
            icon: 'backupFilters',
          },
          {
            name: 'Import Filters',
            to: '/how-to/import-filters',
            icon: 'importFilters',
          },
        ],
        elements: [
          {
            name: 'Search Bar',
            to: '/elements/search-bar/',
            icon: 'searchBar',
            elementPreview: 'search-bar',
          },
          {
            name: 'Filters Menu',
            to: '/elements/filters-menu/filters',
            icon: 'filtersMenu',
            elementPreview: 'filters-menu',
          },
          {
            name: 'Filter Form',
            to: '/elements/filter-form/create-filter',
            icon: 'filterForm',
            elementPreview: 'filter-form',
          },
          {
            name: 'Dates Menu',
            to: '/elements/dates-menu/query-a-date',
            icon: 'datesMenu',
            elementPreview: 'dates-menu',
          },
          {
            name: 'Popup',
            to: '/elements/popup/',
            icon: 'popup',
            elementPreview: 'popup',
          },
          {
            name: 'Options',
            to: '/elements/options/',
            icon: 'options',
            elementPreview: 'options',
          },
        ],
      }[this.pageName]
    }
  }
}
</script>

<style lang="scss">
@import "@styles/vars";

:root {
  --base-grid: 8px;
  --link-size: 9em;
  --mpl-pink: #{$pink};
}

html.dark {
  --mpl-pink: #{$pink-dark};
}
</style>

<style lang="scss" scoped>
@import "@styles/vars";

.links__list {
  position: relative;
  list-style: none;
}

.links {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 35em;
  overflow: hidden;
  color: var(--c-text);

  &__item {
    --angle: calc(360deg / var(--item-total));
    --rotation: calc(255deg + var(--angle) * var(--item-count));
    --spacing: calc(var(--item-total) - calc(var(--item-total) / 2)) * 1.5;

    position: absolute;
    top: 0;
    left: 0;
    width: var(--link-size);
    height: var(--link-size);
    margin-top: calc(var(--link-size) / -2);
    margin-left: calc(var(--link-size) / -2);
    transform:
      rotate(var(--rotation))
      translate(calc(var(--link-size) + var(--base-grid) * var(--spacing)))
      rotate(calc(var(--rotation) * -1));
  }

  &__icon {
    margin-bottom: 2em;
    transition: all 0.2s ease-in-out;
  }

  &__text {
    position: absolute;
    bottom: 5em;
    left: 0;
    width: 100%;
    transition: all 0.2s ease-in-out;
    animation: text 1s ease-in-out forwards;
    font-size: 0.9em;
    text-align: center;
  }

  &__link:is(a) {
    display: flex;
    position: relative;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    animation: on-load 0.3s ease-in-out forwards;
    animation-delay: calc(var(--item-count) * 150ms);
    border-radius: 50%;
    opacity: 0;
    background: rgb(51 112 234 / 10%);
    color: var(--c-text-light);
    text-decoration: none;

    &::after {
      content: "";
      display: block;
      position: absolute;
      top: -2px;
      left: -2px;
      width: var(--link-size);
      height: var(--link-size);
      transform: none;
      transition: all 0.3s cubic-bezier(0.53, -0.67, 0.73, 0.74);
      border: 2px dashed $purple;
      border-radius: 50%;
      opacity: 0;
      background-color: transparent;
    }

    &:hover {
      background: var(--gsf-gradient-bg);
      color: var(--mpl-pink);

      .links__icon {
        width: 65px !important;
        height: 65px !important;
        margin: 0;
        transform: translateY(calc(var(--base-grid) * -2));
        transition: all 0.2s ease-in-out;
        color: var(--mpl-pink);
      }

      .links__text {
        display: block;
        bottom: 4.75em;
        transition: all 0.2s ease-in-out;
        color: var(--mpl-pink);
      }

      &::after {
        transform: scale(1.1);
        transition: all 0.3s cubic-bezier(0.37, 0.74, 0.15, 1.65);
        opacity: 1;
      }
    }
  }

  &__icon.gsf-icon {
    width: calc(var(--base-grid) * 8);
    height: calc(var(--base-grid) * 8);
    transition: all 0.2s ease-in-out;
  }
}

.element-preview {
  display: grid;
  position: relative;
  grid-template-areas: "element";
  justify-items: center;
  align-items: flex-start;
  max-height: 200px;
  overflow: hidden;
  mask-image: $gradient-fade-bottom;

  .element {
    grid-area: element;
    transition: none;
    opacity: 0;

    :deep(*) {
      cursor: default !important;
      user-select: none;
    }

    &--visible {
      transition: opacity 0.5s ease-in;
      opacity: 1;
    }
  }
}

@media screen and (max-width: 400px) {
  .links {
    --link-size: 8em;
  }
}

@media screen and (max-width: 860px) {
  .links__list {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  .links__item {
    position: relative;
    margin: 10px;
    transform: none;
  }

  .links__icon {
    margin-bottom: 0;
    transform: translateY(calc(var(--base-grid) * -2));
  }

  .element-preview {
    display: none;
  }
}

@keyframes on-load {
  0% {
    transform: scale(0.3);
    opacity: 0;
  }

  70% {
    transform: scale(1.1);
    opacity: 0.7;
  }

  100% {
    transform: scale(1);
    opacity: 1;
  }
}

@keyframes text {
  0% {
    transform: scale(0.3) translateY(0);
    opacity: 0;
  }

  60% {
    opacity: 0;
  }

  100% {
    transform: scale(1) translateY(calc(var(--base-grid) * 5));
    opacity: 1;
  }
}
</style>
