module.exports = {
  displayName: "dd/types",
  testEnvironment: "jest-environment-jsdom",
  collectCoverage: true,
  testPathIgnorePatterns: [
    "/node_modules/",
    "/lib/",
    "/lib-commonjs/",
    "/dist/",
  ],
  moduleNameMapper: {
    ".(css|less|scss)$": "identity-obj-proxy",
  },
};
