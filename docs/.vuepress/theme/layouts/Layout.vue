<script setup>
import ParentLayout from '@vuepress/theme-default/lib/client/layouts/Layout.vue'

const url = {
  donateKOFI: 'https://ko-fi.com/auroraskye',
  feedback: 'https://github.com/EmilyRosina/gsf.docs/discussions',
  roadmap: 'https://portal.productboard.com/4uroraskye-portal/2-github-saved-filters-roadmap/tabs/5-planned',
}

const links =[
  { text: 'Roadmap', link: url.roadmap },
  { text: 'Feedback', link: url.feedback },
  { text: 'Buy me a coffee', link: url.donateKOFI },
]
</script>

<template>
  <ParentLayout>
    <template #sidebar-top>
      <router-link
        :to="$route.path.includes('home') ? '/' : '/home'"
        class="sidebar-header-logo">
        <img
          class="sidebar-header-logo__image"
          src="/logo.png"
          alt="Github Saved Filters">
        <span class="sidebar-header-logo__text">Github Saved Filters</span>
      </router-link>
    </template>

    <template #sidebar-bottom>
      <div class="gsf-sidebar-footer">
        <ul class="bottom-nav">
          <li class="bottom-nav__link">
            <a
              :href="url.roadmap"
              target="_blank">
              Roadmap
            </a>
          </li>
          <span class="bottom-nav__spacer">|</span>
          <li class="bottom-nav__link">
            <a
              :href="url.feedback"
              target="_blank">
              Feedback
            </a>
          </li>
          <span class="bottom-nav__spacer">|</span>
          <li class="bottom-nav__link">
            <a
              :href="url.donateKOFI"
              target="_blank">
              Buy me a coffee
            </a>
          </li>
        </ul>
      </div>
    </template>
  </ParentLayout>
</template>

<style lang="scss" scoped>
@import '../../styles/vars';

:deep(.sidebar) {
  display: flex;
  flex-direction: column;
  max-width: 100%;
  padding-top: 0;
}

.sidebar-header-logo {
  display: flex;
  align-items: center;
  padding: 24px;
  order: -1;

  &__image {
    height: 60px;
    width: 60px;
  }

  &__text {
    color: var(--c-text);
    margin-left: 10px;
    font-size: 18px;
  }
}

.gsf-sidebar-footer {
  padding-bottom: 42px;
  margin-top: auto;
  align-self: center;

  .bottom-nav {
    display: flex;
    font-size: 14px;

    &__link a {
      color: $secondary;
      text-decoration: none;
      transition: color 0.2s ease;
      font-size: 14px;

      &:focus,
      &:hover {
        color: $pink;
      }
    }

    &__spacer {
      padding: 0 6px;
      cursor: default;
    }
  }

  @media screen and (max-width: 719px) {
    align-self: flex-start;
    padding: 24px;

    .bottom-nav {
      flex-direction: column;

      &__link a {
        font-size: 16px;
      }

      &__spacer {
        display: none;
      }
    }
  }
}
</style>
