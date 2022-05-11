---
title: Share Filters
sidebarDepth: 0
tags:
   - one
   - multiple
---

# Share Filters

## Share one filter
> This is actually just the query you'll be sharing, the name etc won't share.
1. Copy the URL of your browser, paste it to a friend 🦋.
1. **Simples** (_Nothing special, this is Github's default behaviour_).
   *Your friend will need to go through the process of saving the filter themselves.*

## Share multiple filters
> **Prerequisites:**
> - **You** need to provide a _Personal Access Token_ within <code><b>options</b> > <b>Advanced Options</b></code>.
> - **You** need to enable the <code><b>Backup</b></code> <GsfBetaChip/> feature.
> - **Your friend** needs to enable the <code><b>Import</b></code> <GsfBetaChip/> feature.

### Advanced options page

1. Get to the **Advanced Options** page
   - **Either** Open the [Filters Menu](/elements/filters-menu/) > click **Backup**.
   - **Or** Open the [Popup](/elements/popup/) > click **Options**, *or **New changes** if you have unseen changes*.
1. Under **Backup & Import**, provide a **Personal Access Token**.
1. Once you have a valid token, choose one of the following:
   - **Backup now**  will create a new Gist, *backing up all of your filters you currently have saved.*
   - **Link an existing Gist** will link an existing Gist, *then you need to click **update** to save your current filters to the Gist.*
      > ⚠️ *Whenever you click **update**, this will **overwrite** the existing files, but Github does keep version history of your Gists, just in case you need to rollback.*
