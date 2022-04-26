<template>
<div class="links">
  <!-- Source: https://codepen.io/dbenmore/pen/ExVxeyv -->
  <ul
    class="links__list"
    :style="`--item-total:${pageLinks.length}`">
    <li
      v-for="(link, index) of pageLinks"
      :key="index"
      class="links__item"
      :style="`--item-count:${index++}`">
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
            name: 'Share a Filter',
            to: '/how-to/share-filter/',
            icon: 'shareFilter',
          },
        ],
        elements: [
          {
            name: 'Search Bar',
            to: '/elements/search-bar/',
            icon: 'searchBar',
          },
          {
            name: 'Filters Menu',
            to: '/elements/filters-menu/',
            icon: 'filtersMenu',
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
@import '../styles/vars';

.links__list {
  position: relative;
  list-style: none;
}

.links {
  color: var(--c-text);
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 30em;
  overflow: hidden;
  color: $purple;

  &__item {
    width: var(--link-size);
    height: var(--link-size);
    position: absolute;
    top: 0;
    left: 0;
    margin-top: calc(var(--link-size)/-2);
    margin-left: calc(var(--link-size)/-2);
    --angle: calc(360deg/var(--item-total));
    --rotation: calc(140deg + var(--angle)*var(--item-count));
    transform: rotate(var(--rotation)) translate(calc(var(--link-size) + var(--base-grid)*2)) rotate(calc(var(--rotation)*-1));
  }

  &__link:is(a) {
    opacity: 0;
    animation: on-load .3s ease-in-out forwards;
    animation-delay: calc(var(--item-count)*150ms);
    width: 100%;
    height: 100%;
    border-radius: 50%;
    position: relative;
    background: rgba(51, 112, 234, 0.1);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    color: var(--c-text-light);

    &::after {
      content: "";
      background-color: transparent;
      width: var(--link-size);
      height: var(--link-size);
      border: 2px dashed $purple;
      display: block;
      border-radius: 50%;
      position: absolute;
      top: -2px;
      left: -2px;
      transition: all .3s cubic-bezier(0.53, -0.67, 0.73, 0.74);
      transform: none;
      opacity: 0;
    }

    &:hover {
      background: var(--gsf-gradient-bg);
      color: $purple;

      .links__icon {
        transition: all 0.2s ease-in-out;
        transform: translateY(calc(var(--base-grid) * -2));
        color: $pink;
      }

      .links__text {
        display: block;
        color: var(--c-text);
      }

      &::after {
        transition: all .3s cubic-bezier(0.37, 0.74, 0.15, 1.65);
        transform: scale(1.1);
        opacity: 1;
      }
    }
  }

  &__icon.gsf-icon {
    width: calc(var(--base-grid)*8);
    height: calc(var(--base-grid)*8);
    transition: all 0.2s ease-in-out;
  }

  &__text {
    position: absolute;
    width: 100%;
    left: 0;
    text-align: center;
    font-size: 0.9em;
    display: none;
    bottom: 5em;
    animation: text 0.2s ease-in-out forwards;
  }
}

@media screen and (max-width: 600px) {
  .links__item {
    transform: none;
    position: relative;
    transform: none;
    position: relative;
    margin: 10px;
  }

  .links__text {
    display: block;
    font-size: 0.8em;
    bottom: 5.5em;
  }

  .links__icon {
    transform: translateY(calc(var(--base-grid) * -2));
  }
}

@media screen and (max-width: 800px) {
  .links__list {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
}

@keyframes on-load {
  0% {
    opacity: 0;
    transform: scale(.3);
  }
  70% {
    opacity: .7;
    transform: scale(1.1);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}

@keyframes text {
  0% {
    opacity: 0;
    transform: scale(0.3) translateY(0);
  }
  100% {
    opacity: 1;
    transform: scale(1) translateY(calc(var(--base-grid)*5));
  }
}
</style>
