var path = require("path");
var webpack = require("webpack");
var HtmlWebpackPlugin = require("html-webpack-plugin");
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var base = require("./baseConfig.js");

module.exports = {
    entry: {
        "js/main": ["./src/main.js"],
        vendor: ["vue", "vue-router"]
    },
    output: {
        filename: "[name].[chunkhash].js",
        path: path.resolve(process.cwd(), "dist")

    },
    plugins: [

        new webpack
            .optimize
            .CommonsChunkPlugin({
                names: [
                    "app", "manifest"
                ],
                filename: "js/[name].[chunkhash].bundle.js"
            }),

        new HtmlWebpackPlugin({
            template: path.join(process.cwd(), "src/index.html")
        }),
        new webpack
            .optimize
            .UglifyJsPlugin({
                sourceMap: process.env.NODE_ENV === "production",
                compress: process.env.NODE_ENV === "production"
            }),
        new webpack.DefinePlugin(base),
        //提取所有css到一个文件中
        new ExtractTextPlugin({filename: "style.css", allChunks: true})

    ],
    devtool: "source-map",
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules)/,
                loader: "babel-loader"

            }, {
                test: /\.vue$/,
                loader: "vue-loader",
                options: {
                    loaders: {
                        css: ExtractTextPlugin.extract({
                            use: ["css-loader"], fallback: "vue-style-loader" // <- this is a dep of vue-loader, so no need to explicitly install if using npm3
                        }),
                        sass: ExtractTextPlugin.extract({
                            use: [
                                "css-loader", "sass-loader"
                            ],
                            fallback: "vue-style-loader" // <- this is a dep of vue-loader, so no need to explicitly install if using npm3
                        })
                    }
                }
            }, {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: "url-loader",
                query: {
                    limit: 10000,
                    name: "images/[hash].[ext]"
                }
            }, {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                loader: "url-loader",
                query: {
                    limit: 10000
                }
            }, {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    //resolve-url-loader may be chained before sass-loader if necessary
                    use: "css-loader"
                })
            }, {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    //resolve-url-loader may be chained before sass-loader if necessary
                    use: ["css-loader", "sass-loader"]
                })
            }
        ]
    },
    resolve: {
        extensions: [
            ".js", ".json", ".css", ".scss", ".vue"
        ],
        alias: {
            "vue$": "vue/dist/vue.common.js",
            "status": path.join(process.cwd(), "src/status"),
            "tools": path.join(process.cwd(), "src/tools"),
            "network": path.join(process.cwd(), "src/network"),
            "config": path.join(process.cwd(), "src/config"),
            "view": path.join(process.cwd(), "src/view")
        }
    }

};