// const { getDefaultConfig } = require('metro-config');

// module.exports = (async () => {
//   const {
//     resolver: { sourceExts, assetExts },
//   } = await getDefaultConfig();
//   return {
//     transformer: {
//       babelTransformerPath: require.resolve('react-native-svg-transformer'),
//       experimentalImportSupport:false,
//       inlineRequires:false
//     },
//     resolver: {
//       assetExts: assetExts.filter(ext => ext !== 'svg'),
//       sourceExts: [...sourceExts, 'svg'],
//     },
//   };
// })();
// Learn more https://docs.expo.io/guides/customizing-metro


const { getDefaultConfig } = require('expo/metro-config');

module.exports = getDefaultConfig(__dirname);
