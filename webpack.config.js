const path = require('path');

module.exports = {
  // Modalità di sviluppo
  mode: 'development',

  // File principale da cui partire
  entry: './javascript/index.js',

  // Dove mettere il bundle finale
  output: {
    filename: 'bundle.js',                       // Nome del bundle
    path: path.resolve(__dirname, 'javascript'), // Lo mettiamo nella stessa cartella js
    clean: true,                                 // Pulisce il bundle precedente
  },

  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.s[ac]ss$/i,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        type: 'asset/resource',
        generator: {
          filename: '../img/[name][ext]', // Mantieni le immagini nella cartella img
        },
      },
    ],
  },

  devtool: 'source-map', // Aiuta per il debug

  devServer: {
    static: {
      directory: path.join(__dirname), // Serve tutta la root del progetto
    },
    compress: true,
    port: 9000,
    open: true,
  },
};
