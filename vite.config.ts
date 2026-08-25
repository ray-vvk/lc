import { defineConfig } from 'vite'
import react, { reactCompilerPreset } from '@vitejs/plugin-react'
import babel from '@rolldown/plugin-babel'
import { tanstackRouter } from "@tanstack/router-plugin/vite"

// https://vite.dev/config/
export default defineConfig({
  build: {
    outDir: "lc-dist",
  },
  base: "/lc-dist",
  plugins: [
    tanstackRouter({
      target: 'react',
      autoCodeSplitting: true,
      
    }),
    react(),
    babel({ presets: [reactCompilerPreset()] })
  ],
})
