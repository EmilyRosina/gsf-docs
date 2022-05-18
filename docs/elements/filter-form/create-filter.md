---
title: Create filter
sidebarDepth: 1
next: /elements/filter-form/edit-filter
---

# Filter Form

## Create Filter

> This form will appear after clicking the <GsfIcon icon="heartOutline"/> within the [search bar](/elements/search-bar/).

<GsfFilterForm is-new/>

- **Name** Type a suitable name for your filter.
  <br/>*You will be shown an error if you already have a global/repo filter with the same name.*
- **Query** Copied from the search bar query, but you can amend if you wish.
  <br/>*You'll be shown an error if a global/repo filter already is using the same query.*
- **Scope**
  - **Global** means this filter will appear on all repos and on the global pages.
  - **This repo** means this filter will only appear on this repo.
- **Actions**
  - Click <GsfIcon icon="close"/> to close the menu without saving.
  - Click <GsfButton outline sm>Reset</GsfButton> to revert query, name and scope back to defaults (*keeps the menu open*).
  - Click <GsfButton theme="success" sm>Save</GsfButton> to create your new filter.
