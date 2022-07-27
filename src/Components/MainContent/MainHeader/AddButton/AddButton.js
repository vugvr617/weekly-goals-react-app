import PlusIcon from "./PlusIcon";
import React, {useContext} from "react";
import AppContext from "../../../../Storage/AppContext";

export default function AddButton () {
    const ctx = useContext(AppContext);

    const addButtonHandler = () => {
        ctx.setFormDisplay();
    }

    return (
        <button onClick={addButtonHandler} className="add-button">
            <PlusIcon></PlusIcon>
            <p>Add Goal</p>
        </button>
    )
}