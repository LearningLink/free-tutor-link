const path = require('path');

module.exports = env => {
    console.log('NODE_ENV: ', env.NODE_ENV);
    return {
        entry: './client/index.js' , 
        output: {
            path: path.resolve(__dirname, 'build') ,
            filename: 'bundle.js'
        } ,
          mode: env.NODE_ENV , 
        devServer: {
          
            publicPath: '/build/',
            proxy: {    
                '/': { 
                    target: 'http://localhost:3000',
                    changeOrigin: true 
                }
           
                }
            //port: 8080
          } ,
        module: {
            rules: [
              { test: /\.jsx?/,
                exclude: /(node_modules)/,
                use: { 
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env','@babel/preset-react']
                    }
                }
    
              } , 
              {
                test: /\.s[ac]ss$/i,
                use: [
                  // Creates `style` nodes from JS strings
                  'style-loader',
                  // Translates CSS into CommonJS
                  'css-loader',
                  // Compiles Sass to CSS
                  'sass-loader',
                ],
              },
            ]
          }
        }
    };
