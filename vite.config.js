import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [vue()],
	resolve: {
		alias: {
			'@': fileURLToPath(new URL('src', import.meta.url)),
		},
	},
	base: './',
	css: {
		preprocessorOptions: {
			scss: {
				silenceDeprecations: ['legacy-js-api'],
				additionalData: `@use "./src/assets/scss/base/variables.scss" as *;  
				@use "./src/assets/scss/base/mixins.scss" as *; 
				@use "./src/assets/scss/base/functions.scss" as *;`,
			},
		},
	},
})
