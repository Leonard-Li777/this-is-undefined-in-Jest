module.exports = {
  bail: true,
  rootDir: '.',
  cacheDirectory: '<rootDir>/node_modules/.cache',
  testEnvironment: 'jsdom',
  coverageThreshold: {
    global: {
      branches: 90,
      functions: 90,
      lines: 90,
      statements: 90,
    },
  },
  modulePaths: [
       'node_modules',
  ],
  testMatch: [
    '<rootDir>test/webapp/**/*.js?(x)'
  ],
  "moduleNameMapper": {'^underscore$': '<rootDir>test/lib/underscore'}, // This is the wrong key of 'this === undefined', if underscore.js from node_modules then work fine
  "transform": {
    "^.+\\.js?$": 'babel-jest'
  },
  setupFiles: ['<rootDir>test/jestSetup'],
  moduleFileExtensions: ['', 'json', 'js', 'jsx', 'html']
}
