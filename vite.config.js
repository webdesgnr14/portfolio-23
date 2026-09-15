import { createLogger, defineConfig } from 'vite';
import react, { reactCompilerPreset } from '@vitejs/plugin-react'
import babel from '@rolldown/plugin-babel'
import svgr from 'vite-plugin-svgr'
import path from 'path';

const logger = createLogger();
const loggerWarn = logger.warn;

logger.warn = (msg, options) => {
  // Ignore empty CSS files warning
  if (msg.includes('vite:css') && msg.includes(' is empty')) return;
  loggerWarn(msg, options);
}

export default defineConfig(({ mode }) => ({
  base: mode === 'production' ? '/wp-content/themes/portfolio23/build/' : '/',
  define: {
    'process.env.NODE_ENV': JSON.stringify(mode),
  },
  plugins: [react(), babel({ presets: [reactCompilerPreset({ target: '19' }), '@babel/preset-react'] }), svgr()],
  publicDir: false,
  build: {
    outDir: 'build',
    emptyOutDir: true,
    cssCodeSplit: false,
    manifest: true,
    sourcemap: false,
    minify: true,
    lib: {
      entry: path.resolve(import.meta.dirname, 'src/index.js'),
      name: 'AppBundle',
      formats: ['iife'],
      fileName: (format) => {
        if(format === 'iife') return `appbundle.js`;
      },
      cssFileName: `app`,
    },
  },
  oxc: {
    jsx: {
      runtime: 'automatic',
    }
  },
  resolve: {
    alias: {
      '@styles': path.resolve(import.meta.dirname, 'src/scss/'),
    }
  },
  assetsInclude: ['src/assets/**/*', 'src/assets/**/*.svg', 'src/assets/**/*.png', 'src/assets/**/*.jpg', 'src/assets/**/*.jpeg', 'src/assets/**/*.woff', 'src/assets/**/*.woff2'],
  customLogger: logger,
  server: {
    cors: true, // Allows Local WP server to fetch assets from Vite localhost
    strictPort: true,
    port: 5173,
    origin: 'http://localhost:5173', // WP serves the page, not Vite, so dev asset URLs need a full origin
    hmr: {
      host: 'localhost',
    },
  },
}));