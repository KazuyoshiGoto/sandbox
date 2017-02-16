var Pjax = require('pjax-api').Pjax;
new Pjax({
    areas: [
        // try to use the first query.
        '#header, #primary',
        // fallback, retrying with the second query.
        '#container',
        // fallback.
        'body'
    ]
});
