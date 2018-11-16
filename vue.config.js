
const path = require('path')

function resolve(url) {
  return path.resolve(__dirname, url)
}


module.exports = {
    devServer: {
      port: 8080,
      proxy: {
        '/maoyan': {
          target: 'https://m.maoyan.com/',
          changeOrigin: true,
          pathRewrite: {
            '^/maoyan': ''
          }
        },
        '/position': {
          target: 'https://m.maizuo.com/',
          changeOrigin: true,
          pathRewrite: {
            '^/position': ''
          }
        },
        '/bd': {
          target: 'http://api.map.baidu.com/',
          changeOrigin: true,
          pathRewrite: {
            '^/bd': ''
          }
        },
      }
     /*  proxy: {
        
      } */
    },
 
 
  
    chainWebpack  (config)  {
       config
            .resolve
            .alias
            .set('@styles', resolve('src/stylesheets'))
            .set('@libs', resolve('src/libs'))
            .set('@util', resolve('src/util'))
            .set('@c', resolve('src/components'))
            .set('@pages', resolve('src/pages'))
            .set('@', resolve('src'))
             
            
    }
}