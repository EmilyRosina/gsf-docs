<template>
  <span
    class="gsf-icon"
    :style="`
      ${size !== 'auto' ? `width: ${size}px` : ''};
      ${size !== 'auto' ? `height: ${size}px` : ''};
      ${color ? `color: ${color};` : ''}
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
      default: '',
    },
    size: {
      type: [String, Number],
      default: 'auto',
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
  display: inline-flex;
  justify-content: center;
  width: 1.25em;
  height: 1.25em;
  fill: currentColor;
  vertical-align: middle;
  cursor: pointer;

  :deep(svg) {
    width: inherit;
    height: inherit;
  }
}
</style>
