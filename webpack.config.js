const path = require('path');

module.exports = {
  // Modalità di sviluppo (usa 'production' quando fai il deploy)
  mode: 'development',

  // File principale da cui partire
  entry: './javascript/index.js',

  // Dove mettere il bundle finale
  output: {
    filename: 'bundle.js',           // Nome del file bundle
    path: path.resolve(__dirname, 'js'), // Lo mettiamo nella stessa cartella js
    clean: true,                     // Pulisce il bundle precedente
  },

  module: {
    rules: [
      {
        test: /\.css$/i,            // Gestione file CSS
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.s[ac]ss$/i,        // Gestione file SCSS
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i, // Gestione immagini
        type: 'asset/resource',
        generator: {
          filename: '../img/[name][ext]', // Mantieni le immagini nella cartella img
        },
      },
    ],
  },

  devtool: 'source-map',            // Aiuta per il debug

  devServer: {
    static: {
      directory: path.join(__dirname),
    },
    compress: true,
    port: 9000,                     // Porta locale per il server di sviluppo
    open: true,                      // Apre il browser automaticamente
  },
};
