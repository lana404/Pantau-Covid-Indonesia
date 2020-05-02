const merge = require("webpack-merge");
const common = require("./webpack.common");

module.exports = merge(common, {
   mode: "production",
   module: {
     rules: [{
       // Format berkas
       test: /\.js$/,
       // Berkas terkecuali
       exclude: "/node_modules/",
       // Using babel dan babel-preset
       use: [{
         loader: "babel-loader",
         options: {
           presets: ["@babel/preset-env"]
         }
       }]
     }]
   }
})
