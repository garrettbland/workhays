const Section = ({ className = '', children, style }) => (
    <div className={`${className} relative`} style={style}>
        {children}
    </div>
)

export default Section
