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
@import "@styles/vars";

.gsf-filter-tag {
  display: inline-flex;
  align-items: center;
  width: fit-content;
  max-width: 200px;
  height: 100%;
  padding: 0 0.5em;
  border-radius: 3px;
  background: $grey-mid;
  color: #fff;
  font-size: 12px;

  &--not-block {
    background: none;
    color: $dark-dimmed-text;
  }

  &__icon {
    margin-right: 3px;

    :deep(.gsf-icon) {
      width: 13px;
      height: 13px;

      &.gsf-repo-icon {
        margin-left: -2px;
      }
    }
  }

  &__text {
    display: inline-block;
    white-space: nowrap;
  }
}
</style>
