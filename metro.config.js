const { getDefaultConfig } = require('expo/metro-config');

module.exports = (async () => {
	const defaultConfig = await getDefaultConfig(__dirname);
	
  	// Access assetExts and sourceExts from the resolver property
  	const { assetExts, sourceExts } = defaultConfig.resolver;

	return {
		...defaultConfig,
		resolver: {
			...defaultConfig.resolver,
			assetExts: [...assetExts, "png", "jpg", "jpeg", "svg"],
			sourceExts: [...sourceExts, "js", "json", "ts", "tsx"],
		},
		transformer: {
			...defaultConfig.transformer, // Spread the default transformer
			assetPlugins: ['expo-asset/tools/hashAssetFiles'],
		},
  	};
})();