import 'core-js/es6';
import 'core-js/es7/reflect';
import 'zone.js/dist/zone';

if (process.env.ENV !== 'production') {
    require('zone.js/dist/long-stack-trace-zone');
}
