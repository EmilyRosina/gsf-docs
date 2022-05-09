<template>
  <li
    :class="['gsf-sidebar-item', {
      'gsf-sidebar-item--active': isActive && depth === 0,
    }]">
    <AutoLink
      v-if="item.link"
      :class="['sidebar-item', itemClass]"
      :item="item">
      <template #before>
        <GsfIcon
          v-if="!depth"
          size="20"
          :icon="pageIcon[item.text]"/>
      </template>
    </AutoLink>
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
  'sidebar-heading': depth.value === 0,
  'active': isActive.value,
  'collapsible': item.value.collapsible,
}))
const pageIcon = computed(() => ({
  'How to': 'howToPage',
  'Elements': 'elementsPage',
  'Extras': 'extrasPage',
  'About': 'aboutPage',
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
    border: none;
    border-top: 1px solid;
    border-bottom: 1px solid;
    background: var(--gsf-gradient-bg);
    border-image:
      linear-gradient(
        105deg,
        #3370ea 50%,
        #d54ff0 75%
      ) 1;
  }
}

.sidebar-item-children .sidebar-item-children .sidebar-item:not(.sidebar-heading) {
  padding: 0.35rem 1rem 0.35rem 4rem;
}

.sidebar-item:not(.sidebar-heading) + .sidebar-item-children {
  padding-left: 0;
}

.sidebar-item.sidebar-heading.sidebar-heading {
  padding: 24px;
  color: var(--gsf-text-stark);
  font-size: 16px;
  font-weight: 400;

  .gsf-icon {
    padding-right: 12px;
  }

  &:not(.active):hover {
    background: var(--gsf-sidebar-item-hover);
  }
}
</style>
