class Layout {
    data() {
        return {
            name: 'garrett',
        }
    }

    render({ name }) {
        return /*html*/ `
            <p class="test">name: ${name}</p>
        `
    }
}

module.exports = Layout
