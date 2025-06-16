
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://gadimahendra.github.io/portfolio/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/portfolio"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 26664, hash: '726b141eb3c22dc1e0eafe1d8f9e43ed019cea7f4d5a5894422a54b12a932809', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17197, hash: '6fd28aec5625cb7bd77bd53b36f5698137113adc808ace7c2d312bb915179233', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 58528, hash: '457c27716590a094a7e3d9bff0b3e1ab4d1375410b0a4445fbed86fa5489a4fa', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-ZTZWQJDX.css': {size: 19860, hash: 'Ym7CKW/kpC8', text: () => import('./assets-chunks/styles-ZTZWQJDX_css.mjs').then(m => m.default)}
  },
};
