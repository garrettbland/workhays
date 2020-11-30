const Row = ({ className = '', children, style }) => (
    <div className={`${className} max-w-4xl mx-auto`} style={style}>
        {children}
    </div>
)

export default Row
