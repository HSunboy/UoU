var baseConf=require("./webpack.base.js");
var BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;


baseConf.plugins.push(new BundleAnalyzerPlugin({
    analyzerMode:"static"
}));

module.exports=baseConf;