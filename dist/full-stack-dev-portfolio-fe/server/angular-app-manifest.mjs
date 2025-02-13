
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: undefined,
  entryPointToBrowserMapping: {},
  assets: {
    'index.csr.html': {size: 1125, hash: '598d3bbfa9828926eed054c75d8f595cad6c6e014d459b3e97774f1dac2df140', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1133, hash: 'ac5cb1e9e10e030da9bce20144cf37422cf270db96616dffa2dc26684eadbb01', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-VEGURO6M.css': {size: 382, hash: 'pHGqVX5yrRY', text: () => import('./assets-chunks/styles-VEGURO6M_css.mjs').then(m => m.default)}
  },
};
