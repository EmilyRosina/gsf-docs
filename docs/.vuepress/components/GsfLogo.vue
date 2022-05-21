<template>
  <div
    class="gsf-logo"
    :style="`
      height: ${isNaN(size) ? size : `${size}px`};
      width: ${isNaN(size) ? size : `${size}px`};
    `"/>
</template>

<script>
export default {
  name: 'GsfLogo',
  props: {
    size: {
      type: [Number, String],
      default: 24,
    },
  },
}
</script>

<style lang="scss" scoped>
.gsf-logo {
  background-image: url("/logo.png");
  background-repeat: no-repeat;
  background-size: contain;
}
</style>
