
// Import the library
import Vue from './lib/vue.js';

// bind Vue Freeze
import './lib/vue-freeze.min.js';

// The State
import state from './vue-freeze/state.js';

// The action
import action from './vue-freeze/action.js';

// Debug mode
Vue.config.debug = true

// Install Vue Freeze
Vue.use(VueFreeze, { state: state, action: action })

// import components
import todoApp from './components/todoApp.vue';

// Make a new components
let App = Vue.extend(todoApp)

// Mount The App
new App({ el: '#app', replace: false })
