/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            backgroundImage: {
                "login-gradient-1": "linear-gradient(to right, #4568dc, #b06ab3)",
                // "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
            boxShadow: {
                "panda-face": "0 10px 15px rgba(0, 0, 0, 0.15)",
                "panda-body": "0 5px 10px rgba(0, 0, 0, 0.3)",
                "panda-foot": "0 5px 5px rgba(0, 0, 0, 0.2)",
                "panda-hand": "0 2px 3px rgba(0, 0, 0, 0.15)"
            },
            borderRadius: {
                "panda-eye-shade": "30px/25px 35px 40px 45px",
                "panda-nose": "50px 20px/30px 15px",
                "panda-body": "100px 100px 100px 100px/126px 126px 96px 96px",
                "panda-foot": "40px 40px 39px 40px/26px 26px 63px 63px"
            },
            screens: {
                "480": { "max": "480px" }
            }
        },
    },
    plugins: [],
};