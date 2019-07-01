const { override, fixBabelImports,addLessLoader,addWebpackAlias,useBabelRc,addDecoratorsLegacy} = require('customize-cra');
const path = require("path");
process.env.GENERATE_SOURCEMAP = "false";
module.exports = override(
   fixBabelImports('import', {
     libraryName: 'antd',
     libraryDirectory: 'es',
     style: true,
   }),
   addLessLoader({
    javascriptEnabled: true,
    modifyVars: { '@primary-color': '#814a96','@link-color':'#1DA57A' },
  }),
  addWebpackAlias({
    "@": path.resolve(__dirname, "src"),
    "Components": path.resolve(__dirname, "src/Components"),
    "Container": path.resolve(__dirname, "src/Container"),
  }),
  useBabelRc(),
  addDecoratorsLegacy(),// 修饰器
 );
