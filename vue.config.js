module.exports = {
  transpileDependencies: [
    'vuetify'
  ],
  publicPath: process.env.NODE_ENV === 'production'
  ? '/crud-login-vue/dis/'
  : '/'
}
