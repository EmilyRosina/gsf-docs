const { path } = require('@vuepress/utils')
const { containerPlugin } = require('@vuepress/plugin-container')

const isDevMode = process.env.NODE_ENV === 'development'
const isStaging = process.env?.DEPLOY_PRIME_URL?.includes('develop')

module.exports = {
  head: [
    ['link', { rel: 'icon', href: '/logo.png' }]
  ],
  plugins: [
    [
      '@vuepress/search',
      {
        maxSuggestions: 10,
        getExtraFields: (page) => {
          const { tags } = page.frontmatter
          return tags ?? []
        },
      }
    ],
    [
      '@vuepress/register-components',
      {
        componentsDir: path.resolve(__dirname, './components'),
      }
    ],
    [
      containerPlugin({
        type: 'flex',
        before: (itemCount) => `<div class="gsf-flex" style="--item-total: ${itemCount || 2};">\n`,
        after: () => `</div>\n`,
      }),
    ],
    [
      containerPlugin({
        type: 'simple-table',
      })
    ],
    [
      containerPlugin({
        type: 'col',
      })
    ],
  ],
  alias: {
    // set alias for replaceable components
    '@theme/SidebarItem.vue': path.resolve(__dirname, 'components/SidebarItem.vue'),
    '@styles': path.resolve(__dirname, './styles'),
  },
  locales: {
    // The key is the path for the locale to be nested under.
    // As a special case, the default locale can use '/' as its path.
    // https://vuepress.vuejs.org/guide/i18n.html#internationalization
    '/': {
      lang: 'en', // this will be set as the lang attribute on <html>
      title: 'Github Saved Filters',
      description: 'Documentation'
    },
  },
  theme: path.resolve(__dirname, './theme'),
  themePlugins: {
    mediumZoom: false,
  },
  themeConfig: {
    repo: 'https://github.com/EmilyRosina/gsf-docs',
    docsBranch: isDevMode || isStaging ? 'develop' : 'main',
    docsDir: 'docs',
    editLinkPattern: ':repo/edit/:branch/:path',
    home: '/home',
    contributors: false,
    navbar: [
      {
        text: 'Install',
        link: 'https://chrome.google.com/webstore/detail/github-saved-filters/pmkbippobcmchabghaeonfbbcncjhmjm',
      },
    ],
    sidebar: [
      {
        text: 'How to',
        link: '/how-to',
        collapsible: true,
        children: [
          '/how-to/create-filter',
          '/how-to/apply-filter',
          '/how-to/edit-filter',
          '/how-to/delete-filter',
          '/how-to/share-filters',
          '/how-to/backup-filters',
          '/how-to/import-filters',
          '/how-to/support-github-enterprise',
        ],
      },
      {
        text: 'Elements',
        link: '/elements',
        collapsible: true,
        children: [
          {
            text: 'Search Bar',
            link: '/elements/search-bar/',
            collapsible: true,
          },
          {
            text: 'Filters Menu',
            link: '/elements/filters-menu/filters',
            collapsible: true,
            children: [
              {
                text: 'Filters',
                link: '/elements/filters-menu/filters'
              },
              {
                text: 'Search & Options',
                link: '/elements/filters-menu/search-and-options'
              },
              {
                text: 'Additional Actions',
                link: '/elements/filters-menu/additional-actions'
              },
            ]
          },
          {
            text: 'Filter Form',
            link: '/elements/filter-form/create-filter',
            collapsible: true,
            children: [
              {
                text: 'Create filter',
                link: '/elements/filter-form/create-filter'
              },
              {
                text: 'Edit filter',
                link: '/elements/filter-form/edit-filter'
              },
            ]
          },
          {
            text: 'Dates Menu',
            link: '/elements/dates-menu/query-a-date',
            collapsible: true,
            children: [
              {
                text: 'Query a date',
                link: '/elements/dates-menu/query-a-date'
              },
              {
                text: 'Query after date',
                link: '/elements/dates-menu/query-after-date'
              },
              {
                text: 'Query before date',
                link: '/elements/dates-menu/query-before-date'
              },
              {
                text: 'Query between 2 dates',
                link: '/elements/dates-menu/query-between-2-dates'
              },
              {
                text: 'Remove date query',
                link: '/elements/dates-menu/remove-date-query'
              },
            ]
          },
          {
            text: 'Popup',
            link: '/elements/popup/',
            collapsible: true,
          },
          {
            text: 'Options',
            link: '/elements/options/',
            collapsible: true,
          },
        ]
      },
      {
        text: 'About',
        link: '/about',
        collapsible: true,
      },
    ],
  },
  scss: {
    module: {
      rules: [
        {
          test: /\.s[ac]ss$/i,
          use: [
            'style-loader',
            'css-loader',
            {
              loader: 'sass-loader',
              options: {
                // Prefer `dart-sass`
                implementation: require.resolve('sass'),
              },
            },
          ],
        },
      ],
    },
  }
}
