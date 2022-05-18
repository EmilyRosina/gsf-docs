---
title: Query between 2 dates
prev: /elements/dates-menu/query-before-date
next: /elements/dates-menu/remove-date-query
tags:
  - calendar
  - range
---

# Dates Menu

## Query between 2 dates

1. Click the <GsfIcon icon="calendar"/> to the far right, to change the date filter to a **range**.
2. You will now see that the icon has changed to a <GsfIcon icon="calendarRange"/> and you will have 2 date inputs to populate.
3. Type or select dates for **from** and **to** both inputs.
4. Click <GsfButton theme="success" sm>Apply</GsfButton>.

::: flex
<GsfDatesMenu/>
<GsfDatesMenu is-valid is-range :populated-dates="['from', 'to']"/>
:::
