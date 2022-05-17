import typescript from 'rollup-plugin-typescript2'

export default {
  input: 'src/index.ts',
  output: {
    file: 'dist/utils.js',
    format: 'cjs'
  },
  exclude: [
    "./dist/**/*",
  ],
  plugins: [
    typescript({ tsconfig: './tsconfig.json' }),
  ],
}
