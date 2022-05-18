---
title: Query after date
prev: /elements/dates-menu/query-a-date
next: /elements/dates-menu/query-before-date
tags:
  - calendar
  - range
---

# Dates Menu

## Query after date

1. Click the <GsfIcon icon="calendar"/> on the right, to change the date filter to a **range**.
1. You will now see that the icon has changed to a <GsfIcon icon="calendarRange"/> and you will have 2 date inputs to populate.
1. Type or select a date for the **From** input.
1. Leave the **to** input empty.
1. Click <GsfButton theme="success" sm>Apply</GsfButton>.

::: flex
<GsfDatesMenu/>
<GsfDatesMenu is-valid is-range :populated-dates="['from']"/>
:::
