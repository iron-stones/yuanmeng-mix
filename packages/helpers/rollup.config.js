import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import terser from "@rollup/plugin-terser"; // 可选，用于压缩代码

export default {
  input: "./src/index.ts", // 输入文件路径
  output: [
    {
      file: "./dist/index.js", // 输出文件路径
      format: "cjs",
      sourcemap: true,
    },
    {
      file: "./dist/index.esm.js", // 输出文件路径
      format: "esm",
      sourcemap: true,
    },
    {
      file: "./dist/index.umd.js", // 输出文件路径
      name: "JurenHelpers",
      format: "umd",
      sourcemap: true,
    },
  ],
  plugins: [
    resolve(), // 解析 node_modules 中的模块
    commonjs(), // 转换 CommonJS 模块为 ES6
    typescript(), // 支持 TypeScript
    terser(), // 可选：压缩代码
  ],
};
