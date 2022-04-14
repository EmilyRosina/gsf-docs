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
@import '../styles/vars';

.gsf-beta {
  background: linear-gradient(145deg, $blue 35%, $pink 85%);
  color: white;
  font-weight: 500;
  border-radius: 1em;
  font-size: 10px;
  padding: 4px 8px;
  margin-right: 4px;
  line-height: 1em;
  align-self: center;
  margin-left: 0.5em;

  &--lg {
    font-size: 12px;
    padding: 4px 10px;
  }
}
</style>
