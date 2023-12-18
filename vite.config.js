import { resolve } from 'path';
import { defineConfig } from 'vite';
import banner from 'vite-plugin-banner';
import postcssNesting from 'postcss-nesting';
import { name, version, description, author, homepage, license } from './package.json';

export default defineConfig({
    plugins: [
        banner((fileName) =>
            fileName.match(/\.js$/)
                ? [
                      '/**',
                      ` * name: ${name}@${version}`,
                      ` * desc: ${description}`,
                      ` * author: ${author.name} <${author.email}> [${author.url}]`,
                      ` * homepage: ${homepage}`,
                      ` * license: ${license}`,
                      ' */',
                  ].join('\n')
                : null
        ),
    ],
    css: {
        postcss: {
            plugins: [postcssNesting],
        },
    },
    build: {
        lib: {
            entry: resolve(__dirname, 'src/index.js'),
            name: 'BeforeAfter',
            formats: ['es', 'umd', 'iife'],
            fileName: (format) => `index.${format === 'iife' ? 'min' : format}.js`,
        },
    },
});
