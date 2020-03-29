const withSass = require('@zeit/next-sass');

module.exports = withSass({
    exportTrailingSlash: true,
    exportPathMap: async function() {
        return {
            '/': {page: '/'}
        };
    }
});
