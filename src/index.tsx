import { registerApplication, start } from "single-spa";

registerApplication({
    name: 'container',
    app: () => import('./root.app.js'),
    activeWhen: '/'
  });
registerApplication({
  name: 'app1',
  app: () => import('./packages/root.app.js'),
  activeWhen: '/app1'
});

start()