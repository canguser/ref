const path = require('path');

module.exports = env => {
    return {
        mode: env.production === 'true' ? 'production' : 'none',
        //entry:需要打包的文件
        entry: './src/main/index.js',
        output: {
            // filename:指定打包后js文件的名字
            filename: env.production === 'true' ? 'ref.mini.js' : 'ref.js',
            //path:指定打包后的文件放在那里
            path: path.resolve(__dirname, "build"),
            libraryTarget: "umd2",
            globalObject: "typeof self !== 'undefined' ? self : this"
        },
        devtool: 'cheap-module-source-map'
    }
};