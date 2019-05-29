import { configure, setAddon } from '@storybook/react';
import JSXAddon from 'storybook-addon-jsx';

setAddon(JSXAddon);

// automatically import all files ending in *.stories.js
const req = require.context('../stories', true, /\.stories\.js$/);
function loadStories() {
  require('../stories/Welcome');
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
// import { configure } from '@storybook/react';
//
// function loadStories() {
//     require('../stories/Button');
//     // You can require as many stories as you need.
// }
//
// configure(loadStories, module);