<template>
  <div class="visual-nav">
    <router-link
      class="visual-nav__search-bar"
      to="/elements/search-bar/"
      data-label="Search Bar">
      <GsfSearchBar
        variant="repo"
        width="100%"/>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'VisualNav'
}
</script>

<style lang="scss" scoped>
a {
  border-radius: 10px;
  transition: none;
  position: relative;
  display: flex;
  padding: 1px;
  border: 1px solid transparent;

  &::before {
    content: attr(data-label);
    position: absolute;
    left: 12px;
    top: -1em;
    font-size: 24px;
    font-weight: 300;
    opacity: 0;
    transition: none;
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
</style>
