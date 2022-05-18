---
title: Import Filters
sidebarDepth: 0
---

# Import Filters

:::tip Prerequisites
- Provide a _Personal Access Token_ within [Options `> Advanced Options`](/elements/options).
- Enable the **Import** <GsfBetaChip/> feature.
- A GSF backup Gist `URL` or `ID`.
:::

## Via Filters Menu

::: flex
1. Open the [Filters Menu](/elements/filters-menu/filters).
2. Click the **Import filters** link.

<GsfFiltersMenu showcase="import"/>
:::

3. You will need a Gist to import from.
   - Either, you can paste a Gist `URL` or `ID` into the box provided...
   - ...or you can select one of the previously entered Gists.
4. Once verified and fetched, the modal will now be populated with filters for you to import.
5. You will find they're grouped into the following sections:
   ::: simple-table
   | Repos             | Global Pages                          |
   | :---------------- | :------------------------------------ |
   | **Global**        | **Global**                            |
   | **This Repo**     | **Specific repos** *                  |
   | **Other Repos**   | * *All repo filters grouped together* |
   | **Already Saved** | **Already Saved**                     |
   :::

> **Note**<br>
> You will not be able to change the scope via <GsfButtonGroup :options="['Global', 'Repo']"/> toggle when importing on Global pages. This is because all imported filters via these pages will be globally scoped.
> <br/><br/>
> You can freely import filters with either **Global** or **Repo** scope via repo pages.

6. If there are a lot of filters to sift through, you can use the search input to find the filters you're looking for or interested in.<br/>*This search matches on `name` and `query`.*
7. You can amend `name`s for all filters that are not under **Already Saved**.
   > You will be shown errors for filter names that clash with ones you already have saved.
   > In order to import them, you must rename the filter before selecting it for import.
8. Once you're satisfied with your selections and amendments, click the <GsfButton theme="success">Import Filters</GsfButton> to finish the process.
9. Now, your imported filters will appear in the [Filters Menu](/elements/filters-menu/filters).
