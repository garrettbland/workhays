/**
 * Shared template utility
 */
import { PARTIALS } from './templates/config'
import { definePartials, renderWithLayout } from './templates'

definePartials(PARTIALS)

/**
 * Function that takes in html and some page data, wraps in a layout
 * template, and returns rendered html
 */
export const Template = (html: string, pageData?: Record<string, any>) => {
    const data = {
        name: 'Garrett from data',
        last: 'Work Hays Footer',
        site: {
            title: 'Work Hays',
            version: '2.0.0',
            svg_logo: '/_static/work-hays-logo.svg',
            png_logo: '/_static/work-hays-logo.png',
        },
        pageTitle: 'To Do',
        ...pageData,
    }

    return renderWithLayout({ content: html, data })
}
