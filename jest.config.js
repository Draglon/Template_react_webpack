module.exports = {
  verbose: true,
  setupFilesAfterEnv: ['<rootDir>/setupTests.js'],
  collectCoverageFrom: ['<rootDir>/app/**/*.{js,jsx}'],
  snapshotSerializers: ['enzyme-to-json/serializer'],
  coveragePathIgnorePatterns: [
    '<rootDir>/app/store/schema',
    '<rootDir>/app/store/store',
    '<rootDir>/app/helpers/httpClientMock',
    '<rootDir>/app/app',
  ],
};
