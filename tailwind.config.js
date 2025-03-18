module.exports = {
    content: ["./*.{html,js}"], // Sesuaikan path dengan struktur proyekmu
    theme: {
      extend: {},
    },
    plugins: [require("daisyui")],
    daisyui: {
      themes: ["light", "dark"], // Menambahkan tema
    },
  };
  