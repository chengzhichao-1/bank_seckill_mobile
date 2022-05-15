module.exports = {
  // 1.配置方式一: CLI提供的属性
  outputDir: "./build",
  // publicPath: './',
  devServer: {
    proxy: {
      "^/api/hyh": {
        target: "http://124.221.252.162:8077",
        pathRewrite: {
          "^/api/hyh": ""
        },
        changeOrigin: true
      },
      "^/api/yhy": {
        target: "http://124.221.252.162:8082",
        pathRewrite: {
          "^/api/yhy": ""
        },
        changeOrigin: true
      }
    }
  },
  // 2.配置方式二: 和webpack属性完全一致, 最后会进行合并
  configureWebpack: {
    resolve: {
      alias: {
        components: "@/components"
      }
    }
  }
  // configureWebpack: (config) => {
  //   config.resolve.alias = {
  //     '@': path.resolve(__dirname, 'src'),
  //     components: '@/components'
  //   }
  // }
  // 3.配置方式三:
  // chainWebpack: (config) => {
  //   config.resolve.alias
  //     .set('@', path.resolve(__dirname, 'src'))
  //     .set('components', '@/components')
  // }
}
