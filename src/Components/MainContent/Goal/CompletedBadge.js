export default function CompletedButton (props) {
    const badgeStyle = {
        color: props.isCompleted === true ? "#04aa6d" : "#373e68"
    } 
    return (
        <div style={badgeStyle} className="content-badge">
            <p>{props.isCompleted === true ? "Completed" : "Not completed"}</p>
        </div>
    )
}