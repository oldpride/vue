// proxy file -tian
module.exports = {
  devServer: { 
    // this only works for devServer, not for production server.
    // this is because debug logLevel may print out sensitive info.
    // -tian
    proxy: {
      '^/api': {
        target: 'http://localhost:5000',
        changeOrigin: true,
        logLevel: 'debug',
        pathRewrite: { '^/api': '/' },
      },
    },
  },
}
