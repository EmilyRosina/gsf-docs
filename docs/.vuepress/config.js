const { path } = require('@vuepress/utils')

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
    ]
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
            link: '/elements/filters-menu/',
            collapsible: true,
          },
          {
            text: 'Filter Form',
            link: '/elements/filter-form/',
            collapsible: true,
          },
          {
            text: 'Dates Menu',
            link: '/elements/dates-menu/',
            collapsible: true,
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
        text: 'Extras',
        link: '/extras/',
        collapsible: true,
        children: [
          {
            text: 'Backup',
            link: '/extras/backup',
            collapsible: true,
          },
          {
            text: 'Import',
            link: '/extras/import',
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
