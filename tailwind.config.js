/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                bg1: "rgb(var(--bg1) / <alpha-value>)",
                bg2: "rgb(var(--bg2) / <alpha-value>)",
                bg3: "rgb(var(--bg3) / <alpha-value>)",
                onBg: "rgb(var(--onBg) / <alpha-value>)",
                primary: "rgb(var(--primary) / <alpha-value>)",
                onPrim: "rgb(var(--onPrim) / <alpha-value>)",
            },
        },
    },
};
