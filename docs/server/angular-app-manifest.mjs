
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/Protofolio/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/Protofolio"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 25243, hash: '7fceee71816ef2b721601f7f1301130a0144c49f66d4da8d1b26955b0c08b238', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17158, hash: '2f1d6ae46e15cfe03c3a0f826b57c1278ed5d21ca0922c8d5a5f089dc5ec6dae', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 60407, hash: '0b68db55967a9948a2e738b2ff3ef813d6e2fcb3e597b01ae1cd72b49669b2bd', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-5XMQ27XY.css': {size: 17344, hash: 'xDGIKpnS6To', text: () => import('./assets-chunks/styles-5XMQ27XY_css.mjs').then(m => m.default)}
  },
};
