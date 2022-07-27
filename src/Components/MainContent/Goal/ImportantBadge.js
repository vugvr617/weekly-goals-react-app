export default function ImportantBadge (props) {
    const badgeStyle = {
        color: props.isImportant == "Important" ? "#fd1374" : "#373e68"
    } 

    return (
        <div style={badgeStyle} className="content-badge">
            <p>{props.isImportant}</p>
        </div>
    )
}