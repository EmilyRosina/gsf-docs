---
title: Remove date query
prev: /elements/dates-menu/query-between-2-dates
next: false
tags:
  - calendar
  - range
---

# Dates Menu

## Remove date query


1. Identify the date filter you wish to remove.
1. Click the <GsfIcon icon="trash" color="#CB2431"/> on the far right of the date filter.
1. Click <GsfButton theme="success" sm>Apply</GsfButton>.

::: flex
<GsfDatesMenu is-valid has-no-changes :populated-dates="['on']"/>
<GsfDatesMenu is-valid is-empty/>
:::
