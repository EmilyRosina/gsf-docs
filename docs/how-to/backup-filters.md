---
title: Backup Filters
sidebarDepth: 0
---

# Backup Filters

:::tip Prerequisites
- Enable the **Backup** <GsfBetaChip/> feature.
- Provide a _Personal Access Token_ within [Options `> Advanced Options`](/elements/options).
:::

## Via Popup

::: flex
1. Open the GSF [Popup](/elements/popup) from your extensions bar.
2. Click the [Options](/elements/options) or [New!](/elements/options) link.
3. Open **Advanced Options**.
4. Within the **Backup & Import** section, click the **Backup now** button.
5. A secret Gist will be generated for you, on your Github account.

<GsfPopup showcase="options"/>
:::

## Via Filters Menu

::: flex
1. Open the [Filters Menu](/elements/filters-menu/filters).
1. Click the **Backup filters** link.
1. **Advanced Options** will be opened in a new tab.
1. Within the **Backup & Import** section, click the **Backup now** button.
1. A secret Gist will be generated for you, on your Github account.

<GsfFiltersMenu showcase="backup"/>
:::

### Update backup

> Over time, your Github backup Gist will become out of sync with your saved filters as you work with them daily.
> Follow the instructions below to re-sync them.

1. If you wish to check the changes first, you can hover over the two circles of any row to **Open diff**.
  <br/>This will show you the changes that will be performed upon that particular file.
1. Click <GsfButton theme="success" rounded sm outline >Update Gist</GsfButton> to overwrite your Gist with your most up to date version of your saved filters.
1. Your Gist will be overwritten with the latest changes and all files will now show as **in sync**.
   - _The button to **Update Gist** will only appear when your filters and Gist are out of sync, so just after updating your Gist, this button will not be visible anymore as all files are now in sync._

### Link/Unlink backup

> Should you change your mind and wish to sync with another Gist you own, without deleting the original, you can do so by unlinking the current Gist and linking another.

1. Within the **Backup & Import** section, click <GsfButton rounded sm outline>Unlink</GsfButton>.
2. Now you have unlinked, but not deleted, your original Gist.
3. If you wish to link another Gist, click **Link Gist** or create another Gist via the **Backup now** button.

### Delete backup

> If you no longer wish to keep your Gist, you can delete it one of two ways.

#### Via Options page
1. Within the **Backup & Import** section, click <GsfButton theme="error" rounded sm outline>Delete gist</GsfButton>.
2. You will need to confirm deletion via the modal that pops up.
3. Your Gist will be deleted on Github and the **Backup & Import** section will now appear empty.

#### Via Github

1. Go to your Gists section on Github.
1. Delete your GSF Backup Gist.
