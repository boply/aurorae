import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/kit/vite';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: vitePreprocess(),

	kit: {
		adapter: adapter(),
		alias: {
			$: 'src',
			$lib: 'src/lib',
			$components: 'src/components',
			$routes: 'src/routes',
			$stores: 'src/lib/stores',
			$firebase: 'src/firebase.ts',
			$types: 'src/app.d.ts'
		}
	},
	preprocess: vitePreprocess()
};

export default config;
