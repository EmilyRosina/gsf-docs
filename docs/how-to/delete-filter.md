---
title: Delete a Filter
sidebarDepth: 0
---

# Delete a Filter

### Via Search Bar

<GsfSearchBar
  variant="repo"
  width="100%"/>

1. The query you want to delete must be active in the [Search Bar](/elements/search-bar/).
1. Click the <GsfIcon icon="heart"/> to open the [Edit filter form](/filter-form/edit-filter).
1. Click the <GsfButton theme="error" sm>Delete</GsfButton> button to open the delete modal.
1. Click the <GsfButton theme="error" sm>Delete filter</GsfButton> button to confirm deletion.

### Via Filters Menu

<Row>
  <Col>
    <ol>
      <li>Open the <router-link to="/elements/filters-menu/">Filters Menu</router-link>.</li>
      <li>Find the filter you want to delete.</li>
      <li>Hovering over the filter will reveal the <GsfIcon icon="trash" color="#CB2431"/>.</li>
      <li>Click the <GsfIcon icon="trash" color="#CB2431"/> to open the delete modal.</li>
      <li>Click the  <GsfButton theme="error" sm>Delete filter</GsfButton> button to confirm deletion.</li>
    </ol>
  </Col>

  <Col>
    <GsfSearchBar
      variant="repo"
      width="100%"/>
  </Col>
</Row>
