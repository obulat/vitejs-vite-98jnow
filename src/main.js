import { createApp } from 'vue';
import './style.css';
import './prism.css';
import App from './App.vue';
import { VueShowdownPlugin, showdown } from 'vue-showdown';

import showdownHighlight from 'showdown-highlight';
import showdownMath from 'showdown-math';
import 'highlight.js/styles/github.css';
import 'highlight.js/styles/stackoverflow-light.css';

const app = createApp(App);

showdown.extension('showdownHighlight', showdownHighlight);
showdown.extension('showdownMath', showdownMath);
// the second parameter of app.use() is optional
app.use(VueShowdownPlugin, {
  // set default flavor of showdown
  flavor: 'github',
  // set default options of showdown (will override the flavor options)
  options: {
    emoji: false,
  },
});

app.mount('#app');
