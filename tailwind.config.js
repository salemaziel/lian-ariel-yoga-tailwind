// tailwind.config.js
module.exports = {
	purge: ['./src/**/*.{js,jsx,ts,tsx}'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			fontFamily: {
				sans: ['Montserrat', "sans-serif"],
				raleway: ['Raleway', "sans-serif"],
				montserrat: ['Montserrat', "sans-serif"],
				merriweather: ['Merriweather', "serif"],
				greatvibes: ['Great Vibes', 'cursive'],
				dancingscript: ['Dancing Script', "cursive"],
			  },
			animation: {
				'fade-in-fwd':
					'fade-in-fwd 1.5s cubic-bezier(0.390, 0.575, 0.565, 1.000) 1s   both',
				'fade-in':
					'fade-in 1.5s cubic-bezier(0.445, 0.050, 0.550, 0.950) 0s both',
				'hero-fade-in':
					'fade-in 1.5s cubic-bezier(0.445, 0.050, 0.550, 0.950) 1s  both',
				'hero-fade-out':
					"fade-out 1.5s cubic-bezier(0.445, 0.050, 0.550, 0.950) 1s  both",

				"text-shadow-drop-bottom": "text-shadow-drop-bottom 0.6s ease   both",

				"text-shadow-drop-center": "text-shadow-drop-center 1s ease-in`   both",

				"scale-in-center": "scale-in-center 1s cubic-bezier(0.250, 0.460, 0.450, 0.940)   both",


			},
			keyframes: {
				'fade-in-fwd': {
					'0%': {
						transform: 'translateZ(-80px)',
						opacity: '0'
					},
					to: {
						transform: 'translateZ(0)',
						opacity: '1'
					},
					'fade-in': {
						'0%': {
							opacity: '0'
						},
						to: {
							opacity: '1'
						}
					},
					'hero-fade-in': {
						'0%': {
							opacity: '0'
						},
						to: {
							opacity: '1'
						}
					},
					"text-shadow-drop-center": {
						"0%": {
							"text-shadow": "0 0 0 transparent"
						},
						to: {
							"text-shadow": "0 0 18px rgba(0, 0, 0, .35)"
						}
					},
					"text-shadow-drop-bottom": {
						"0%": {
							"text-shadow": "0 0 0 transparent"
						},
						to: {
							"text-shadow": "0 6px 18px rgba(0, 0, 0, .35)"
						}
					},
					"scale-in-center": {
						"0%": {
							transform: "scale(0)",
							opacity: "1"
						},
						to: {
							transform: "scale(1)",
							opacity: "1"
						}
					}
				}
			}
		}
	},
	variants: {
		extend: {}
	},
	plugins: []
};
