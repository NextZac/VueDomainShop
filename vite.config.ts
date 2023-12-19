import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { liveDesigner } from '@pinegrow/vite-plugin'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [liveDesigner({tailwindcss: {
    /* Please ensure that you update the filenames and paths to accurately match those used in your project. */
    configPath: 'tailwind.config.js',
    cssPath: '@/style.css',
    // themePath: false, // Set to false so that Design Panel is not used
    // restartOnConfigUpdate: true,
    restartOnThemeUpdate: true,
  },}),vue()],
})
