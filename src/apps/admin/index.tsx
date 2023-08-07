/**
 * Entry point for contact form using React.
 */

import { createRoot } from 'react-dom/client'
import { App } from './App'
const container = document.getElementById('admin-app')
const root = createRoot(container)
root.render(<App />)
