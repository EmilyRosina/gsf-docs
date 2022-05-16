---
title: Import
sidebarDepth: 0
---

# Import

> **Prerequisites:**
> - **You** need to provide a _Personal Access Token_ within <code><b>options</b> > <b>Advanced Options</b></code>.
> - **You** need to enable the <code><b>Backup</b></code> <GsfBetaChip/> feature.
> - **Your friend** needs to enable the <code><b>Import</b></code> <GsfBetaChip/>

1. Get to the **Advanced Options** page
   - **Either** Open the [Filters Menu](/elements/filters-menu/) > click **Backup**.
   - **Or** Open the [Popup](/elements/popup/) > click **Options**, *or **New changes** if you have unseen changes*.
1. Under **Backup & Import**, provide a **Personal Access Token**.
1. Once you have a valid token, choose one of the following:
   - **Backup now**  will create a new Gist, *backing up all of your filters you currently have saved.*
   - **Link an existing Gist** will link an existing Gist, *then you need to click **update** to save your current filters to the Gist.*
      > ⚠️ *Whenever you click **update**, this will **overwrite** the existing files, but Github does keep version history of your Gists, just in case you need to rollback.*

:::: warning Coming soon...
TODO: Add more detailed docs and maybe `GsfImportModal`
::::
