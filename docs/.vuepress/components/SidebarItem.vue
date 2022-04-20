<template>
  <li
    :class="['gsf-sidebar-item', {
      'gsf-sidebar-item--active': isActive && depth === 0,
    }]">
    <AutoLink
      v-if="item.link"
      :class="itemClass"
      :item="item"/>
    <p
      v-else
      tabindex="0"
      :class="itemClass"
      @click="onClick"
      @keydown.enter="onClick">
      {{ item.text }}
      <span
        v-if="item.collapsible"
        :class="`arrow ${isOpen ? 'down' : 'right'}`"/>
    </p>

    <DropdownTransition v-if="item.children?.length">
      <ul v-show="isOpen" class="sidebar-item-children">
        <SidebarItem
          v-for="child in item.children"
          :key="`${depth}${child.text}${child.link}`"
          :item="child"
          :depth="depth + 1"/>
      </ul>
    </DropdownTransition>
  </li>
</template>

<script setup lang="ts">
import AutoLink from '@vuepress/theme-default/lib/client/components/AutoLink.vue'
import DropdownTransition from '@vuepress/theme-default/lib/client/components/DropdownTransition.vue'
import { computed, ref, toRefs } from 'vue'
import type { PropType } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import type { ResolvedSidebarItem } from '@vuepress/theme-default/lib/shared'
import { isActiveSidebarItem } from '@vuepress/theme-default/lib/client/utils'

const props = defineProps({
  item: {
    type: Object as PropType<ResolvedSidebarItem>,
    required: true,
  },
  depth: {
    type: Number,
    required: false,
    default: 0,
  },
})

const { item, depth } = toRefs(props)
const route = useRoute()
const router = useRouter()

const isActive = computed(() => isActiveSidebarItem(item.value, route))
const itemClass = computed(() => ({
  'sidebar-item': true,
  'sidebar-heading': depth.value === 0,
  'active': isActive.value,
  'collapsible': item.value.collapsible,
}))

const isOpen = ref(true)
const onClick = ref<(() => void) | undefined>(undefined)

if (item.value.collapsible) {
  // active item is open by default
  isOpen.value = isActive.value
  // toggle open status on click
  onClick.value = () => {
    isOpen.value = !isOpen.value
  }
  // reset open status after navigation
  router.afterEach(() => {
    isOpen.value = isActive.value
  })
}
</script>

<style lang="scss" scoped>
.gsf-sidebar-item {
  border-top: 1px solid transparent;
  border-bottom: 1px solid transparent;

  > * {
    border-left: 0 !important;
  }

  &--active {
    background: var(--gsf-gradient-bg);
    border: none;
    border-top: 1px solid;
    border-bottom: 1px solid;
    border-image: linear-gradient(
      105deg, #3370EA 50%,
      #D54FF0 75%) 1;
  }
}

.sidebar-item-children .sidebar-item-children .sidebar-item:not(.sidebar-heading) {
  padding: 0.25rem 1rem 0.25rem 2.75rem;
}

.sidebar-item:not(.sidebar-heading) + .sidebar-item-children {
  padding-left: 0;
}

.sidebar-item.sidebar-heading {
  font-size: 1.25em;
  padding: 0.75rem 1.5rem 0.75rem 1.25rem;
}
</style>