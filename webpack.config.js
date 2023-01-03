const path = require("path");
const pathLib = require("path");

module.exports = {
    // mdoe
    mode: "development",

    // entry
    entry: "./src/index.js",

    // output
    output: {
        filename: "bundle.js",
        path: path.join(__dirname, "dist"),
    }
}