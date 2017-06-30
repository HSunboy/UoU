var webpack = require("webpack");
var ProgressBarPlugin = require("progress-bar-webpack-plugin");
const shell = require("shelljs");
const path = require("path");
shell.rm("-rf", path.join(process.cwd(), "dist"));
var config={};
if(process.env.NODE_ENV==="production"){
    config=require("../config/webpack.pro.js");
}else{
    config=require("../config/webpack.test.js");
}
config.plugins.push(new ProgressBarPlugin());
console.log(process.env.NODE_ENV);
console.log("编译环境:"+(process.env.NODE_ENV=="production"?"生产":"开发"));
console.log("编译中.........");
webpack(config,function (err, stats) {
    
    if (err) throw err;
    
    process.stdout.write(stats.toString({
        colors: true,
        modules: false,
        children: false,
        chunks: false,
        chunkModules: false
    }) + "\n");
    console.log("编译完成！");
});

