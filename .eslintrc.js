const fs = require('fs')

function getDirectories(path) {
    return fs.readdirSync(path).filter((file) => {
        return fs.statSync(`${path}/${file}`).isDirectory()
    })
}
function getDirectoriesToSort() {
    const ignoredSortingDirectories = ['.git', '.next', '.vscode', 'node_modules']
    return getDirectories(process.cwd()).filter((f) => !ignoredSortingDirectories.includes(f))
}

module.exports = {
    env: {
        browser: true,
        es2021: true
    },
    extends: [
        'airbnb',
        'eslint:recommended',
        'plugin:import/errors',
        'plugin:react/recommended',
        'plugin:jsx-a11y/recommended',
        'plugin:prettier/recommended',
        'prettier'
        // 'stylelint'
    ],
    plugins: ['react', 'import', 'jsx-a11y', 'prettier', 'simple-import-sort'],
    overrides: [
        {
            env: {
                node: true
            },
            files: ['.eslintrc.{js,cjs}'],
            parserOptions: {
                sourceType: 'script'
            }
        }
    ],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module'
    },
    rules: {
        'import/first': 'error',
        'import/newline-after-import': 'error',
        'import/no-duplicates': 'error',
        'simple-import-sort/imports': 'error',
        'simple-import-sort/exports': 'error',
        'testing-library/prefer-screen-queries': 'off',
        '@next/next/no-html-link-for-pages': 'off',
        'no-missing-import': 'off',
        'sort-imports': [
            'error',
            {
                ignoreCase: true,
                ignoreDeclarationSort: true
            }
        ],
        'react/prop-types': 'off',
        'prettier/prettier': ['error', { endOfLine: 'auto' }],
        'jsx-a11y/label-has-associated-control': 0,
        'react/jsx-filename-extension': ['off'],
        'no-return-assign': ['off'],
        'react/jsx-key': 0,
        'no-console': 0,
        'n/no-missing-import': 'off',
        'no-undef': 'error',
        'import/order': [
            1,
            {
                groups: ['external', 'builtin', 'internal', 'sibling', 'parent', 'index'],
                pathGroups: [
                    ...getDirectoriesToSort().map((singleDir) => ({
                        pattern: `${singleDir}/**`,
                        group: 'internal'
                    })),
                    {
                        pattern: 'env',
                        group: 'internal'
                    },
                    {
                        pattern: 'theme',
                        group: 'internal'
                    },
                    {
                        pattern: 'public/**',
                        group: 'internal',
                        position: 'after'
                    }
                ],
                pathGroupsExcludedImportTypes: ['internal'],
                alphabetize: {
                    order: 'asc',
                    caseInsensitive: true
                }
            }
        ]
    }
}
