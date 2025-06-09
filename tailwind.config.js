module.exports = {
  content: [
    "./docs/.vitepress/**/*.{vue,js,ts,jsx,tsx}",
    './docs/**/*.{md,vue}',
  ],
  // darkMode: 'media', // or 'media' or 'class'
  darkMode: ['selector'],
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}