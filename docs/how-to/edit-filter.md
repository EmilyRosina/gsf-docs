---
title: Edit a Filter
sidebarDepth: 0
---

# Edit a Filter

### Via the Search Bar

<GsfSearchBar
  variant="repo"
  width="100%"
  highlight="input__action-icon"/>

1. The query you want to edit must be active in the [Search Bar](/elements/search-bar/).
1. Click the <GsfIcon icon="heart"/> to open the [Edit filter form](/elements/filter-form/).
1. Make your changes.
1. Click the <GsfButton theme="success" sm>Save</GsfButton> button.

### Via the Filters Menu

<Row>
  <Col>
    <ul>
      <li>Open the <router-link to="/elements/filters-menu/">Filters Menu</router-link>.</li>
      <li>Find the filter you want to edit.</li>
      <li>Hovering over the filter will reveal the <GsfIcon icon="edit"/>.</li>
      <li>Click the <GsfIcon icon="edit"/> to open the <router-link to="/elements/filter-form/">Filter Form</router-link>.</li>
      <li>Make your changes.</li>
      <li>Click the <GsfButton theme="success" sm>Save</GsfButton> button.</li>
    </ul>
  </Col>

  <Col>
    <GsfSearchBar
      variant="repo"
      width="100%"/>
  </Col>
</Row>
