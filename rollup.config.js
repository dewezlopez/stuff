import resolve from "rollup-plugin-node-resolve";
import babel from "rollup-plugin-babel";
import serve from "rollup-plugin-serve";
import livereload from "rollup-plugin-livereload";
import sourcemap from "rollup-plugin-sourcemaps";

export default {
  input: "src/main.js",
  output: {
    file: "dist/bundle.js",
    format: "iife",
    sourcemap: "inline"
  },
  watch: "src",
  plugins: [
    resolve(),
    serve(),
    livereload({ watch: "dist" }),
    babel({
      exclude: "node_modules/**"
    })
  ]
};
