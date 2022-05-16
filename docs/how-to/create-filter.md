---
title: Create a Filter
sidebarDepth: 0
---

# Create a filter

## Via Search Bar

<GsfSearchBar
   variant="new"
   query="is:open is:issue label:enhancement"
   width="100%"/>

1. Click the <GsfIcon icon="heartOutline"/> within the [Search Bar](/elements/search-bar/).
1. The **Create filter** form will pop up.

:::: warning Coming soon...
TODO: Add `<GsfFilterForm/>`
::::

1. Fill in the following fields
   - **Required**
      - Enter a **name** for your filter.
   - *Optional*
     - Edit your filter **query**.
     - Change the **scope** of your filter.
       > - **Global**: will show your filter in all repos.
       > - **Repo**: will only show your filter in the current repo.
1. Click the <GsfButton theme="success" sm>Save</GsfButton> button.
1. Now the <GsfIcon icon="heartOutline"/> will have changed to a <GsfIcon icon="heart"/>.

<GsfSearchBar
   variant="repo"
   name="Enhancements"
   width="100%"/>
