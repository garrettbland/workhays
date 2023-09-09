import { Main } from './tables'

export interface ContactForm {
    first_name: string
    last_name: string
    email: string
    business?: string
    message: string
}

export type ContactSubmission = Main & ContactForm
