---
title: Apply a Filter
sidebarDepth: 0
---

# Apply a Filter

## Via Filters Menu

<GsfSearchBar
   variant="new"
   query="is:open is:issue"/>

::: flex
1. Open the [Filters Menu](/elements/filters-menu/filters).
2. Click on any filter you have saved.
3. The [Search Bar](/elements/search-bar/) will now show a tag with the filter's name you selected, e.g.: <GsfFilterTag :filter="{ name: 'Enhancements' }"/>.
   Your results will now be those matching the query of your selected filter.

<GsfFiltersMenu/>
:::

<GsfSearchBar
   variant="repo"
   name="Enhancements"/>
