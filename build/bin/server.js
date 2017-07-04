const Webpackserver = require("webpack-dev-server");
var webpack = require("webpack");
var config = {};
console.log(process.cwd());
if (process.env.NODE_ENV === "production") {
    config = require("../config/webpack.pro.js");
} else {
    config = require("../config/webpack.test.js");
}
console.log("编译环境:" + (process.env.NODE_ENV == "production"
    ? "生产"
    : "开发"));
const server = new Webpackserver(webpack(config), {
    stats: {
        colors: true,
        timings: true,
        version: true,
        chunks: false

    },
    allowedHosts: ["192.168.183.143"],
    headers: {
        deviceType: "iphone"
    },
    https: false,
    compress: process.env.NODE_ENV === "production",
    hot: false

});
server.listen(8099, function () {
    console.log("Starting server on http://localhost:8099");
});