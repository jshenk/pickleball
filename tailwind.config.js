module.exports = {
  mode: 'jit',
  content: [
    './**/*.{html,js}',
    './components/**/*.{html,js}',
  ],
  purge: [
    './src/index.html',
    './src/**/*.{js,jsx,ts,tsx,vue}',
  ],
  theme: {
  extend: {},
  },
  plugins: [],
}
