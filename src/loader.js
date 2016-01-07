var root = this;

// CommonJS/nodeJS Loader
if (typeof module !== 'undefined' && module.exports) {
    module.exports = simpleMarkdown;

// AMD Loader
} else if (typeof define === 'function' && define.amd) {
    define(function () {
        'use strict';
        return simpleMarkdown;
    });

// Regular Browser loader
} else {
    root.simpleMarkdown = simpleMarkdown;
}
