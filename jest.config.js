module.exports = {
  collectCoverageFrom: [
    '**/src/**/*.ts',
    '!**/src/**/*.spec.ts',
    '!**/node_modules/**',
  ],
  coverageDirectory: '<rootDir>/__coverage__',
  coverageThreshold: {
    global: {
      statements: 100,
      branches: 100,
      functions: 100,
      lines: 100,
    },
  },
  roots: ['<rootDir>/test'],
  testEnvironment: 'node',
  transform: {
    '.+\\.ts$': 'ts-jest'
  },
  moduleDirectories: [
    ".",
    "src",
    "node_modules"
  ],
  moduleNameMapper: {
    '@common/(.*)': '<rootDir>/src/common/$1',
    '@data/(.*)': '<rootDir>/src/data/$1',
    '@domain/(.*)': '<rootDir>/src/domain/$1',
    '@main/(.*)': '<rootDir>/src/main/$1',
    '@presentation/(.*)': '<rootDir>/src/presentation/$1',
    '@infra/(.*)': '<rootDir>/src/infra/$1',
  },
  verbose: true,
  watchPlugins: [
    'jest-watch-typeahead/filename',
    'jest-watch-typeahead/testname',
  ],
}
