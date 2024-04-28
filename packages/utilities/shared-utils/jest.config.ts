/* eslint-disable */
export default {
  displayName: '@myraui/shared-utils',
  preset: '../../../jest.preset.js',
  transform: {
    '^.+\\.[tj]s?$': ['ts-jest', { tsconfig: '<rootDir>/tsconfig.spec.json' }],
  },
  transformIgnorePatterns: ['!(src/.+)'],
  moduleFileExtensions: ['ts', 'js'],
  coverageDirectory: '../../../coverage/packages/utilities/shared-utils',
};
