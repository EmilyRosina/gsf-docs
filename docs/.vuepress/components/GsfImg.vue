<template>
  <picture>
    <img
      dark-mode
      :src="`/svg/${path}-dark.svg`"
      v-bind="{ style, alt }">
    <img
      light-mode
      :src="`/svg/${path}.svg`"
      v-bind="{ style, alt }">
  </picture>
</template>

<script>
export default {
  name: 'GsfImg',
  props: {
    path: {
      type: String,
      required: true,
    },
    alt: {
      type: String,
      required: true,
    },
  },
  computed: {
    style () {
      const { height, width } = this.$attrs
      return {
        ...(height ? { height } : {}),
        ...(width ? { width } : {}),
      }
    }
  }
}
</script>

<style lang="scss" scoped>
html {
  &.dark {
    picture {
      img[light-mode] {
        display: none;
      }
    }
  }

  &:not(.dark) {
    picture {
      img[dark-mode] {
        display: none;
      }
    }
  }
}

picture {
  padding: 1em;
}
</style>
