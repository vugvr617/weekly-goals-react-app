import Badge from "./Badge";

export default function SideStats() {
    return (
        <div className="side-stats">
            <h2>Weekly stats</h2>
            <div className="stats-text">
                <div>
                    <div className="stats-inner">
                        <Badge color="#eca596"></Badge>
                        <p>All planned</p>
                    </div>
                    <h3>3</h3>
                </div>
                <div>
                    <div className="stats-inner">
                        <Badge color="#a827da"></Badge>
                        <p>In-progress</p>
                    </div>
                    <h3>3</h3>
                </div>
                <div>
                    <div className="stats-inner">
                        <Badge color="#04aa6d"></Badge>
                        <p>Completed</p>
                    </div>
                    <h3>3</h3>
                </div>
                <div>
                    <div className="stats-inner">
                        <Badge color="#fd1374"></Badge>
                        <p>Not started</p>
                    </div>
                    <h3>3</h3>
                </div>
            </div>
        </div>
    )
}