window._ = require('lodash');

window.Popper = require('popper.js').default;

try {
    window.$ = window.jQuery = require('jquery');
    require('bootstrap');
} catch (e) {
    console.log('some get wrong!');
}

window.axios = require('axios');

window.axios.defaults.headers.common['X-Requested-with'] = 'XMLHttpRequest';


