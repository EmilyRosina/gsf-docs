---
title: Dates Menu
tags:
  - calendar
  - range
---

# Dates Menu

## Query a date

<Row>
  <Col>
    <ol>
      <li>Choose a date type to add to your query and click the <GsfButton outline sm>Add</GsfButton> button.</li>
      <li>Click the <GsfIcon icon="calendar" color="#e1734c"/> within the <b>on</b> input, to pick the date you wish to apply.</li>
      <li>Click <GsfButton theme="success" sm>Apply</GsfButton></li>
    </ol>
  </Col>
  <Col>
    <GsfDatesMenu is-valid :populated-dates="['on']"/>
  </Col>
</Row>

## Query after date

<Row>
  <Col>
    <ol>
      <li>Click the <GsfIcon icon="calendar" color="#e1734c"/> to the far right, to change the date filter to a range.</li>
      <li>You will now see that the icon has changed to a <GsfIcon icon="calendarRange" color="#e1734c"/> and you will have 2 date inputs to populate.</li>
      <li>Select a date for the **From** input.</li>
      <li>Leave the **To** input empty.</li>
      <li>Click <GsfButton theme="success" sm>Apply</GsfButton></li>
    </ol>
  </Col>
  <Col>
    <GsfDatesMenu is-valid is-range :populated-dates="['from']"/>
  </Col>
</Row>


## Query before date

<Row>
  <Col>
    <ol>
      <li>Click the <GsfIcon icon="calendar" color="#e1734c"/> icon to the far right, to change the date filter to a range.</li>
      <li>You will now see that the icon has changed to a <GsfIcon icon="calendarRange" color="#e1734c"/> and you will have 2 date inputs to populate.</li>
      <li>Select a date for the **To** input.</li>
      <li>Leave the **From** input empty.</li>
      <li>Click <GsfButton theme="success" sm>Apply</GsfButton></li>
    </ol>
  </Col>
  <Col>
    <GsfDatesMenu is-valid is-range :populated-dates="['to']"/>
  </Col>
</Row>

## Query between 2 dates

<Row>
  <Col>
    <ol>
      <li>Click the <GsfIcon icon="calendar" color="#e1734c"/> to the far right, to change the date filter to a range.</li>
      <li>You will now see that the icon has changed to a <GsfIcon icon="calendarRange" color="#e1734c"/> and you will have 2 date inputs to populate.</li>
      <li>Select dates for both inputs.</li>
      <li>Click <GsfButton theme="success" sm>Apply</GsfButton></li>
    </ol>
  </Col>
  <Col>
    <GsfDatesMenu is-valid is-range :populated-dates="['from', 'to']"/>
  </Col>
</Row>

## Remove date query

<Row>
  <Col>
    <ol>
      <li>Identify the date filter you wish to remove.</li>
      <li>Click the <GsfIcon icon="trash" color="#CB2431"/> on the far right of the date filter.</li>
      <li>Click <GsfButton theme="success" sm>Apply</GsfButton></li>
    </ol>
  </Col>
  <Col>
    <GsfDatesMenu is-valid is-empty/>
  </Col>
</Row>
