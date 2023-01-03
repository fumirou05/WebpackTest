const SpeedMeasurePlugin = require("speed-measure-webpack-plugin");
const smp = new SpeedMeasurePlugin();
const path = require("path");

module.exports = smp.wrap({
    // mdoe
    mode: "development",

    // entry
    entry: "./src/index.js",

    // output
    output: {
        filename: "bundle.js",
        path: path.join(__dirname, "dist"),
    },

    // modules
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: "babel-loader",
                        options: {
                            presets: [
                                "@babel/preset-env",
                                {
                                    plugins: []
                                }
                            ]
                        }
                    }
                ]
            }
        ]
    }
})