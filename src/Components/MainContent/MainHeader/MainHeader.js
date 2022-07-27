import AddButton from "./AddButton/AddButton"
import ListIcon from "./ListIcon"
import React, { useState, useContext, useEffect } from "react"
import AppContext from "../../../Storage/AppContext";

export default function MainHeader(props) {
    const ctx = useContext(AppContext);

    return (
        <div className="main-header">
            <div>
                <ListIcon></ListIcon>
                <p>{ctx.goalCounter} Goals</p>
            </div>
            <AddButton></AddButton>
        </div>
    )
}