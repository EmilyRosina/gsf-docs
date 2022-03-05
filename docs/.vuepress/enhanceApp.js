import './styles/index.scss';

// https://github.com/vuejs/vuepress/issues/1757#issuecomment-547890089
export default ({
  Vue, // the version of Vue being used in the VuePress app
  options, // the options for the root Vue instance
  router, // the router instance for the app
  siteData // site metadata
}) => {
  /* add stuff here */
  console.log(process.env.__VUEPRESS_DEV__)
}
