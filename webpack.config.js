const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = (env, argv) => {
  const isProd = argv.mode === 'production';

  return {
    // File principale da cui partire
    entry: './javascript/index.js',

    // Dove mettere il bundle finale
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'javascript'),
      publicPath: '/javascript/',
      clean: true,
    },

    module: {
      rules: [
        {
          test: /\.css$/i,
          use: [isProd ? MiniCssExtractPlugin.loader : 'style-loader', 'css-loader'],
        },
        {
          test: /\.s[ac]ss$/i,
          use: [isProd ? MiniCssExtractPlugin.loader : 'style-loader', 'css-loader', 'sass-loader'],
        },
        {
          test: /\.(png|jpe?g|gif|svg)$/i,
          type: 'asset/resource',
          generator: {
            filename: '../img/[name][ext]',
          },
        },
      ],
    },

    plugins: isProd
      ? [
          new MiniCssExtractPlugin({
            filename: '../styles/style.css',
          }),
        ]
      : [],

    devtool: isProd ? false : 'source-map',

    optimization: {
      splitChunks: false,
      runtimeChunk: false,
    },

    devServer: {
      static: {
        directory: path.join(__dirname),
      },
      compress: true,
      port: 9000,
      open: true,
      devMiddleware: {
        writeToDisk: false,
      },
    },
  };
};
