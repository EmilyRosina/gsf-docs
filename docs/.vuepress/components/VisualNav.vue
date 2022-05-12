<template>
  <div :class="['visual-nav', { 'visual-nav--is-hovering-element': hoveredElement !== '' }]">
    <router-link
      :class="['visual-nav__element visual-nav__element--search-bar', {
        'visual-nav--unhovered-element': hoveredElement !== 'search-bar'
      }]"
      to="/elements/search-bar/"
      data-label="Search Bar"
      @mouseenter="hoveredElement = 'search-bar'"
      @mouseleave="hoveredElement = ''">
      <GsfSearchBar
        variant="repo"
        width="100%"/>
    </router-link>

    <router-link
      :class="['visual-nav__element visual-nav__element--filters-menu', {
        'visual-nav--unhovered-element': hoveredElement !== 'filters-menu'
      }]"
      to="/elements/filters-menu/"
      data-label="Filters Menu"
      @mouseenter="hoveredElement = 'filters-menu'"
      @mouseleave="hoveredElement = ''">
      <GsfFiltersMenu width="100%"/>
    </router-link>

    <router-link
      :class="['visual-nav__element visual-nav__element--dates-menu', {
        'visual-nav--unhovered-element': hoveredElement !== 'dates-menu'
      }]"
      to="/elements/dates-menu/"
      data-label="Dates Menu"
      @mouseenter="hoveredElement = 'dates-menu'"
      @mouseleave="hoveredElement = ''">
      <GsfDatesMenu width="100%" is-valid is-range :populated-dates="['from', 'to']"/>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'VisualNav',
  data: () => ({
    hoveredElement: '',
  })
}
</script>

<style lang="scss" scoped>
a {
  display: flex;
  position: relative;
  padding: 1px;
  transition: none;
  border: 1px solid transparent;
  border-radius: 10px;

  :deep > * {
    text-decoration: none !important;
  }

  &::before {
    content: attr(data-label);
    position: absolute;
    top: -1em;
    left: 12px;
    transition: none;
    opacity: 0;
    font-size: 24px;
    font-weight: 300;
  }

  &:hover,
  &:focus {
    transition: all 0.35s ease;
    border-color: currentColor;

    &::before {
      transition: opacity 0.35s ease;
      opacity: 1;
    }
  }
}

.visual-nav {
  display: grid;
  grid-template-areas:
    "search-bar search-bar"
    "filters-menu dates-menu"
    "filters-menu .";

  &__element {
    transition: opacity 0.25s ease-out;

    &--search-bar {
      grid-area: search-bar;
    }

    &--filters-menu {
      grid-area: filters-menu;
    }

    &--dates-menu {
      grid-area: dates-menu;
    }
  }

  &--is-hovering-element .visual-nav--unhovered-element {
    opacity: 0.25;
  }
}
</style>
