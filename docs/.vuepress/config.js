const { path } = require('@vuepress/utils')

const url = {
  donateKOFI: 'https://ko-fi.com/auroraskye',
  feedback: 'https://github.com/EmilyRosina/gsf.docs/discussions',
  storePage: 'https://chrome.google.com/webstore/detail/github-saved-filters/pmkbippobcmchabghaeonfbbcncjhmjm',
  roadmap: 'https://portal.productboard.com/4uroraskye-portal/2-github-saved-filters-roadmap/tabs/5-planned',
}

const isDevMode = process.env.NODE_ENV === 'development'
const isStaging = process.env?.DEPLOY_PRIME_URL?.includes('develop')

function showIfDevMode (children, fallback = []) {

  return isDevMode
    ? children
    : fallback
}

module.exports = {
  head: [
    ['link', { rel: 'icon', href: '/logo.png' }]
  ],
  plugins: [
    [
      '@vuepress/search',
      {
        searchMaxSuggestions: 10
      }
    ],
    [
      '@vuepress/register-components',
      {
        componentsDir: path.resolve(__dirname, './components'),
      }
    ]
  ],
  locales: {
    // The key is the path for the locale to be nested under.
    // As a special case, the default locale can use '/' as its path.
    // https://vuepress.vuejs.org/guide/i18n.html#internationalization
    '/': {
      lang: 'en', // this will be set as the lang attribute on <html>
      title: 'Github Saved Filters',
      description: 'Documentation for the GSF Chrome extension'
    },
  },
  themeConfig: {
    repo: 'https://github.com/EmilyRosina/gsf-docs',
    docsBranch: isDevMode || isStaging ? 'develop' : 'main',
    docsDir: 'docs',
    editLinkPattern: ':repo/edit/:branch/:path',
    logo: '/logo.png',
    contributors: false,
    navbar: [
      {
        text: 'Links',
        children: [
          { text: 'Install', link: url.storePage },
          { text: 'Roadmap', link: url.roadmap },
          { text: 'Give feedback', link: url.feedback },
          { text: 'Buy me a coffee', link: url.donateKOFI },
        ]
      }
    ],
    sidebar: [
      '/search-input',
      {
        text: 'Filters Menu',
        children: [
          '/filters-menu/search',
          '/filters-menu/options',
          '/filters-menu/filters',
          '/filters-menu/global-vs-repo',
          '/filters-menu/import',
          '/filters-menu/backup',
        ],
      },
      '/dates-menu',
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
