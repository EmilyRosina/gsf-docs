<template>
  <span :class="['gsf-filter-tag', { 'gsf-filter-tag--not-block': notBlock }]">
    <GsfIcon
      v-if="icon"
      :icon="icon"
      class="gsf-filter-tag__icon"
      size="auto"/>
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
  height: 100%;
  padding: 0.4em 0.5em;
  border-radius: 0.3em;
  background: #2b313a;
  color: #fff;
  font-size: 0.9em;

  &--not-block {
    background: none;
    color: $dark-dimmed-text;
  }

  &__icon {
    width: 1.1em !important;
    height: 1.1em !important;
    margin-right: 0.4em;

    :deep(.gsf-icon) {
      &.gsf-repo-icon {
        margin-left: -0.1em;
      }
    }
  }

  &__text {
    display: inline-block;
    line-height: 0.8em;
    white-space: nowrap;
  }
}
</style>
