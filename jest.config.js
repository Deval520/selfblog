module.exports = {
  globals: {
    'ts-jest': {
      tsConfigFile: './tsconfig/tsconfig.json' // relative to the project's root directory
    },
  },

  moduleFileExtensions: [
    'js', 'ts', 'tsx', 'node',
  ],

  transform: {
    '^.+\\.(ts|tsx)$': './node_modules/ts-jest/preprocessor.js',
    '^.+\\.(ts|tsx)$': "ts-jest"
  },

  testMatch: [
		'**/test/**/*.test.(ts|js)'
  ],
  
  testEnvironment: 'node'
}