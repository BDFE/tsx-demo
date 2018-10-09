module.exports = {
    entry: "./src/index.tsx",
    output: {
        filename: "index.js",
        path: __dirname + "/dist"
    },
    resolve: { extensions: [".ts", ".tsx", ".js", "jsx"] },
    module: {
        rules: [
            {
                test: /\.tsx?$/, loader: "awesome-typescript-loader"
            },
            {
                test: /\.jsx?$/, loader: 'babel-loader'
            }
        ]
    },
};