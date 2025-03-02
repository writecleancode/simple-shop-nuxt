// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	compatibilityDate: '2024-11-01',
	devtools: { enabled: true },

	future: {
		compatibilityVersion: 4,
	},

	css: ['~/assets/styles/main.scss'],

	modules: ['@nuxtjs/google-fonts'],

	googleFonts: {
		display: 'swap',
		families: {
			Rubik: [400, 700],
		},
	},
});
