
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/portfolio/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/portfolio"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 46619, hash: 'b45b66d6814f4bb4a07b1d512da55285f3d20c49223c615c7736355008d6afef', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 36619, hash: '7709aec0c3653322d191e151c19329e16d51eec37ddd80ed0f4b0b192e3eb791', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 95310, hash: '08535ee98849b5218c430aa58e21108cf47fa1aafac0b9ed1bf7cade39c96ea2', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-HI3IXOJZ.css': {size: 21906, hash: 'QEiIVp2GcRM', text: () => import('./assets-chunks/styles-HI3IXOJZ_css.mjs').then(m => m.default)}
  },
};
