---
title: Query before date
prev: /elements/dates-menu/query-after-date
next: /elements/dates-menu/query-between-2-dates
tags:
  - calendar
  - range
---

# Dates Menu

## Query before date

1. Click the <GsfIcon icon="calendar"/> icon to the far right, to change the date filter to a **range**.
1. You will now see that the icon has changed to a <GsfIcon icon="calendarRange"/> and you will have 2 date inputs to populate.
1. Type or select a date for the **To** input.
1. Leave the **from** input empty.
1. Click <GsfButton theme="success" sm>Apply</GsfButton>.

::: flex
<GsfDatesMenu/>
<GsfDatesMenu is-valid is-range :populated-dates="['to']"/>
:::
