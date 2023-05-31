module.exports = {
  testEnvironment: "jsdom",
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1", // `<rootDir>` はプロジェクトのルートディレクトリを指します
  },
};
