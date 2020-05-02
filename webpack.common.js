const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  // Source file js
   entry: "./src/js/main.js",
  // Hasil Compile
   output: {
       path: path.resolve(__dirname, "dist"),
       filename: "bundle.js"
   },
  // Module yang dibutuhkan
   module: {
     rules: [{
       test: /\.css$/,
       use: [{
         loader: "style-loader"
       },{
         loader: "css-loader"
       }]
     }]
   },
   plugins: [
     // Plugin untuk memproses berkas HTML secara otomatis
     new HtmlWebpackPlugin({
       template: "./src/template.html",
       filename: "index.html"
     })
   ]
 }
