import antfu from '@antfu/eslint-config'
import stylistic from '@stylistic/eslint-plugin'

export default antfu(
  {
    formatters: true,
  },
  stylistic.configs.customize({
    indent: 2,
    quotes: 'single',
    semi: false,
  }),
  {
    rules: {
      '@stylistic/max-len': ['error', {
        code: 120,
      }],
      '@stylistic/linebreak-style': ['error', 'unix'],
    },
  },
)
