# webpack-hmr

Quickly build a webpack HMR(Hot Module Replacement)

# Usage

``` bash
# serve with hot reload at localhost:8080
npm run dev

# you can custom host and port
npm run dev -- --host 0.0.0.0 --port 4000

# build for production with minification
npm run build
```

# why use
## loader?
loader的加载顺序是从上往上，从右到左

  style!css

+ css-loader css预处理器
+ style-loader css加载器

  style!css!less

+ less less编译器
+ less-loader less加载器

## plugins

+ html-webpack-plugin 通过一个模版生成一个html（依赖output.publicPath)
+ webpack.optimize.UglifyJsPlugin 压缩js

## License

MIT