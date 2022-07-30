import CompletedIcon from "./CompletedButton";
import React, { useState, useContext } from "react";
import CompletedBadge from './CompletedBadge'
import ImportantBadge from "./ImportantBadge";
import AppContext from "../../../Storage/AppContext";
import DeleteButton from "./DeleteButton";
import TransferButton from "./TransferButton";

export default function Goal(props) {
    const ctx = useContext(AppContext);
    const [isCompleted, setCompleted] = useState(false);

    const handleCompletedClick = () => {
        setCompleted((prevState) => { return !prevState });
        ctx.setAsCompleted(props.title);
    }

    const deleteButtonHandler = () => {
        ctx.deleteGoal(props.title);
    }

    const transferButtonHandler = () => {
        ctx.sendToNextWeek(props.title);
    }

    return (
        <div className="goal">
            <div className="goal-inner-first">
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
            <div className="buttons-div">
                <TransferButton transferButtonHandler={transferButtonHandler}></TransferButton>
                <DeleteButton deleteButtonHandler={deleteButtonHandler}></DeleteButton>
            </div>
        </div>
    )
}