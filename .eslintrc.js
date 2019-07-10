module.exports = {
  "parser": "babel-eslint",
  "env": {
    "browser": true,
    "es6": true,
    "node": true,
  },
  "extends": [
    "eslint:recommended",
    "airbnb",
    "plugin:import/errors", 
    "plugin:import/warnings",
    "plugin:jest/recommended",
    "jest-enzyme",
  ],
  "globals": {
    "Atomics": "readonly",
    "SharedArrayBuffer": "readonly",
  },
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true,
      "modules": true,
    },
    "ecmaVersion": 2018,
    "sourceType": "module",
  },
  "plugins": [
    'babel',
    'import',
    'jsx-a11y',
    'react',
    'prettier',
  ],
  rules: {
    'linebreak-style': 'off', // с Windows работает плохо
    
    'arrow-parens': 'off', // несовместимо с prettier
    'object-curly-newline': 'off', // несовместимо с prettier
    'no-mixed-operators': 'off', // несовместимо с prettier
    'arrow-body-style': 'off', 
    'function-paren-newline': 'off', // несовместимо с prettier
    'no-plusplus': 'off',
    'space-before-function-paren': 0, // несовместимо с prettier
    
    'max-len': ['error', 100, 2, { ignoreUrls: true, }], 
    'no-console': 'error', // airbnb использует warn
    'no-alert': 'error', // airbnb использует warn
    
    'no-param-reassign': 'off', 
    "radix": "off",
    
    'react/require-default-props': 'off', // airbnb использует error
    'react/forbid-prop-types': 'off', // airbnb использует error
    'react/jsx-filename-extension': 0,//[1, { 'extension': ['.js', '.jsx'] }], // airbnb is использует .jsx
    'react/prefer-stateless-function': 'off',
    'react/prop-types': 'off',
    'import/namespace': 'off',
    'import/prefer-default-export': 'off',
    
    'prefer-destructuring': 'off',
    
    'react/no-find-dom-node': 'off', 
    'react/no-did-mount-set-state': 'off',
    'react/no-unused-prop-types': 'off', 
    'react/jsx-one-expression-per-line': 'off',
    
    'jsx-a11y/anchor-is-valid': ["error", { "components": ["Link"], "specialLink": ["to"] }],
    'jsx-a11y/label-has-for': [2, { "required": { "every": ["id"] } }],
    'jsx-a11y/no-noninteractive-element-interactions': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',

    'prettier/prettier': ['error'],
  },
};
