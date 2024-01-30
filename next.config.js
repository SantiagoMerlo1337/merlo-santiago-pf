/** @type {import('next').NextConfig} */
const nextConfig = {};
// next.config.js

module.exports = {
    webpack: (config, { isServer }) => {
        // Agregar configuración para manejar archivos PDF
        config.module.rules.push({
            test: /\.(pdf)$/,
            use: [
                {
                    loader: "file-loader",
                    options: {
                        // Nombre de salida para los archivos PDF
                        name: "[name].[ext]",
                        // Directorio de salida para los archivos PDF en la carpeta pública
                        outputPath: "files",
                        // Habilitar la emisión de URL relativas
                        publicPath: "_next/static/files/",
                    },
                },
            ],
        });

        // Necesario para pasar el isServer flag a otras configuraciones de Webpack
        if (!isServer) {
            config.node = {
                fs: "empty",
            };
        }

        return config;
    },
};

module.exports = nextConfig;
