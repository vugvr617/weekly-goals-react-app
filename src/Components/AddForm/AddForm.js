import './AddForm.css'
import AppContext from '../../Storage/AppContext'
import React, { useContext, useState, useRef } from 'react'

export default function AddForm() {
    const [titleValue, setTitle] = useState('');
    const [descriptionValue, setDescription] = useState('');
    const [statusValue, setStatus] = useState('Optional');
    const [errorStatus, setError] = useState('');
    const titleRef = useRef();
    const descriptionRef = useRef();
    const statusRef = useRef();
    const ctx = useContext(AppContext);

    class Goal {
        constructor(title, description, status, month, week, year, isCompleted) {
            this.title = title;
            this.description = description;
            this.status = status;
            this.month = month;
            this.week = week;
            this.year = year;
            this.isCompleted = isCompleted
        }
    }

    function backgroundClickHandler() {
        ctx.setFormDisplay();
        setError("");
        setTitle("");
        setDescription("");
        setStatus("Optional");
    }

    const addFormStyle = {
        display: ctx.isAddFormDisplayed ? "flex" : "none"
    }

    const submitHandler = (event) => {
        event.preventDefault();
        if (titleValue.length < 3 || descriptionValue.length < 3) {
            setError("Title and description must be entered");
        } else {
            const goal = new Goal(
                titleValue,
                descriptionValue,
                statusValue,
                ctx.currentMonth,
                ctx.currentWeek,
                ctx.currentYear,
                false
            );
            ctx.setGoalArray(goal);
            ctx.setFormDisplay();
            setError("");
            setTitle("");
            setDescription("");
            setStatus("Optional");
        }
    }

    const changeHandler = () => {
        setTitle(titleRef.current.value);
        setDescription(descriptionRef.current.value);
        setStatus(statusRef.current.value);
    }

    return (
        <div style={addFormStyle} className='add-form-div'>
            <div onClick={backgroundClickHandler} className="form-background">
            </div>
            <form onSubmit={submitHandler} className='add-form'>
                <div className='add-form-inner'>
                    <label for="title"><h2>Title:</h2></label>
                    <input ref={titleRef} value={titleValue} type="text" onChange={changeHandler} nid="title"></input>
                </div>
                <div className='add-form-inner'>
                    <label for="description"><h2>Description:</h2></label>
                    <input ref={descriptionRef} value={descriptionValue} type="text" onChange={changeHandler} id="description"></input>
                </div>
                <div className='inner-submission'>
                    <div className='add-form-inner'>
                        <label for="status"><h2>Status: </h2></label>
                        <select ref={statusRef} value={statusValue} onChange={changeHandler} className="select-input" id="status" name="status">
                            <option>Optional</option>
                            <option>Important</option>
                        </select>
                    </div>
                    <input className="add-button-form" type="submit" value="Add"></input>
                </div>
                <div>
                    {errorStatus.length > 1 && <p className="error">{errorStatus}</p>}
                </div>
            </form>
        </div>
    )
}