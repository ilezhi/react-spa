console.log(process.env.NODE_ENV);
process.env.NODE_ENV = (process.env.NODE_ENV || 'development').trim();
console.log(process.env.NODE_ENV);

var path = require('path');
var argv = require('yargs').argv;

var config = {};

// -----------------------
// User Configuration
// ------------------------
config.cache = false;
config.dir_src = 'src';
config.dir_dist = 'dist';

config.webpack_host = 'localhost';
config.webpack_port = process.env.PORT || 3000;

config.vendor_dependencies = [
    'react',
    'react-dom',
    'redux',
    'react-redux',
    'react-router',
    'react-router-redux',
];



// -----------------------
// Environment
// -----------------------
config.env = process.env.NODE_ENV;
config.globals = {
    'process.env' : {
        'NODE_ENV' : JSON.stringify(config.env)
    },
    'NODE_ENV' : config.env,
    '__DEV__' : config.env === 'development',
};


// ------------------
// webpack
// ------------------
config.webpack_public_path = `http://${config.webpack_host}:${config.webpack_port}/`;

// ------------------
// Project
// ------------------
config.path_project = path.resolve(__dirname, '../');

// ---------------------
// Utilities
// ---------------------
var paths = (() => {
    var base = [config.path_project];
    var resolve = path.resolve;

    var project = (...args) => resolve.apply(resolve, [...base, ...args]);

    return {
        project : project,
        src     : project.bind(null, config.dir_src),
        dist    : project.bind(null, config.dir_dist)
    }
})();

config.utils_paths = paths;
config.utils_aliases = [
    'actions',
    'component',
    'constants',
    'containers',
    'reducers',
    'routes',
    'store',
    'styles',
].reduce((acc, x) => ((acc[x] = paths.src(x)) && acc), {});
console.log(config.env);
module.exports = config;
