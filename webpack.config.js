var path = require('path');

module.exports = {
  mode: 'development',
  devServer: {
    historyApiFallback: true
  },
  entry: './app/app.jsx', // входная точка - исходный файл
  output:{
    path: path.resolve(__dirname, './public'), // путь к каталогу выходных файлов - папка public
    publicPath: '/public/',
    filename: 'bundle.js' // название создаваемого файла
  },
  module:{
    rules:[   
      { // Загрузчик для jsx
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        options:{
          presets:['@babel/preset-env', '@babel/preset-react']
        }
      },
      { // Загрузчик для шрифтов
        test: /.(eot|ttf|woff|woff2|svg)(\?.+)?$/,
        exclude: /images/,
        use: [
          {
            loader: 'file-loader',
            options: {
              limit: 10000,
              name: './fonts/Icons/[name].[ext]',
            }
          }
        ]
      },
      { // Загрузчик для изображений
        test: /\.(gif|jpg|webp|png|svg)$/,
        exclude: /fonts/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: './images/[name].[ext]'
            }
          }
        ]
      },
      { // Загрузчик для css файлов
        test: /\.css$/,
        loader: 'style-loader!css-loader!autoprefixer-loader',
        exclude: [/node_modules/, /public/]
      },
      { // Загрузчик для scss файлов
        test: /\.scss$/,
        exclude: [/node_modules/, /public/],
        use: [
          {loader: 'style-loader'},
          {loader: 'css-loader'},
          {loader: 'sass-loader'}
        ]
      }
    ]
  }
}