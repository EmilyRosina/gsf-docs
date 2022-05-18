---
title: Query a date
next: /elements/dates-menu/query-after-date
tags:
  - calendar
  - range
---

# Dates Menu

## Query a date

1. Choose a date type to add to your query and click the <GsfButton outline sm theme="stark"><b>Add</b></GsfButton> button.
1. Type or select a date within the **on** input.
1. Click <GsfButton theme="success" sm>Apply</GsfButton>.

::: flex
<GsfDatesMenu/>
<GsfDatesMenu is-valid :populated-dates="['on']"/>
:::
