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
  display: flex;
  position: relative;
  padding: 1px;
  transition: none;
  border: 1px solid transparent;
  border-radius: 10px;

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
</style>
