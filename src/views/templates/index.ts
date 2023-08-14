import { compile, render, templates } from 'squirrelly'
import { DEFAULT_LAYOUT } from './config'

type SquirrellyPartial = {
    title: string
    partial: string
}

type LayoutRenderer = {
    ({
        layout,
        content,
        data,
    }: {
        layout?: string
        content: string
        data: Record<string, any>
    }): string
}

/**
 * Loops through the partials and defines them to use within out .html
 * templates. Example usage...
 *
 * ```ts
 * import { definePartials } from 'templates'
 * definePartials([{ title: 'foobar', partial: '<div>whatever html</div>'}])
 * ```
 *
 * Example template usage...
 *
 * ```html
 * <div>Example</div>
 * <div>{{ @include('foobar', it) /}}</div>
 * ```
 */
export const definePartials = (partials: SquirrellyPartial[]) => {
    partials.forEach(({ title, partial }) => {
        templates.define(title, compile(partial))
    })
}

/**
 * Renders content with an extended layout. Defaults to 'base' layout.
 * Usage example...
 *
 * ```ts
 * import { renderWithLayout } from 'templates'
 * renderWithLayout({ content: '<div>Hi Im {{ it.name }}</div>', data: {name: 'garrett'}})
 * ```
 */
export const renderWithLayout: LayoutRenderer = ({ layout = DEFAULT_LAYOUT, content, data }) => {
    return render(`{{@extends('${layout}', it)}}${content}{{/extends}}`, data)
}
