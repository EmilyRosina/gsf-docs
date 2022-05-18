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
2. The [Create filter form](/elements/filter-form/create-filter) will pop up.

::: flex
3. Fill in the following fields
   - **Required**
      - Enter a **name** for your filter.
   - *Optional*
     - Edit your filter **query**.
     - Change the **scope** of your filter.
       > - **Global**: appears for all repos.
       > - **Repo**: only appears for this repo.

<GsfFilterForm
   is-new
   query="is:open is:issue label:enhancement"/>
:::

::: flex
4. Click the <GsfButton theme="success" sm>Save</GsfButton> button.
5. The [Create filter form](/elements/filter-form/create-filter) will now close.

<GsfFilterForm
   is-new
   name="Enhancements"
   query="is:open is:issue label:enhancement"/>
:::

::: flex
6. The <GsfIcon icon="heartOutline"/> will have changed to a <GsfIcon icon="heart"/> within the [Search Bar](/elements/search-bar/).

<GsfSearchBar
   variant="repo"
   name="Enhancements"
   width="100%"/>
:::

::: flex
7. Your newly created filter will also appear within the [Filters menu](/elements/filters-menu/filters).

<GsfFiltersMenu hide-hovered hide-pinned/>
:::
