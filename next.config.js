module.exports = {
    exportTrailingSlash: true,
    exportPathMap: async function() {
        return {
            '/': {page: '/'},
            '/about': {page: '/about'}
        };
    }
};
