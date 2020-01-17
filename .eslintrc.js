module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    '@nuxtjs',
    'eslint:recommended',
    // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
    // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
    'plugin:nuxt/recommended',
    'plugin:prettier/recommended',
    'prettier',
    'prettier/vue'
  ],
  globals: {
    $nuxt: true
  },
  // required to lint *.vue files
  plugins: ['vue'],
  // add your custom rules here
  rules: {
    'vue/component-name-in-template-casing': ['error', 'kebab-case'],
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'standard/computed-property-even-spacing': 'off'
  }
}
