const { build } = require("esbuild");
const { definePlugin } = require('esbuild-plugin-define');

const date = new Date();
const copyright = `/* datalayer-helper (${date.toISOString()}). Copyright ${date.getFullYear()} Toni Arndt. This work is licensed under the terms of the MIT license. For a copy, see <https://github.com/toniarndt/datalayer-helper/blob/main/LICENSE>. */`

const sharedConfig = {
  entryPoints: ['./src/index.ts'],
  bundle: true,
  loader: {
    '.ts': 'ts',
  },
  globalName: 'd',
  legalComments: 'none',
  format: 'iife',
  banner: {
    js: copyright
  },
  tsconfig: './tsconfig.json',
  define: {},
  plugins: [
    definePlugin({
      process: {
        env: {
          builddate: date.toISOString(),
        }
      },
    }),
  ],
};

build({
  ...sharedConfig,
  minify: false,
  outfile: "./dist/datalayer-helper.js",
});

build({
  ...sharedConfig,
  minify: true,
  outfile: "./dist/datalayer-helper.min.js",
});