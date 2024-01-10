{
  mode: 'production',
  context: '/Users/gszs/web/www/ls_cj',
  devtool: false,
  output: {
    hashFunction: 'xxhash64',
    path: '/Users/gszs/web/www/ls_cj/crx',
    filename: function () { /* omitted long function */ },
    publicPath: '/',
    chunkFilename: 'static/js/[name].[contenthash:8].js'
  },
  resolve: {
    alias: {
      '@': '/Users/gszs/web/www/ls_cj/src',
      vue$: 'vue/dist/vue.runtime.esm-bundler.js',
      http: '/Users/gszs/web/www/ls_cj/node_modules/stream-http/index.js',
      url: 'url'
    },
    extensions: [
      '.tsx',
      '.ts',
      '.mjs',
      '.js',
      '.jsx',
      '.vue',
      '.json',
      '.wasm'
    ],
    modules: [
      'node_modules',
      '/Users/gszs/web/www/ls_cj/node_modules',
      '/Users/gszs/web/www/ls_cj/node_modules/@vue/cli-service/node_modules'
    ]
  },
  resolveLoader: {
    modules: [
      '/Users/gszs/web/www/ls_cj/node_modules/@vue/cli-plugin-typescript/node_modules',
      '/Users/gszs/web/www/ls_cj/node_modules/@vue/cli-plugin-babel/node_modules',
      'node_modules',
      '/Users/gszs/web/www/ls_cj/node_modules',
      '/Users/gszs/web/www/ls_cj/node_modules/@vue/cli-service/node_modules'
    ]
  },
  module: {
    noParse: /^(vue|vue-router|vuex|vuex-router-sync)$/,
    rules: [
      /* config.module.rule('esm') */
      {
        test: /\.m?jsx?$/,
        resolve: {
          fullySpecified: false
        }
      },
      /* config.module.rule('vue') */
      {
        test: /\.vue$/,
        use: [
          /* config.module.rule('vue').use('vue-loader') */
          {
            loader: '/Users/gszs/web/www/ls_cj/node_modules/vue-loader/dist/index.js',
            options: {
              cacheDirectory: '/Users/gszs/web/www/ls_cj/node_modules/.cache/vue-loader',
              cacheIdentifier: '708d1f70',
              babelParserPlugins: [
                'jsx',
                'classProperties',
                'decorators-legacy'
              ]
            }
          }
        ]
      },
      /* config.module.rule('vue-style') */
      {
        test: /\.vue$/,
        resourceQuery: /type=style/,
        sideEffects: true
      },
      /* config.module.rule('pug') */
      {
        test: /\.pug$/,
        oneOf: [
          /* config.module.rule('pug').oneOf('pug-vue') */
          {
            resourceQuery: /vue/,
            use: [
              /* config.module.rule('pug').oneOf('pug-vue').use('pug-plain-loader') */
              {
                loader: 'pug-plain-loader'
              }
            ]
          },
          /* config.module.rule('pug').oneOf('pug-template') */
          {
            use: [
              /* config.module.rule('pug').oneOf('pug-template').use('raw') */
              {
                loader: 'raw-loader'
              },
              /* config.module.rule('pug').oneOf('pug-template').use('pug-plain-loader') */
              {
                loader: 'pug-plain-loader'
              }
            ]
          }
        ]
      },
      /* config.module.rule('svg') */
      {
        test: /\.(svg)(\?.*)?$/,
        type: 'asset/resource',
        generator: {
          filename: 'static/img/[name].[hash:8][ext]'
        }
      },
      /* config.module.rule('images') */
      {
        test: /\.(png|jpe?g|gif|webp|avif)(\?.*)?$/,
        type: 'asset',
        generator: {
          filename: 'static/img/[name].[hash:8][ext]'
        }
      },
      /* config.module.rule('media') */
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        type: 'asset',
        generator: {
          filename: 'static/media/[name].[hash:8][ext]'
        }
      },
      /* config.module.rule('fonts') */
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/i,
        type: 'asset',
        generator: {
          filename: 'static/fonts/[name].[hash:8][ext]'
        }
      },
      /* config.module.rule('css') */
      {
        test: /\.css$/,
        oneOf: [
          /* config.module.rule('css').oneOf('vue-modules') */
          {
            resourceQuery: /module/,
            use: [
              /* config.module.rule('css').oneOf('vue-modules').use('extract-css-loader') */
              {
                loader: '/Users/gszs/web/www/ls_cj/node_modules/mini-css-extract-plugin/dist/loader.js',
                options: {
                  publicPath: '/'
                }
              },
              /* config.module.rule('css').oneOf('vue-modules').use('css-loader') */
              {
                loader: '/Users/gszs/web/www/ls_cj/node_modules/css-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                  modules: {
                    localIdentName: '[name]_[local]_[hash:base64:5]',
                    auto: () => true
                  }
                }
              },
              /* config.module.rule('css').oneOf('vue-modules').use('postcss-loader') */
              {
                loader: '/Users/gszs/web/www/ls_cj/node_modules/postcss-loader/dist/cjs.js',
                options: {
                  sourceMap: false
                }
              }
            ]
          },
          /* config.module.rule('css').oneOf('vue') */
          {
            resourceQuery: /\?vue/,
            use: [
              /* config.module.rule('css').oneOf('vue').use('extract-css-loader') */
              {
                loader: '/Users/gszs/web/www/ls_cj/node_modules/mini-css-extract-plugin/dist/loader.js',
                options: {
                  publicPath: '/'
                }
              },
              /* config.module.rule('css').oneOf('vue').use('css-loader') */
              {
                loader: '/Users/gszs/web/www/ls_cj/node_modules/css-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2
                }
              },
              /* config.module.rule('css').oneOf('vue').use('postcss-loader') */
              {
                loader: '/Users/gszs/web/www/ls_cj/node_modules/postcss-loader/dist/cjs.js',
                options: {
                  sourceMap: false
                }
              }
            ]
          },
          /* config.module.rule('css').oneOf('normal-modules') */
          {
            test: /\.module\.\w+$/,
            use: [
              /* config.module.rule('css').oneOf('normal-modules').use('extract-css-loader') */
              {
                loader: '/Users/gszs/web/www/ls_cj/node_modules/mini-css-extract-plugin/dist/loader.js',
                options: {
                  publicPath: '/'
                }
              },
              /* config.module.rule('css').oneOf('normal-modules').use('css-loader') */
              {
                loader: '/Users/gszs/web/www/ls_cj/node_modules/css-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2
                }
              },
              /* config.module.rule('css').oneOf('normal-modules').use('postcss-loader') */
              {
                loader: '/Users/gszs/web/www/ls_cj/node_modules/postcss-loader/dist/cjs.js',
                options: {
                  sourceMap: false
                }
              }
            ]
          },
          /* config.module.rule('css').oneOf('normal') */
          {
            use: [
              /* config.module.rule('css').oneOf('normal').use('extract-css-loader') */
              {
                loader: '/Users/gszs/web/www/ls_cj/node_modules/mini-css-extract-plugin/dist/loader.js',
                options: {
                  publicPath: '/'
                }
              },
              /* config.module.rule('css').oneOf('normal').use('css-loader') */
              {
                loader: '/Users/gszs/web/www/ls_cj/node_modules/css-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2
                }
              },
              /* config.module.rule('css').oneOf('normal').use('postcss-loader') */
              {
                loader: '/Users/gszs/web/www/ls_cj/node_modules/postcss-loader/dist/cjs.js',
                options: {
                  sourceMap: false
                }
              }
            ]
          }
        ]
      },
      /* config.module.rule('postcss') */
      {
        test: /\.p(ost)?css$/,
        oneOf: [
          /* config.module.rule('postcss').oneOf('vue-modules') */
          {
            resourceQuery: /module/,
            use: [
              /* config.module.rule('postcss').oneOf('vue-modules').use('extract-css-loader') */
              {
                loader: '/Users/gszs/web/www/ls_cj/node_modules/mini-css-extract-plugin/dist/loader.js',
                options: {
                  publicPath: '/'
                }
              },
              /* config.module.rule('postcss').oneOf('vue-modules').use('css-loader') */
              {
                loader: '/Users/gszs/web/www/ls_cj/node_modules/css-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                  modules: {
                    localIdentName: '[name]_[local]_[hash:base64:5]',
                    auto: () => true
                  }
                }
              },
              /* config.module.rule('postcss').oneOf('vue-modules').use('postcss-loader') */
              {
                loader: '/Users/gszs/web/www/ls_cj/node_modules/postcss-loader/dist/cjs.js',
                options: {
                  sourceMap: false
                }
              }
            ]
          },
          /* config.module.rule('postcss').oneOf('vue') */
          {
            resourceQuery: /\?vue/,
            use: [
              /* config.module.rule('postcss').oneOf('vue').use('extract-css-loader') */
              {
                loader: '/Users/gszs/web/www/ls_cj/node_modules/mini-css-extract-plugin/dist/loader.js',
                options: {
                  publicPath: '/'
                }
              },
              /* config.module.rule('postcss').oneOf('vue').use('css-loader') */
              {
                loader: '/Users/gszs/web/www/ls_cj/node_modules/css-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2
                }
              },
              /* config.module.rule('postcss').oneOf('vue').use('postcss-loader') */
              {
                loader: '/Users/gszs/web/www/ls_cj/node_modules/postcss-loader/dist/cjs.js',
                options: {
                  sourceMap: false
                }
              }
            ]
          },
          /* config.module.rule('postcss').oneOf('normal-modules') */
          {
            test: /\.module\.\w+$/,
            use: [
              /* config.module.rule('postcss').oneOf('normal-modules').use('extract-css-loader') */
              {
                loader: '/Users/gszs/web/www/ls_cj/node_modules/mini-css-extract-plugin/dist/loader.js',
                options: {
                  publicPath: '/'
                }
              },
              /* config.module.rule('postcss').oneOf('normal-modules').use('css-loader') */
              {
                loader: '/Users/gszs/web/www/ls_cj/node_modules/css-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2
                }
              },
              /* config.module.rule('postcss').oneOf('normal-modules').use('postcss-loader') */
              {
                loader: '/Users/gszs/web/www/ls_cj/node_modules/postcss-loader/dist/cjs.js',
                options: {
                  sourceMap: false
                }
              }
            ]
          },
          /* config.module.rule('postcss').oneOf('normal') */
          {
            use: [
              /* config.module.rule('postcss').oneOf('normal').use('extract-css-loader') */
              {
                loader: '/Users/gszs/web/www/ls_cj/node_modules/mini-css-extract-plugin/dist/loader.js',
                options: {
                  publicPath: '/'
                }
              },
              /* config.module.rule('postcss').oneOf('normal').use('css-loader') */
              {
                loader: '/Users/gszs/web/www/ls_cj/node_modules/css-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2
                }
              },
              /* config.module.rule('postcss').oneOf('normal').use('postcss-loader') */
              {
                loader: '/Users/gszs/web/www/ls_cj/node_modules/postcss-loader/dist/cjs.js',
                options: {
                  sourceMap: false
                }
              }
            ]
          }
        ]
      },
      /* config.module.rule('scss') */
      {
        test: /\.scss$/,
        oneOf: [
          /* config.module.rule('scss').oneOf('vue-modules') */
          {
            resourceQuery: /module/,
            use: [
              /* config.module.rule('scss').oneOf('vue-modules').use('extract-css-loader') */
              {
                loader: '/Users/gszs/web/www/ls_cj/node_modules/mini-css-extract-plugin/dist/loader.js',
                options: {
                  publicPath: '/'
                }
              },
              /* config.module.rule('scss').oneOf('vue-modules').use('css-loader') */
              {
                loader: '/Users/gszs/web/www/ls_cj/node_modules/css-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                  modules: {
                    localIdentName: '[name]_[local]_[hash:base64:5]',
                    auto: () => true
                  }
                }
              },
              /* config.module.rule('scss').oneOf('vue-modules').use('postcss-loader') */
              {
                loader: '/Users/gszs/web/www/ls_cj/node_modules/postcss-loader/dist/cjs.js',
                options: {
                  sourceMap: false
                }
              },
              /* config.module.rule('scss').oneOf('vue-modules').use('sass-loader') */
              {
                loader: 'sass-loader',
                options: {
                  sourceMap: false
                }
              }
            ]
          },
          /* config.module.rule('scss').oneOf('vue') */
          {
            resourceQuery: /\?vue/,
            use: [
              /* config.module.rule('scss').oneOf('vue').use('extract-css-loader') */
              {
                loader: '/Users/gszs/web/www/ls_cj/node_modules/mini-css-extract-plugin/dist/loader.js',
                options: {
                  publicPath: '/'
                }
              },
              /* config.module.rule('scss').oneOf('vue').use('css-loader') */
              {
                loader: '/Users/gszs/web/www/ls_cj/node_modules/css-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2
                }
              },
              /* config.module.rule('scss').oneOf('vue').use('postcss-loader') */
              {
                loader: '/Users/gszs/web/www/ls_cj/node_modules/postcss-loader/dist/cjs.js',
                options: {
                  sourceMap: false
                }
              },
              /* config.module.rule('scss').oneOf('vue').use('sass-loader') */
              {
                loader: 'sass-loader',
                options: {
                  sourceMap: false
                }
              }
            ]
          },
          /* config.module.rule('scss').oneOf('normal-modules') */
          {
            test: /\.module\.\w+$/,
            use: [
              /* config.module.rule('scss').oneOf('normal-modules').use('extract-css-loader') */
              {
                loader: '/Users/gszs/web/www/ls_cj/node_modules/mini-css-extract-plugin/dist/loader.js',
                options: {
                  publicPath: '/'
                }
              },
              /* config.module.rule('scss').oneOf('normal-modules').use('css-loader') */
              {
                loader: '/Users/gszs/web/www/ls_cj/node_modules/css-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2
                }
              },
              /* config.module.rule('scss').oneOf('normal-modules').use('postcss-loader') */
              {
                loader: '/Users/gszs/web/www/ls_cj/node_modules/postcss-loader/dist/cjs.js',
                options: {
                  sourceMap: false
                }
              },
              /* config.module.rule('scss').oneOf('normal-modules').use('sass-loader') */
              {
                loader: 'sass-loader',
                options: {
                  sourceMap: false
                }
              }
            ]
          },
          /* config.module.rule('scss').oneOf('normal') */
          {
            use: [
              /* config.module.rule('scss').oneOf('normal').use('extract-css-loader') */
              {
                loader: '/Users/gszs/web/www/ls_cj/node_modules/mini-css-extract-plugin/dist/loader.js',
                options: {
                  publicPath: '/'
                }
              },
              /* config.module.rule('scss').oneOf('normal').use('css-loader') */
              {
                loader: '/Users/gszs/web/www/ls_cj/node_modules/css-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2
                }
              },
              /* config.module.rule('scss').oneOf('normal').use('postcss-loader') */
              {
                loader: '/Users/gszs/web/www/ls_cj/node_modules/postcss-loader/dist/cjs.js',
                options: {
                  sourceMap: false
                }
              },
              /* config.module.rule('scss').oneOf('normal').use('sass-loader') */
              {
                loader: 'sass-loader',
                options: {
                  sourceMap: false
                }
              }
            ]
          }
        ]
      },
      /* config.module.rule('sass') */
      {
        test: /\.sass$/,
        oneOf: [
          /* config.module.rule('sass').oneOf('vue-modules') */
          {
            resourceQuery: /module/,
            use: [
              /* config.module.rule('sass').oneOf('vue-modules').use('extract-css-loader') */
              {
                loader: '/Users/gszs/web/www/ls_cj/node_modules/mini-css-extract-plugin/dist/loader.js',
                options: {
                  publicPath: '/'
                }
              },
              /* config.module.rule('sass').oneOf('vue-modules').use('css-loader') */
              {
                loader: '/Users/gszs/web/www/ls_cj/node_modules/css-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                  modules: {
                    localIdentName: '[name]_[local]_[hash:base64:5]',
                    auto: () => true
                  }
                }
              },
              /* config.module.rule('sass').oneOf('vue-modules').use('postcss-loader') */
              {
                loader: '/Users/gszs/web/www/ls_cj/node_modules/postcss-loader/dist/cjs.js',
                options: {
                  sourceMap: false
                }
              },
              /* config.module.rule('sass').oneOf('vue-modules').use('sass-loader') */
              {
                loader: 'sass-loader',
                options: {
                  sourceMap: false,
                  sassOptions: {
                    indentedSyntax: true
                  }
                }
              }
            ]
          },
          /* config.module.rule('sass').oneOf('vue') */
          {
            resourceQuery: /\?vue/,
            use: [
              /* config.module.rule('sass').oneOf('vue').use('extract-css-loader') */
              {
                loader: '/Users/gszs/web/www/ls_cj/node_modules/mini-css-extract-plugin/dist/loader.js',
                options: {
                  publicPath: '/'
                }
              },
              /* config.module.rule('sass').oneOf('vue').use('css-loader') */
              {
                loader: '/Users/gszs/web/www/ls_cj/node_modules/css-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2
                }
              },
              /* config.module.rule('sass').oneOf('vue').use('postcss-loader') */
              {
                loader: '/Users/gszs/web/www/ls_cj/node_modules/postcss-loader/dist/cjs.js',
                options: {
                  sourceMap: false
                }
              },
              /* config.module.rule('sass').oneOf('vue').use('sass-loader') */
              {
                loader: 'sass-loader',
                options: {
                  sourceMap: false,
                  sassOptions: {
                    indentedSyntax: true
                  }
                }
              }
            ]
          },
          /* config.module.rule('sass').oneOf('normal-modules') */
          {
            test: /\.module\.\w+$/,
            use: [
              /* config.module.rule('sass').oneOf('normal-modules').use('extract-css-loader') */
              {
                loader: '/Users/gszs/web/www/ls_cj/node_modules/mini-css-extract-plugin/dist/loader.js',
                options: {
                  publicPath: '/'
                }
              },
              /* config.module.rule('sass').oneOf('normal-modules').use('css-loader') */
              {
                loader: '/Users/gszs/web/www/ls_cj/node_modules/css-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2
                }
              },
              /* config.module.rule('sass').oneOf('normal-modules').use('postcss-loader') */
              {
                loader: '/Users/gszs/web/www/ls_cj/node_modules/postcss-loader/dist/cjs.js',
                options: {
                  sourceMap: false
                }
              },
              /* config.module.rule('sass').oneOf('normal-modules').use('sass-loader') */
              {
                loader: 'sass-loader',
                options: {
                  sourceMap: false,
                  sassOptions: {
                    indentedSyntax: true
                  }
                }
              }
            ]
          },
          /* config.module.rule('sass').oneOf('normal') */
          {
            use: [
              /* config.module.rule('sass').oneOf('normal').use('extract-css-loader') */
              {
                loader: '/Users/gszs/web/www/ls_cj/node_modules/mini-css-extract-plugin/dist/loader.js',
                options: {
                  publicPath: '/'
                }
              },
              /* config.module.rule('sass').oneOf('normal').use('css-loader') */
              {
                loader: '/Users/gszs/web/www/ls_cj/node_modules/css-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2
                }
              },
              /* config.module.rule('sass').oneOf('normal').use('postcss-loader') */
              {
                loader: '/Users/gszs/web/www/ls_cj/node_modules/postcss-loader/dist/cjs.js',
                options: {
                  sourceMap: false
                }
              },
              /* config.module.rule('sass').oneOf('normal').use('sass-loader') */
              {
                loader: 'sass-loader',
                options: {
                  sourceMap: false,
                  sassOptions: {
                    indentedSyntax: true
                  }
                }
              }
            ]
          }
        ]
      },
      /* config.module.rule('less') */
      {
        test: /\.less$/,
        oneOf: [
          /* config.module.rule('less').oneOf('vue-modules') */
          {
            resourceQuery: /module/,
            use: [
              /* config.module.rule('less').oneOf('vue-modules').use('extract-css-loader') */
              {
                loader: '/Users/gszs/web/www/ls_cj/node_modules/mini-css-extract-plugin/dist/loader.js',
                options: {
                  publicPath: '/'
                }
              },
              /* config.module.rule('less').oneOf('vue-modules').use('css-loader') */
              {
                loader: '/Users/gszs/web/www/ls_cj/node_modules/css-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                  modules: {
                    localIdentName: '[name]_[local]_[hash:base64:5]',
                    auto: () => true
                  }
                }
              },
              /* config.module.rule('less').oneOf('vue-modules').use('postcss-loader') */
              {
                loader: '/Users/gszs/web/www/ls_cj/node_modules/postcss-loader/dist/cjs.js',
                options: {
                  sourceMap: false
                }
              },
              /* config.module.rule('less').oneOf('vue-modules').use('less-loader') */
              {
                loader: '/Users/gszs/web/www/ls_cj/node_modules/less-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  lessOptions: {
                    modifyVars: {
                      hack: 'true; @import "/Users/gszs/web/www/ls_cj/src/design/config.less";'
                    },
                    javascriptEnabled: true
                  }
                }
              }
            ]
          },
          /* config.module.rule('less').oneOf('vue') */
          {
            resourceQuery: /\?vue/,
            use: [
              /* config.module.rule('less').oneOf('vue').use('extract-css-loader') */
              {
                loader: '/Users/gszs/web/www/ls_cj/node_modules/mini-css-extract-plugin/dist/loader.js',
                options: {
                  publicPath: '/'
                }
              },
              /* config.module.rule('less').oneOf('vue').use('css-loader') */
              {
                loader: '/Users/gszs/web/www/ls_cj/node_modules/css-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2
                }
              },
              /* config.module.rule('less').oneOf('vue').use('postcss-loader') */
              {
                loader: '/Users/gszs/web/www/ls_cj/node_modules/postcss-loader/dist/cjs.js',
                options: {
                  sourceMap: false
                }
              },
              /* config.module.rule('less').oneOf('vue').use('less-loader') */
              {
                loader: '/Users/gszs/web/www/ls_cj/node_modules/less-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  lessOptions: {
                    modifyVars: {
                      hack: 'true; @import "/Users/gszs/web/www/ls_cj/src/design/config.less";'
                    },
                    javascriptEnabled: true
                  }
                }
              }
            ]
          },
          /* config.module.rule('less').oneOf('normal-modules') */
          {
            test: /\.module\.\w+$/,
            use: [
              /* config.module.rule('less').oneOf('normal-modules').use('extract-css-loader') */
              {
                loader: '/Users/gszs/web/www/ls_cj/node_modules/mini-css-extract-plugin/dist/loader.js',
                options: {
                  publicPath: '/'
                }
              },
              /* config.module.rule('less').oneOf('normal-modules').use('css-loader') */
              {
                loader: '/Users/gszs/web/www/ls_cj/node_modules/css-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2
                }
              },
              /* config.module.rule('less').oneOf('normal-modules').use('postcss-loader') */
              {
                loader: '/Users/gszs/web/www/ls_cj/node_modules/postcss-loader/dist/cjs.js',
                options: {
                  sourceMap: false
                }
              },
              /* config.module.rule('less').oneOf('normal-modules').use('less-loader') */
              {
                loader: '/Users/gszs/web/www/ls_cj/node_modules/less-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  lessOptions: {
                    modifyVars: {
                      hack: 'true; @import "/Users/gszs/web/www/ls_cj/src/design/config.less";'
                    },
                    javascriptEnabled: true
                  }
                }
              }
            ]
          },
          /* config.module.rule('less').oneOf('normal') */
          {
            use: [
              /* config.module.rule('less').oneOf('normal').use('extract-css-loader') */
              {
                loader: '/Users/gszs/web/www/ls_cj/node_modules/mini-css-extract-plugin/dist/loader.js',
                options: {
                  publicPath: '/'
                }
              },
              /* config.module.rule('less').oneOf('normal').use('css-loader') */
              {
                loader: '/Users/gszs/web/www/ls_cj/node_modules/css-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2
                }
              },
              /* config.module.rule('less').oneOf('normal').use('postcss-loader') */
              {
                loader: '/Users/gszs/web/www/ls_cj/node_modules/postcss-loader/dist/cjs.js',
                options: {
                  sourceMap: false
                }
              },
              /* config.module.rule('less').oneOf('normal').use('less-loader') */
              {
                loader: '/Users/gszs/web/www/ls_cj/node_modules/less-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  lessOptions: {
                    modifyVars: {
                      hack: 'true; @import "/Users/gszs/web/www/ls_cj/src/design/config.less";'
                    },
                    javascriptEnabled: true
                  }
                }
              }
            ]
          }
        ]
      },
      /* config.module.rule('stylus') */
      {
        test: /\.styl(us)?$/,
        oneOf: [
          /* config.module.rule('stylus').oneOf('vue-modules') */
          {
            resourceQuery: /module/,
            use: [
              /* config.module.rule('stylus').oneOf('vue-modules').use('extract-css-loader') */
              {
                loader: '/Users/gszs/web/www/ls_cj/node_modules/mini-css-extract-plugin/dist/loader.js',
                options: {
                  publicPath: '/'
                }
              },
              /* config.module.rule('stylus').oneOf('vue-modules').use('css-loader') */
              {
                loader: '/Users/gszs/web/www/ls_cj/node_modules/css-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                  modules: {
                    localIdentName: '[name]_[local]_[hash:base64:5]',
                    auto: () => true
                  }
                }
              },
              /* config.module.rule('stylus').oneOf('vue-modules').use('postcss-loader') */
              {
                loader: '/Users/gszs/web/www/ls_cj/node_modules/postcss-loader/dist/cjs.js',
                options: {
                  sourceMap: false
                }
              },
              /* config.module.rule('stylus').oneOf('vue-modules').use('stylus-loader') */
              {
                loader: 'stylus-loader',
                options: {
                  sourceMap: false
                }
              }
            ]
          },
          /* config.module.rule('stylus').oneOf('vue') */
          {
            resourceQuery: /\?vue/,
            use: [
              /* config.module.rule('stylus').oneOf('vue').use('extract-css-loader') */
              {
                loader: '/Users/gszs/web/www/ls_cj/node_modules/mini-css-extract-plugin/dist/loader.js',
                options: {
                  publicPath: '/'
                }
              },
              /* config.module.rule('stylus').oneOf('vue').use('css-loader') */
              {
                loader: '/Users/gszs/web/www/ls_cj/node_modules/css-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2
                }
              },
              /* config.module.rule('stylus').oneOf('vue').use('postcss-loader') */
              {
                loader: '/Users/gszs/web/www/ls_cj/node_modules/postcss-loader/dist/cjs.js',
                options: {
                  sourceMap: false
                }
              },
              /* config.module.rule('stylus').oneOf('vue').use('stylus-loader') */
              {
                loader: 'stylus-loader',
                options: {
                  sourceMap: false
                }
              }
            ]
          },
          /* config.module.rule('stylus').oneOf('normal-modules') */
          {
            test: /\.module\.\w+$/,
            use: [
              /* config.module.rule('stylus').oneOf('normal-modules').use('extract-css-loader') */
              {
                loader: '/Users/gszs/web/www/ls_cj/node_modules/mini-css-extract-plugin/dist/loader.js',
                options: {
                  publicPath: '/'
                }
              },
              /* config.module.rule('stylus').oneOf('normal-modules').use('css-loader') */
              {
                loader: '/Users/gszs/web/www/ls_cj/node_modules/css-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2
                }
              },
              /* config.module.rule('stylus').oneOf('normal-modules').use('postcss-loader') */
              {
                loader: '/Users/gszs/web/www/ls_cj/node_modules/postcss-loader/dist/cjs.js',
                options: {
                  sourceMap: false
                }
              },
              /* config.module.rule('stylus').oneOf('normal-modules').use('stylus-loader') */
              {
                loader: 'stylus-loader',
                options: {
                  sourceMap: false
                }
              }
            ]
          },
          /* config.module.rule('stylus').oneOf('normal') */
          {
            use: [
              /* config.module.rule('stylus').oneOf('normal').use('extract-css-loader') */
              {
                loader: '/Users/gszs/web/www/ls_cj/node_modules/mini-css-extract-plugin/dist/loader.js',
                options: {
                  publicPath: '/'
                }
              },
              /* config.module.rule('stylus').oneOf('normal').use('css-loader') */
              {
                loader: '/Users/gszs/web/www/ls_cj/node_modules/css-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2
                }
              },
              /* config.module.rule('stylus').oneOf('normal').use('postcss-loader') */
              {
                loader: '/Users/gszs/web/www/ls_cj/node_modules/postcss-loader/dist/cjs.js',
                options: {
                  sourceMap: false
                }
              },
              /* config.module.rule('stylus').oneOf('normal').use('stylus-loader') */
              {
                loader: 'stylus-loader',
                options: {
                  sourceMap: false
                }
              }
            ]
          }
        ]
      },
      /* config.module.rule('js') */
      {
        test: /\.m?jsx?$/,
        exclude: [
          function () { /* omitted long function */ }
        ],
        use: [
          /* config.module.rule('js').use('thread-loader') */
          {
            loader: '/Users/gszs/web/www/ls_cj/node_modules/thread-loader/dist/cjs.js'
          },
          /* config.module.rule('js').use('babel-loader') */
          {
            loader: '/Users/gszs/web/www/ls_cj/node_modules/@vue/cli-plugin-babel/node_modules/babel-loader/lib/index.js',
            options: {
              cacheCompression: false,
              cacheDirectory: '/Users/gszs/web/www/ls_cj/node_modules/.cache/babel-loader',
              cacheIdentifier: '207515dc'
            }
          }
        ]
      },
      /* config.module.rule('ts') */
      {
        test: /\.ts$/,
        use: [
          /* config.module.rule('ts').use('thread-loader') */
          {
            loader: '/Users/gszs/web/www/ls_cj/node_modules/thread-loader/dist/cjs.js'
          },
          /* config.module.rule('ts').use('babel-loader') */
          {
            loader: '/Users/gszs/web/www/ls_cj/node_modules/@vue/cli-plugin-typescript/node_modules/babel-loader/lib/index.js'
          },
          /* config.module.rule('ts').use('ts-loader') */
          {
            loader: '/Users/gszs/web/www/ls_cj/node_modules/ts-loader/index.js',
            options: {
              transpileOnly: true,
              appendTsSuffixTo: [
                '\\.vue$'
              ],
              happyPackMode: true
            }
          }
        ]
      },
      /* config.module.rule('tsx') */
      {
        test: /\.tsx$/,
        use: [
          /* config.module.rule('tsx').use('thread-loader') */
          {
            loader: '/Users/gszs/web/www/ls_cj/node_modules/thread-loader/dist/cjs.js'
          },
          /* config.module.rule('tsx').use('babel-loader') */
          {
            loader: '/Users/gszs/web/www/ls_cj/node_modules/@vue/cli-plugin-typescript/node_modules/babel-loader/lib/index.js'
          },
          /* config.module.rule('tsx').use('ts-loader') */
          {
            loader: '/Users/gszs/web/www/ls_cj/node_modules/ts-loader/index.js',
            options: {
              transpileOnly: true,
              happyPackMode: true,
              appendTsxSuffixTo: [
                '\\.vue$'
              ]
            }
          }
        ]
      }
    ]
  },
  optimization: {
    realContentHash: false,
    minimize: true,
    minimizer: [
      /* config.optimization.minimizer('terser') */
      new TerserPlugin(
        {
          terserOptions: {
            compress: {
              arrows: false,
              collapse_vars: false,
              comparisons: false,
              computed_props: false,
              hoist_funs: false,
              hoist_props: false,
              hoist_vars: false,
              inline: false,
              loops: false,
              negate_iife: false,
              properties: false,
              reduce_funcs: false,
              reduce_vars: false,
              switches: false,
              toplevel: false,
              typeofs: false,
              booleans: true,
              if_return: true,
              sequences: true,
              unused: true,
              conditionals: true,
              dead_code: true,
              evaluate: true,
              drop_console: true,
              drop_debugger: false,
              pure_funcs: [
                'console.log'
              ]
            },
            mangle: {
              safari10: true
            }
          },
          parallel: true,
          extractComments: false
        }
      ),
      /* config.optimization.minimizer('css') */
      new CssMinimizerPlugin(
        {
          parallel: true,
          minimizerOptions: {
            preset: [
              'default',
              {
                mergeLonghand: false,
                cssDeclarationSorter: false
              }
            ]
          }
        }
      )
    ]
  },
  plugins: [
    /* config.plugin('vue-loader') */
    new Plugin(),
    /* config.plugin('feature-flags') */
    new DefinePlugin(
      {
        __VUE_OPTIONS_API__: 'true',
        __VUE_PROD_DEVTOOLS__: 'false'
      }
    ),
    /* config.plugin('define') */
    new DefinePlugin(
      {
        'process.env': {
          NODE_ENV: '"production"',
          VUE_APP_CRX_URL_KEY: '"LSCJ_PRO_CRX_URL"',
          VUE_APP_PUBLIC_CDN_HOST: '"f.tqdn.cn"',
          VUE_APP_CDN_URL1: '"https://lscj.tqdn.cn"',
          VUE_APP_CDN_URL2: '"https://lscj2.tqdn.cn"',
          VUE_APP_STORAGE_BASE_KEY: '"LSCJ_PRO_LOCAL"',
          VUE_APP_VFE3_CDN_HOST: '"https://f.tqdn.cn/"',
          VUE_APP_VFE3_VERSION: '"2.13.4"',
          VUE_APP_UPDATE_CYCLE: '"0"',
          VUE_APP_BUNDLE_ANALYZE: '"false"',
          VUE_APP_PROJECT_NAME: '"ls_cj"',
          VUE_APP_EYE_KEY: '"LSCJ-CRX-EYE-MONITOR"',
          VUE_APP_AMAZON_CACHE_VERSION: '"26"',
          BASE_URL: '"/"'
        }
      }
    ),
    /* config.plugin('case-sensitive-paths') */
    new CaseSensitivePathsPlugin(),
    /* config.plugin('friendly-errors') */
    new FriendlyErrorsWebpackPlugin(
      {
        additionalTransformers: [
          function () { /* omitted long function */ }
        ],
        additionalFormatters: [
          function () { /* omitted long function */ }
        ]
      }
    ),
    /* config.plugin('extract-css') */
    new MiniCssExtractPlugin(
      {
        filename: '../pre-dist/[name].[chunkhash:8].css',
        chunkFilename: 'static/css/[name].[contenthash:8].css'
      }
    ),
    /* config.plugin('html-popup') */
    new HtmlWebpackPlugin(
      {
        title: 'vue-extension',
        scriptLoading: 'defer',
        templateParameters: function () { /* omitted long function */ },
        chunks: [
          'chunk-vendors',
          'chunk-common',
          'popup'
        ],
        template: '/Users/gszs/web/www/ls_cj/src/popup/index.html',
        filename: 'popup.html'
      }
    ),
    /* config.plugin('html-init') */
    new HtmlWebpackPlugin(
      {
        title: 'vue-extension',
        scriptLoading: 'defer',
        templateParameters: function () { /* omitted long function */ },
        chunks: [
          'chunk-vendors',
          'chunk-common',
          'init'
        ],
        template: '/Users/gszs/web/www/ls_cj/node_modules/@vue/cli-service/lib/config/index-default.html',
        filename: 'init.html'
      }
    ),
    /* config.plugin('html-background') */
    new HtmlWebpackPlugin(
      {
        title: 'vue-extension',
        scriptLoading: 'defer',
        templateParameters: function () { /* omitted long function */ },
        chunks: [
          'chunk-vendors',
          'chunk-common',
          'background'
        ],
        template: '/Users/gszs/web/www/ls_cj/src/background/index.html',
        filename: 'background.html'
      }
    ),
    /* config.plugin('html-options') */
    new HtmlWebpackPlugin(
      {
        title: 'vue-extension',
        scriptLoading: 'defer',
        templateParameters: function () { /* omitted long function */ },
        chunks: [
          'chunk-vendors',
          'chunk-common',
          'options'
        ],
        template: '/Users/gszs/web/www/ls_cj/src/options/index.html',
        filename: 'options.html'
      }
    ),
    /* config.plugin('html-1688FactoryImageSearch') */
    new HtmlWebpackPlugin(
      {
        title: 'vue-extension',
        scriptLoading: 'defer',
        templateParameters: function () { /* omitted long function */ },
        chunks: [
          'chunk-vendors',
          'chunk-common',
          '1688FactoryImageSearch'
        ],
        template: '/Users/gszs/web/www/ls_cj/node_modules/@vue/cli-service/lib/config/index-default.html',
        filename: '1688FactoryImageSearch.html'
      }
    ),
    /* config.plugin('html-3e3eImageSearch') */
    new HtmlWebpackPlugin(
      {
        title: 'vue-extension',
        scriptLoading: 'defer',
        templateParameters: function () { /* omitted long function */ },
        chunks: [
          'chunk-vendors',
          'chunk-common',
          '3e3eImageSearch'
        ],
        template: '/Users/gszs/web/www/ls_cj/node_modules/@vue/cli-service/lib/config/index-default.html',
        filename: '3e3eImageSearch.html'
      }
    ),
    /* config.plugin('html-amazonGoodsBestsellers') */
    new HtmlWebpackPlugin(
      {
        title: 'vue-extension',
        scriptLoading: 'defer',
        templateParameters: function () { /* omitted long function */ },
        chunks: [
          'chunk-vendors',
          'chunk-common',
          'amazonGoodsBestsellers'
        ],
        template: '/Users/gszs/web/www/ls_cj/node_modules/@vue/cli-service/lib/config/index-default.html',
        filename: 'amazonGoodsBestsellers.html'
      }
    ),
    /* config.plugin('html-amazonGoodsClassifications') */
    new HtmlWebpackPlugin(
      {
        title: 'vue-extension',
        scriptLoading: 'defer',
        templateParameters: function () { /* omitted long function */ },
        chunks: [
          'chunk-vendors',
          'chunk-common',
          'amazonGoodsClassifications'
        ],
        template: '/Users/gszs/web/www/ls_cj/node_modules/@vue/cli-service/lib/config/index-default.html',
        filename: 'amazonGoodsClassifications.html'
      }
    ),
    /* config.plugin('html-amazonGoodsDetail') */
    new HtmlWebpackPlugin(
      {
        title: 'vue-extension',
        scriptLoading: 'defer',
        templateParameters: function () { /* omitted long function */ },
        chunks: [
          'chunk-vendors',
          'chunk-common',
          'amazonGoodsDetail'
        ],
        template: '/Users/gszs/web/www/ls_cj/node_modules/@vue/cli-service/lib/config/index-default.html',
        filename: 'amazonGoodsDetail.html'
      }
    ),
    /* config.plugin('html-amazonGoodsInfoCard') */
    new HtmlWebpackPlugin(
      {
        title: 'vue-extension',
        scriptLoading: 'defer',
        templateParameters: function () { /* omitted long function */ },
        chunks: [
          'chunk-vendors',
          'chunk-common',
          'amazonGoodsInfoCard'
        ],
        template: '/Users/gszs/web/www/ls_cj/node_modules/@vue/cli-service/lib/config/index-default.html',
        filename: 'amazonGoodsInfoCard.html'
      }
    ),
    /* config.plugin('html-amazonGoodsPictureFrame') */
    new HtmlWebpackPlugin(
      {
        title: 'vue-extension',
        scriptLoading: 'defer',
        templateParameters: function () { /* omitted long function */ },
        chunks: [
          'chunk-vendors',
          'chunk-common',
          'amazonGoodsPictureFrame'
        ],
        template: '/Users/gszs/web/www/ls_cj/node_modules/@vue/cli-service/lib/config/index-default.html',
        filename: 'amazonGoodsPictureFrame.html'
      }
    ),
    /* config.plugin('html-amazonGoodsReviews') */
    new HtmlWebpackPlugin(
      {
        title: 'vue-extension',
        scriptLoading: 'defer',
        templateParameters: function () { /* omitted long function */ },
        chunks: [
          'chunk-vendors',
          'chunk-common',
          'amazonGoodsReviews'
        ],
        template: '/Users/gszs/web/www/ls_cj/node_modules/@vue/cli-service/lib/config/index-default.html',
        filename: 'amazonGoodsReviews.html'
      }
    ),
    /* config.plugin('html-amazonGoodsSearch') */
    new HtmlWebpackPlugin(
      {
        title: 'vue-extension',
        scriptLoading: 'defer',
        templateParameters: function () { /* omitted long function */ },
        chunks: [
          'chunk-vendors',
          'chunk-common',
          'amazonGoodsSearch'
        ],
        template: '/Users/gszs/web/www/ls_cj/node_modules/@vue/cli-service/lib/config/index-default.html',
        filename: 'amazonGoodsSearch.html'
      }
    ),
    /* config.plugin('html-amazonKeywordRanking') */
    new HtmlWebpackPlugin(
      {
        title: 'vue-extension',
        scriptLoading: 'defer',
        templateParameters: function () { /* omitted long function */ },
        chunks: [
          'chunk-vendors',
          'chunk-common',
          'amazonKeywordRanking'
        ],
        template: '/Users/gszs/web/www/ls_cj/node_modules/@vue/cli-service/lib/config/index-default.html',
        filename: 'amazonKeywordRanking.html'
      }
    ),
    /* config.plugin('html-amazonMallDetail') */
    new HtmlWebpackPlugin(
      {
        title: 'vue-extension',
        scriptLoading: 'defer',
        templateParameters: function () { /* omitted long function */ },
        chunks: [
          'chunk-vendors',
          'chunk-common',
          'amazonMallDetail'
        ],
        template: '/Users/gszs/web/www/ls_cj/node_modules/@vue/cli-service/lib/config/index-default.html',
        filename: 'amazonMallDetail.html'
      }
    ),
    /* config.plugin('html-amazonMallGoodsSearch') */
    new HtmlWebpackPlugin(
      {
        title: 'vue-extension',
        scriptLoading: 'defer',
        templateParameters: function () { /* omitted long function */ },
        chunks: [
          'chunk-vendors',
          'chunk-common',
          'amazonMallGoodsSearch'
        ],
        template: '/Users/gszs/web/www/ls_cj/node_modules/@vue/cli-service/lib/config/index-default.html',
        filename: 'amazonMallGoodsSearch.html'
      }
    ),
    /* config.plugin('html-amazonPostalchange') */
    new HtmlWebpackPlugin(
      {
        title: 'vue-extension',
        scriptLoading: 'defer',
        templateParameters: function () { /* omitted long function */ },
        chunks: [
          'chunk-vendors',
          'chunk-common',
          'amazonPostalchange'
        ],
        template: '/Users/gszs/web/www/ls_cj/node_modules/@vue/cli-service/lib/config/index-default.html',
        filename: 'amazonPostalchange.html'
      }
    ),
    /* config.plugin('html-amazonShopthelookSearch') */
    new HtmlWebpackPlugin(
      {
        title: 'vue-extension',
        scriptLoading: 'defer',
        templateParameters: function () { /* omitted long function */ },
        chunks: [
          'chunk-vendors',
          'chunk-common',
          'amazonShopthelookSearch'
        ],
        template: '/Users/gszs/web/www/ls_cj/node_modules/@vue/cli-service/lib/config/index-default.html',
        filename: 'amazonShopthelookSearch.html'
      }
    ),
    /* config.plugin('html-baoNiuNiuSearchProductsByImage') */
    new HtmlWebpackPlugin(
      {
        title: 'vue-extension',
        scriptLoading: 'defer',
        templateParameters: function () { /* omitted long function */ },
        chunks: [
          'chunk-vendors',
          'chunk-common',
          'baoNiuNiuSearchProductsByImage'
        ],
        template: '/Users/gszs/web/www/ls_cj/node_modules/@vue/cli-service/lib/config/index-default.html',
        filename: 'baoNiuNiuSearchProductsByImage.html'
      }
    ),
    /* config.plugin('html-bg') */
    new HtmlWebpackPlugin(
      {
        title: 'vue-extension',
        scriptLoading: 'defer',
        templateParameters: function () { /* omitted long function */ },
        chunks: [
          'chunk-vendors',
          'chunk-common',
          'bg'
        ],
        template: '/Users/gszs/web/www/ls_cj/node_modules/@vue/cli-service/lib/config/index-default.html',
        filename: 'bg.html'
      }
    ),
    /* config.plugin('html-content') */
    new HtmlWebpackPlugin(
      {
        title: 'vue-extension',
        scriptLoading: 'defer',
        templateParameters: function () { /* omitted long function */ },
        chunks: [
          'chunk-vendors',
          'chunk-common',
          'content'
        ],
        template: '/Users/gszs/web/www/ls_cj/node_modules/@vue/cli-service/lib/config/index-default.html',
        filename: 'content.html'
      }
    ),
    /* config.plugin('html-ehsyImageSearch') */
    new HtmlWebpackPlugin(
      {
        title: 'vue-extension',
        scriptLoading: 'defer',
        templateParameters: function () { /* omitted long function */ },
        chunks: [
          'chunk-vendors',
          'chunk-common',
          'ehsyImageSearch'
        ],
        template: '/Users/gszs/web/www/ls_cj/node_modules/@vue/cli-service/lib/config/index-default.html',
        filename: 'ehsyImageSearch.html'
      }
    ),
    /* config.plugin('html-gongbangbangImageSearch') */
    new HtmlWebpackPlugin(
      {
        title: 'vue-extension',
        scriptLoading: 'defer',
        templateParameters: function () { /* omitted long function */ },
        chunks: [
          'chunk-vendors',
          'chunk-common',
          'gongbangbangImageSearch'
        ],
        template: '/Users/gszs/web/www/ls_cj/node_modules/@vue/cli-service/lib/config/index-default.html',
        filename: 'gongbangbangImageSearch.html'
      }
    ),
    /* config.plugin('html-juYi5SearchProductsByImage') */
    new HtmlWebpackPlugin(
      {
        title: 'vue-extension',
        scriptLoading: 'defer',
        templateParameters: function () { /* omitted long function */ },
        chunks: [
          'chunk-vendors',
          'chunk-common',
          'juYi5SearchProductsByImage'
        ],
        template: '/Users/gszs/web/www/ls_cj/node_modules/@vue/cli-service/lib/config/index-default.html',
        filename: 'juYi5SearchProductsByImage.html'
      }
    ),
    /* config.plugin('html-loginPage') */
    new HtmlWebpackPlugin(
      {
        title: 'vue-extension',
        scriptLoading: 'defer',
        templateParameters: function () { /* omitted long function */ },
        chunks: [
          'chunk-vendors',
          'chunk-common',
          'loginPage'
        ],
        template: '/Users/gszs/web/www/ls_cj/node_modules/@vue/cli-service/lib/config/index-default.html',
        filename: 'loginPage.html'
      }
    ),
    /* config.plugin('html-opt') */
    new HtmlWebpackPlugin(
      {
        title: 'vue-extension',
        scriptLoading: 'defer',
        templateParameters: function () { /* omitted long function */ },
        chunks: [
          'chunk-vendors',
          'chunk-common',
          'opt'
        ],
        template: '/Users/gszs/web/www/ls_cj/node_modules/@vue/cli-service/lib/config/index-default.html',
        filename: 'opt.html'
      }
    ),
    /* config.plugin('html-pluginPanel') */
    new HtmlWebpackPlugin(
      {
        title: 'vue-extension',
        scriptLoading: 'defer',
        templateParameters: function () { /* omitted long function */ },
        chunks: [
          'chunk-vendors',
          'chunk-common',
          'pluginPanel'
        ],
        template: '/Users/gszs/web/www/ls_cj/node_modules/@vue/cli-service/lib/config/index-default.html',
        filename: 'pluginPanel.html'
      }
    ),
    /* config.plugin('html-pop') */
    new HtmlWebpackPlugin(
      {
        title: 'vue-extension',
        scriptLoading: 'defer',
        templateParameters: function () { /* omitted long function */ },
        chunks: [
          'chunk-vendors',
          'chunk-common',
          'pop'
        ],
        template: '/Users/gszs/web/www/ls_cj/node_modules/@vue/cli-service/lib/config/index-default.html',
        filename: 'pop.html'
      }
    ),
    /* config.plugin('html-sooxieImageSearch') */
    new HtmlWebpackPlugin(
      {
        title: 'vue-extension',
        scriptLoading: 'defer',
        templateParameters: function () { /* omitted long function */ },
        chunks: [
          'chunk-vendors',
          'chunk-common',
          'sooxieImageSearch'
        ],
        template: '/Users/gszs/web/www/ls_cj/node_modules/@vue/cli-service/lib/config/index-default.html',
        filename: 'sooxieImageSearch.html'
      }
    ),
    /* config.plugin('html-webFindSupply') */
    new HtmlWebpackPlugin(
      {
        title: 'vue-extension',
        scriptLoading: 'defer',
        templateParameters: function () { /* omitted long function */ },
        chunks: [
          'chunk-vendors',
          'chunk-common',
          'webFindSupply'
        ],
        template: '/Users/gszs/web/www/ls_cj/node_modules/@vue/cli-service/lib/config/index-default.html',
        filename: 'webFindSupply.html'
      }
    ),
    /* config.plugin('html-xhrIntercept') */
    new HtmlWebpackPlugin(
      {
        title: 'vue-extension',
        scriptLoading: 'defer',
        templateParameters: function () { /* omitted long function */ },
        chunks: [
          'chunk-vendors',
          'chunk-common',
          'xhrIntercept'
        ],
        template: '/Users/gszs/web/www/ls_cj/node_modules/@vue/cli-service/lib/config/index-default.html',
        filename: 'xhrIntercept.html'
      }
    ),
    /* config.plugin('html-xingFuJieSearchProductsByImage') */
    new HtmlWebpackPlugin(
      {
        title: 'vue-extension',
        scriptLoading: 'defer',
        templateParameters: function () { /* omitted long function */ },
        chunks: [
          'chunk-vendors',
          'chunk-common',
          'xingFuJieSearchProductsByImage'
        ],
        template: '/Users/gszs/web/www/ls_cj/node_modules/@vue/cli-service/lib/config/index-default.html',
        filename: 'xingFuJieSearchProductsByImage.html'
      }
    ),
    /* config.plugin('html-yiWuGoodsPictureSearch') */
    new HtmlWebpackPlugin(
      {
        title: 'vue-extension',
        scriptLoading: 'defer',
        templateParameters: function () { /* omitted long function */ },
        chunks: [
          'chunk-vendors',
          'chunk-common',
          'yiWuGoodsPictureSearch'
        ],
        template: '/Users/gszs/web/www/ls_cj/node_modules/@vue/cli-service/lib/config/index-default.html',
        filename: 'yiWuGoodsPictureSearch.html'
      }
    ),
    /* config.plugin('fork-ts-checker') */
    new ForkTsCheckerWebpackPlugin(
      {
        typescript: {
          extensions: {
            vue: {
              enabled: true,
              compiler: '/Users/gszs/web/www/ls_cj/node_modules/vue/compiler-sfc/index.js'
            }
          },
          diagnosticOptions: {
            semantic: true,
            syntactic: true
          }
        }
      }
    ),
    {
      patterns: [
        {
          from: '/Users/gszs/web/www/ls_cj/src/manifest.production.json',
          to: '/Users/gszs/web/www/ls_cj/crx/manifest.json'
        },
        {
          from: '/Users/gszs/web/www/ls_cj/src/assets',
          to: '/Users/gszs/web/www/ls_cj/crx/assets'
        }
      ],
      options: {}
    },
    {
      definitions: {
        Buffer: [
          'buffer',
          'Buffer'
        ],
        process: 'process/browser'
      }
    },
    {
      sourceMapFilename: '[file].map',
      sourceMappingURLComment: '\n//# sourceURL=https://lscj.tqdn.cn/[file]',
      moduleFilenameTemplate: 'webpack://[namespace]/[resourcePath]',
      fallbackModuleFilenameTemplate: 'webpack://[namespace]/[resourcePath]?[hash]',
      namespace: '',
      options: {
        filename: '[file].map',
        include: /pre-dist/,
        append: '\n//# sourceURL=https://lscj.tqdn.cn/[file]'
      }
    },
    {
      sourceMapFilename: '[file].map',
      sourceMappingURLComment: false,
      moduleFilenameTemplate: 'webpack://[namespace]/[resourcePath]',
      fallbackModuleFilenameTemplate: 'webpack://[namespace]/[resourcePath]?[hash]',
      namespace: '',
      options: {
        filename: '[file].map',
        exclude: /pre-dist/,
        append: false
      }
    }
  ],
  entry: {
    popup: [
      '/Users/gszs/web/www/ls_cj/src/popup/index.ts'
    ],
    init: [
      '/Users/gszs/web/www/ls_cj/src/contentInit/init.ts'
    ],
    background: [
      '/Users/gszs/web/www/ls_cj/src/background/index.ts'
    ],
    options: [
      '/Users/gszs/web/www/ls_cj/src/options/index.ts'
    ],
    '1688FactoryImageSearch': [
      '/Users/gszs/web/www/ls_cj/src/remote_entry/1688FactoryImageSearch.ts'
    ],
    '3e3eImageSearch': [
      '/Users/gszs/web/www/ls_cj/src/remote_entry/3e3eImageSearch.ts'
    ],
    amazonGoodsBestsellers: [
      '/Users/gszs/web/www/ls_cj/src/remote_entry/amazonGoodsBestsellers.ts'
    ],
    amazonGoodsClassifications: [
      '/Users/gszs/web/www/ls_cj/src/remote_entry/amazonGoodsClassifications.ts'
    ],
    amazonGoodsDetail: [
      '/Users/gszs/web/www/ls_cj/src/remote_entry/amazonGoodsDetail.ts'
    ],
    amazonGoodsInfoCard: [
      '/Users/gszs/web/www/ls_cj/src/remote_entry/amazonGoodsInfoCard.ts'
    ],
    amazonGoodsPictureFrame: [
      '/Users/gszs/web/www/ls_cj/src/remote_entry/amazonGoodsPictureFrame.ts'
    ],
    amazonGoodsReviews: [
      '/Users/gszs/web/www/ls_cj/src/remote_entry/amazonGoodsReviews.ts'
    ],
    amazonGoodsSearch: [
      '/Users/gszs/web/www/ls_cj/src/remote_entry/amazonGoodsSearch.ts'
    ],
    amazonKeywordRanking: [
      '/Users/gszs/web/www/ls_cj/src/remote_entry/amazonKeywordRanking.ts'
    ],
    amazonMallDetail: [
      '/Users/gszs/web/www/ls_cj/src/remote_entry/amazonMallDetail.ts'
    ],
    amazonMallGoodsSearch: [
      '/Users/gszs/web/www/ls_cj/src/remote_entry/amazonMallGoodsSearch.ts'
    ],
    amazonPostalchange: [
      '/Users/gszs/web/www/ls_cj/src/remote_entry/amazonPostalchange.ts'
    ],
    amazonShopthelookSearch: [
      '/Users/gszs/web/www/ls_cj/src/remote_entry/amazonShopthelookSearch.ts'
    ],
    baoNiuNiuSearchProductsByImage: [
      '/Users/gszs/web/www/ls_cj/src/remote_entry/baoNiuNiuSearchProductsByImage.ts'
    ],
    bg: [
      '/Users/gszs/web/www/ls_cj/src/remote_entry/bg.ts'
    ],
    content: [
      '/Users/gszs/web/www/ls_cj/src/remote_entry/content.ts'
    ],
    ehsyImageSearch: [
      '/Users/gszs/web/www/ls_cj/src/remote_entry/ehsyImageSearch.ts'
    ],
    gongbangbangImageSearch: [
      '/Users/gszs/web/www/ls_cj/src/remote_entry/gongbangbangImageSearch.ts'
    ],
    juYi5SearchProductsByImage: [
      '/Users/gszs/web/www/ls_cj/src/remote_entry/juYi5SearchProductsByImage.ts'
    ],
    loginPage: [
      '/Users/gszs/web/www/ls_cj/src/remote_entry/loginPage.ts'
    ],
    opt: [
      '/Users/gszs/web/www/ls_cj/src/remote_entry/opt.ts'
    ],
    pluginPanel: [
      '/Users/gszs/web/www/ls_cj/src/remote_entry/pluginPanel.ts'
    ],
    pop: [
      '/Users/gszs/web/www/ls_cj/src/remote_entry/pop.ts'
    ],
    sooxieImageSearch: [
      '/Users/gszs/web/www/ls_cj/src/remote_entry/sooxieImageSearch.ts'
    ],
    webFindSupply: [
      '/Users/gszs/web/www/ls_cj/src/remote_entry/webFindSupply.ts'
    ],
    xhrIntercept: [
      '/Users/gszs/web/www/ls_cj/src/remote_entry/xhrIntercept.ts'
    ],
    xingFuJieSearchProductsByImage: [
      '/Users/gszs/web/www/ls_cj/src/remote_entry/xingFuJieSearchProductsByImage.ts'
    ],
    yiWuGoodsPictureSearch: [
      '/Users/gszs/web/www/ls_cj/src/remote_entry/yiWuGoodsPictureSearch.ts'
    ]
  },
  externals: [
    {
      echarts: 'echarts',
      vue: 'Vue',
      exceljs: 'ExcelJS'
    }
  ]
}
