import { defineWorkspace } from 'vitest/config'

export default defineWorkspace([
  "./Vue/vite.config.js",
  "./Qwik/vite.config.ts",
  "./Vanilla.js/vite.config.js",
  "./Electron/electron.vite.config.mjs",
  "./Preact/vite.config.js",
  "./Svelte/vite.config.js",
  "./Solid/vite.config.js",
  "./React/vite.config.js"
])