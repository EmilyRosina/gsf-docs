---
title: Filters Menu
sidebarDepth: 1
---

# Filters Menu

## Filters

:::: flex
- **Pinned Filters**
- **Saved Global Filters**
- **Saved Repo Filters**
- **Default Filters**

<GsfFiltersMenu/>
::::

## Search & Options

<!-- TODO: create a click to change view component -->
:::: flex
- **Show query: Never**

<GsfFiltersMenu show-options hide-pinned hide-hovered/>
::::

:::: flex
- **Show query: On hover**

<GsfFiltersMenu show-options hide-pinned show-queries="on-hover"/>
::::

:::: flex
- **Show query: Always**

<GsfFiltersMenu show-options hide-pinned hide-hovered show-queries="always"/>
::::


## Additional actions

:::: flex
- **Import filters**
- **Backup filters**
- **View advanced search syntax**

<GsfFiltersMenu showcase="links"/>
::::
