// next.config.js

module.exports = {
    webpack: (config, { isServer }) => {
      // Agrega una regla para manejar archivos PDF
      config.module.rules.push({
        test: /\.(pdf)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              // Directorio de salida para los archivos PDF en la carpeta 'public'
              outputPath: 'static/pdf',
              // Habilita la emisión de URL relativas
              publicPath: '/_next/static/pdf',
            },
          },
        ],
      });
  
      return config;
    },
  };
  