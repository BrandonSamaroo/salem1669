/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,ts,jsx,tsx}"],
    darkMode: "class",
    plugins: [],
    theme: {
        extend: {
            colors: {
                bg1: "rgb(var(--bg1) / <alpha-value>)",
                bg2: "rgb(var(--bg2) / <alpha-value>)",
                bg3: "rgb(var(--bg3) / <alpha-value>)",
                onBg: "rgb(var(--onBg) / <alpha-value>)",
                primary: "rgb(var(--primary) / <alpha-value>)",
                onPrim: "rgb(var(--onPrim) / <alpha-value>)",
                success: "rgb(var(--success) / <alpha-value>)",
                onSuccess: "rgb(var(--onSuccess) / <alpha-value>)",
                danger: "rgb(var(--danger) / <alpha-value>)",
                onDanger: "rgb(var(--onDanger) / <alpha-value>)",
            },
        },
    },
};
