import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    test: {
        environment: 'jsdom',
        coverage: {
            provider: 'istanbul',
            reporter: ['text', 'json', 'html'],
            lines: 90,
            functions: 90,
            branches: 90,
            statements: 90,
        },
    },
})
