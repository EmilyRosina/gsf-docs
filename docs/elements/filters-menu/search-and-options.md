---
title: Search & Options
prev: /elements/filters-menu/filters
next: /elements/filters-menu/additional-actions
---

# Filters Menu

## Search & Options

There's a few different variations of things going on here, so it's easier to explain this visually.
These options won't typically get changed a lot, you just need to find out what you prefer when using the filters menu.

In order to access these options, click on the <GsfIcon icon="gear"/> to toggle them open and closed.

### Show Query

:::: flex
::: col
#### Always
Always show all filter queries.

<GsfFiltersMenu show-options show-queries="always"/>
:::


::: col
#### Never
Never show the filter queries.

<GsfFiltersMenu show-options show-queries="never"/>
:::
::::

:::: flex
::: col
#### On hover
Only show filter queries when hovering or focussing.

<GsfFiltersMenu show-options show-queries="on-hover"/>
:::
::::

### Match on

:::: flex
::: col
#### Name
Show filters matching on name.

<GsfFiltersMenu
  show-options
  match-on="name"
  show-queries="always"
  hide-hovered
  search="me"/>
:::

::: col
#### Query
Show filters matching on query.

<GsfFiltersMenu
  show-options
  match-on="query"
  show-queries="always"
  hide-hovered
  search="me"/>
:::
::::

:::: flex
::: col
#### Both
Show filters matching on query and name.

<GsfFiltersMenu
  show-options
  match-on="both"
  show-queries="always"
  hide-hovered
  search="me"/>
:::
::::
