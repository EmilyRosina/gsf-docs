---
title: Search Bar
sidebarDepth: 1
---

# Search Bar

## Icons

<table>
  <thead align="left">
    <th>Actions</th>
    <th>Tags</th>
  </thead>
  <tr>
    <td valign="top">
      <ul style="list-style: none; padding: 0; margin: 0;">
        <li><GsfIcon icon="heartOutline"/> unsaved filter</li>
        <li><GsfIcon icon="heart"/> saved filter</li>
        <li><GsfIcon icon="lock"/> <i>cannot save</i></li>
      </ul>
    </td>
    <td valign="top">
      <ul style="list-style: none; padding: 0; margin: 0;">
        <li><GsfIcon icon="github"/> Github filter</li>
        <li><GsfIcon icon="repo"/> Repo filter</li>
      </ul>
    </td>
  </tr>
</table>

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
