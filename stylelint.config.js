module.exports = {
  extends: ['stylelint-config-recommended'],
  rules: {
    // Fixes tailwind specific "at" rule. Ref: https://dev.to/oliverandrich/vscode-stylelint-tailwind-css-3oag
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: ['tailwind', 'apply', 'variants', 'responsive', 'screen', 'layer']
      }
    ],
    'declaration-block-trailing-semicolon': null,
    'no-descending-specificity': null
  }
};
