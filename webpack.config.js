const path = require("path");

/**
 * creates a webpack config to be exported when npm run build in run
 * @param {string} projectName The name of the project
 * @param {string} entryPoint The entry point to the application,
 *  usually a js file
 * @return {Object} A webpack module for the project
 */
function createWebpackConfigForProject(projectName, entryPoint) {
  let outputPath = path.resolve(__dirname, `./build`);
  return {
    entry: entryPoint,
    output: {
      path: outputPath,
      filename: "[name]-bundle.js"
    },
    resolve: {
      extensions: [".ts", ".tsx", ".js"]
    },
    module: {
      rules: [
        {
          test: /\.(png|jpg|gif|otf|svg)$/,
          use: [
            {
              loader: "url-loader",
              options: {
                limit: 8192
              }
            }
          ]
        },
        {
          test: /\.tsx?$/,
          loader: "ts-loader"
        }
      ]
    },
    plugins: [
    ]
  };
}

/**
 * Modules to be exported
 */
module.exports = [
  createWebpackConfigForProject("", {
    tabStrip: "./src/main.ts"
  })
];