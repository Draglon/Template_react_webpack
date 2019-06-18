const path = require('path');
const autoprefixer = require('autoprefixer');

module.exports = {
  mode: 'development',
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  devServer: {
    historyApiFallback: true,
  },
  entry: './app/app.jsx', // входная точка - исходный файл
  output: {
    path: path.resolve(__dirname, './public'), // путь к каталогу выходных файлов - папка public
    publicPath: '/public/',
    filename: 'bundle.js', // название создаваемого файла
  },
  devtool: 'cheap-module-source-map',
  module: {
    rules: [
      {
        // Загрузчик для jsx
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        // Загрузчик для шрифтов
        test: /.(eot|ttf|woff|woff2|svg)(\?.+)?$/,
        exclude: /images/,
        use: [
          {
            loader: 'file-loader',
            options: {
              limit: 10000,
              name: './fonts/Icons/[name].[ext]',
            },
          },
        ],
      },
      {
        // Загрузчик для изображений
        test: /\.(gif|jpg|webp|png|svg)$/,
        exclude: /fonts/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: './images/[name].[ext]',
            },
          },
        ],
      },
      {
        // Загрузчик для scss файлов
        test: /\.scss$/,
        exclude: [/node_modules/, /public/],
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
          {
            loader: 'postcss-loader',
            options: {
              plugins: [autoprefixer()],
            },
          },
          { loader: 'sass-loader' },
        ],
      },
    ],
  },
};
