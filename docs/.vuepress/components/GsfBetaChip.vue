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
  margin-right: 0.35em;
  margin-left: 0.25em;
  padding: 0.25em 0.5em;
  border-radius: 1em;
  background:
    linear-gradient(
      145deg,
      rgb($blue, 75%) 35%,
      rgb($pink, 75%) 85%
    );
  color: white;
  font-size: 12px;
  font-weight: 500;
  line-height: 1em;
  text-shadow: 0 0 2px #000;
  vertical-align: middle;

  &--lg {
    padding: 4px 10px;
    font-size: 12px;
  }
}
</style>
