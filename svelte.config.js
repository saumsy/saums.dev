import adapter from "@sveltejs/adapter-vercel";
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";
/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    // Pinned explicitly: without it the adapter derives the runtime from the
    // building machine's Node and rejects anything Vercel doesn't offer.
    adapter: adapter({ runtime: "nodejs24.x" })
  },
  preprocess: vitePreprocess()
};
export default config;
