<template>
  <div :class="['col', {}]">
    <slot/>
  </div>
</template>

<script>
export default {
  name: 'Col',
}
</script>

<style lang="scss" scoped>
.col {
  display: flex;
  flex-direction: column;
}
</style>
