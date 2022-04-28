import pluginJson from '@rollup/plugin-json'
import typescript from '@rollup/plugin-typescript'

export default {
  input: 'src/index.ts',
  output: {
    file: 'dist/shrine-cli.js',
    format: 'cjs'
  },
  exclude: [
    "./dist/**/*",
  ],
  plugins: [
    pluginJson(),
    typescript(),
  ],
}
