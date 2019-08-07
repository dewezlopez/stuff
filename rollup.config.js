import resolve from "rollup-plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";
import babel from "rollup-plugin-babel";
import serve from "rollup-plugin-serve";
import livereload from "rollup-plugin-livereload";

export default {
  input: "src/main.js",
  output: {
    file: "dist/bundle.js",
    format: "iife",
    sourcemap: "inline",
  },
  plugins: [
    resolve(),
    commonjs({
      include: 'node_modules/**',
    }),
    serve(),
    livereload({ watch: "dist" }),
    babel({
      exclude: "node_modules/**"
    })
  ]
};
