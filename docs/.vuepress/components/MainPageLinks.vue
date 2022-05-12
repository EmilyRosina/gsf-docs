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
        :class="['element', { 'element--visible': elementPreview === 'dates-menu' }]"/>
      <GsfFiltersMenu
        :class="['element', { 'element--visible': elementPreview === 'filters-menu' }]"
        height="420px"/>
      <GsfSearchBar
        :class="['element', { 'element--visible': elementPreview === 'search-bar' }]"
        width="100%"/>
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
            to: '/how-to/create-filter/',
            icon: 'createFilter',
          },
          {
            name: 'Apply a Filter',
            to: '/how-to/apply-filter/',
            icon: 'applyFilter',
          },
          {
            name: 'Edit a Filter',
            to: '/how-to/edit-filter/',
            icon: 'editFilter',
          },
          {
            name: 'Delete a Filter',
            to: '/how-to/delete-filter/',
            icon: 'deleteFilter',
          },
          {
            name: 'Share Filters',
            to: '/how-to/share-filters/',
            icon: 'shareFilter',
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
            to: '/elements/filters-menu/',
            icon: 'filtersMenu',
            elementPreview: 'filters-menu',
          },
          {
            name: 'Filter Form',
            to: '/elements/filter-form/',
            icon: 'filterForm',
          },
          {
            name: 'Dates Menu',
            to: '/elements/dates-menu/',
            icon: 'datesMenu',
            elementPreview: 'dates-menu',
          },
          {
            name: 'Popup',
            to: '/elements/popup',
            icon: 'popup',
          },
          {
            name: 'Options',
            to: '/elements/options',
            icon: 'options',
          },
        ],
        extras: [
          {
            name: 'Backup',
            to: '/extras/backup/',
            icon: 'backupFilters',
          },
          {
            name: 'Import',
            to: '/extras/import/',
            icon: 'importFilters',
          },
        ]
      }[this.pageName]
    }
  }
}
</script>

<style>
:root {
  --base-grid: 8px;
  --link-size: 9em;
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
  min-height: 30em;
  overflow: hidden;
  color: var(--c-text);
  color: $purple;

  &__item {
    position: absolute;
    top: 0;
    left: 0;
    width: var(--link-size);
    height: var(--link-size);
    margin-top: calc(var(--link-size) / -2);
    margin-left: calc(var(--link-size) / -2);
    transform: rotate(var(--rotation)) translate(calc(var(--link-size) + var(--base-grid) * 2)) rotate(calc(var(--rotation) * -1));

    --angle: calc(360deg / var(--item-total));
    --rotation: calc(140deg + var(--angle) * var(--item-count));
  }

  &__text {
    display: none;
    position: absolute;
    bottom: 5em;
    left: 0;
    width: 100%;
    animation: text 0.2s ease-in-out forwards;
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
      color: $purple;

      .links__icon {
        transform: translateY(calc(var(--base-grid) * -2));
        transition: all 0.2s ease-in-out;
        color: $pink;
      }

      .links__text {
        display: block;
        color: var(--c-text);
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
  grid-template-areas: "element";
  justify-items: center;
  align-items: flex-start;
  margin-top: 2em;

  .element {
    grid-area: element;
    transition: none;
    opacity: 0;

    &--visible {
      transition: opacity 0.5s ease-in;
      opacity: 1;
    }
  }
}

@media screen and (max-width: 800px) {
  .links__list {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
}

@media screen and (max-width: 600px) {
  .links__item {
    position: relative;
    margin: 10px;
    transform: none;
  }

  .links__text {
    display: block;
    bottom: 5.5em;
    font-size: 0.8em;
  }

  .links__icon {
    transform: translateY(calc(var(--base-grid) * -2));
  }
}

@media screen and (max-width: 400px) {
  .links {
    --link-size: 8em;
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

  100% {
    transform: scale(1) translateY(calc(var(--base-grid) * 5));
    opacity: 1;
  }
}
</style>
