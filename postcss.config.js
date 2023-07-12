module.exports = {
  plugins: {
    theme: {
      extend: {
        animation: {
          flip: "flip 6s infinite steps(2, end)",
          rotate: "rotate 3s linear infinite both",
        },
        keyframes: {
          flip: {
            to: {
              transform: "rotate(360deg)",
            },
          },
          rotate: {
            to: {
              transform: "rotate(90deg)",
            },
          },
        },
      },
    },
    tailwindcss: {},
    autoprefixer: {},
  },
}
