---
title: Apply a Filter
sidebarDepth: 0
---

# Apply a Filter

## Via Filters Menu

<Row>
	<Col>
    <ol>
      <li>Open the <router-link to="/elements/filters-menu/">Filters Menu</router-link>.</li>
      <li>Click on any filter you have saved.</li>
      <li>The <router-link to="/elements/search-bar/">Search Bar</router-link> will now show a tag with the filter's name you selected, e.g.: <GsfFilterTag :filter="{ name: 'Enhancements' }"/>.</li>
      <br>Your results will now be those matching the query of your selected filter.
    </ol>
  </Col>

  <Col>
    <GsfFiltersMenu width="100%"/>
  </Col>
</Row>
