const withMT = require("@material-tailwind/react/utils/withMT");
const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = withMT({
    content: [
        "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
        "./storage/framework/views/*.php",
        "./resources/views/**/*.blade.php",
        "./resources/js/**/*.jsx",
    ],

    theme: {
        extend: {
            colors: {
                primary: {
                    50: "#44778b",
                    100: "#3a6d81",
                    200: "#306377",
                    300: "#26596d",
                    400: "#1c4f63",
                    500: "#124559",
                    600: "#083b4f",
                    700: "#003145",
                    800: "#00273b",
                    900: "#001d31",
                },
                secondry: {
                    50: "#ffffff",
                    100: "#ffffff",
                    200: "#ffffff",
                    300: "#f6f7f7",
                    400: "#eceded",
                    500: "#e2e3e3",
                    600: "#d8d9d9",
                    700: "#cecfcf",
                    800: "#c4c5c5",
                    900: "#babbbb",
                },
            },
        },
        fontFamily: {
            sans: ["Quicksand", ...defaultTheme.fontFamily.sans],
        },
    },

    plugins: [require("@tailwindcss/forms")],
});
