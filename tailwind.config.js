/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            animation: {
                shake: 'shake 0.5s ease-in-out',
                'slide-down': 'slideDown 0.3s ease-out forwards',
                'slide-up': 'slideUp 0.3s ease-in-out',
            },
            keyframes: {
                shake: {
                    '0%': { transform: 'translate(1px, 1px) rotate(0deg)' },
                    '10%': { transform: 'translate(-1px, -2px) rotate(-1deg)' },
                    '20%': { transform: 'translate(-3px, 0px) rotate(1deg)' },
                    '30%': { transform: 'translate(3px, 2px) rotate(0deg)' },
                    '40%': { transform: 'translate(1px, -1px) rotate(1deg)' },
                    '50%': { transform: 'translate(-1px, 2px) rotate(-1deg)' },
                    '60%': { transform: 'translate(-3px, 1px) rotate(0deg)' },
                    '70%': { transform: 'translate(3px, 1px) rotate(-1deg)' },
                    '80%': { transform: 'translate(-1px, -1px) rotate(1deg)' },
                    '90%': { transform: 'translate(1px, 2px) rotate(0deg)' },
                    '100%': { transform: 'translate(1px, -2px) rotate(-1deg)' },
                },

                slideDown: {
                    '0%': {
                        transform: 'rotateX(-100deg)',
                        transformOrigin: 'top',
                        opacity: '0',
                    },
                    '100%': {
                        transform: 'rotateX(0deg)',
                        transformOrigin: 'top',
                        opacity: '1',
                    },
                },
            },
        },
    },
    plugins: [],
};
