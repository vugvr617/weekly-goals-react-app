import "./SideSection.css"
import AppContext from "../../Storage/AppContext"
import React, { useContext } from "react"

export default function SideHeader () {
    const ctx = useContext(AppContext);

    return (
        <div className="side-header">
            <div className="header-inner">
                <h2>ThisWeek</h2>
                <h3>{ctx.currentMonth} {ctx.currentYear}, Week {ctx.currentWeek}</h3>
            </div>
        </div>
    )
}