---
title: Search Bar
sidebarDepth: 1
---

# Search Bar

## Icons

:::: simple-table

|Actions                                      |Tags                                  |
|:--------------------------------------------|:-------------------------------------|
|<GsfIcon icon="heartOutline"/> unsaved filter|<GsfIcon icon="github"/> Github filter|
|<GsfIcon icon="heart"/> saved filter         |<GsfIcon icon="repo"/> Repo filter    |
|<GsfIcon icon="lock"/> _cannot save_         |                                      |

::::

## Unsaved filters

> Before you save a filter, this is how the search bar will appear.

<GsfSearchBar
  variant="new"
  width="100%"/>


## Saved filters

### Github default filter
> These are queries already populated by Github, as helper defaults.
> <br>*You will not be able to save new filters using these queries, they're reserved.*

<GsfSearchBar
  variant="default"
  width="100%"/>

### Global filter
> Global filters will appear on every repo and on the global issues/pulls pages.

<GsfSearchBar
  variant="global"
  width="100%"/>

### Repo filter
> Repo filters will only appear on the repo they were created on/imported to.

<GsfSearchBar
  variant="repo"
  width="100%"/>
