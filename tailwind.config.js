import colors from 'tailwindcss/colors';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
        "./contexts/**/*.{js,ts,jsx,tsx}",
        "./*.{js,ts,jsx,tsx}",
    ],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                gray: colors.slate,
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                serif: ['Poppins', 'sans-serif'],
                mono: ['Roboto Mono', 'monospace'],
            },
        },
    },
    plugins: [],
}
