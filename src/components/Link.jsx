const Link = ({ to }) => (
    <a
        href=""
        onClick={(e) => {
            document.location.hash = `/${to}`
            e.preventDefault()
        }}
        style={{
            position: 'absolute',
            right: '20px',
            bottom: '20px',
            fontSize: '32px'
        }}>Next</a>
)

export default Link
