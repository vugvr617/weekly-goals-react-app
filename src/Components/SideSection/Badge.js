export default function Badge (props) {
    const badgeStyle = {
        backgroundColor: props.color
    }

    return (
        <div style={badgeStyle} className="badge">
        </div>
    )
}