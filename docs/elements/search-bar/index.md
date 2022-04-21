---
title: Search Bar
---

# Search Bar

<GsfImg
  v-for="path of ['default', 'new', 'global', 'repo']"
  :path="`search-bar/${path}`"
  alt="Search bar (path)"
  width="100%"/>

<GsfSearchBar
  v-for="variant of ['default', 'new', 'global', 'repo']"
  :variant="variant"
  width="100%"/>