import CompletedIcon from "./CompletedButton";
import React, { useState, useContext } from "react";
import CompletedBadge from './CompletedBadge'
import ImportantBadge from "./ImportantBadge";
import AppContext from "../../../Storage/AppContext";

export default function Goal(props) {
    const ctx = useContext(AppContext);
    const [isCompleted, setCompleted] = useState(false);

    const handleCompletedClick = () => {
        setCompleted((prevState) => {return !prevState});
        ctx.setAsCompleted(props.title);
    }

    return (
        <div className="goal">
            <div>
                <CompletedIcon handleClick={handleCompletedClick} isCompleted={props.isCompleted}></CompletedIcon>
            </div>
            <div className="goal-text">
                <h2>
                    {props.title}
                </h2>
                <p>
                    {props.description}
                </p>
                <div className="badges-div">
                    <CompletedBadge isCompleted={props.isCompleted}></CompletedBadge>
                    <ImportantBadge isImportant={props.isImportant}></ImportantBadge>
                </div>
            </div>
        </div>
    )
}