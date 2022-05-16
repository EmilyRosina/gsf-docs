---
title: Dates Menu
tags:
  - calendar
  - range
---

# Dates Menu

## Query a date

:::: flex
1. Choose a date type to add to your query and click the <GsfButton outline sm>Add</GsfButton> button.
1. Type or select a date within the **on** input.
1. Click <GsfButton theme="success" sm>Apply</GsfButton>.

<GsfDatesMenu is-valid :populated-dates="['on']"/>
::::

## Query after date

:::: flex
1. Click the <GsfIcon icon="calendar" color="#e1734c"/> to the far right, to change the date filter to a **range**.
1. You will now see that the icon has changed to a <GsfIcon icon="calendarRange" color="#e1734c"/> and you will have 2 date inputs to populate.
1. Type or select a date for the **From** input.
1. Leave the **To** input empty.
1. Click <GsfButton theme="success" sm>Apply</GsfButton>.

<GsfDatesMenu is-valid is-range :populated-dates="['from']"/>
::::


## Query before date

:::: flex
1. Click the <GsfIcon icon="calendar" color="#e1734c"/> icon to the far right, to change the date filter to a **range**.
1. You will now see that the icon has changed to a <GsfIcon icon="calendarRange" color="#e1734c"/> and you will have 2 date inputs to populate.
1. Type or select a date for the **To** input.
1. Leave the **From** input empty.
1. Click <GsfButton theme="success" sm>Apply</GsfButton>.

<GsfDatesMenu is-valid is-range :populated-dates="['to']"/>
::::

## Query between 2 dates

:::: flex
1. Click the <GsfIcon icon="calendar" color="#e1734c"/> to the far right, to change the date filter to a **range**.
1. You will now see that the icon has changed to a <GsfIcon icon="calendarRange" color="#e1734c"/> and you will have 2 date inputs to populate.
1. Type or select dates for both inputs.
1. Click <GsfButton theme="success" sm>Apply</GsfButton>.

<GsfDatesMenu is-valid is-range :populated-dates="['from', 'to']"/>
::::

## Remove date query

:::: flex
1. Identify the date filter you wish to remove.
1. Click the <GsfIcon icon="trash" color="#CB2431"/> on the far right of the date filter.
1. Click <GsfButton theme="success" sm>Apply</GsfButton>.

<GsfDatesMenu is-valid is-empty/>
::::
