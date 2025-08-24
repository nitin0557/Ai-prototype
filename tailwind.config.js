/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                sideNavDark: "green", // dark gray (or green if you want)
                sideNavLight: "#f5f5f5", // light gray
            },
        },
    },
    darkMode: "class",
    plugins: [],
};
