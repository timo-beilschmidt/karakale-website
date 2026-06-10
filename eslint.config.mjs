import js from '@eslint/js';
import pluginVue from 'eslint-plugin-vue';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default [
  {
    ignores: [
      '.nuxt/**',
      '.output/**',
      'assets/**',
      'components/**',
      'data/**',
      'dist/**',
      'layouts/**',
      'mixins/**',
      'node_modules/**',
      'pages/**',
      'plugins/**',
      'public/**',
      'static/**',
      'utils/**',
    ],
  },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  ...pluginVue.configs['flat/recommended'],
  {
    files: ['**/*.{js,mjs,ts,vue}'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.node,
        computed: 'readonly',
        console: 'readonly',
        defineNuxtPlugin: 'readonly',
        onBeforeUnmount: 'readonly',
        onMounted: 'readonly',
        ref: 'readonly',
        useHead: 'readonly',
        useKarakaleHead: 'readonly',
        useRoute: 'readonly',
        useRouter: 'readonly',
        useScriptGoogleTagManager: 'readonly',
        useStickyHeader: 'readonly',
        watch: 'readonly',
      },
    },
    rules: {
      'no-unused-vars': ['warn', { argsIgnorePattern: '^_', varsIgnorePattern: '^_' }],
      'vue/attributes-order': 'off',
      'vue/first-attribute-linebreak': 'off',
      'vue/html-closing-bracket-newline': 'off',
      'vue/html-closing-bracket-spacing': 'off',
      'vue/html-indent': 'off',
      'vue/html-quotes': 'off',
      'vue/html-self-closing': 'off',
      'vue/max-attributes-per-line': 'off',
      'vue/multiline-html-element-content-newline': 'off',
      'vue/multi-word-component-names': 'off',
      'vue/no-v-html': 'off',
      'vue/singleline-html-element-content-newline': 'off',
      'vue/v-on-event-hyphenation': 'off',
      'vue/v-slot-style': 'off',
    },
  },
];
