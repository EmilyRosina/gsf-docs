<template>
  <span
    class="gsf-icon"
    :style="`
      width: ${size}px;
      height: ${size}px;
      color: ${color};
    `"
    v-html="theIcon"/>
</template>

<script>
import icons from '../utils/icons'

export default {
  name: 'GsfIcon',
  props: {
    icon: {
      type: String,
      validator: (icon) => Object.keys(icons).includes(icon),
      required: true,
    },
    color: {
      type: String,
      default: 'currentColor',
    },
    size: {
      type: [String, Number],
      default: '16',
    },
  },
  computed: {
    theIcon () {
      return icons[this.icon]
    },
  },
}
</script>

<style lang="scss" scoped>
.gsf-icon {
  fill: currentColor;
  display: inline-flex;
  cursor: pointer;

  :deep(svg) {
    width: inherit;
    height: inherit;
  }
}
</style>
