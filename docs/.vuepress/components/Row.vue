<template>
  <div :class="['row', {}]">
    <slot/>
  </div>
</template>

<script>
export default {
  name: 'Row',
}
</script>

<style lang="scss" scoped>
.row {
  display: flex;
  flex-direction: row;

  .col {
    flex: 1 0 auto;
  }
}
</style>
