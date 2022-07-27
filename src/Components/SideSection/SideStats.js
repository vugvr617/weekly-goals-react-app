import Badge from "./Badge";
import React, { useContext } from "react";
import AppContext from "../../Storage/AppContext";

export default function SideStats() {
    const ctx = useContext(AppContext);

    return (
        <div className="side-stats">
            <h2>Weekly stats</h2>
            <div className="stats-text">
                <div>
                    <div className="stats-inner">
                        <Badge color="#eca596"></Badge>
                        <p>All planned</p>
                    </div>
                    <h3>{ctx.goalCounter}</h3>
                </div>
                <div>
                    <div className="stats-inner">
                        <Badge color="#a827da"></Badge>
                        <p>In-progress</p>
                    </div>
                    <h3>{ctx.inProgressCounter}</h3>
                </div>
                <div>
                    <div className="stats-inner">
                        <Badge color="#04aa6d"></Badge>
                        <p>Completed</p>
                    </div>
                    <h3>{ctx.completedCounter}</h3>
                </div>
                <div>
                    <div className="stats-inner">
                        <Badge color="#fd1374"></Badge>
                        <p>Important</p>
                    </div>
                    <h3>{ctx.importantCounter}</h3>
                </div>
            </div>
        </div>
    )
}