// webpack.config.js
module.exports = {
    // ... other webpack configurations
    module: {
      rules: [
        {
          test: /\.(gltf|glb)$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                outputPath: 'models', // Define the output path for your models
              },
            },
          ],
        },
        // ... other loaders
      ],
    },
  };
  