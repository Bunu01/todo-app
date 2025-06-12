import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/

export default {
  preview: {
    port: process.env.PORT || 5173,
    host: true, // this ensures it binds to 0.0.0.0
  }
}
