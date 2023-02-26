/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            animation: {
                text: "text 3s ease infinite",
            },
            keyframes: {
                text: {
                    "0%, 100%": {
                        "background-size": "200% 200%",
                        "background-position": "left center",
                    },
                    "50%": {
                        "background-size": "200% 200%",
                        "background-position": "right center",
                    },
                },
            },
            backgroundImage: {
                hero: "linear-gradient(rgba(247, 255, 2, 0.9), rgba(116, 24, 152, 0.9)), url('./src/assets/girl-music.jpeg')",
                artist: "linear-gradient(rgba(247, 255, 2, 0.9), rgba(116, 24, 152, 0.9)), url('./src/assets/Rema.jpeg')",
                GwagwaladaImage:
                    "linear-gradient(rgba(247, 255, 2, 0.9), rgba(116, 24, 152, 0.9)), url('./src/assets/buju.png')",
                HolidayImage:
                    "linear-gradient(rgba(247, 255, 2, 0.9), rgba(116, 24, 152, 0.9)), url('./src/assets/holiday.png')",
                AloneImage:
                    "linear-gradient(rgba(247, 255, 2, 0.9), rgba(116, 24, 152, 0.9)), url('./src/assets/alone.png')",
                AttentionImage:
                    "linear-gradient(rgba(247, 255, 2, 0.9), rgba(116, 24, 152, 0.9)), url('./src/assets/attention.png')",
                CurrencyImage:
                    "linear-gradient(rgba(247, 255, 2, 0.9), rgba(116, 24, 152, 0.9)), url('./src/assets/currency.png')",
                FreeMindImage:
                    "linear-gradient(rgba(247, 255, 2, 0.9), rgba(116, 24, 152, 0.9)), url('./src/assets/tems.png')",
                PeruImage:
                    "linear-gradient(rgba(247, 255, 2, 0.9), rgba(116, 24, 152, 0.9)), url('./src/assets/peru.png')",
                SugarImage:
                    "linear-gradient(rgba(247, 255, 2, 0.9), rgba(116, 24, 152, 0.9)), url('./src/assets/wizkid.png')",
                CalmDownImage:
                    "linear-gradient(rgba(247, 255, 2, 0.9), rgba(116, 24, 152, 0.9)), url('./src/assets/calm-down.png')",
            },

            fontFamily: {
                serif: ["Work Sans", "sans-serif"],
                fancy1: ["Grey Qo", "cursive"],
                fancy2: ["Rampart One", "cursive"],
            },
        },
    },
    plugins: [],
};
