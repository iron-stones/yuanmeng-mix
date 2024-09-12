module.exports = {
  projects: ["<rootDir>/packages/*"],
  testMatch: ["<rootDir>/__test__/**/*.spec.js"],
  moduleFileExtensions: ["ts", "js"],
  globals: {
    "ts-jest": {
      tsconfig: "<rootDir>/tsconfig.json",
    },
  },
  testPathIgnorePatterns: ["<rootDir>/node_modules/"],
  transform: {
    "^.+\\.ts$": "ts-jest", // 如果有 TypeScript 文件也使用 Babel 转译
  },
  extensionsToTreatAsEsm: [".ts"], // 将这些扩展名视为 ESM
  moduleNameMapper: {
    "^(\\.{1,2}/.*)\\.js$": "$1",
  },
};
