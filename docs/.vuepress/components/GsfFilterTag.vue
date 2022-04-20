<template>
  <span :class="['gsf-filter-tag', { 'gsf-filter-tag--not-block': notBlock }]">
    <GsfIcon
      v-if="icon"
      class="gsf-filter-tag__icon"
      :icon="icon"/>
    <span class="gsf-filter-tag__text">{{ filter.name }}</span>
  </span>
</template>

<script>
import GsfIcon from './GsfIcon.vue'

export default {
  name: 'GsfFilterTag',
  components: {
    GsfIcon,
  },
  props: {
    filter: {
      type: Object,
      required: true,
    },
    notBlock: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    icon () {
      if (this.filter.isDefault) return 'github'
      return this.filter.isGlobal
        ? ''
        : 'repo'
    },
  },
}
</script>

<style lang="scss" scoped>
@import '../styles/vars';

.gsf-filter-tag {
  display: inline-flex;
  align-items: center;
  background: $dark-grey;
  color: #fff;
  height: 100%;
  align-items: center;
  font-size: 12px;
  max-width: 200px;
  border-radius: 3px;
  padding: 0 0.5em;
  width: fit-content;

  &--not-block {
    background: none;
    color: $dark_dimmed-text;
  }

  &__icon {
    margin-right: 3px;

    :deep(.gsf-icon) {
      height: 13px;
      width: 13px;

      &.gsf-repo-icon {
        margin-left: -2px;
      }
    }
  }

  &__text {
    white-space: nowrap;
    display: inline-block;
  }
}
</style>
