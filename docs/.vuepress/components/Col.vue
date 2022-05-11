<template>
  <div
    :class="['col', {}]"
    :style="{
      ...(width ? { width } : {})
    }">
    <slot/>
  </div>
</template>

<script>
export default {
  name: 'Col',
  props: {
    width: {
      type: String,
      default: '50%',
    }
  }
}
</script>

<style lang="scss" scoped>
.col {
  display: flex;
  flex-direction: column;
}
</style>
