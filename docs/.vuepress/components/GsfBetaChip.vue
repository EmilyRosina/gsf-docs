<template>
  <span
    :class="['gsf-beta tooltipped tooltipped-e', {
      'gsf-beta--lg': lg,
    }]"
    aria-label="Try GSF beta feature">
    Beta
  </span>
</template>

<script>
export default {
  name: 'GsfBetaChip',
  props: {
    lg: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<style lang="scss" scoped>
@import "@styles/vars";

.gsf-beta {
  align-self: center;
  margin-right: 4px;
  margin-left: 0.5em;
  padding: 4px 8px;
  border-radius: 1em;
  background: linear-gradient(145deg, $blue 35%, $pink 85%);
  color: white;
  font-size: 10px;
  font-weight: 500;
  line-height: 1em;

  &--lg {
    padding: 4px 10px;
    font-size: 12px;
  }
}
</style>
