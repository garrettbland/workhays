/**
 * Entry point for contact form using React.
 */
import { createRoot } from 'react-dom/client'
import { ContactForm } from './Contact'
const container = document.getElementById('contact-form-app')
const root = createRoot(container)
root.render(<ContactForm />)
