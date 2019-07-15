module.exports = {
  verbose: true,
  setupFilesAfterEnv: ['<rootDir>/setupTests.js'],
  collectCoverageFrom: ['<rootDir>/app/**/*.{js,jsx}'],
  snapshotSerializers: ['enzyme-to-json/serializer'],
};
