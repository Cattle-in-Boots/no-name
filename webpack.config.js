/**
 * Created by hf on 2017/2/13.
 */
var path=require('path');
var extractTextPlugin=require('extract-text-webpack-plugin');
var nodeModulesPath=path.resolve(__dirname,"node_modules");
var buildPath=path.resolve(__dirname,"build");

module.exports={
    entry:__dirname+"/src/app.js",
    output:{
        path:buildPath,
        filename:"build.js"
    },
    module:{
        rules:[
            {
                test:/\.css$/,
                loader:"styles-loader!css-loader",
                exclude:nodeModulesPath
            },
            {
                test:/\.sass|scss$/,
                loader:"styles-loader!css-loader!sass-loader",
                exclude:nodeModulesPath
            },
            {
                test:/\.vue$/,
                loader:"vue-loader",
                exclude:nodeModulesPath
            }
        ]
    },
    resolve:{
        alias:{
            'vue$':nodeModulesPath+'/vue/dist/vue.js'
        }
    },
    watch:true
}