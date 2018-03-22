// import "bootstrap-italia/dist/css/italia-icon-font.css";

const path = require("path");

const docgen = require("react-docgen");
const docgenParser = require("react-docgen-typescript");
const webpackConfig = require("./webpack.config.js");

module.exports = {
  resolver: docgen.resolver.findAllComponentDefinitions,
  propsParser: docgenParser.parse,
  webpackConfig,
  ignore: ["**/*.example.tsx"],
  require: [
    "babel-polyfill",
    path.join(
      __dirname,
      "node_modules/bootstrap-italia/dist/css/bootstrap-italia.css"
    )
  ]
};