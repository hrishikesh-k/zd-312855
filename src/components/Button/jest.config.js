module.exports = {
  displayName: "dd/button",
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
    "\\.svg$": "<rootDir>/__mocks__/svg.js",
  },
};
