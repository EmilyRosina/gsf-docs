---
title: Search Bar
sidebarDepth: 1
next: false
---

# Search Bar

## Icons

::: simple-table

|Actions                                      |Tags                                  |
|:--------------------------------------------|:-------------------------------------|
|<GsfIcon icon="heartOutline"/> unsaved filter|<GsfIcon icon="github"/> Github filter|
|<GsfIcon icon="heart"/> saved filter         |<GsfIcon icon="repo"/> Repo filter    |
|<GsfIcon icon="lock"/> _cannot save_         |                                      |

:::

## Unsaved filters

> Before you save a filter, this is how the search bar will appear.

- No filter chip, _always show the query_.
- Empty heart icon to the far right.

<GsfSearchBar variant="new"/>


## Saved filters

### Github default filter
> These are queries already populated by Github, as helper defaults.
> <br>*You will not be able to save new filters using these queries, they're reserved.*

- Has a **Github default** filter chip, replacing the query.
  <br>_Clicking the input will reveal the query again (i.e. whilst it's active)._
- Lock icon to signify this filter/query is reserved.

<GsfSearchBar variant="default"/>

### Global filter
> Global filters will appear on every repo and on the global issues/pulls pages.

- Has a **Global** filter chip, replacing the query.
  <br>_Clicking the input will reveal the query again (i.e. whilst it's active)._
- Filled heart icon to signify this filter/query is saved.

<GsfSearchBar variant="global"/>

### Repo filter
> Repo filters will only appear on the repo they were created on/imported to.

- Has a **Repo** filter chip, replacing the query.
  <br>_Clicking the input will reveal the query again (i.e. whilst it's active)._
- Filled heart icon to signify this filter/query is saved.

<GsfSearchBar variant="repo"/>
