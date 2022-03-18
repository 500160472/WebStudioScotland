module.exports = {
  root: true,
  extends: [
    'prettier',
    'prettier/react',
    '@react-native-community',
  ],
  rules: {
    semi: 1,
    'comma-dangle': 1,
    'prettier/prettier': 0,
    'import/no-named-as-default': 0,
    'import/no-unresolved': 0,
  },
  plugins: [
    'prettier',
    'react-hooks',
  ],
};
