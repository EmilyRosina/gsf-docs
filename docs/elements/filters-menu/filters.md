---
title: Filters
sidebarDepth: 1
next: /elements/filters-menu/search-and-options
---

# Filters Menu


## Filters

> All of the filters you create will appear within this menu. Only filters matching the current page will appear for each page; `is:issue` will not show for **Pulls** pages, `is:pr` will not show for **Issues** pages.

- When hovering or focusing any filter in the menu, you will also have access to:
  - <GsfIcon icon="trash"/> Delete the filter
  - <GsfIcon icon="edit"/> Edit the filter
  - <GsfIcon icon="pin"/> Pin/Unpin the filter
- Click the filter in order to apply it and thus return results applicable to it.

:::: flex

::: col
### Pinned Filters
> Access your most frequently used filters.

- You may pin up to 3 filters, per repo and per global page (Issues, Pulls).
- You can pin any of the **Global**, **Repo** or **Default** filters.
- In order to pin/unpin a filter, hover over the filter and click the <GsfIcon icon="pin"/>.

### Saved Global Filters
> Your global filters.

- These filters will appear on every repo you visit and on **Issues** and **Pulls** global pages.
- Filters here have the **Global** scope.

### Saved Repo Filters
> Your repo filters.

- These filters will appear only within the repo you created them for.
- Filters here have the **Repo** scope.

### Default Filters
> Github's default filters.

- These are filter that Github provide by default.
- Some useful filters from global pages may appear within Repos, to improve UX and ensure there are no clashes between your personal filters and Github's own filters.
- You won't be able to change the `name` nor `query` of these filters.
:::

<GsfFiltersMenu show-queries="always"/>
::::

<div>

</div>
