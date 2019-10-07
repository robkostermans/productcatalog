const rewireStyledComponents = require('react-app-rewire-styled-components');

module.exports = function override(config) {
	//config.output.library = 'mindd';
	//config.output.libraryTarget = 'umd';
	//config.output.umdNamedDefine = true;
	//config.optimization.runtimeChunk = false;
	// config.optimization.splitChunks = {
	// 	cacheGroups: {
	// 		default: false
	// 	}
	// };
	config = rewireStyledComponents(config, {
		displayName: false
	});
	return config;
};
