---
title: Filter form
sidebarDepth: 1
---

# Filter Form

## New Filter

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


## Edit Filter

> This form will appear after clicking the <GsfIcon icon="heart"/> within the [search bar](/elements/search-bar/),
> or the <GsfIcon icon="edit"/> within the [filters menu](/elements/filters-menu/)

<GsfFilterForm/>

- **Name** Shows your previously chosen name for your filter, of which you can amend.
  <br/>*You will be shown an error if you already have a global/repo filter with the same name.*
- **Query** Shows the saved query, you can amend if you wish.
  <br/>*You'll be shown an error if a global/repo filter already is using the same query.*
- **Scope**
  - **Global** means this filter will appear on all repos and on the global pages.
  - **This repo** means this filter will only appear on this repo.
- **Actions**
  - Click <GsfIcon icon="close"/> to close the menu without saving changes.
  - Click <GsfButton theme="error" outline sm>Delete</GsfButton> to delete your filter.
  - Click <GsfButton outline sm>Reset</GsfButton> to reset any changes back to the saved version of your filter (*keeps the menu open*).
  - Click <GsfButton theme="success" sm>Save</GsfButton> to save changes.
