module.exports = {
  entry: "./app/app.jsx",
  output: {path: __dirname, filename: "./public/bundle.js"},
  resolve: {
    root: __dirname,
    alias: {
      Main: "app/components/main.jsx",
      Nav: "app/components/nav.jsx",
      Weather: "app/components/weather.jsx",
      About: 'app/components/About.jsx',
      Examples: 'app/components/examples.jsx',
      WeatherForm: 'app/components/WeatherForm.jsx',
      WeatherMessage: 'app/components/WeatherMessage.jsx',
      openWeatherMap: 'app/api/openWeatherMap.jsx'
    },
    extensions: ["", ".js", ".jsx"]
  },
  module: {
    loaders: [
      {
        loader: "babel-loader",
        query: {presets: ["react", "es2015", "stage-0"]},
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/
      }
    ]
  }
};
