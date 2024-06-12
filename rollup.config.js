import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import postcss from "rollup-plugin-postcss";
import path from "path";

export default {
     input: "src/main.js",
     output: {
          file: "public/bundle.js",
          format: "iife",
          name: "MyApp",
          sourcemap: true,
     },
     plugins: [
          resolve({
               extensions: [".js", ".jsx", ".css"],
          }),
          commonjs(),
          postcss({
               modules: true,
               extract: path.resolve("node_modules/style.css"), // Chemin pour le fichier CSS extrait
               minimize: true,
               sourceMap: true,
          }),
     ],
};
