const { resolve } = require("path");
// Load the Vue plugin
const VueLoaderPlugin = require("vue-loader/lib/plugin");

module.exports = {
    output: {
        path: resolve(__dirname, "public", "build"),
    },
    // All import of Vue will be redirected to "vue/dist/vue.esm.js"
    resolve: {
        alias: {
            vue$: "vue/dist/vue.esm.js",
        },
    },
    // Set of rules to follow while loading files
    module: {
        rules: [
            // Vue
            {
                test: /\.vue$/,
                use: "vue-loader",
            },
            // CSS
            {
                test: /\.s?[ac]ss$/,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader"
                ],
            },
            // Fonts
            {
                test: /\.(woff2?|ttf|eot)$/,
                use: "file-loader",
            },
        ],
    },
    // Set of plugins
    plugins: [
        new VueLoaderPlugin(),
    ]
};
