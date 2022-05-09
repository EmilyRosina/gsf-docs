module.exports = {
  plugins: [
    'stylelint-scss',
    'stylelint-order',
  ],
  extends: [
    'stylelint-config-standard-scss',
    'stylelint-config-recommended-vue/scss',
    'stylelint-config-property-sort-order-smacss',
  ],
  overrides: [{
    files: ['*.vue', '**/*.vue'],
  }],
  rules: {
    /** https://stylelint.io/user-guide/rules/at-rule-no-unknown */
    'at-rule-no-unknown': null,

    /** https://github.com/kristerkari/stylelint-scss/blob/master/src/rules/at-rule-no-unknown */
    'scss/at-rule-no-unknown': true,

    /** https://stylelint.io/user-guide/rules/selector-pseudo-element-no-unknown */
    'selector-pseudo-element-no-unknown': [true, {
      ignorePseudoElements: ['v-deep'],
    }],

    /** https://stylelint.io/user-guide/rules/selector-class-pattern#selector-class-pattern */
    'selector-class-pattern': ['^[a-z0-9_-]+$', {
      resolveNestedSelectors: true,
    }],

    /** https://stylelint.io/user-guide/rules/selector-class-pattern#selector-class-pattern */
    'number-leading-zero': 'always',

    /** https://stylelint.io/user-guide/rules/value-keyword-case */
    'value-keyword-case': ['lower', {
      camelCaseSvgKeywords: true,
      ignoreProperties: [
        '/^$/', // all variables
      ],
    }],

    /** https://stylelint.io/user-guide/rules/list/declaration-property-value-disallowed-list */
    'declaration-property-value-disallowed-list': {
      '/overflow.*/': ['scroll'],
    },

    /** https://stylelint.io/user-guide/rules/list/max-line-length/ */
    'max-line-length': null,

    /** https://github.com/stylelint-scss/stylelint-scss/blob/master/src/rules/at-extend-no-missing-placeholder/README.md */
    'scss/at-extend-no-missing-placeholder': null,

    /** https://stylelint.io/user-guide/rules/list/function-no-unknown */
    'function-no-unknown': [true, {
      ignoreFunctions: [
        /^(color|get|list|map|math)/,
      ],
    }],
  },
}
