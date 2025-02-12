/**
 * Barrel loading all components autmatically note here that only gets default exports
 */
const req = require.context('.', true, /\.\/[^/]+\/index\.js$/);

req.keys().forEach(key => {
	const componentName = key.replace(/^.+\/([^/]+)\/index\.js/, '$1');
	module.exports[componentName] = req(key).default;
});
