<template>
<div class="links">
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
            icon: 'gear',
          },
          {
            name: 'Apply a Filter',
            to: '/how-to/apply-filter/',
            icon: 'gear',
          },
          {
            name: 'Edit a Filter',
            to: '/how-to/edit-filter/',
            icon: 'gear',
          },
          {
            name: 'Delete a Filter',
            to: '/how-to/delete-filter/',
            icon: 'gear',
          },
          {
            name: 'Share a Filter',
            to: '/how-to/share-filter/',
            icon: 'gear',
          },
        ],
        elements: [
          {
            name: 'Search Bar',
            to: '/elements/search-bar/',
            icon: 'gear',
          },
          {
            name: 'Filters Menu',
            to: '/elements/filters-menu/',
            icon: 'gear',
          },
          {
            name: 'Filter Form',
            to: '/elements/filter-form/',
            icon: 'gear',
          },
          {
            name: 'Dates Menu',
            to: '/elements/dates-menu/',
            icon: 'gear',
          },
          {
            name: 'Popup',
            to: '/elements/popup',
            icon: 'gear',
          },
          {
            name: 'Options',
            to: '/elements/options',
            icon: 'gear',
          },
        ],
        extras: [
          {
            name: 'Backup',
            to: '/extras/backup/',
            icon: 'gear',
          },
          {
            name: 'Import',
            to: '/extras/import/',
            icon: 'gear',
          },
        ]
      }[this.pageName]
    }
  }
}
</script>

<style>
:root {
  --base-grid: 10px;
  --link-size: calc(var(--base-grid) * 20);
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
  min-height: 100vh;
}

.links__item {
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

.links__link {
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

  &:hover {
    background: var(--gsf-gradient-bg);
  }
}

.links__icon {
  width: calc(var(--base-grid)*8);
  height: calc(var(--base-grid)*8);
  transition: all .3s ease-in-out;
  color: var(--c-text);
}

.links__text {
  position: absolute;
  width: 100%;
  left: 0;
  text-align: center;
  font-size: calc(var(--base-grid) * 2);
  display: none;
  bottom: calc(var(--base-grid) * 8.5);
  animation: text 0.3s ease-in-out forwards;
  color: $purple;
}

.links__link:after {
  content: "";
  background-color: transparent;
  width: var(--link-size);
  height: var(--link-size);
  border: 2px dashed $secondary;
  display: block;
  border-radius: 50%;
  position: absolute;
  top: -2px;
  left: -2px;
  transition: all .3s cubic-bezier(0.53, -0.67, 0.73, 0.74);
  transform: none;
  opacity: 0;
}

.links__link:hover .links__icon {
  transition: all 0.3s ease-in-out;
  transform: translateY(calc(var(--base-grid) * -1));
}

.links__link:hover .links__text {
  display: block;
}

.links__link:hover:after {
  transition: all .3s cubic-bezier(0.37, 0.74, 0.15, 1.65);
  transform: scale(1.1);
  opacity: 1;
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
